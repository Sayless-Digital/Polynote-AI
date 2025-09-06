import { NextRequest, NextResponse } from 'next/server';
import { clearSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Clear session cookie
    await clearSessionCookie();

    return NextResponse.json({ message: 'Signed out successfully' });
  } catch (error) {
    console.error('Sign out error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

