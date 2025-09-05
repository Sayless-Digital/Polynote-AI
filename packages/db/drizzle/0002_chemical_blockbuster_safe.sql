-- Create users table
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" text NOT NULL,
	"password_hash" text NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"avatar" text,
	"preferences" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);

-- Create sessions table
CREATE TABLE "sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"token" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "sessions_token_unique" UNIQUE("token")
);

-- Add user_id column to notes table (nullable first)
ALTER TABLE "notes" ADD COLUMN "user_id" uuid;

-- Add is_public column to notes table
ALTER TABLE "notes" ADD COLUMN "is_public" boolean DEFAULT false NOT NULL;

-- Create a default user for existing notes (optional - you might want to handle this differently)
INSERT INTO "users" ("id", "email", "name", "password_hash", "email_verified") 
VALUES (gen_random_uuid(), 'migration@example.com', 'Migration User', 'temp_hash', false);

-- Update existing notes to belong to the default user
UPDATE "notes" SET "user_id" = (SELECT "id" FROM "users" WHERE "email" = 'migration@example.com') WHERE "user_id" IS NULL;

-- Now make user_id NOT NULL
ALTER TABLE "notes" ALTER COLUMN "user_id" SET NOT NULL;

-- Add foreign key constraints
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
ALTER TABLE "notes" ADD CONSTRAINT "notes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;

-- Create indexes
CREATE INDEX "sessions_user_id_idx" ON "sessions" USING btree ("user_id");
CREATE INDEX "sessions_token_idx" ON "sessions" USING btree ("token");
CREATE INDEX "sessions_expires_at_idx" ON "sessions" USING btree ("expires_at");
CREATE INDEX "users_email_idx" ON "users" USING btree ("email");
CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
CREATE INDEX "notes_user_id_idx" ON "notes" USING btree ("user_id");
CREATE INDEX "notes_is_public_idx" ON "notes" USING btree ("is_public");

