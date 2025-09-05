import { NextResponse } from 'next/server';
import { google } from '@ai-sdk/google';

export async function GET() {
  try {
    const model = google('models/gemini-1.5-flash-latest', {
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    // Test request to get usage metadata
    const result = await model.generateText({
      prompt: "Count tokens in this message",
    });

    return NextResponse.json({
      success: true,
      usage: result.usage,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Usage check error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
