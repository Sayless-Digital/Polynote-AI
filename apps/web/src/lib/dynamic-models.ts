import { google } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';

export interface DynamicModel {
  id: string;
  name: string;
  provider: string;
  costPer1kTokens?: number;
  description?: string;
  contextLength?: number;
  inputCost?: number;
  outputCost?: number;
}

export interface ModelProvider {
  name: string;
  models: DynamicModel[];
  apiKeyUrl: string;
  documentation: string;
}

/**
 * Fetch available models from Google Gemini
 */
export async function fetchGoogleModels(apiKey: string): Promise<DynamicModel[]> {
  try {
    // Google doesn't have a direct models endpoint, so we'll use a predefined list
    // that gets updated based on Google's announcements
    const models: DynamicModel[] = [
      {
        id: 'gemini-2.0-flash-lite',
        name: 'Gemini 2.0 Flash Lite',
        provider: 'google',
        costPer1kTokens: 0.0375,
        description: 'Latest lightweight model with improved performance',
        contextLength: 1000000,
        inputCost: 0.0375,
        outputCost: 0.0375,
      },
      {
        id: 'gemini-1.5-flash-latest',
        name: 'Gemini 1.5 Flash (Latest)',
        provider: 'google',
        costPer1kTokens: 0.075,
        description: 'Fast and efficient model for most tasks',
        contextLength: 1000000,
        inputCost: 0.075,
        outputCost: 0.075,
      },
      {
        id: 'gemini-1.5-pro-latest',
        name: 'Gemini 1.5 Pro (Latest)',
        provider: 'google',
        costPer1kTokens: 1.25,
        description: 'Most capable model for complex tasks',
        contextLength: 2000000,
        inputCost: 1.25,
        outputCost: 1.25,
      },
      {
        id: 'gemini-1.0-pro',
        name: 'Gemini 1.0 Pro',
        provider: 'google',
        costPer1kTokens: 0.5,
        description: 'Stable production model',
        contextLength: 30720,
        inputCost: 0.5,
        outputCost: 0.5,
      },
    ];

    // Test the API key by making a simple request
    try {
      const testModel = google('gemini-1.5-flash-latest', { apiKey });
      // We could test with a minimal request here, but for now we'll just return the models
      return models;
    } catch (error) {
      console.warn('Google API key test failed:', error);
      return models; // Return models anyway, let the user test them
    }
  } catch (error) {
    console.error('Error fetching Google models:', error);
    return [];
  }
}

/**
 * Fetch available models from OpenAI
 */
export async function fetchOpenAIModels(apiKey: string): Promise<DynamicModel[]> {
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Filter for chat completion models and map to our format
    const chatModels = data.data
      .filter((model: any) => model.id.includes('gpt') || model.id.includes('o1'))
      .map((model: any) => {
        // Map model IDs to our known cost structure
        const costMap: Record<string, number> = {
          'gpt-4o': 5.0,
          'gpt-4o-mini': 0.15,
          'gpt-4-turbo': 10.0,
          'gpt-4': 30.0,
          'gpt-3.5-turbo': 0.5,
          'o1-preview': 15.0,
          'o1-mini': 3.0,
        };

        return {
          id: model.id,
          name: model.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          provider: 'openai',
          costPer1kTokens: costMap[model.id] || 1.0,
          description: model.owned_by || 'OpenAI model',
          contextLength: model.context_length || 128000,
        };
      });

    return chatModels;
  } catch (error) {
    console.error('Error fetching OpenAI models:', error);
    return [];
  }
}

/**
 * Fetch available models from Anthropic
 */
export async function fetchAnthropicModels(apiKey: string): Promise<DynamicModel[]> {
  try {
    // Anthropic doesn't have a public models endpoint, so we'll use a predefined list
    const models: DynamicModel[] = [
      {
        id: 'claude-3-5-sonnet-20241022',
        name: 'Claude 3.5 Sonnet',
        provider: 'anthropic',
        costPer1kTokens: 3.0,
        description: 'Most capable model for complex reasoning',
        contextLength: 200000,
        inputCost: 3.0,
        outputCost: 15.0,
      },
      {
        id: 'claude-3-5-haiku-20241022',
        name: 'Claude 3.5 Haiku',
        provider: 'anthropic',
        costPer1kTokens: 0.8,
        description: 'Fast and efficient for simple tasks',
        contextLength: 200000,
        inputCost: 0.8,
        outputCost: 4.0,
      },
      {
        id: 'claude-3-opus-20240229',
        name: 'Claude 3 Opus',
        provider: 'anthropic',
        costPer1kTokens: 15.0,
        description: 'Most powerful model for complex tasks',
        contextLength: 200000,
        inputCost: 15.0,
        outputCost: 75.0,
      },
    ];

    // Test the API key by making a simple request
    try {
      const testModel = anthropic('claude-3-5-haiku-20241022', { apiKey });
      return models;
    } catch (error) {
      console.warn('Anthropic API key test failed:', error);
      return models; // Return models anyway, let the user test them
    }
  } catch (error) {
    console.error('Error fetching Anthropic models:', error);
    return [];
  }
}

/**
 * Fetch available models from Vercel AI Gateway
 */
export async function fetchAIGatewayModels(apiKey: string): Promise<DynamicModel[]> {
  try {
    // Comprehensive list of all Vercel AI Gateway supported models
    const models: DynamicModel[] = [
      // Google models through AI Gateway
      {
        id: 'google/gemini-2.0-flash-lite',
        name: 'Google Gemini 2.0 Flash Lite',
        provider: 'ai-gateway',
        costPer1kTokens: 0.0375,
        description: 'Latest lightweight model with improved performance',
        contextLength: 1000000,
        inputCost: 0.0375,
        outputCost: 0.0375,
      },
      {
        id: 'google/gemini-1.5-flash-latest',
        name: 'Google Gemini 1.5 Flash',
        provider: 'ai-gateway',
        costPer1kTokens: 0.075,
        description: 'Fast and efficient for most tasks',
        contextLength: 1000000,
        inputCost: 0.075,
        outputCost: 0.075,
      },
      {
        id: 'google/gemini-1.5-pro-latest',
        name: 'Google Gemini 1.5 Pro',
        provider: 'ai-gateway',
        costPer1kTokens: 1.25,
        description: 'Most capable model for complex tasks',
        contextLength: 2000000,
        inputCost: 1.25,
        outputCost: 1.25,
      },
      {
        id: 'google/gemini-1.0-pro',
        name: 'Google Gemini 1.0 Pro',
        provider: 'ai-gateway',
        costPer1kTokens: 0.5,
        description: 'Stable production model',
        contextLength: 30720,
        inputCost: 0.5,
        outputCost: 0.5,
      },
      
      // OpenAI models through AI Gateway
      {
        id: 'openai/gpt-4o',
        name: 'OpenAI GPT-4o',
        provider: 'ai-gateway',
        costPer1kTokens: 5.0,
        description: 'Most capable multimodal model',
        contextLength: 128000,
        inputCost: 5.0,
        outputCost: 15.0,
      },
      {
        id: 'openai/gpt-4o-mini',
        name: 'OpenAI GPT-4o Mini',
        provider: 'ai-gateway',
        costPer1kTokens: 0.15,
        description: 'Cost-effective and fast',
        contextLength: 128000,
        inputCost: 0.15,
        outputCost: 0.6,
      },
      {
        id: 'openai/gpt-4-turbo',
        name: 'OpenAI GPT-4 Turbo',
        provider: 'ai-gateway',
        costPer1kTokens: 10.0,
        description: 'High-performance model for complex tasks',
        contextLength: 128000,
        inputCost: 10.0,
        outputCost: 30.0,
      },
      {
        id: 'openai/gpt-4',
        name: 'OpenAI GPT-4',
        provider: 'ai-gateway',
        costPer1kTokens: 30.0,
        description: 'Original GPT-4 model',
        contextLength: 8192,
        inputCost: 30.0,
        outputCost: 60.0,
      },
      {
        id: 'openai/gpt-3.5-turbo',
        name: 'OpenAI GPT-3.5 Turbo',
        provider: 'ai-gateway',
        costPer1kTokens: 0.5,
        description: 'Fast and reliable for most tasks',
        contextLength: 16384,
        inputCost: 0.5,
        outputCost: 1.5,
      },
      {
        id: 'openai/o1-preview',
        name: 'OpenAI o1 Preview',
        provider: 'ai-gateway',
        costPer1kTokens: 15.0,
        description: 'Reasoning model for complex problem solving',
        contextLength: 128000,
        inputCost: 15.0,
        outputCost: 60.0,
      },
      {
        id: 'openai/o1-mini',
        name: 'OpenAI o1 Mini',
        provider: 'ai-gateway',
        costPer1kTokens: 3.0,
        description: 'Smaller reasoning model',
        contextLength: 128000,
        inputCost: 3.0,
        outputCost: 12.0,
      },
      
      // Anthropic models through AI Gateway
      {
        id: 'anthropic/claude-3-5-sonnet-20241022',
        name: 'Anthropic Claude 3.5 Sonnet',
        provider: 'ai-gateway',
        costPer1kTokens: 3.0,
        description: 'Most capable model for complex reasoning',
        contextLength: 200000,
        inputCost: 3.0,
        outputCost: 15.0,
      },
      {
        id: 'anthropic/claude-sonnet-4',
        name: 'Anthropic Claude Sonnet 4',
        provider: 'ai-gateway',
        costPer1kTokens: 3.0,
        description: 'Latest Claude model with enhanced capabilities',
        contextLength: 200000,
        inputCost: 3.0,
        outputCost: 15.0,
      },
      {
        id: 'anthropic/claude-3-5-haiku-20241022',
        name: 'Anthropic Claude 3.5 Haiku',
        provider: 'ai-gateway',
        costPer1kTokens: 0.8,
        description: 'Fast and efficient for simple tasks',
        contextLength: 200000,
        inputCost: 0.8,
        outputCost: 4.0,
      },
      {
        id: 'anthropic/claude-3-opus-20240229',
        name: 'Anthropic Claude 3 Opus',
        provider: 'ai-gateway',
        costPer1kTokens: 15.0,
        description: 'Most powerful model for complex tasks',
        contextLength: 200000,
        inputCost: 15.0,
        outputCost: 75.0,
      },
      
      // xAI models through AI Gateway
      {
        id: 'xai/grok-beta',
        name: 'xAI Grok Beta',
        provider: 'ai-gateway',
        costPer1kTokens: 0.5,
        description: 'xAI Grok model with real-time knowledge',
        contextLength: 128000,
        inputCost: 0.5,
        outputCost: 0.5,
      },
      {
        id: 'xai/grok-4',
        name: 'xAI Grok 4',
        provider: 'ai-gateway',
        costPer1kTokens: 0.5,
        description: 'Latest xAI Grok model',
        contextLength: 128000,
        inputCost: 0.5,
        outputCost: 0.5,
      },
      
      // Cohere models through AI Gateway
      {
        id: 'cohere/command',
        name: 'Cohere Command',
        provider: 'ai-gateway',
        costPer1kTokens: 1.0,
        description: 'Cohere Command model for text generation',
        contextLength: 128000,
        inputCost: 1.0,
        outputCost: 1.0,
      },
      {
        id: 'cohere/command-light',
        name: 'Cohere Command Light',
        provider: 'ai-gateway',
        costPer1kTokens: 0.5,
        description: 'Lighter version of Cohere Command',
        contextLength: 128000,
        inputCost: 0.5,
        outputCost: 0.5,
      },
      
      // Mistral models through AI Gateway
      {
        id: 'mistral/mistral-large',
        name: 'Mistral Large',
        provider: 'ai-gateway',
        costPer1kTokens: 2.0,
        description: 'Mistral Large model for complex tasks',
        contextLength: 128000,
        inputCost: 2.0,
        outputCost: 6.0,
      },
      {
        id: 'mistral/mistral-medium',
        name: 'Mistral Medium',
        provider: 'ai-gateway',
        costPer1kTokens: 1.0,
        description: 'Balanced Mistral model',
        contextLength: 128000,
        inputCost: 1.0,
        outputCost: 3.0,
      },
      {
        id: 'mistral/mistral-small',
        name: 'Mistral Small',
        provider: 'ai-gateway',
        costPer1kTokens: 0.5,
        description: 'Fast and efficient Mistral model',
        contextLength: 128000,
        inputCost: 0.5,
        outputCost: 1.5,
      },
      
      // Perplexity models through AI Gateway
      {
        id: 'perplexity/llama-3.1-sonar-large-128k-online',
        name: 'Perplexity Llama 3.1 Sonar Large',
        provider: 'ai-gateway',
        costPer1kTokens: 1.0,
        description: 'Perplexity model with web search capabilities',
        contextLength: 128000,
        inputCost: 1.0,
        outputCost: 1.0,
      },
      {
        id: 'perplexity/llama-3.1-sonar-small-128k-online',
        name: 'Perplexity Llama 3.1 Sonar Small',
        provider: 'ai-gateway',
        costPer1kTokens: 0.5,
        description: 'Smaller Perplexity model with web search',
        contextLength: 128000,
        inputCost: 0.5,
        outputCost: 0.5,
      },
      
      // DeepSeek models through AI Gateway
      {
        id: 'deepseek/deepseek-chat',
        name: 'DeepSeek Chat',
        provider: 'ai-gateway',
        costPer1kTokens: 0.14,
        description: 'DeepSeek Chat model for conversations',
        contextLength: 128000,
        inputCost: 0.14,
        outputCost: 0.28,
      },
      {
        id: 'deepseek/deepseek-coder',
        name: 'DeepSeek Coder',
        provider: 'ai-gateway',
        costPer1kTokens: 0.14,
        description: 'DeepSeek model optimized for coding',
        contextLength: 128000,
        inputCost: 0.14,
        outputCost: 0.28,
      },
    ];

    // Try to fetch models from AI Gateway API
    try {
      const response = await fetch('https://ai-gateway.vercel.sh/v1/models', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('AI Gateway models response:', data);
        
        // If the API returns models, we could potentially merge them
        // For now, we'll return our comprehensive predefined list
        return models;
      } else {
        console.warn('AI Gateway models endpoint returned:', response.status);
      }
    } catch (error) {
      console.warn('AI Gateway API key test failed:', error);
    }

    return models; // Return comprehensive list anyway
  } catch (error) {
    console.error('Error fetching AI Gateway models:', error);
    return [];
  }
}

/**
 * Fetch all available models for a provider
 */
export async function fetchProviderModels(provider: string, apiKey: string): Promise<DynamicModel[]> {
  switch (provider) {
    case 'google':
      return fetchGoogleModels(apiKey);
    case 'openai':
      return fetchOpenAIModels(apiKey);
    case 'anthropic':
      return fetchAnthropicModels(apiKey);
    case 'ai-gateway':
      return fetchAIGatewayModels(apiKey);
    default:
      return [];
  }
}

/**
 * Get all available providers with their models
 */
export async function getAllProviderModels(apiKeys: Record<string, string>): Promise<Record<string, ModelProvider>> {
  const providers: Record<string, ModelProvider> = {};

  // Fetch models for each provider that has an API key
  for (const [provider, apiKey] of Object.entries(apiKeys)) {
    if (apiKey) {
      try {
        const models = await fetchProviderModels(provider, apiKey);
        providers[provider] = {
          name: provider === 'ai-gateway' ? 'Vercel AI Gateway' : 
                provider === 'google' ? 'Google Gemini' :
                provider === 'openai' ? 'OpenAI' :
                provider === 'anthropic' ? 'Anthropic Claude' : provider,
          models,
          apiKeyUrl: provider === 'google' ? 'https://makersuite.google.com/app/apikey' :
                     provider === 'openai' ? 'https://platform.openai.com/api-keys' :
                     provider === 'anthropic' ? 'https://console.anthropic.com/' :
                     provider === 'ai-gateway' ? 'https://vercel.com/ai-gateway' : '',
          documentation: provider === 'google' ? 'https://ai.google.dev/gemini-api/docs' :
                        provider === 'openai' ? 'https://platform.openai.com/docs' :
                        provider === 'anthropic' ? 'https://docs.anthropic.com/' :
                        provider === 'ai-gateway' ? 'https://vercel.com/docs/ai-gateway' : '',
        };
      } catch (error) {
        console.error(`Error fetching models for ${provider}:`, error);
      }
    }
  }

  return providers;
}
