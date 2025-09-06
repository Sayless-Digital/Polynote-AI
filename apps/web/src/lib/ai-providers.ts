// Client-safe AI providers configuration
// This file contains no server-side dependencies and can be safely imported in client components

export const AI_PROVIDERS = {
  google: {
    name: 'Google Gemini',
    models: [
      { id: 'gemini-2.0-flash-lite', name: 'Gemini 2.0 Flash Lite', costPer1kTokens: 0.0375 },
      { id: 'gemini-1.5-flash-latest', name: 'Gemini 1.5 Flash (Latest)', costPer1kTokens: 0.075 },
      { id: 'gemini-1.5-pro-latest', name: 'Gemini 1.5 Pro (Latest)', costPer1kTokens: 1.25 },
      { id: 'gemini-1.0-pro', name: 'Gemini 1.0 Pro', costPer1kTokens: 0.5 },
    ],
    apiKeyUrl: 'https://makersuite.google.com/app/apikey',
    documentation: 'https://ai.google.dev/gemini-api/docs',
  },
  openai: {
    name: 'OpenAI',
    models: [
      { id: 'gpt-4o', name: 'GPT-4o', costPer1kTokens: 5.0 },
      { id: 'gpt-4o-mini', name: 'GPT-4o Mini', costPer1kTokens: 0.15 },
      { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', costPer1kTokens: 10.0 },
      { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', costPer1kTokens: 0.5 },
    ],
    apiKeyUrl: 'https://platform.openai.com/api-keys',
    documentation: 'https://platform.openai.com/docs',
  },
  anthropic: {
    name: 'Anthropic Claude',
    models: [
      { id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet', costPer1kTokens: 3.0 },
      { id: 'claude-3-5-haiku-20241022', name: 'Claude 3.5 Haiku', costPer1kTokens: 0.8 },
      { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus', costPer1kTokens: 15.0 },
    ],
    apiKeyUrl: 'https://console.anthropic.com/',
    documentation: 'https://docs.anthropic.com/',
  },
  'ai-gateway': {
    name: 'Vercel AI Gateway',
    models: [
      // Google models
      { id: 'google/gemini-2.0-flash-lite', name: 'Google Gemini 2.0 Flash Lite', costPer1kTokens: 0.0375 },
      { id: 'google/gemini-1.5-flash-latest', name: 'Google Gemini 1.5 Flash', costPer1kTokens: 0.075 },
      { id: 'google/gemini-1.5-pro-latest', name: 'Google Gemini 1.5 Pro', costPer1kTokens: 1.25 },
      { id: 'google/gemini-1.0-pro', name: 'Google Gemini 1.0 Pro', costPer1kTokens: 0.5 },
      
      // OpenAI models
      { id: 'openai/gpt-4o', name: 'OpenAI GPT-4o', costPer1kTokens: 5.0 },
      { id: 'openai/gpt-4o-mini', name: 'OpenAI GPT-4o Mini', costPer1kTokens: 0.15 },
      { id: 'openai/gpt-4-turbo', name: 'OpenAI GPT-4 Turbo', costPer1kTokens: 10.0 },
      { id: 'openai/gpt-4', name: 'OpenAI GPT-4', costPer1kTokens: 30.0 },
      { id: 'openai/gpt-3.5-turbo', name: 'OpenAI GPT-3.5 Turbo', costPer1kTokens: 0.5 },
      { id: 'openai/o1-preview', name: 'OpenAI o1 Preview', costPer1kTokens: 15.0 },
      { id: 'openai/o1-mini', name: 'OpenAI o1 Mini', costPer1kTokens: 3.0 },
      
      // Anthropic models
      { id: 'anthropic/claude-3-5-sonnet-20241022', name: 'Anthropic Claude 3.5 Sonnet', costPer1kTokens: 3.0 },
      { id: 'anthropic/claude-sonnet-4', name: 'Anthropic Claude Sonnet 4', costPer1kTokens: 3.0 },
      { id: 'anthropic/claude-3-5-haiku-20241022', name: 'Anthropic Claude 3.5 Haiku', costPer1kTokens: 0.8 },
      { id: 'anthropic/claude-3-opus-20240229', name: 'Anthropic Claude 3 Opus', costPer1kTokens: 15.0 },
      
      // xAI models
      { id: 'xai/grok-beta', name: 'xAI Grok Beta', costPer1kTokens: 0.5 },
      { id: 'xai/grok-4', name: 'xAI Grok 4', costPer1kTokens: 0.5 },
      
      // Cohere models
      { id: 'cohere/command', name: 'Cohere Command', costPer1kTokens: 1.0 },
      { id: 'cohere/command-light', name: 'Cohere Command Light', costPer1kTokens: 0.5 },
      
      // Mistral models
      { id: 'mistral/mistral-large', name: 'Mistral Large', costPer1kTokens: 2.0 },
      { id: 'mistral/mistral-medium', name: 'Mistral Medium', costPer1kTokens: 1.0 },
      { id: 'mistral/mistral-small', name: 'Mistral Small', costPer1kTokens: 0.5 },
      
      // Perplexity models
      { id: 'perplexity/llama-3.1-sonar-large-128k-online', name: 'Perplexity Llama 3.1 Sonar Large', costPer1kTokens: 1.0 },
      { id: 'perplexity/llama-3.1-sonar-small-128k-online', name: 'Perplexity Llama 3.1 Sonar Small', costPer1kTokens: 0.5 },
      
      // DeepSeek models
      { id: 'deepseek/deepseek-chat', name: 'DeepSeek Chat', costPer1kTokens: 0.14 },
      { id: 'deepseek/deepseek-coder', name: 'DeepSeek Coder', costPer1kTokens: 0.14 },
    ],
    apiKeyUrl: 'https://vercel.com/ai-gateway',
    documentation: 'https://vercel.com/docs/ai-gateway',
    isGateway: true,
  },
} as const;

export type AIProvider = keyof typeof AI_PROVIDERS;
export type AIModel = typeof AI_PROVIDERS[AIProvider]['models'][number];
