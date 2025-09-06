import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { getUserAISettings, upsertUserAISettings, getUserTokenUsage } from '@/lib/ai-config';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const includeUsage = searchParams.get('includeUsage') === 'true';
    const days = parseInt(searchParams.get('days') || '30');

    const settings = await getUserAISettings(user.id);
    let usage = null;

    if (includeUsage && settings) {
      usage = await getUserTokenUsage(user.id, days);
    }

    return NextResponse.json({
      success: true,
      settings,
      usage,
    });
  } catch (error) {
    console.error('Error getting AI settings:', error);
    return NextResponse.json(
      { error: 'Failed to get AI settings' },
      { status: 500 }
    );
  }
}

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
    const { provider, apiKey, model, enabledAnalyses, analysisTimeout, cacheEnabled, cacheTTL } = body;

    // Validate required fields
    if (!provider || !apiKey || !model) {
      return NextResponse.json(
        { error: 'Provider, API key, and model are required' },
        { status: 400 }
      );
    }

    const settings = await upsertUserAISettings(user.id, {
      provider,
      apiKey,
      model,
      enabledAnalyses,
      analysisTimeout,
      cacheEnabled,
      cacheTTL,
    });

    if (!settings) {
      return NextResponse.json(
        { error: 'Failed to save AI settings' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      settings: {
        ...settings,
        apiKey: settings.apiKey ? '***' + settings.apiKey.slice(-4) : null, // Mask API key in response
      },
    });
  } catch (error) {
    console.error('Error saving AI settings:', error);
    return NextResponse.json(
      { error: 'Failed to save AI settings' },
      { status: 500 }
    );
  }
}

