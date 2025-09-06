import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { getUserAISettings } from '@/lib/ai-config';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { provider, apiKey, model } = body;

    if (!provider || !apiKey || !model) {
      return NextResponse.json(
        { error: 'Provider, API key, and model are required' },
        { status: 400 }
      );
    }

    // Test the API key and model
    let result;
    const startTime = Date.now();

    try {
      if (provider === 'google') {
        const geminiModel = google(model, {
          apiKey: apiKey,
        });

        result = await generateText({
          model: geminiModel,
          prompt: 'Say "Hello" if you can read this message. This is a test.',
        });

        const duration = Date.now() - startTime;

        return NextResponse.json({
          success: true,
          message: 'API key and model are working correctly',
          testResult: {
            response: result.text,
            duration: duration,
            provider,
            model,
          },
        });
      } else {
        return NextResponse.json(
          { error: 'Provider not yet supported for testing' },
          { status: 400 }
        );
      }
    } catch (error) {
      const duration = Date.now() - startTime;
      
      return NextResponse.json({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        testResult: {
          duration,
          provider,
          model,
        },
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Error testing AI settings:', error);
    return NextResponse.json(
      { error: 'Failed to test AI settings' },
      { status: 500 }
    );
  }
}

