import { NextRequest, NextResponse } from 'next/server'
import { db, users } from '@polynote/db'
import { eq, and, gt } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
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

    return NextResponse.json(
      { valid: true },
      { status: 200 }
    )

  } catch (error) {
    console.error('Token validation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
