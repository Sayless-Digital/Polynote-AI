import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { getUserAISettings } from '@/lib/ai-config';
import { fetchProviderModels } from '@/lib/dynamic-models';

/**
 * Fetch available models for a specific provider
 */
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
    const { provider, apiKey } = body;

    if (!provider) {
      return NextResponse.json(
        { error: 'Provider is required' },
        { status: 400 }
      );
    }

    // If no API key provided, try to get it from user settings
    let finalApiKey = apiKey;
    if (!finalApiKey) {
      const userSettings = await getUserAISettings(user.id);
      if (userSettings && userSettings.provider === provider) {
        finalApiKey = userSettings.apiKey;
      }
    }

    if (!finalApiKey) {
      return NextResponse.json(
        { error: 'API key is required' },
        { status: 400 }
      );
    }

    // Fetch models for the provider
    const models = await fetchProviderModels(provider, finalApiKey);

    return NextResponse.json({
      success: true,
      provider,
      models,
    });
  } catch (error) {
    console.error('Error fetching models:', error);
    return NextResponse.json(
      { error: 'Failed to fetch models' },
      { status: 500 }
    );
  }
}

/**
 * Get all available models for all providers (requires API keys)
 */
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
    const provider = searchParams.get('provider');

    if (provider) {
      // Get models for specific provider
      const userSettings = await getUserAISettings(user.id);
      if (!userSettings || userSettings.provider !== provider) {
        return NextResponse.json(
          { error: 'No settings found for this provider' },
          { status: 404 }
        );
      }

      const models = await fetchProviderModels(provider, userSettings.apiKey);

      return NextResponse.json({
        success: true,
        provider,
        models,
      });
    } else {
      // Return static model information (no API keys required)
      return NextResponse.json({
        success: true,
        providers: {
          google: {
            name: 'Google Gemini',
            models: [
              { id: 'gemini-2.0-flash-lite', name: 'Gemini 2.0 Flash Lite', costPer1kTokens: 0.0375 },
              { id: 'gemini-1.5-flash-latest', name: 'Gemini 1.5 Flash (Latest)', costPer1kTokens: 0.075 },
              { id: 'gemini-1.5-pro-latest', name: 'Gemini 1.5 Pro (Latest)', costPer1kTokens: 1.25 },
              { id: 'gemini-1.0-pro', name: 'Gemini 1.0 Pro', costPer1kTokens: 0.5 },
            ],
          },
          openai: {
            name: 'OpenAI',
            models: [
              { id: 'gpt-4o', name: 'GPT-4o', costPer1kTokens: 5.0 },
              { id: 'gpt-4o-mini', name: 'GPT-4o Mini', costPer1kTokens: 0.15 },
              { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', costPer1kTokens: 10.0 },
              { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', costPer1kTokens: 0.5 },
            ],
          },
          anthropic: {
            name: 'Anthropic Claude',
            models: [
              { id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet', costPer1kTokens: 3.0 },
              { id: 'claude-3-5-haiku-20241022', name: 'Claude 3.5 Haiku', costPer1kTokens: 0.8 },
              { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus', costPer1kTokens: 15.0 },
            ],
          },
          'ai-gateway': {
            name: 'Vercel AI Gateway',
            models: [
              { id: 'google/gemini-2.0-flash-lite', name: 'Google Gemini 2.0 Flash Lite', costPer1kTokens: 0.0375 },
              { id: 'google/gemini-1.5-flash-latest', name: 'Google Gemini 1.5 Flash', costPer1kTokens: 0.075 },
              { id: 'openai/gpt-4o', name: 'OpenAI GPT-4o', costPer1kTokens: 5.0 },
              { id: 'openai/gpt-4o-mini', name: 'OpenAI GPT-4o Mini', costPer1kTokens: 0.15 },
              { id: 'anthropic/claude-3-5-sonnet-20241022', name: 'Anthropic Claude 3.5 Sonnet', costPer1kTokens: 3.0 },
              { id: 'anthropic/claude-sonnet-4', name: 'Anthropic Claude Sonnet 4', costPer1kTokens: 3.0 },
              { id: 'xai/grok-beta', name: 'xAI Grok Beta', costPer1kTokens: 0.5 },
              { id: 'xai/grok-4', name: 'xAI Grok 4', costPer1kTokens: 0.5 },
              { id: 'cohere/command', name: 'Cohere Command', costPer1kTokens: 1.0 },
            ],
          },
        },
      });
    }
  } catch (error) {
    console.error('Error fetching models:', error);
    return NextResponse.json(
      { error: 'Failed to fetch models' },
      { status: 500 }
    );
  }
}
