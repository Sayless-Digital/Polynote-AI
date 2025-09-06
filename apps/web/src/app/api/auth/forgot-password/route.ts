import { NextRequest, NextResponse } from 'next/server'
import { db, users } from '@polynote/db'
import { eq } from 'drizzle-orm'
import { sendPasswordResetEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if user exists
    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1)

    if (user.length === 0) {
      // Don't reveal if email exists or not for security
      return NextResponse.json(
        { message: 'If an account with that email exists, a password reset link has been sent.' },
        { status: 200 }
      )
    }

    // Generate a simple reset token (in production, use a more secure method)
    const resetToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const resetTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    // Update user with reset token
    await db
      .update(users)
      .set({
        resetToken,
        resetTokenExpiry
      })
      .where(eq(users.email, email))

    // Send password reset email
    try {
      await sendPasswordResetEmail(email, resetToken)
    } catch (emailError) {
      console.error('Failed to send password reset email:', emailError)
      return NextResponse.json(
        { error: 'Failed to send reset email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Password reset email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Password reset error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
