import { z } from 'zod';

// Base analysis result interface
export interface AnalysisResult {
  id: string;
  noteId: string;
  type: AnalysisType;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  result?: Record<string, unknown>;
  error?: string;
  createdAt: Date;
  updatedAt: Date;
  processingTime?: number;
}

// Analysis types
export enum AnalysisType {
  SUMMARY = 'summary',
  KEY_POINTS = 'key_points',
  CATEGORIES = 'categories',
  TAGS = 'tags',
  SENTIMENT = 'sentiment',
  TITLE = 'title',
  ENTITIES = 'entities',
  TOPICS = 'topics',
  RELATIONSHIPS = 'relationships',
  CONFIDENCE_SCORE = 'confidence_score'
}

// Individual analysis schemas
export const SummaryAnalysisSchema = z.object({
  summary: z.string().min(10).max(1000),
  confidence: z.number().min(0).max(1),
  wordCount: z.number().min(1),
  keyThemes: z.array(z.string()).max(5),
  language: z.string().optional(),
});

export const KeyPointsAnalysisSchema = z.object({
  keyPoints: z.array(z.object({
    point: z.string().min(10).max(200),
    importance: z.number().min(0).max(1),
    category: z.string().optional(),
    evidence: z.string().optional(),
  })).min(1).max(10),
  totalPoints: z.number().min(1),
  averageImportance: z.number().min(0).max(1),
});

export const CategoriesAnalysisSchema = z.object({
  categories: z.array(z.object({
    name: z.string().min(2).max(50),
    confidence: z.number().min(0).max(1),
    reasoning: z.string().optional(),
    subcategories: z.array(z.string()).optional(),
  })).min(1).max(5),
  primaryCategory: z.string().min(2).max(50),
  categoryHierarchy: z.array(z.string()).optional(),
});

export const TagsAnalysisSchema = z.object({
  tags: z.array(z.object({
    tag: z.string().min(2).max(30),
    relevance: z.number().min(0).max(1),
    type: z.enum(['topic', 'entity', 'concept', 'action', 'emotion']),
    frequency: z.number().min(1).optional(),
  })).min(1).max(15),
  tagCloud: z.record(z.number()).optional(),
});

export const SentimentAnalysisSchema = z.object({
  sentiment: z.enum(['positive', 'negative', 'neutral', 'mixed']),
  confidence: z.number().min(0).max(1),
  emotions: z.array(z.object({
    emotion: z.string(),
    intensity: z.number().min(0).max(1),
  })).optional(),
  polarity: z.number().min(-1).max(1),
});

export const TitleAnalysisSchema = z.object({
  title: z.string().min(5).max(100),
  alternatives: z.array(z.string()).max(3).optional(),
  confidence: z.number().min(0).max(1),
  style: z.enum(['descriptive', 'question', 'statement', 'creative']).optional(),
});

export const EntitiesAnalysisSchema = z.object({
  entities: z.array(z.object({
    name: z.string(),
    type: z.enum(['person', 'organization', 'location', 'date', 'product', 'concept']),
    confidence: z.number().min(0).max(1),
    mentions: z.number().min(1),
    context: z.string().optional(),
  })).min(0).max(20),
  entityRelationships: z.array(z.object({
    entity1: z.string(),
    entity2: z.string(),
    relationship: z.string(),
    confidence: z.number().min(0).max(1),
  })).optional(),
});

export const TopicsAnalysisSchema = z.object({
  topics: z.array(z.object({
    topic: z.string().min(3).max(50),
    relevance: z.number().min(0).max(1),
    subtopics: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
  })).min(1).max(8),
  topicDistribution: z.record(z.number()).optional(),
});

export const RelationshipsAnalysisSchema = z.object({
  relationships: z.array(z.object({
    source: z.string(),
    target: z.string(),
    relationship: z.string(),
    strength: z.number().min(0).max(1),
    type: z.enum(['causal', 'temporal', 'hierarchical', 'associative', 'contrastive']),
  })).min(0).max(15),
  relationshipGraph: z.record(z.array(z.string())).optional(),
});

export const ConfidenceScoreSchema = z.object({
  overallConfidence: z.number().min(0).max(1),
  analysisBreakdown: z.record(z.number()),
  qualityIndicators: z.object({
    contentLength: z.boolean(),
    clarity: z.boolean(),
    coherence: z.boolean(),
    completeness: z.boolean(),
  }),
  recommendations: z.array(z.string()).optional(),
});

// Combined analysis result
export interface ComprehensiveAnalysis {
  noteId: string;
  analyses: Record<AnalysisType, AnalysisResult>;
  overallConfidence: number;
  processingTime: number;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}

// Analysis configuration
export interface AnalysisConfig {
  enabledAnalyses: AnalysisType[];
  priority: AnalysisType[];
  timeout: number;
  retryAttempts: number;
  cacheEnabled: boolean;
  cacheTTL: number;
}

// Analysis request
export interface AnalysisRequest {
  noteId: string;
  content: string;
  config?: Partial<AnalysisConfig>;
  forceRefresh?: boolean;
}

// Analysis response
export interface AnalysisResponse {
  success: boolean;
  data?: ComprehensiveAnalysis;
  error?: string;
  partialResults?: Record<AnalysisType, AnalysisResult>;
}

