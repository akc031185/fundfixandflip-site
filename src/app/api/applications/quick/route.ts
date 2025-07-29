import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import QuickApplication from '@/models/QuickApplication'

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()
    
    // Validate required fields
    const { fullName, email, phone, loanAmount } = body
    
    if (!fullName || !email || !phone || !loanAmount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create new quick application
    const application = new QuickApplication({
      fullName,
      email,
      phone,
      loanAmount,
      status: 'pending'
    })

    const savedApplication = await application.save()

    return NextResponse.json({
      success: true,
      message: 'Quick application submitted successfully',
      applicationId: savedApplication._id
    }, { status: 201 })

  } catch (error: unknown) {
    console.error('Error saving quick application:', error)
    
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
    const applications = await QuickApplication
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await QuickApplication.countDocuments(query)

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
    console.error('Error fetching quick applications:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}