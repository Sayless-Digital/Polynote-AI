import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { getUserAISettings } from '@/lib/ai-config';

/**
 * Temporarily set an environment variable and restore it after the operation
 */
async function withTempEnvVar<T>(
  key: string,
  value: string,
  operation: () => Promise<T>
): Promise<T> {
  const originalValue = process.env[key];
  
  try {
    process.env[key] = value;
    return await operation();
  } finally {
    if (originalValue !== undefined) {
      process.env[key] = originalValue;
    } else {
      delete process.env[key];
    }
  }
}

/**
 * Test AI provider settings endpoint
 * 
 * Supported providers:
 * - google: Direct Google Gemini API
 * - openai: Direct OpenAI API  
 * - anthropic: Direct Anthropic API
 * - ai-gateway: Vercel AI Gateway (unified API)
 * 
 * For AI Gateway, use model names like:
 * - google/gemini-1.5-flash-latest
 * - openai/gpt-4o
 * - anthropic/claude-3-5-sonnet-20241022
 * - xai/grok-beta
 * - cohere/command
 */

export async function POST(request: NextRequest) {
  try {
    // Ensure this only runs on the server side
    if (typeof window !== 'undefined') {
      return NextResponse.json(
        { error: 'This endpoint can only be called from the server' },
        { status: 400 }
      );
    }

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

    // Validate AI Gateway API key format
    if (provider === 'ai-gateway') {
      console.log('AI Gateway API key validation - Key prefix:', apiKey.substring(0, 10) + '...');
      console.log('AI Gateway API key validation - Key length:', apiKey.length);
      
      // Check for valid AI Gateway API key prefixes
      const validPrefixes = ['ag_', 'vercel_', 'sk-', 'vercel-', 'ai_', 'gateway_', 'vck_'];
      const hasValidPrefix = validPrefixes.some(prefix => apiKey.startsWith(prefix));
      
      // Allow bypassing validation for testing (check for special flag in request)
      const bypassValidation = body.bypassValidation === true;
      
      if (!hasValidPrefix && !bypassValidation) {
        console.log('AI Gateway API key validation failed - Invalid prefix');
        return NextResponse.json(
          { 
            error: `AI Gateway API key should start with one of: ${validPrefixes.join(', ')}. Your key starts with: "${apiKey.substring(0, 10)}..."`,
            debug: {
              keyPrefix: apiKey.substring(0, 10),
              keyLength: apiKey.length,
              expectedPrefixes: validPrefixes,
              note: 'If you believe your key is valid, you can bypass this validation by adding "bypassValidation": true to your request'
            }
          },
          { status: 400 }
        );
      }
      
      if (bypassValidation) {
        console.log('AI Gateway API key validation bypassed for testing');
      }
      console.log('AI Gateway API key validation passed');
    }

    // Test the API key and model
    let result;
    const startTime = Date.now();

    try {
      if (provider === 'google') {
        result = await withTempEnvVar(
          'GOOGLE_GENERATIVE_AI_API_KEY',
          apiKey,
          async () => {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                contents: [{
                  parts: [{
                    text: 'Say "Hello" if you can read this message. This is a test.'
                  }]
                }]
              }),
            });

            if (!response.ok) {
              throw new Error(`Google API error: ${response.status}`);
            }

            const data = await response.json();
            return {
              text: data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received'
            };
          }
        );
      } else if (provider === 'openai') {
        result = await withTempEnvVar(
          'OPENAI_API_KEY',
          apiKey,
          async () => {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                model: model,
                messages: [{
                  role: 'user',
                  content: 'Say "Hello" if you can read this message. This is a test.'
                }],
                max_tokens: 50,
              }),
            });

            if (!response.ok) {
              throw new Error(`OpenAI API error: ${response.status}`);
            }

            const data = await response.json();
            return {
              text: data.choices?.[0]?.message?.content || 'No response received'
            };
          }
        );
      } else if (provider === 'anthropic') {
        result = await withTempEnvVar(
          'ANTHROPIC_API_KEY',
          apiKey,
          async () => {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
              method: 'POST',
              headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
                'anthropic-version': '2023-06-01',
              },
              body: JSON.stringify({
                model: model,
                max_tokens: 50,
                messages: [{
                  role: 'user',
                  content: 'Say "Hello" if you can read this message. This is a test.'
                }],
              }),
            });

            if (!response.ok) {
              throw new Error(`Anthropic API error: ${response.status}`);
            }

            const data = await response.json();
            return {
              text: data.content?.[0]?.text || 'No response received'
            };
          }
        );
      } else if (provider === 'ai-gateway') {
        result = await withTempEnvVar(
          'AI_GATEWAY_API_KEY',
          apiKey,
          async () => {
            try {
              console.log('Testing AI Gateway with model:', model, 'API key prefix:', apiKey.substring(0, 10) + '...');
              
              // Validate model format for AI Gateway
              if (!model.includes('/')) {
                throw new Error('AI Gateway model must be in format "provider/model" (e.g., "google/gemini-1.5-flash-latest")');
              }
              
              const requestBody = {
                model: model,
                messages: [{
                  role: 'user',
                  content: 'Say "Hello" if you can read this message. This is a test.'
                }],
                max_tokens: 50,
                stream: false,
              };
              
              console.log('AI Gateway request body:', JSON.stringify(requestBody, null, 2));
              
              // Add timeout to prevent hanging
              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
              
              const response = await fetch('https://ai-gateway.vercel.sh/v1/chat/completions', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${apiKey}`,
                  'Content-Type': 'application/json',
                  'User-Agent': 'Polynote-AI/1.0',
                },
                body: JSON.stringify(requestBody),
                signal: controller.signal,
              });
              
              clearTimeout(timeoutId);
              
              console.log('AI Gateway response status:', response.status);
              console.log('AI Gateway response headers:', Object.fromEntries(response.headers.entries()));

              if (!response.ok) {
                let errorMessage = `AI Gateway API error: ${response.status}`;
                let errorDetails = '';
                
                try {
                  const errorData = await response.json();
                  console.log('AI Gateway error response:', JSON.stringify(errorData, null, 2));
                  
                  if (errorData.error) {
                    errorDetails = errorData.error.message || errorData.error.type || JSON.stringify(errorData.error);
                  } else {
                    errorDetails = JSON.stringify(errorData);
                  }
                } catch {
                  try {
                    const errorText = await response.text();
                    errorDetails = errorText;
                    console.log('AI Gateway error text:', errorText);
                  } catch {
                    errorDetails = 'Unable to parse error response';
                  }
                }
                
                // Provide specific error messages for common issues
                if (response.status === 401) {
                  throw new Error('Invalid AI Gateway API key. Please check your API key and try again.');
                } else if (response.status === 403) {
                  throw new Error('AI Gateway API key does not have permission to access this model.');
                } else if (response.status === 404) {
                  throw new Error(`Model "${model}" not found. Please check the model name format (provider/model).`);
                } else if (response.status === 429) {
                  throw new Error('AI Gateway rate limit exceeded. Please try again later.');
                } else if (response.status >= 500) {
                  throw new Error('AI Gateway server error. Please try again later.');
                } else {
                  throw new Error(`AI Gateway error (${response.status}): ${errorDetails}`);
                }
              }

              const data = await response.json();
              console.log('AI Gateway response:', JSON.stringify(data, null, 2));
              
              // Handle the response according to OpenAI-compatible format
              if (data.choices && data.choices.length > 0) {
                const content = data.choices[0].message?.content;
                if (content) {
                  return {
                    text: content
                  };
                } else {
                  throw new Error('No content in AI Gateway response');
                }
              } else if (data.content) {
                // Fallback for different response formats
                return {
                  text: data.content
                };
              } else {
                console.error('Unexpected AI Gateway response format:', data);
                throw new Error('Unexpected response format from AI Gateway. Expected "choices" or "content" field.');
              }
            } catch (gatewayError) {
              console.error('AI Gateway error details:', gatewayError);
              
              if (gatewayError instanceof Error) {
                if (gatewayError.name === 'AbortError') {
                  throw new Error('AI Gateway request timed out after 30 seconds. Please check your internet connection and try again.');
                } else if (gatewayError.message.includes('fetch')) {
                  throw new Error('Network error connecting to AI Gateway. Please check your internet connection and try again.');
                } else if (gatewayError.message.includes('quota') || gatewayError.message.includes('exceeded')) {
                  throw new Error('AI Gateway quota exceeded. Please check your API key limits and billing.');
                } else if (gatewayError.message.includes('Invalid AI Gateway API key')) {
                  throw gatewayError; // Re-throw specific error messages
                } else if (gatewayError.message.includes('Model') && gatewayError.message.includes('not found')) {
                  throw gatewayError; // Re-throw specific error messages
                } else {
                  throw new Error(`AI Gateway error: ${gatewayError.message}`);
                }
              } else {
                throw new Error('Unknown AI Gateway error occurred');
              }
            }
          }
        );
      } else {
        return NextResponse.json(
          { error: 'Provider not yet supported for testing' },
          { status: 400 }
        );
      }

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

