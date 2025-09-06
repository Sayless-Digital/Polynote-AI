CREATE TABLE "token_usage_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"note_id" uuid,
	"provider" varchar(50) NOT NULL,
	"model" varchar(100) NOT NULL,
	"analysis_type" varchar(50) NOT NULL,
	"input_tokens" integer DEFAULT 0 NOT NULL,
	"output_tokens" integer DEFAULT 0 NOT NULL,
	"total_tokens" integer DEFAULT 0 NOT NULL,
	"request_duration" integer,
	"success" boolean DEFAULT true NOT NULL,
	"error_message" text,
	"estimated_cost" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_ai_settings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"provider" varchar(50) DEFAULT 'google' NOT NULL,
	"api_key" text,
	"model" varchar(100) DEFAULT 'gemini-1.5-flash-latest' NOT NULL,
	"total_tokens_used" integer DEFAULT 0 NOT NULL,
	"total_requests" integer DEFAULT 0 NOT NULL,
	"last_used_at" timestamp,
	"enabled_analyses" jsonb DEFAULT '["title","summary","key_points","categories","tags"]'::jsonb,
	"analysis_timeout" integer DEFAULT 30000,
	"cache_enabled" boolean DEFAULT true,
	"cache_ttl" integer DEFAULT 86400,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "token_usage_logs" ADD CONSTRAINT "token_usage_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_ai_settings" ADD CONSTRAINT "user_ai_settings_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "token_usage_logs_user_id_idx" ON "token_usage_logs" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "token_usage_logs_note_id_idx" ON "token_usage_logs" USING btree ("note_id");--> statement-breakpoint
CREATE INDEX "token_usage_logs_created_at_idx" ON "token_usage_logs" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "token_usage_logs_provider_idx" ON "token_usage_logs" USING btree ("provider");--> statement-breakpoint
CREATE INDEX "user_ai_settings_user_id_idx" ON "user_ai_settings" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "user_ai_settings_provider_idx" ON "user_ai_settings" USING btree ("provider");--> statement-breakpoint
CREATE INDEX "user_ai_settings_last_used_idx" ON "user_ai_settings" USING btree ("last_used_at");