import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import FundingApplication from '@/models/FundingApplication'
import { sendFundingApplicationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()
    
    // Validate required fields
    const { firstName, lastName, email, phone, loanAmount } = body
    
    if (!firstName || !lastName || !email || !phone || !loanAmount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create new funding application
    const application = new FundingApplication({
      firstName,
      lastName,
      email,
      phone,
      loanAmount,
      propertyAddress: body.propertyAddress || '',
      purchasePrice: body.purchasePrice || '',
      rehabBudget: body.rehabBudget || '',
      arv: body.arv || '',
      experience: body.experience || '',
      timeline: body.timeline || '',
      message: body.message || '',
      status: 'pending'
    })

    const savedApplication = await application.save()

    // Send email notification
    try {
      await sendFundingApplicationEmail({
        firstName,
        lastName,
        email,
        phone,
        loanAmount,
        propertyAddress: body.propertyAddress,
        purchasePrice: body.purchasePrice,
        rehabBudget: body.rehabBudget,
        arv: body.arv,
        experience: body.experience,
        timeline: body.timeline,
        message: body.message,
        applicationId: savedApplication._id.toString()
      })
      console.log('Email notification sent successfully')
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the application if email fails, just log it
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: savedApplication._id
    }, { status: 201 })

  } catch (error: unknown) {
    console.error('Error saving funding application:', error)
    
    if (error && typeof error === 'object' && 'name' in error && error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Validation error', details: 'message' in error ? error.message : 'Invalid data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')

    const skip = (page - 1) * limit

    // Build query
    const query: Record<string, string> = {}
    if (status && ['pending', 'reviewing', 'approved', 'rejected'].includes(status)) {
      query.status = status
    }

    // Get applications with pagination
    const applications = await FundingApplication
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await FundingApplication.countDocuments(query)

    return NextResponse.json({
      success: true,
      applications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching applications:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}