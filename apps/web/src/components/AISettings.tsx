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
import { 
  Settings, 
  Key, 
  Brain, 
  BarChart3, 
  CheckCircle, 
  XCircle, 
  Loader2,
  ExternalLink,
  Info
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

const AI_PROVIDERS = {
  google: {
    name: 'Google Gemini',
    models: [
      { id: 'gemini-1.5-flash-latest', name: 'Gemini 1.5 Flash (Latest)', costPer1kTokens: 0.075 },
      { id: 'gemini-1.5-pro-latest', name: 'Gemini 1.5 Pro (Latest)', costPer1kTokens: 1.25 },
      { id: 'gemini-1.0-pro', name: 'Gemini 1.0 Pro', costPer1kTokens: 0.5 },
    ],
    apiKeyUrl: 'https://makersuite.google.com/app/apikey',
  },
  openai: {
    name: 'OpenAI',
    models: [
      { id: 'gpt-4o', name: 'GPT-4o', costPer1kTokens: 2.5 },
      { id: 'gpt-4o-mini', name: 'GPT-4o Mini', costPer1kTokens: 0.15 },
      { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', costPer1kTokens: 0.5 },
    ],
    apiKeyUrl: 'https://platform.openai.com/api-keys',
  },
  anthropic: {
    name: 'Anthropic Claude',
    models: [
      { id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet', costPer1kTokens: 3.0 },
      { id: 'claude-3-5-haiku-20241022', name: 'Claude 3.5 Haiku', costPer1kTokens: 0.8 },
      { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus', costPer1kTokens: 15.0 },
    ],
    apiKeyUrl: 'https://console.anthropic.com/',
  },
};

const ANALYSIS_TYPES = [
  { id: 'title', name: 'Title Generation', description: 'Generate descriptive titles' },
  { id: 'summary', name: 'Summary', description: 'Create content summaries' },
  { id: 'key_points', name: 'Key Points', description: 'Extract important points' },
  { id: 'categories', name: 'Categories', description: 'Categorize content' },
  { id: 'tags', name: 'Tags', description: 'Generate relevant tags' },
  { id: 'sentiment', name: 'Sentiment', description: 'Analyze emotional tone' },
];

export function AISettings() {
  const [settings, setSettings] = useState<AISettings | null>(null);
  const [usage, setUsage] = useState<TokenUsage | null>(null);
  const [loading, setLoading] = useState(true);
  const { setLoading: setGlobalLoading } = useGlobalLoading();
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message?: string; error?: string; testResult?: { response: string; duration: number; provider: string; model: string } } | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const loadSettings = async () => {
    try {
      setLoading(true);
      setGlobalLoading(true);
      const response = await fetch('/api/ai-settings?includeUsage=true');
      
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
    } catch {
      setError('Failed to load settings');
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

      const response = await fetch('/api/ai-settings/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider: formData.provider,
          apiKey: formData.apiKey,
          model: formData.model,
        }),
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
      setTestResult(data);
    } catch {
      setTestResult({
        success: false,
        error: 'Failed to test connection',
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

  const selectedProvider = AI_PROVIDERS[formData.provider as keyof typeof AI_PROVIDERS];

  // Don't render anything while loading, let the global loader handle it
  if (loading) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="h-8 w-8" />
        <div>
          <h1 className="text-3xl font-bold">AI Settings</h1>
          <p className="text-muted-foreground">
            Configure your AI provider, model, and analysis preferences
          </p>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
          <XCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="configuration" className="space-y-6">
        <TabsList className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
          <TabsTrigger value="configuration">Configuration</TabsTrigger>
          <TabsTrigger value="usage">Usage Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="configuration" className="space-y-6">
          <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
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
                    onValueChange={(value) => setFormData(prev => ({ ...prev, provider: value, model: AI_PROVIDERS[value as keyof typeof AI_PROVIDERS]?.models[0]?.id || '' }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(AI_PROVIDERS).map(([id, provider]) => (
                        <SelectItem key={id} value={id}>
                          {provider.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="model">Model</Label>
                  <Select
                    value={formData.model}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, model: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedProvider?.models.map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{model.name}</span>
                            <Badge variant="secondary" className="ml-2">
                              ${model.costPer1kTokens}/1k tokens
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <div className="flex gap-2">
                  <Input
                    id="apiKey"
                    type="password"
                    value={formData.apiKey}
                    onChange={(e) => setFormData(prev => ({ ...prev, apiKey: e.target.value }))}
                    placeholder="Enter your API key"
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

              <div className="flex gap-2">
                <Button
                  onClick={testConnection}
                  disabled={!formData.apiKey || testing}
                  variant="outline"
                >
                  {testing ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <CheckCircle className="h-4 w-4 mr-2" />
                  )}
                  Test Connection
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
                <Alert variant={testResult.success ? "default" : "destructive"} className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
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

          <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
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
              <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
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

              <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
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

              <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
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

              <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
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
            <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
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

