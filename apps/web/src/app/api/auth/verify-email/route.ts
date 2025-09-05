import { NextRequest, NextResponse } from 'next/server';
import { verifyEmailToken } from '@/lib/auth';
import { sendWelcomeEmail } from '@/lib/email';
import { getUserById } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Verification token is required' },
        { status: 400 }
      );
    }

    // Verify the token
    const userId = await verifyEmailToken(token);

    if (!userId) {
      return NextResponse.json(
        { error: 'Invalid or expired verification token' },
        { status: 400 }
      );
    }

    // Get user details
    const user = await getUserById(userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Send welcome email
    const emailResult = await sendWelcomeEmail({
      name: user.name,
      email: user.email,
    });

    if (!emailResult.success) {
      console.error('Failed to send welcome email:', emailResult.error);
      // Don't fail the verification, but log the error
    }

    return NextResponse.json({
      message: 'Email verified successfully! Welcome to PolyNote!',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        emailVerified: user.emailVerified,
        avatar: user.avatar,
        preferences: user.preferences,
      },
      welcomeEmailSent: emailResult.success,
    });
  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

