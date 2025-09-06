import { NextRequest, NextResponse } from 'next/server'
import { db, users } from '@polynote/db'
import { eq, and, gt } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { createSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json()

    if (!token || !password) {
      return NextResponse.json(
        { error: 'Token and password are required' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    // Check if token exists and is not expired
    const user = await db
      .select()
      .from(users)
      .where(
        and(
          eq(users.resetToken, token),
          gt(users.resetTokenExpiry, new Date())
        )
      )
      .limit(1)

    if (user.length === 0) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 400 }
      )
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Update user password and clear reset token
    await db
      .update(users)
      .set({
        passwordHash: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
        updatedAt: new Date()
      })
      .where(eq(users.id, user[0].id))

    // Create a new session for the user
    const session = await createSession(user[0].id)

    // Prepare user data for response
    const userData = {
      id: user[0].id,
      email: user[0].email,
      name: user[0].name,
      emailVerified: user[0].emailVerified,
      avatar: user[0].avatar,
      preferences: user[0].preferences
    }

    // Create response with session cookie
    const response = NextResponse.json(
      { 
        message: 'Password reset successfully',
        user: userData
      },
      { status: 200 }
    )

    // Set the session cookie
    response.cookies.set('session', session.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/'
    })

    return response

  } catch (error) {
    console.error('Password reset error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
