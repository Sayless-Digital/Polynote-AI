import { 
  AnalysisType, 
  AnalysisConfig, 
  AnalysisRequest, 
  AnalysisResponse, 
  ComprehensiveAnalysis,
  AnalysisResult 
} from './types';
import { BaseAnalysisService } from './services/BaseAnalysisService';
import { SummaryAnalysisService } from './services/SummaryAnalysisService';
import { KeyPointsAnalysisService } from './services/KeyPointsAnalysisService';
import { CategoriesAnalysisService } from './services/CategoriesAnalysisService';
import { TagsAnalysisService } from './services/TagsAnalysisService';
import { SentimentAnalysisService } from './services/SentimentAnalysisService';
import { TitleAnalysisService } from './services/TitleAnalysisService';

export class AnalysisOrchestrator {
  private services: Map<AnalysisType, BaseAnalysisService>;
  private cache: Map<string, ComprehensiveAnalysis>;
  private defaultConfig: AnalysisConfig;

  constructor() {
    this.services = new Map();
    this.cache = new Map();
    
    // Initialize services
    this.initializeServices();
    
    // Default configuration
    this.defaultConfig = {
      enabledAnalyses: [
        AnalysisType.TITLE,
        AnalysisType.SUMMARY,
        AnalysisType.KEY_POINTS,
        AnalysisType.CATEGORIES,
        AnalysisType.TAGS,
        AnalysisType.SENTIMENT,
      ],
      priority: [
        AnalysisType.TITLE,
        AnalysisType.SUMMARY,
        AnalysisType.KEY_POINTS,
        AnalysisType.CATEGORIES,
        AnalysisType.TAGS,
        AnalysisType.SENTIMENT,
      ],
      timeout: 30000, // 30 seconds total
      retryAttempts: 2,
      cacheEnabled: true,
      cacheTTL: 24 * 60 * 60 * 1000, // 24 hours
    };
  }

  private async initializeServices(userId?: string): Promise<void> {
    const summaryService = new SummaryAnalysisService();
    const keyPointsService = new KeyPointsAnalysisService();
    const categoriesService = new CategoriesAnalysisService();
    const tagsService = new TagsAnalysisService();
    const sentimentService = new SentimentAnalysisService();
    const titleService = new TitleAnalysisService();

    // Initialize services with user settings if userId is provided
    if (userId) {
      await Promise.all([
        summaryService.initialize(userId),
        keyPointsService.initialize(userId),
        categoriesService.initialize(userId),
        tagsService.initialize(userId),
        sentimentService.initialize(userId),
        titleService.initialize(userId),
      ]);
    }

    this.services.set(AnalysisType.SUMMARY, summaryService);
    this.services.set(AnalysisType.KEY_POINTS, keyPointsService);
    this.services.set(AnalysisType.CATEGORIES, categoriesService);
    this.services.set(AnalysisType.TAGS, tagsService);
    this.services.set(AnalysisType.SENTIMENT, sentimentService);
    this.services.set(AnalysisType.TITLE, titleService);
  }

  /**
   * Perform comprehensive analysis of content
   */
  async analyze(request: AnalysisRequest, userId?: string): Promise<AnalysisResponse> {
    const startTime = Date.now();
    const config = { ...this.defaultConfig, ...request.config };
    
    // Check cache first
    if (config.cacheEnabled && !request.forceRefresh) {
      const cached = this.getCachedAnalysis(request.noteId);
      if (cached) {
        return {
          success: true,
          data: cached,
        };
      }
    }

    try {
      // Initialize services with user settings
      await this.initializeServices(userId);
      
      // Get enabled services in priority order
      const enabledServices = this.getEnabledServices(config);
      
      // Execute analyses in parallel with priority handling
      const results = await this.executeAnalyses(
        request.noteId,
        request.content,
        enabledServices,
        config
      );

      // Calculate overall confidence
      const overallConfidence = this.calculateOverallConfidence(results);
      
      // Create comprehensive analysis
      const comprehensiveAnalysis: ComprehensiveAnalysis = {
        noteId: request.noteId,
        analyses: results,
        overallConfidence,
        processingTime: Date.now() - startTime,
        version: '1.0.0',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Cache the result
      if (config.cacheEnabled) {
        this.cacheAnalysis(request.noteId, comprehensiveAnalysis);
      }

      return {
        success: true,
        data: comprehensiveAnalysis,
      };

    } catch (error) {
      console.error('Analysis orchestration failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Get enabled services in priority order
   */
  private getEnabledServices(config: AnalysisConfig): BaseAnalysisService[] {
    return config.enabledAnalyses
      .map(type => this.services.get(type))
      .filter((service): service is BaseAnalysisService => service !== undefined)
      .sort((a, b) => a.getPriority() - b.getPriority());
  }

  /**
   * Execute analyses with parallel processing and error handling
   */
  private async executeAnalyses(
    noteId: string,
    content: string,
    services: BaseAnalysisService[],
    config: AnalysisConfig
  ): Promise<Record<AnalysisType, AnalysisResult>> {
    const results: Record<AnalysisType, AnalysisResult> = {} as Record<AnalysisType, AnalysisResult>;
    const context = { noteId };

    // Execute high-priority analyses first (title, summary)
    const highPriorityServices = services.filter(s => s.getPriority() <= 2);
    const otherServices = services.filter(s => s.getPriority() > 2);

    // Run high-priority analyses sequentially for better results
    for (const service of highPriorityServices) {
      try {
        const result = await service.analyze(content, context);
        results[service.type] = result;
      } catch (error) {
        console.error(`High-priority analysis failed for ${service.type}:`, error);
        results[service.type] = service.createBaseResult(
          noteId,
          'failed',
          null,
          error instanceof Error ? error.message : 'Unknown error'
        );
      }
    }

    // Run other analyses in parallel
    const otherPromises = otherServices.map(async (service) => {
      try {
        return await service.analyze(content, context);
      } catch (error) {
        console.error(`Analysis failed for ${service.type}:`, error);
        return service.createBaseResult(
          noteId,
          'failed',
          null,
          error instanceof Error ? error.message : 'Unknown error'
        );
      }
    });

    const otherResults = await Promise.all(otherPromises);
    otherResults.forEach(result => {
      results[result.type] = result;
    });

    return results;
  }

  /**
   * Calculate overall confidence score
   */
  private calculateOverallConfidence(results: Record<AnalysisType, AnalysisResult>): number {
    const completedAnalyses = Object.values(results).filter(r => r.status === 'completed');
    
    if (completedAnalyses.length === 0) {
      return 0;
    }

    // Calculate weighted average based on analysis type importance
    const weights: Record<AnalysisType, number> = {
      [AnalysisType.TITLE]: 0.2,
      [AnalysisType.SUMMARY]: 0.25,
      [AnalysisType.KEY_POINTS]: 0.2,
      [AnalysisType.CATEGORIES]: 0.15,
      [AnalysisType.TAGS]: 0.1,
      [AnalysisType.SENTIMENT]: 0.1,
      [AnalysisType.ENTITIES]: 0.05,
      [AnalysisType.TOPICS]: 0.05,
      [AnalysisType.RELATIONSHIPS]: 0.05,
      [AnalysisType.CONFIDENCE_SCORE]: 0.05,
    };

    let totalWeight = 0;
    let weightedSum = 0;

    completedAnalyses.forEach(analysis => {
      const weight = weights[analysis.type] || 0.05;
      const confidence = this.extractConfidenceFromResult(analysis);
      weightedSum += confidence * weight;
      totalWeight += weight;
    });

    return totalWeight > 0 ? weightedSum / totalWeight : 0;
  }

  /**
   * Extract confidence score from analysis result
   */
  private extractConfidenceFromResult(result: AnalysisResult): number {
    if (result.status !== 'completed' || !result.result) {
      return 0;
    }

    // Try to extract confidence from the result
    if (typeof result.result === 'object' && result.result !== null) {
      if ('confidence' in result.result) {
        return result.result.confidence as number;
      }
      if ('overallConfidence' in result.result) {
        return result.result.overallConfidence as number;
      }
    }

    // Default confidence based on status
    return result.status === 'completed' ? 0.8 : 0;
  }

  /**
   * Get cached analysis
   */
  private getCachedAnalysis(noteId: string): ComprehensiveAnalysis | null {
    const cached = this.cache.get(noteId);
    if (!cached) {
      return null;
    }

    // Check if cache is still valid
    const now = Date.now();
    const cacheAge = now - cached.createdAt.getTime();
    
    if (cacheAge > this.defaultConfig.cacheTTL) {
      this.cache.delete(noteId);
      return null;
    }

    return cached;
  }

  /**
   * Cache analysis result
   */
  private cacheAnalysis(noteId: string, analysis: ComprehensiveAnalysis): void {
    this.cache.set(noteId, analysis);
    
    // Clean up old cache entries periodically
    if (this.cache.size > 100) {
      this.cleanupCache();
    }
  }

  /**
   * Clean up old cache entries
   */
  private cleanupCache(): void {
    const now = Date.now();
    const entries = Array.from(this.cache.entries());
    
    entries.forEach(([noteId, analysis]) => {
      const cacheAge = now - analysis.createdAt.getTime();
      if (cacheAge > this.defaultConfig.cacheTTL) {
        this.cache.delete(noteId);
      }
    });
  }

  /**
   * Get analysis statistics
   */
  getStats(): {
    totalAnalyses: number;
    cacheSize: number;
    availableServices: AnalysisType[];
  } {
    return {
      totalAnalyses: this.cache.size,
      cacheSize: this.cache.size,
      availableServices: Array.from(this.services.keys()),
    };
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }
}
