import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail, getUserByEmailWithPassword, verifyPassword, createSession, setSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Get user by email with password hash
    const userWithHash = await getUserByEmailWithPassword(email);
    if (!userWithHash) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, userWithHash.passwordHash);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create session
    const session = await createSession(userWithHash.id);

    // Set session cookie
    await setSessionCookie(session.token);

    return NextResponse.json({
      user: {
        id: userWithHash.id,
        email: userWithHash.email,
        name: userWithHash.name,
        emailVerified: userWithHash.emailVerified,
        avatar: userWithHash.avatar,
        preferences: userWithHash.preferences,
      },
    });
  } catch (error) {
    console.error('Sign in error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
