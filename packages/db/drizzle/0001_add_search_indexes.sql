-- Add indexes for better search performance
CREATE INDEX IF NOT EXISTS idx_notes_title_search ON notes USING gin(to_tsvector('english', title));
CREATE INDEX IF NOT EXISTS idx_notes_content_search ON notes USING gin(to_tsvector('english', content));
CREATE INDEX IF NOT EXISTS idx_notes_tags_gin ON notes USING gin(tags);
CREATE INDEX IF NOT EXISTS idx_notes_categories_gin ON notes USING gin(categories);
CREATE INDEX IF NOT EXISTS idx_notes_created_at_desc ON notes (created_at DESC);
