import { NextRequest, NextResponse } from 'next/server';
import { analyzeNote } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, title } = body;

    if (!content?.trim()) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    // Use the existing AI analysis function
    const analysis = await analyzeNote(content);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Error analyzing note:', error);
    return NextResponse.json(
      { error: 'Failed to analyze note' },
      { status: 500 }
    );
  }
}
