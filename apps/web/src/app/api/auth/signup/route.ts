import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail, createUser, createEmailVerificationToken } from '@/lib/auth';
import { sendVerificationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    // Create user
    const user = await createUser(email, name, password);

    // Create email verification token
    const verificationToken = await createEmailVerificationToken(user.id);
    const verificationUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/verify-email?token=${verificationToken}`;

    // Send verification email
    const emailResult = await sendVerificationEmail({
      name: user.name,
      email: user.email,
      verificationUrl,
    });

    let message = 'Account created successfully.';
    if (emailResult.success) {
      message += ' Please check your email to verify your account.';
    } else {
      console.warn('Email verification not sent:', emailResult.error);
      message += ' Email verification is not available (service not configured).';
    }

    return NextResponse.json({
      message,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        emailVerified: user.emailVerified,
        avatar: user.avatar,
        preferences: user.preferences,
      },
      emailSent: emailResult.success,
    });
  } catch (error) {
    console.error('Sign up error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
