import { pgTable, text, timestamp, uuid, jsonb, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Notes table
export const notes = pgTable('notes', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  transcript: text('transcript'), // Original voice transcript
  summary: text('summary'), // AI-generated summary
  tags: jsonb('tags').$type<string[]>(), // AI-generated tags
  categories: jsonb('categories').$type<string[]>(), // AI-generated categories
  metadata: jsonb('metadata').$type<Record<string, unknown>>(), // Additional AI metadata
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => ({
  titleIdx: index('notes_title_idx').on(table.title),
  createdAtIdx: index('notes_created_at_idx').on(table.createdAt),
  tagsIdx: index('notes_tags_idx').on(table.tags),
  categoriesIdx: index('notes_categories_idx').on(table.categories),
}));

// Note searches table for full-text search
export const noteSearches = pgTable('note_searches', {
  id: uuid('id').primaryKey().defaultRandom(),
  noteId: uuid('note_id').references(() => notes.id, { onDelete: 'cascade' }),
  searchVector: text('search_vector'), // For full-text search
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const notesRelations = relations(notes, ({ many }) => ({
  searches: many(noteSearches),
}));

export const noteSearchesRelations = relations(noteSearches, ({ one }) => ({
  note: one(notes, {
    fields: [noteSearches.noteId],
    references: [notes.id],
  }),
}));

// Types
export type Note = typeof notes.$inferSelect;
export type NewNote = typeof notes.$inferInsert;
export type NoteSearch = typeof noteSearches.$inferSelect;
export type NewNoteSearch = typeof noteSearches.$inferInsert;
