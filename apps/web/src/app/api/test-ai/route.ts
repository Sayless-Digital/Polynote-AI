import { NextResponse } from 'next/server';
import { testAIConnection } from '@/lib/ai';

export async function GET() {
  try {
    console.log('Testing AI connection from API endpoint...');
    console.log('Environment check:', {
      hasApiKey: !!process.env.GOOGLE_GENERATIVE_AI_API_KEY,
      apiKeyLength: process.env.GOOGLE_GENERATIVE_AI_API_KEY?.length,
      apiKeyPrefix: process.env.GOOGLE_GENERATIVE_AI_API_KEY?.substring(0, 10)
    });

    const result = await testAIConnection();

    return NextResponse.json({
      success: true,
      aiConnection: result,
      environment: {
        hasApiKey: !!process.env.GOOGLE_GENERATIVE_AI_API_KEY,
        apiKeyLength: process.env.GOOGLE_GENERATIVE_AI_API_KEY?.length
      }
    });
  } catch (error) {
    console.error('AI test endpoint error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      environment: {
        hasApiKey: !!process.env.GOOGLE_GENERATIVE_AI_API_KEY,
        apiKeyLength: process.env.GOOGLE_GENERATIVE_AI_API_KEY?.length
      }
    }, { status: 500 });
  }
}
