import { NextResponse } from 'next/server'
import { testEmailConnection } from '@/lib/email'

export async function GET() {
  try {
    const result = await testEmailConnection()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Email configuration is working correctly',
        details: result.message
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Email configuration failed',
        error: result.error
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Email test error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to test email configuration',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}