ALTER TABLE "users" ADD COLUMN "reset_token" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "reset_token_expiry" timestamp;--> statement-breakpoint
CREATE INDEX "users_reset_token_idx" ON "users" USING btree ("reset_token");