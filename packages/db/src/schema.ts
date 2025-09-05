import { pgTable, text, timestamp, uuid, jsonb, index, boolean, varchar } from 'drizzle-orm/pg-core';
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
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => ({
  emailIdx: index('users_email_idx').on(table.email),
  createdAtIdx: index('users_created_at_idx').on(table.createdAt),
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
