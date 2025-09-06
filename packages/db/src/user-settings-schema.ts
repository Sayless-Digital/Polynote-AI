import { pgTable, text, timestamp, uuid, jsonb, index, boolean, varchar, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './schema';

// User AI Settings table
export const userAISettings = pgTable('user_ai_settings', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  
  // API Configuration
  provider: varchar('provider', { length: 50 }).notNull().default('google'), // 'google', 'openai', 'anthropic'
  apiKey: text('api_key'), // Encrypted API key
  model: varchar('model', { length: 100 }).notNull().default('gemini-1.5-flash-latest'),
  
  // Usage Tracking
  totalTokensUsed: integer('total_tokens_used').default(0).notNull(),
  totalRequests: integer('total_requests').default(0).notNull(),
  lastUsedAt: timestamp('last_used_at'),
  
  // Settings
  enabledAnalyses: jsonb('enabled_analyses').$type<string[]>().default(['title', 'summary', 'key_points', 'categories', 'tags']),
  analysisTimeout: integer('analysis_timeout').default(30000), // 30 seconds
  cacheEnabled: boolean('cache_enabled').default(true),
  cacheTTL: integer('cache_ttl').default(86400), // 24 hours in seconds
  
  // Metadata
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index('user_ai_settings_user_id_idx').on(table.userId),
  providerIdx: index('user_ai_settings_provider_idx').on(table.provider),
  lastUsedIdx: index('user_ai_settings_last_used_idx').on(table.lastUsedAt),
}));

// Token Usage Log table for detailed tracking
export const tokenUsageLogs = pgTable('token_usage_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  noteId: uuid('note_id'), // Optional reference to note
  
  // Request details
  provider: varchar('provider', { length: 50 }).notNull(),
  model: varchar('model', { length: 100 }).notNull(),
  analysisType: varchar('analysis_type', { length: 50 }).notNull(),
  
  // Token usage
  inputTokens: integer('input_tokens').default(0).notNull(),
  outputTokens: integer('output_tokens').default(0).notNull(),
  totalTokens: integer('total_tokens').default(0).notNull(),
  
  // Request metadata
  requestDuration: integer('request_duration'), // milliseconds
  success: boolean('success').default(true).notNull(),
  errorMessage: text('error_message'),
  
  // Cost tracking (for future billing)
  estimatedCost: integer('estimated_cost'), // in cents
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index('token_usage_logs_user_id_idx').on(table.userId),
  noteIdIdx: index('token_usage_logs_note_id_idx').on(table.noteId),
  createdAtIdx: index('token_usage_logs_created_at_idx').on(table.createdAt),
  providerIdx: index('token_usage_logs_provider_idx').on(table.provider),
}));

// Relations
export const userAISettingsRelations = relations(userAISettings, ({ one }) => ({
  user: one(users, {
    fields: [userAISettings.userId],
    references: [users.id],
  }),
}));

export const tokenUsageLogsRelations = relations(tokenUsageLogs, ({ one }) => ({
  user: one(users, {
    fields: [tokenUsageLogs.userId],
    references: [users.id],
  }),
}));

// Types
export type UserAISettings = typeof userAISettings.$inferSelect;
export type NewUserAISettings = typeof userAISettings.$inferInsert;
export type TokenUsageLog = typeof tokenUsageLogs.$inferSelect;
export type NewTokenUsageLog = typeof tokenUsageLogs.$inferInsert;

