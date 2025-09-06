'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useGlobalLoading } from '@/contexts/LoadingContext';
import { useAuth } from '@/hooks/useAuth';
import { AI_PROVIDERS } from '@/lib/ai-providers';
import { SettingsPageSkeleton } from '@/components/skeletons/SettingsPageSkeleton';
import { DynamicModel } from '@/lib/dynamic-models';
import { 
  Settings, 
  Key, 
  Brain, 
  BarChart3, 
  CheckCircle, 
  XCircle, 
  Loader2,
  ExternalLink,
  Info,
  RefreshCw
} from 'lucide-react';

interface AISettings {
  id?: string;
  provider: string;
  apiKey: string;
  model: string;
  enabledAnalyses: string[];
  analysisTimeout: number;
  cacheEnabled: boolean;
  cacheTTL: number;
  totalTokensUsed: number;
  totalRequests: number;
  lastUsedAt?: string;
}

interface TokenUsage {
  totalRequests: number;
  totalTokens: number;
  totalInputTokens: number;
  totalOutputTokens: number;
  successfulRequests: number;
  failedRequests: number;
  averageRequestDuration: number;
  estimatedTotalCost: number;
  byProvider: Record<string, { requests: number; tokens: number; cost: number }>;
  byModel: Record<string, { requests: number; tokens: number; cost: number }>;
  byAnalysisType: Record<string, { requests: number; tokens: number; cost: number }>;
}


const ANALYSIS_TYPES = [
  { id: 'title', name: 'Title Generation', description: 'Generate descriptive titles' },
  { id: 'summary', name: 'Summary', description: 'Create content summaries' },
  { id: 'key_points', name: 'Key Points', description: 'Extract important points' },
  { id: 'categories', name: 'Categories', description: 'Categorize content' },
  { id: 'tags', name: 'Tags', description: 'Generate relevant tags' },
  { id: 'sentiment', name: 'Sentiment', description: 'Analyze emotional tone' },
];

interface AISettingsProps {
  onRefresh?: () => void;
}

export function AISettings({ onRefresh }: AISettingsProps) {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const [settings, setSettings] = useState<AISettings | null>(null);
  const [usage, setUsage] = useState<TokenUsage | null>(null);
  const [loading, setLoading] = useState(true);
  const { setLoading: setGlobalLoading } = useGlobalLoading();
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message?: string; error?: string; testResult?: { response: string; duration: number; provider: string; model: string } } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dynamicModels, setDynamicModels] = useState<DynamicModel[]>([]);
  const [fetchingModels, setFetchingModels] = useState(false);
  const [modelSearchQuery, setModelSearchQuery] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    provider: 'google',
    apiKey: '',
    model: 'gemini-1.5-flash-latest',
    enabledAnalyses: ['title', 'summary', 'key_points', 'categories', 'tags'],
    analysisTimeout: 30000,
    cacheEnabled: true,
    cacheTTL: 86400,
  });

  useEffect(() => {
    loadSettings();
  }, []);

  // Auto-fetch models when API key changes
  useEffect(() => {
    if (formData.apiKey && formData.provider) {
      const timeoutId = setTimeout(() => {
        fetchDynamicModels(formData.provider, formData.apiKey);
      }, 1000); // Debounce for 1 second

      return () => clearTimeout(timeoutId);
    }
  }, [formData.apiKey, formData.provider]);

  const loadSettings = async () => {
    try {
      setLoading(true);
      setGlobalLoading(true);
      setError(null);
      
      const response = await fetch('/api/ai-settings?includeUsage=true');
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Authentication required. Please sign in again.');
        } else if (response.status === 500) {
          throw new Error('Server error. Please try again later.');
        } else {
          throw new Error(`Failed to load settings (${response.status})`);
        }
      }
      
      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned invalid response format');
      }
      
      const data = await response.json();

      if (data.success) {
        setSettings(data.settings);
        setUsage(data.usage);
        
        if (data.settings) {
          setFormData({
            provider: data.settings.provider,
            apiKey: data.settings.apiKey || '',
            model: data.settings.model,
            enabledAnalyses: data.settings.enabledAnalyses,
            analysisTimeout: data.settings.analysisTimeout,
            cacheEnabled: data.settings.cacheEnabled,
            cacheTTL: data.settings.cacheTTL,
          });
        }
      } else {
        setError(data.error || 'Failed to load settings');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load settings';
      setError(errorMessage);
      console.error('Error loading settings:', error);
    } finally {
      setLoading(false);
      setGlobalLoading(false);
    }
  };

  const saveSettings = async () => {
    try {
      setSaving(true);
      setError(null);

      const response = await fetch('/api/ai-settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned non-JSON response');
      }

      const data = await response.json();

      if (data.success) {
        setSettings(data.settings);
        setTestResult(null);
        // Reload usage stats
        await loadSettings();
      } else {
        setError(data.error || 'Failed to save settings');
      }
    } catch {
      setError('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const testConnection = async () => {
    try {
      setTesting(true);
      setError(null);
      setTestResult(null);

      // Check if user is authenticated
      if (!isAuthenticated || !user) {
        throw new Error('You must be signed in to test AI settings. Please sign in and try again.');
      }

      // Validate required fields before making request
      if (!formData.provider || !formData.apiKey || !formData.model) {
        throw new Error('Please fill in all required fields (Provider, API Key, and Model)');
      }

      const response = await fetch('/api/ai-settings/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies for authentication
        body: JSON.stringify({
          provider: formData.provider,
          apiKey: formData.apiKey,
          model: formData.model,
        }),
      });

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const errorText = await response.text();
        throw new Error(`Server returned non-JSON response (${response.status}): ${errorText}`);
      }

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 401) {
          throw new Error('Authentication required. Please sign in again.');
        } else if (response.status === 400) {
          throw new Error(data.error || 'Invalid request. Please check your input.');
        } else if (response.status === 500) {
          throw new Error('Server error. Please try again later.');
        } else {
          throw new Error(data.error || `Request failed with status ${response.status}`);
        }
      }

      setTestResult(data);
    } catch (error) {
      console.error('Test connection error:', error);
      setTestResult({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to test connection',
      });
    } finally {
      setTesting(false);
    }
  };

  const handleAnalysisToggle = (analysisId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      enabledAnalyses: checked
        ? [...prev.enabledAnalyses, analysisId]
        : prev.enabledAnalyses.filter(id => id !== analysisId),
    }));
  };

  const fetchDynamicModels = async (provider: string, apiKey: string) => {
    if (!apiKey) return;
    
    setFetchingModels(true);
    try {
      const response = await fetch('/api/ai-settings/models', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider,
          apiKey,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setDynamicModels(data.models || []);
      } else {
        console.warn('Failed to fetch dynamic models');
        setDynamicModels([]);
      }
    } catch (error) {
      console.error('Error fetching dynamic models:', error);
      setDynamicModels([]);
    } finally {
      setFetchingModels(false);
    }
  };

  const getAvailableModels = () => {
    const provider = AI_PROVIDERS[formData.provider as keyof typeof AI_PROVIDERS];
    if (!provider) return [];

    // If we have dynamic models, use them; otherwise fall back to static models
    let models = dynamicModels.length > 0 ? dynamicModels : provider.models;

    // Filter models based on search query
    if (modelSearchQuery.trim()) {
      const query = modelSearchQuery.toLowerCase();
      models = models.filter(model => 
        model.name.toLowerCase().includes(query) ||
        model.id.toLowerCase().includes(query) ||
        (model.description && model.description.toLowerCase().includes(query)) ||
        model.provider.toLowerCase().includes(query)
      );
    }

    return models;
  };

  const selectedProvider = AI_PROVIDERS[formData.provider as keyof typeof AI_PROVIDERS];

  // Show skeleton while loading
  if (loading || authLoading) {
    return <SettingsPageSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="h-8 w-8" />
          <div>
            <h1 className="text-3xl font-bold">AI Settings</h1>
            <p className="text-muted-foreground">
              Configure your AI provider, model, and analysis preferences
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={loadSettings}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <RefreshCw className="h-4 w-4 mr-2" />
            )}
            Refresh
          </Button>
          {onRefresh && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRefresh}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Reload Page
            </Button>
          )}
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="shadow-sm">
          <XCircle className="h-4 w-4" />
          <AlertDescription className="flex items-center justify-between">
            <span>{error}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={loadSettings}
              disabled={loading}
              className="ml-4"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-2" />
              )}
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="configuration" className="space-y-6">
        <TabsList className="shadow-sm">
          <TabsTrigger value="configuration">Configuration</TabsTrigger>
          <TabsTrigger value="usage">Usage Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="configuration" className="space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                API Configuration
              </CardTitle>
              <CardDescription>
                Set up your AI provider and API key
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="provider">AI Provider</Label>
                  <Select
                    value={formData.provider}
                    onValueChange={(value) => {
                      setFormData(prev => ({ 
                        ...prev, 
                        provider: value, 
                        model: AI_PROVIDERS[value as keyof typeof AI_PROVIDERS]?.models[0]?.id || '' 
                      }));
                      // Clear dynamic models when provider changes
                      setDynamicModels([]);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(AI_PROVIDERS).map(([id, provider]) => (
                        <SelectItem key={id} value={id}>
                          <div className="flex items-center gap-2">
                            {provider.name}
                            {(provider as any).isGateway && (
                              <Badge variant="secondary" className="text-xs">
                                Gateway
                              </Badge>
                            )}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* AI Gateway Info */}
                {formData.provider === 'ai-gateway' && (
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Vercel AI Gateway</strong> provides unified access to multiple AI providers through a single API. 
                      You'll need your Vercel AI Gateway API key. 
                      <a 
                        href="https://vercel.com/ai-gateway" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-1 text-primary hover:underline"
                      >
                        Get started here
                        <ExternalLink className="inline h-3 w-3 ml-1" />
                      </a>
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="model">Model</Label>
                    {formData.apiKey && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => fetchDynamicModels(formData.provider, formData.apiKey)}
                        disabled={fetchingModels}
                      >
                        {fetchingModels ? (
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        ) : (
                          <RefreshCw className="h-4 w-4 mr-2" />
                        )}
                        {dynamicModels.length > 0 ? 'Refresh Models' : 'Fetch Models'}
                      </Button>
                    )}
                  </div>
                  
                  {/* Model Search */}
                  {getAvailableModels().length > 5 && (
                    <div className="space-y-1">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Search models by name, provider, or description..."
                          value={modelSearchQuery}
                          onChange={(e) => setModelSearchQuery(e.target.value)}
                          className="text-sm flex-1"
                        />
                        {modelSearchQuery && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setModelSearchQuery('')}
                          >
                            Clear
                          </Button>
                        )}
                      </div>
                      {modelSearchQuery && (
                        <p className="text-xs text-muted-foreground">
                          Found {getAvailableModels().length} model(s) matching "{modelSearchQuery}"
                        </p>
                      )}
                    </div>
                  )}
                  <Select
                    value={formData.model}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, model: value }))}
                  >
                    <SelectTrigger className="h-auto min-h-[3rem] py-3">
                      <SelectValue>
                        {formData.model && (() => {
                          const selectedModel = getAvailableModels().find(m => m.id === formData.model);
                          if (selectedModel) {
                            return (
                              <div className="flex items-center justify-between w-full">
                                <div className="flex flex-col items-start">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{selectedModel.name}</span>
                                    <Badge variant="outline" className="text-xs">
                                      {selectedModel.provider}
                                    </Badge>
                                  </div>
                                  {selectedModel.description && (
                                    <span className="text-xs text-muted-foreground mt-1 line-clamp-1">
                                      {selectedModel.description}
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-muted-foreground ml-2">
                                  ${selectedModel.costPer1kTokens}/1k
                                </div>
                              </div>
                            );
                          }
                          return formData.model;
                        })()}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="max-h-96">
                      {getAvailableModels().length === 0 ? (
                        <div className="p-2 text-sm text-muted-foreground text-center">
                          {modelSearchQuery ? 'No models found matching your search' : 'No models available'}
                        </div>
                      ) : (
                        getAvailableModels().map((model) => (
                          <SelectItem key={model.id} value={model.id} className="py-3">
                            <div className="flex items-start justify-between w-full">
                              <div className="flex flex-col flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{model.name}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {model.provider}
                                  </Badge>
                                </div>
                                {model.description && (
                                  <span className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                    {model.description}
                                  </span>
                                )}
                                <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                                  <span>${model.costPer1kTokens}/1k tokens</span>
                                  {model.contextLength && (
                                    <span>{Math.round(model.contextLength / 1000)}k context</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  <div className="text-xs text-muted-foreground space-y-1">
                    {dynamicModels.length > 0 ? (
                      <p>Showing {dynamicModels.length} dynamically fetched models</p>
                    ) : (
                      <p>Showing {getAvailableModels().length} static models</p>
                    )}
                    {modelSearchQuery && (
                      <p>Filtered by search: "{modelSearchQuery}"</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiKey">
                  API Key
                  {formData.provider === 'ai-gateway' && (
                    <span className="text-sm text-muted-foreground ml-1">(AI Gateway)</span>
                  )}
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="apiKey"
                    type="password"
                    value={formData.apiKey}
                    onChange={(e) => setFormData(prev => ({ ...prev, apiKey: e.target.value }))}
                    placeholder={
                      formData.provider === 'ai-gateway' 
                        ? "Enter your Vercel AI Gateway API key"
                        : "Enter your API key"
                    }
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(selectedProvider?.apiKeyUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get your API key from {selectedProvider?.name}
                </p>
              </div>

              {!user && (
                <Alert className="shadow-sm">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    You must be signed in to test AI settings. Please sign in to continue.
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex gap-2">
                <Button
                  onClick={testConnection}
                  disabled={!formData.apiKey || testing || !user}
                  variant="outline"
                >
                  {testing ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <CheckCircle className="h-4 w-4 mr-2" />
                  )}
                  {!user ? 'Sign in to Test' : 'Test Connection'}
                </Button>
                <Button
                  onClick={saveSettings}
                  disabled={!formData.apiKey || saving}
                >
                  {saving ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <Settings className="h-4 w-4 mr-2" />
                  )}
                  Save Settings
                </Button>
              </div>

              {testResult && (
                <Alert variant={testResult.success ? "default" : "destructive"} className="shadow-sm">
                  {testResult.success ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  <AlertDescription>
                    {testResult.success ? testResult.message : testResult.error}
                    {testResult.testResult && (
                      <div className="mt-2 text-sm">
                        <p>Response: {testResult.testResult.response}</p>
                        <p>Duration: {testResult.testResult.duration}ms</p>
                      </div>
                    )}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Analysis Configuration
              </CardTitle>
              <CardDescription>
                Choose which analyses to run on your notes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ANALYSIS_TYPES.map((analysis) => (
                  <div key={analysis.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={analysis.id}
                      checked={formData.enabledAnalyses.includes(analysis.id)}
                      onCheckedChange={(checked) => handleAnalysisToggle(analysis.id, checked as boolean)}
                    />
                    <div className="space-y-1">
                      <Label htmlFor={analysis.id} className="text-sm font-medium">
                        {analysis.name}
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        {analysis.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timeout">Analysis Timeout (ms)</Label>
                  <Input
                    id="timeout"
                    type="number"
                    value={formData.analysisTimeout}
                    onChange={(e) => setFormData(prev => ({ ...prev, analysisTimeout: parseInt(e.target.value) }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cacheTTL">Cache TTL (seconds)</Label>
                  <Input
                    id="cacheTTL"
                    type="number"
                    value={formData.cacheTTL}
                    onChange={(e) => setFormData(prev => ({ ...prev, cacheTTL: parseInt(e.target.value) }))}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cacheEnabled"
                  checked={formData.cacheEnabled}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, cacheEnabled: checked as boolean }))}
                />
                <Label htmlFor="cacheEnabled">Enable caching for better performance</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          {usage ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Total Requests</p>
                      <p className="text-2xl font-bold">{usage.totalRequests}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Total Tokens</p>
                      <p className="text-2xl font-bold">{usage.totalTokens.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Success Rate</p>
                      <p className="text-2xl font-bold">
                        {usage.totalRequests > 0
                          ? Math.round((usage.successfulRequests / usage.totalRequests) * 100)
                          : 0}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Est. Cost</p>
                      <p className="text-2xl font-bold">${usage.estimatedTotalCost.toFixed(2)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="shadow-sm">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">No usage data available</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

