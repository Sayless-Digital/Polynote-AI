import { pgTable, text, timestamp, uuid, jsonb, index, boolean, varchar, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table for authentication
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: text('name').notNull(),
  passwordHash: text('password_hash').notNull(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  avatar: text('avatar'), // URL to user avatar
  preferences: jsonb('preferences').$type<Record<string, unknown>>(), // User preferences
  resetToken: text('reset_token'), // Password reset token
  resetTokenExpiry: timestamp('reset_token_expiry'), // Password reset token expiry
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => ({
  emailIdx: index('users_email_idx').on(table.email),
  createdAtIdx: index('users_created_at_idx').on(table.createdAt),
  resetTokenIdx: index('users_reset_token_idx').on(table.resetToken),
}));

// User sessions table for authentication
export const sessions = pgTable('sessions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  token: text('token').notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index('sessions_user_id_idx').on(table.userId),
  tokenIdx: index('sessions_token_idx').on(table.token),
  expiresAtIdx: index('sessions_expires_at_idx').on(table.expiresAt),
}));

// Email verification tokens table
export const emailVerificationTokens = pgTable('email_verification_tokens', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  token: text('token').notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index('email_verification_tokens_user_id_idx').on(table.userId),
  tokenIdx: index('email_verification_tokens_token_idx').on(table.token),
  expiresAtIdx: index('email_verification_tokens_expires_at_idx').on(table.expiresAt),
}));

// Notes table - updated with user ownership
export const notes = pgTable('notes', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  transcript: text('transcript'), // Original voice transcript
  summary: text('summary'), // AI-generated summary
  tags: jsonb('tags').$type<string[]>(), // AI-generated tags
  categories: jsonb('categories').$type<string[]>(), // AI-generated categories
  metadata: jsonb('metadata').$type<Record<string, unknown>>(), // Additional AI metadata
  isPublic: boolean('is_public').default(false).notNull(), // Allow sharing notes
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index('notes_user_id_idx').on(table.userId),
  titleIdx: index('notes_title_idx').on(table.title),
  createdAtIdx: index('notes_created_at_idx').on(table.createdAt),
  tagsIdx: index('notes_tags_idx').on(table.tags),
  categoriesIdx: index('notes_categories_idx').on(table.categories),
  isPublicIdx: index('notes_is_public_idx').on(table.isPublic),
}));

// Note searches table for full-text search
export const noteSearches = pgTable('note_searches', {
  id: uuid('id').primaryKey().defaultRandom(),
  noteId: uuid('note_id').references(() => notes.id, { onDelete: 'cascade' }),
  searchVector: text('search_vector'), // For full-text search
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// File attachments table
export const attachments = pgTable('attachments', {
  id: uuid('id').primaryKey().defaultRandom(),
  noteId: uuid('note_id').references(() => notes.id, { onDelete: 'cascade' }).notNull(),
  filename: text('filename').notNull(),
  originalName: text('original_name').notNull(),
  size: text('size').notNull(), // File size in bytes
  type: text('type').notNull(), // MIME type
  url: text('url').notNull(), // Vercel Blob URL
  content: text('content'), // Extracted text content for search
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  noteIdIdx: index('attachments_note_id_idx').on(table.noteId),
  createdAtIdx: index('attachments_created_at_idx').on(table.createdAt),
}));

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  notes: many(notes),
  sessions: many(sessions),
  emailVerificationTokens: many(emailVerificationTokens),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const emailVerificationTokensRelations = relations(emailVerificationTokens, ({ one }) => ({
  user: one(users, {
    fields: [emailVerificationTokens.userId],
    references: [users.id],
  }),
}));

export const notesRelations = relations(notes, ({ one, many }) => ({
  user: one(users, {
    fields: [notes.userId],
    references: [users.id],
  }),
  searches: many(noteSearches),
  attachments: many(attachments),
}));

export const noteSearchesRelations = relations(noteSearches, ({ one }) => ({
  note: one(notes, {
    fields: [noteSearches.noteId],
    references: [notes.id],
  }),
}));

export const attachmentsRelations = relations(attachments, ({ one }) => ({
  note: one(notes, {
    fields: [attachments.noteId],
    references: [notes.id],
  }),
}));

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

// Types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;
export type EmailVerificationToken = typeof emailVerificationTokens.$inferSelect;
export type NewEmailVerificationToken = typeof emailVerificationTokens.$inferInsert;
export type Note = typeof notes.$inferSelect;
export type NewNote = typeof notes.$inferInsert;
export type NoteSearch = typeof noteSearches.$inferSelect;
export type NewNoteSearch = typeof noteSearches.$inferInsert;
export type Attachment = typeof attachments.$inferSelect;
export type NewAttachment = typeof attachments.$inferInsert;
export type UserAISettings = typeof userAISettings.$inferSelect;
export type NewUserAISettings = typeof userAISettings.$inferInsert;
export type TokenUsageLog = typeof tokenUsageLogs.$inferSelect;
export type NewTokenUsageLog = typeof tokenUsageLogs.$inferInsert;
