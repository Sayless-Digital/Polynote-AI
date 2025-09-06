module.exports = [
"[project]/apps/web/.next-internal/server/app/api/ai-settings/models/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@neondatabase/serverless [external] (@neondatabase/serverless, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@neondatabase/serverless");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/dotenv [external] (dotenv, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dotenv", () => require("dotenv"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/packages/db/src/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachments",
    ()=>attachments,
    "attachmentsRelations",
    ()=>attachmentsRelations,
    "emailVerificationTokens",
    ()=>emailVerificationTokens,
    "emailVerificationTokensRelations",
    ()=>emailVerificationTokensRelations,
    "noteSearches",
    ()=>noteSearches,
    "noteSearchesRelations",
    ()=>noteSearchesRelations,
    "notes",
    ()=>notes,
    "notesRelations",
    ()=>notesRelations,
    "sessions",
    ()=>sessions,
    "sessionsRelations",
    ()=>sessionsRelations,
    "tokenUsageLogs",
    ()=>tokenUsageLogs,
    "userAISettings",
    ()=>userAISettings,
    "users",
    ()=>users,
    "usersRelations",
    ()=>usersRelations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/jsonb.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/indexes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/relations.js [app-route] (ecmascript)");
;
;
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('users', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('id').primaryKey().defaultRandom(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])('email', {
        length: 255
    }).notNull().unique(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('name').notNull(),
    passwordHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('password_hash').notNull(),
    emailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])('email_verified').default(false).notNull(),
    avatar: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('avatar'),
    preferences: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])('preferences').$type(),
    resetToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('reset_token'),
    resetTokenExpiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('reset_token_expiry'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
}, (table)=>({
        emailIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('users_email_idx').on(table.email),
        createdAtIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('users_created_at_idx').on(table.createdAt),
        resetTokenIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('users_reset_token_idx').on(table.resetToken)
    }));
const sessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('sessions', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('id').primaryKey().defaultRandom(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('user_id').references(()=>users.id, {
        onDelete: 'cascade'
    }).notNull(),
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('token').notNull().unique(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('expires_at').notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull()
}, (table)=>({
        userIdIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('sessions_user_id_idx').on(table.userId),
        tokenIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('sessions_token_idx').on(table.token),
        expiresAtIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('sessions_expires_at_idx').on(table.expiresAt)
    }));
const emailVerificationTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('email_verification_tokens', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('id').primaryKey().defaultRandom(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('user_id').references(()=>users.id, {
        onDelete: 'cascade'
    }).notNull(),
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('token').notNull().unique(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('expires_at').notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull()
}, (table)=>({
        userIdIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('email_verification_tokens_user_id_idx').on(table.userId),
        tokenIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('email_verification_tokens_token_idx').on(table.token),
        expiresAtIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('email_verification_tokens_expires_at_idx').on(table.expiresAt)
    }));
const notes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('notes', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('id').primaryKey().defaultRandom(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('user_id').references(()=>users.id, {
        onDelete: 'cascade'
    }).notNull(),
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('title').notNull(),
    content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('content').notNull(),
    transcript: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('transcript'),
    summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('summary'),
    tags: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])('tags').$type(),
    categories: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])('categories').$type(),
    metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])('metadata').$type(),
    isPublic: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])('is_public').default(false).notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
}, (table)=>({
        userIdIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('notes_user_id_idx').on(table.userId),
        titleIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('notes_title_idx').on(table.title),
        createdAtIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('notes_created_at_idx').on(table.createdAt),
        tagsIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('notes_tags_idx').on(table.tags),
        categoriesIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('notes_categories_idx').on(table.categories),
        isPublicIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('notes_is_public_idx').on(table.isPublic)
    }));
const noteSearches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('note_searches', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('id').primaryKey().defaultRandom(),
    noteId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('note_id').references(()=>notes.id, {
        onDelete: 'cascade'
    }),
    searchVector: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('search_vector'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull()
});
const attachments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('attachments', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('id').primaryKey().defaultRandom(),
    noteId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('note_id').references(()=>notes.id, {
        onDelete: 'cascade'
    }).notNull(),
    filename: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('filename').notNull(),
    originalName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('original_name').notNull(),
    size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('size').notNull(),
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('type').notNull(),
    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('url').notNull(),
    content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('content'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull()
}, (table)=>({
        noteIdIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('attachments_note_id_idx').on(table.noteId),
        createdAtIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('attachments_created_at_idx').on(table.createdAt)
    }));
const usersRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(users, ({ many })=>({
        notes: many(notes),
        sessions: many(sessions),
        emailVerificationTokens: many(emailVerificationTokens)
    }));
const sessionsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(sessions, ({ one })=>({
        user: one(users, {
            fields: [
                sessions.userId
            ],
            references: [
                users.id
            ]
        })
    }));
const emailVerificationTokensRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(emailVerificationTokens, ({ one })=>({
        user: one(users, {
            fields: [
                emailVerificationTokens.userId
            ],
            references: [
                users.id
            ]
        })
    }));
const notesRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(notes, ({ one, many })=>({
        user: one(users, {
            fields: [
                notes.userId
            ],
            references: [
                users.id
            ]
        }),
        searches: many(noteSearches),
        attachments: many(attachments)
    }));
const noteSearchesRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(noteSearches, ({ one })=>({
        note: one(notes, {
            fields: [
                noteSearches.noteId
            ],
            references: [
                notes.id
            ]
        })
    }));
const attachmentsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(attachments, ({ one })=>({
        note: one(notes, {
            fields: [
                attachments.noteId
            ],
            references: [
                notes.id
            ]
        })
    }));
const userAISettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('user_ai_settings', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('id').primaryKey().defaultRandom(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('user_id').references(()=>users.id, {
        onDelete: 'cascade'
    }).notNull(),
    // API Configuration
    provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])('provider', {
        length: 50
    }).notNull().default('google'),
    apiKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('api_key'),
    model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])('model', {
        length: 100
    }).notNull().default('gemini-1.5-flash-latest'),
    // Usage Tracking
    totalTokensUsed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('total_tokens_used').default(0).notNull(),
    totalRequests: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('total_requests').default(0).notNull(),
    lastUsedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('last_used_at'),
    // Settings
    enabledAnalyses: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])('enabled_analyses').$type().default([
        'title',
        'summary',
        'key_points',
        'categories',
        'tags'
    ]),
    analysisTimeout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('analysis_timeout').default(30000),
    cacheEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])('cache_enabled').default(true),
    cacheTTL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('cache_ttl').default(86400),
    // Metadata
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
}, (table)=>({
        userIdIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('user_ai_settings_user_id_idx').on(table.userId),
        providerIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('user_ai_settings_provider_idx').on(table.provider),
        lastUsedIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('user_ai_settings_last_used_idx').on(table.lastUsedAt)
    }));
const tokenUsageLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('token_usage_logs', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('id').primaryKey().defaultRandom(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('user_id').references(()=>users.id, {
        onDelete: 'cascade'
    }).notNull(),
    noteId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('note_id'),
    // Request details
    provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])('provider', {
        length: 50
    }).notNull(),
    model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])('model', {
        length: 100
    }).notNull(),
    analysisType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])('analysis_type', {
        length: 50
    }).notNull(),
    // Token usage
    inputTokens: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('input_tokens').default(0).notNull(),
    outputTokens: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('output_tokens').default(0).notNull(),
    totalTokens: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('total_tokens').default(0).notNull(),
    // Request metadata
    requestDuration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('request_duration'),
    success: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])('success').default(true).notNull(),
    errorMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('error_message'),
    // Cost tracking (for future billing)
    estimatedCost: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('estimated_cost'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull()
}, (table)=>({
        userIdIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('token_usage_logs_user_id_idx').on(table.userId),
        noteIdIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('token_usage_logs_note_id_idx').on(table.noteId),
        createdAtIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('token_usage_logs_created_at_idx').on(table.createdAt),
        providerIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])('token_usage_logs_provider_idx').on(table.provider)
    }));
}),
"[project]/packages/db/src/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$neondatabase$2f$serverless__$5b$external$5d$__$2840$neondatabase$2f$serverless$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@neondatabase/serverless [external] (@neondatabase/serverless, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/neon-http/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dotenv__$5b$external$5d$__$28$dotenv$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dotenv [external] (dotenv, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/schema.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$neondatabase$2f$serverless__$5b$external$5d$__$2840$neondatabase$2f$serverless$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$neondatabase$2f$serverless__$5b$external$5d$__$2840$neondatabase$2f$serverless$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
// Load environment variables from the root .env.local file
(0, __TURBOPACK__imported__module__$5b$externals$5d2f$dotenv__$5b$external$5d$__$28$dotenv$2c$__cjs$29$__["config"])({
    path: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["resolve"])(("TURBOPACK compile-time value", "/ROOT/packages/db/src"), '../../../.env.local')
});
const sql = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$neondatabase$2f$serverless__$5b$external$5d$__$2840$neondatabase$2f$serverless$2c$__esm_import$29$__["neon"])(process.env.DATABASE_URL);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(sql, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
});
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/bcryptjs [external] (bcryptjs, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("bcryptjs");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/apps/web/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "clearSessionCookie",
    ()=>clearSessionCookie,
    "createEmailVerificationToken",
    ()=>createEmailVerificationToken,
    "createSession",
    ()=>createSession,
    "createUser",
    ()=>createUser,
    "deleteSession",
    ()=>deleteSession,
    "getCurrentUser",
    ()=>getCurrentUser,
    "getSession",
    ()=>getSession,
    "getUserByEmail",
    ()=>getUserByEmail,
    "getUserByEmailWithPassword",
    ()=>getUserByEmailWithPassword,
    "getUserById",
    ()=>getUserById,
    "hashPassword",
    ()=>hashPassword,
    "requireAuth",
    ()=>requireAuth,
    "setSessionCookie",
    ()=>setSessionCookie,
    "verifyEmailToken",
    ()=>verifyEmailToken,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/bcryptjs [external] (bcryptjs, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$29$__["default"].hash(password, 12);
}
async function verifyPassword(password, hash) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$29$__["default"].compare(password, hash);
}
async function createSession(userId) {
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(32).toString('hex');
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
    const [session] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"]).values({
        userId,
        token,
        expiresAt
    }).returning();
    return session;
}
async function getSession(token) {
    const [session] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].token, token), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gt"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].expiresAt, new Date()))).limit(1);
    return session || null;
}
async function deleteSession(token) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].token, token));
}
async function createEmailVerificationToken(userId) {
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(32).toString('hex');
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emailVerificationTokens"]).values({
        userId,
        token,
        expiresAt
    });
    return token;
}
async function verifyEmailToken(token) {
    const [verificationToken] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emailVerificationTokens"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emailVerificationTokens"].token, token), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gt"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emailVerificationTokens"].expiresAt, new Date()))).limit(1);
    if (!verificationToken) {
        return null;
    }
    // Mark user as verified
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"]).set({
        emailVerified: true
    }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].id, verificationToken.userId));
    // Delete the verification token
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emailVerificationTokens"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emailVerificationTokens"].token, token));
    return verificationToken.userId;
}
async function getUserByEmail(email) {
    const [user] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].email, email)).limit(1);
    return user || null;
}
async function getUserByEmailWithPassword(email) {
    const [user] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].select({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].id,
        email: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].email,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].name,
        emailVerified: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].emailVerified,
        avatar: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].avatar,
        preferences: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].preferences,
        createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].createdAt,
        updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].updatedAt,
        passwordHash: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].passwordHash
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].email, email)).limit(1);
    return user || null;
}
async function getUserById(id) {
    const [user] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].id, id)).limit(1);
    return user || null;
}
async function createUser(email, name, password) {
    const passwordHash = await hashPassword(password);
    const [user] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"]).values({
        email,
        name,
        passwordHash
    }).returning();
    return user;
}
async function getCurrentUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionToken = cookieStore.get('session')?.value;
    if (!sessionToken) {
        return null;
    }
    const session = await getSession(sessionToken);
    if (!session) {
        return null;
    }
    return getUserById(session.userId);
}
async function requireAuth() {
    const user = await getCurrentUser();
    if (!user) {
        throw new Error('Authentication required');
    }
    return user;
}
async function setSessionCookie(token) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set('session', token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
    });
}
async function clearSessionCookie() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete('session');
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/ai-providers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Client-safe AI providers configuration
// This file contains no server-side dependencies and can be safely imported in client components
__turbopack_context__.s([
    "AI_PROVIDERS",
    ()=>AI_PROVIDERS
]);
const AI_PROVIDERS = {
    google: {
        name: 'Google Gemini',
        models: [
            {
                id: 'gemini-2.0-flash-lite',
                name: 'Gemini 2.0 Flash Lite',
                costPer1kTokens: 0.0375
            },
            {
                id: 'gemini-1.5-flash-latest',
                name: 'Gemini 1.5 Flash (Latest)',
                costPer1kTokens: 0.075
            },
            {
                id: 'gemini-1.5-pro-latest',
                name: 'Gemini 1.5 Pro (Latest)',
                costPer1kTokens: 1.25
            },
            {
                id: 'gemini-1.0-pro',
                name: 'Gemini 1.0 Pro',
                costPer1kTokens: 0.5
            }
        ],
        apiKeyUrl: 'https://makersuite.google.com/app/apikey',
        documentation: 'https://ai.google.dev/gemini-api/docs'
    },
    openai: {
        name: 'OpenAI',
        models: [
            {
                id: 'gpt-4o',
                name: 'GPT-4o',
                costPer1kTokens: 5.0
            },
            {
                id: 'gpt-4o-mini',
                name: 'GPT-4o Mini',
                costPer1kTokens: 0.15
            },
            {
                id: 'gpt-4-turbo',
                name: 'GPT-4 Turbo',
                costPer1kTokens: 10.0
            },
            {
                id: 'gpt-3.5-turbo',
                name: 'GPT-3.5 Turbo',
                costPer1kTokens: 0.5
            }
        ],
        apiKeyUrl: 'https://platform.openai.com/api-keys',
        documentation: 'https://platform.openai.com/docs'
    },
    anthropic: {
        name: 'Anthropic Claude',
        models: [
            {
                id: 'claude-3-5-sonnet-20241022',
                name: 'Claude 3.5 Sonnet',
                costPer1kTokens: 3.0
            },
            {
                id: 'claude-3-5-haiku-20241022',
                name: 'Claude 3.5 Haiku',
                costPer1kTokens: 0.8
            },
            {
                id: 'claude-3-opus-20240229',
                name: 'Claude 3 Opus',
                costPer1kTokens: 15.0
            }
        ],
        apiKeyUrl: 'https://console.anthropic.com/',
        documentation: 'https://docs.anthropic.com/'
    },
    'ai-gateway': {
        name: 'Vercel AI Gateway',
        models: [
            // Google models
            {
                id: 'google/gemini-2.0-flash-lite',
                name: 'Google Gemini 2.0 Flash Lite',
                costPer1kTokens: 0.0375
            },
            {
                id: 'google/gemini-1.5-flash-latest',
                name: 'Google Gemini 1.5 Flash',
                costPer1kTokens: 0.075
            },
            {
                id: 'google/gemini-1.5-pro-latest',
                name: 'Google Gemini 1.5 Pro',
                costPer1kTokens: 1.25
            },
            {
                id: 'google/gemini-1.0-pro',
                name: 'Google Gemini 1.0 Pro',
                costPer1kTokens: 0.5
            },
            // OpenAI models
            {
                id: 'openai/gpt-4o',
                name: 'OpenAI GPT-4o',
                costPer1kTokens: 5.0
            },
            {
                id: 'openai/gpt-4o-mini',
                name: 'OpenAI GPT-4o Mini',
                costPer1kTokens: 0.15
            },
            {
                id: 'openai/gpt-4-turbo',
                name: 'OpenAI GPT-4 Turbo',
                costPer1kTokens: 10.0
            },
            {
                id: 'openai/gpt-4',
                name: 'OpenAI GPT-4',
                costPer1kTokens: 30.0
            },
            {
                id: 'openai/gpt-3.5-turbo',
                name: 'OpenAI GPT-3.5 Turbo',
                costPer1kTokens: 0.5
            },
            {
                id: 'openai/o1-preview',
                name: 'OpenAI o1 Preview',
                costPer1kTokens: 15.0
            },
            {
                id: 'openai/o1-mini',
                name: 'OpenAI o1 Mini',
                costPer1kTokens: 3.0
            },
            // Anthropic models
            {
                id: 'anthropic/claude-3-5-sonnet-20241022',
                name: 'Anthropic Claude 3.5 Sonnet',
                costPer1kTokens: 3.0
            },
            {
                id: 'anthropic/claude-sonnet-4',
                name: 'Anthropic Claude Sonnet 4',
                costPer1kTokens: 3.0
            },
            {
                id: 'anthropic/claude-3-5-haiku-20241022',
                name: 'Anthropic Claude 3.5 Haiku',
                costPer1kTokens: 0.8
            },
            {
                id: 'anthropic/claude-3-opus-20240229',
                name: 'Anthropic Claude 3 Opus',
                costPer1kTokens: 15.0
            },
            // xAI models
            {
                id: 'xai/grok-beta',
                name: 'xAI Grok Beta',
                costPer1kTokens: 0.5
            },
            {
                id: 'xai/grok-4',
                name: 'xAI Grok 4',
                costPer1kTokens: 0.5
            },
            // Cohere models
            {
                id: 'cohere/command',
                name: 'Cohere Command',
                costPer1kTokens: 1.0
            },
            {
                id: 'cohere/command-light',
                name: 'Cohere Command Light',
                costPer1kTokens: 0.5
            },
            // Mistral models
            {
                id: 'mistral/mistral-large',
                name: 'Mistral Large',
                costPer1kTokens: 2.0
            },
            {
                id: 'mistral/mistral-medium',
                name: 'Mistral Medium',
                costPer1kTokens: 1.0
            },
            {
                id: 'mistral/mistral-small',
                name: 'Mistral Small',
                costPer1kTokens: 0.5
            },
            // Perplexity models
            {
                id: 'perplexity/llama-3.1-sonar-large-128k-online',
                name: 'Perplexity Llama 3.1 Sonar Large',
                costPer1kTokens: 1.0
            },
            {
                id: 'perplexity/llama-3.1-sonar-small-128k-online',
                name: 'Perplexity Llama 3.1 Sonar Small',
                costPer1kTokens: 0.5
            },
            // DeepSeek models
            {
                id: 'deepseek/deepseek-chat',
                name: 'DeepSeek Chat',
                costPer1kTokens: 0.14
            },
            {
                id: 'deepseek/deepseek-coder',
                name: 'DeepSeek Coder',
                costPer1kTokens: 0.14
            }
        ],
        apiKeyUrl: 'https://vercel.com/ai-gateway',
        documentation: 'https://vercel.com/docs/ai-gateway',
        isGateway: true
    }
};
}),
"[project]/apps/web/src/lib/ai-config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "estimateCost",
    ()=>estimateCost,
    "getUserAISettings",
    ()=>getUserAISettings,
    "getUserTokenUsage",
    ()=>getUserTokenUsage,
    "logTokenUsage",
    ()=>logTokenUsage,
    "upsertUserAISettings",
    ()=>upsertUserAISettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/ai-providers.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
// Encryption key for API keys (in production, use a proper key management system)
const ENCRYPTION_KEY = process.env.API_KEY_ENCRYPTION_KEY || 'default-encryption-key-change-in-production';
const ALGORITHM = 'aes-256-gcm';
// Derive key from password for AES-256-GCM
function getKey() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].scryptSync(ENCRYPTION_KEY, 'salt', 32);
}
/**
 * Encrypt API key for storage
 */ function encryptApiKey(apiKey) {
    const iv = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(16);
    const key = getKey();
    const cipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(apiKey, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag();
    return iv.toString('hex') + ':' + encrypted + ':' + authTag.toString('hex');
}
/**
 * Decrypt API key for use (supports both old and new formats)
 */ function decryptApiKey(encryptedApiKey) {
    const parts = encryptedApiKey.split(':');
    // Handle new format (3 parts: iv:encrypted:authTag)
    if (parts.length === 3) {
        const iv = Buffer.from(parts[0], 'hex');
        const encrypted = parts[1];
        const authTag = Buffer.from(parts[2], 'hex');
        const key = getKey();
        const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipheriv(ALGORITHM, key, iv);
        decipher.setAuthTag(authTag);
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    // Handle old format (2 parts: iv:encrypted) for backward compatibility
    if (parts.length === 2) {
        const iv = Buffer.from(parts[0], 'hex');
        const encrypted = parts[1];
        const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipher(ALGORITHM, Buffer.from(ENCRYPTION_KEY));
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    throw new Error('Invalid encrypted API key format');
}
async function getUserAISettings(userId) {
    try {
        const [settings] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userAISettings"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userAISettings"].userId, userId)).limit(1);
        if (settings && settings.apiKey) {
            // Decrypt the API key
            settings.apiKey = decryptApiKey(settings.apiKey);
        }
        return settings || null;
    } catch (error) {
        console.error('Error getting user AI settings:', error);
        return null;
    }
}
async function upsertUserAISettings(userId, settings) {
    try {
        const existingSettings = await getUserAISettings(userId);
        const settingsData = {
            userId,
            provider: settings.provider || 'google',
            apiKey: settings.apiKey ? encryptApiKey(settings.apiKey) : existingSettings?.apiKey,
            model: settings.model || 'gemini-1.5-flash-latest',
            enabledAnalyses: settings.enabledAnalyses || [
                'title',
                'summary',
                'key_points',
                'categories',
                'tags'
            ],
            analysisTimeout: settings.analysisTimeout || 30000,
            cacheEnabled: settings.cacheEnabled !== undefined ? settings.cacheEnabled : true,
            cacheTTL: settings.cacheTTL || 86400,
            updatedAt: new Date()
        };
        if (existingSettings) {
            const [updated] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userAISettings"]).set(settingsData).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userAISettings"].userId, userId)).returning();
            if (updated && updated.apiKey) {
                updated.apiKey = decryptApiKey(updated.apiKey);
            }
            return updated;
        } else {
            const [created] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userAISettings"]).values(settingsData).returning();
            if (created && created.apiKey) {
                created.apiKey = decryptApiKey(created.apiKey);
            }
            return created;
        }
    } catch (error) {
        console.error('Error upserting user AI settings:', error);
        return null;
    }
}
async function logTokenUsage(userId, usage) {
    try {
        const logData = {
            userId,
            noteId: usage.noteId,
            provider: usage.provider,
            model: usage.model,
            analysisType: usage.analysisType,
            inputTokens: usage.inputTokens,
            outputTokens: usage.outputTokens,
            totalTokens: usage.totalTokens,
            requestDuration: usage.requestDuration,
            success: usage.success,
            errorMessage: usage.errorMessage,
            estimatedCost: usage.estimatedCost
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tokenUsageLogs"]).values(logData);
        // Update user's total usage
        if (usage.success) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userAISettings"]).set({
                totalTokensUsed: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sql`${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userAISettings"].totalTokensUsed} + ${usage.totalTokens}`,
                totalRequests: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sql`${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userAISettings"].totalRequests} + 1`,
                lastUsedAt: new Date()
            }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userAISettings"].userId, userId));
        }
    } catch (error) {
        console.error('Error logging token usage:', error);
    }
}
async function getUserTokenUsage(userId, days = 30) {
    try {
        const since = new Date();
        since.setDate(since.getDate() - days);
        const usage = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tokenUsageLogs"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tokenUsageLogs"].userId, userId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gte"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tokenUsageLogs"].createdAt, since)));
        const stats = {
            totalRequests: usage.length,
            totalTokens: usage.reduce((sum, log)=>sum + log.totalTokens, 0),
            totalInputTokens: usage.reduce((sum, log)=>sum + log.inputTokens, 0),
            totalOutputTokens: usage.reduce((sum, log)=>sum + log.outputTokens, 0),
            successfulRequests: usage.filter((log)=>log.success).length,
            failedRequests: usage.filter((log)=>!log.success).length,
            averageRequestDuration: usage.length > 0 ? usage.reduce((sum, log)=>sum + (log.requestDuration || 0), 0) / usage.length : 0,
            estimatedTotalCost: usage.reduce((sum, log)=>sum + (log.estimatedCost || 0), 0) / 100,
            byProvider: {},
            byModel: {},
            byAnalysisType: {}
        };
        // Group by provider
        usage.forEach((log)=>{
            if (!stats.byProvider[log.provider]) {
                stats.byProvider[log.provider] = {
                    requests: 0,
                    tokens: 0,
                    cost: 0
                };
            }
            stats.byProvider[log.provider].requests++;
            stats.byProvider[log.provider].tokens += log.totalTokens;
            stats.byProvider[log.provider].cost += (log.estimatedCost || 0) / 100; // Convert from cents to dollars
        });
        // Group by model
        usage.forEach((log)=>{
            if (!stats.byModel[log.model]) {
                stats.byModel[log.model] = {
                    requests: 0,
                    tokens: 0,
                    cost: 0
                };
            }
            stats.byModel[log.model].requests++;
            stats.byModel[log.model].tokens += log.totalTokens;
            stats.byModel[log.model].cost += (log.estimatedCost || 0) / 100; // Convert from cents to dollars
        });
        // Group by analysis type
        usage.forEach((log)=>{
            if (!stats.byAnalysisType[log.analysisType]) {
                stats.byAnalysisType[log.analysisType] = {
                    requests: 0,
                    tokens: 0,
                    cost: 0
                };
            }
            stats.byAnalysisType[log.analysisType].requests++;
            stats.byAnalysisType[log.analysisType].tokens += log.totalTokens;
            stats.byAnalysisType[log.analysisType].cost += (log.estimatedCost || 0) / 100; // Convert from cents to dollars
        });
        return stats;
    } catch (error) {
        console.error('Error getting user token usage:', error);
        return null;
    }
}
function estimateCost(provider, model, tokens) {
    const providerInfo = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AI_PROVIDERS"][provider];
    if (!providerInfo) return 0;
    const modelInfo = providerInfo.models.find((m)=>m.id === model);
    if (!modelInfo) return 0;
    // Return cost in cents for storage
    return Math.round(tokens / 1000 * modelInfo.costPer1kTokens * 100);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/@ai-sdk/google [external] (@ai-sdk/google, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@ai-sdk/google");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@ai-sdk/anthropic [external] (@ai-sdk/anthropic, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@ai-sdk/anthropic");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/web/src/lib/dynamic-models.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "fetchAIGatewayModels",
    ()=>fetchAIGatewayModels,
    "fetchAnthropicModels",
    ()=>fetchAnthropicModels,
    "fetchGoogleModels",
    ()=>fetchGoogleModels,
    "fetchOpenAIModels",
    ()=>fetchOpenAIModels,
    "fetchProviderModels",
    ()=>fetchProviderModels,
    "getAllProviderModels",
    ()=>getAllProviderModels
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@ai-sdk/google [external] (@ai-sdk/google, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$anthropic__$5b$external$5d$__$2840$ai$2d$sdk$2f$anthropic$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@ai-sdk/anthropic [external] (@ai-sdk/anthropic, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$anthropic__$5b$external$5d$__$2840$ai$2d$sdk$2f$anthropic$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$anthropic__$5b$external$5d$__$2840$ai$2d$sdk$2f$anthropic$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function fetchGoogleModels(apiKey) {
    try {
        // Google doesn't have a direct models endpoint, so we'll use a predefined list
        // that gets updated based on Google's announcements
        const models = [
            {
                id: 'gemini-2.0-flash-lite',
                name: 'Gemini 2.0 Flash Lite',
                provider: 'google',
                costPer1kTokens: 0.0375,
                description: 'Latest lightweight model with improved performance',
                contextLength: 1000000,
                inputCost: 0.0375,
                outputCost: 0.0375
            },
            {
                id: 'gemini-1.5-flash-latest',
                name: 'Gemini 1.5 Flash (Latest)',
                provider: 'google',
                costPer1kTokens: 0.075,
                description: 'Fast and efficient model for most tasks',
                contextLength: 1000000,
                inputCost: 0.075,
                outputCost: 0.075
            },
            {
                id: 'gemini-1.5-pro-latest',
                name: 'Gemini 1.5 Pro (Latest)',
                provider: 'google',
                costPer1kTokens: 1.25,
                description: 'Most capable model for complex tasks',
                contextLength: 2000000,
                inputCost: 1.25,
                outputCost: 1.25
            },
            {
                id: 'gemini-1.0-pro',
                name: 'Gemini 1.0 Pro',
                provider: 'google',
                costPer1kTokens: 0.5,
                description: 'Stable production model',
                contextLength: 30720,
                inputCost: 0.5,
                outputCost: 0.5
            }
        ];
        // Test the API key by making a simple request
        try {
            const testModel = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__["google"])('gemini-1.5-flash-latest', {
                apiKey
            });
            // We could test with a minimal request here, but for now we'll just return the models
            return models;
        } catch (error) {
            console.warn('Google API key test failed:', error);
            return models; // Return models anyway, let the user test them
        }
    } catch (error) {
        console.error('Error fetching Google models:', error);
        return [];
    }
}
async function fetchOpenAIModels(apiKey) {
    try {
        const response = await fetch('https://api.openai.com/v1/models', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status}`);
        }
        const data = await response.json();
        // Filter for chat completion models and map to our format
        const chatModels = data.data.filter((model)=>model.id.includes('gpt') || model.id.includes('o1')).map((model)=>{
            // Map model IDs to our known cost structure
            const costMap = {
                'gpt-4o': 5.0,
                'gpt-4o-mini': 0.15,
                'gpt-4-turbo': 10.0,
                'gpt-4': 30.0,
                'gpt-3.5-turbo': 0.5,
                'o1-preview': 15.0,
                'o1-mini': 3.0
            };
            return {
                id: model.id,
                name: model.id.replace(/-/g, ' ').replace(/\b\w/g, (l)=>l.toUpperCase()),
                provider: 'openai',
                costPer1kTokens: costMap[model.id] || 1.0,
                description: model.owned_by || 'OpenAI model',
                contextLength: model.context_length || 128000
            };
        });
        return chatModels;
    } catch (error) {
        console.error('Error fetching OpenAI models:', error);
        return [];
    }
}
async function fetchAnthropicModels(apiKey) {
    try {
        // Anthropic doesn't have a public models endpoint, so we'll use a predefined list
        const models = [
            {
                id: 'claude-3-5-sonnet-20241022',
                name: 'Claude 3.5 Sonnet',
                provider: 'anthropic',
                costPer1kTokens: 3.0,
                description: 'Most capable model for complex reasoning',
                contextLength: 200000,
                inputCost: 3.0,
                outputCost: 15.0
            },
            {
                id: 'claude-3-5-haiku-20241022',
                name: 'Claude 3.5 Haiku',
                provider: 'anthropic',
                costPer1kTokens: 0.8,
                description: 'Fast and efficient for simple tasks',
                contextLength: 200000,
                inputCost: 0.8,
                outputCost: 4.0
            },
            {
                id: 'claude-3-opus-20240229',
                name: 'Claude 3 Opus',
                provider: 'anthropic',
                costPer1kTokens: 15.0,
                description: 'Most powerful model for complex tasks',
                contextLength: 200000,
                inputCost: 15.0,
                outputCost: 75.0
            }
        ];
        // Test the API key by making a simple request
        try {
            const testModel = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$anthropic__$5b$external$5d$__$2840$ai$2d$sdk$2f$anthropic$2c$__esm_import$29$__["anthropic"])('claude-3-5-haiku-20241022', {
                apiKey
            });
            return models;
        } catch (error) {
            console.warn('Anthropic API key test failed:', error);
            return models; // Return models anyway, let the user test them
        }
    } catch (error) {
        console.error('Error fetching Anthropic models:', error);
        return [];
    }
}
async function fetchAIGatewayModels(apiKey) {
    try {
        // Comprehensive list of all Vercel AI Gateway supported models
        const models = [
            // Google models through AI Gateway
            {
                id: 'google/gemini-2.0-flash-lite',
                name: 'Google Gemini 2.0 Flash Lite',
                provider: 'ai-gateway',
                costPer1kTokens: 0.0375,
                description: 'Latest lightweight model with improved performance',
                contextLength: 1000000,
                inputCost: 0.0375,
                outputCost: 0.0375
            },
            {
                id: 'google/gemini-1.5-flash-latest',
                name: 'Google Gemini 1.5 Flash',
                provider: 'ai-gateway',
                costPer1kTokens: 0.075,
                description: 'Fast and efficient for most tasks',
                contextLength: 1000000,
                inputCost: 0.075,
                outputCost: 0.075
            },
            {
                id: 'google/gemini-1.5-pro-latest',
                name: 'Google Gemini 1.5 Pro',
                provider: 'ai-gateway',
                costPer1kTokens: 1.25,
                description: 'Most capable model for complex tasks',
                contextLength: 2000000,
                inputCost: 1.25,
                outputCost: 1.25
            },
            {
                id: 'google/gemini-1.0-pro',
                name: 'Google Gemini 1.0 Pro',
                provider: 'ai-gateway',
                costPer1kTokens: 0.5,
                description: 'Stable production model',
                contextLength: 30720,
                inputCost: 0.5,
                outputCost: 0.5
            },
            // OpenAI models through AI Gateway
            {
                id: 'openai/gpt-4o',
                name: 'OpenAI GPT-4o',
                provider: 'ai-gateway',
                costPer1kTokens: 5.0,
                description: 'Most capable multimodal model',
                contextLength: 128000,
                inputCost: 5.0,
                outputCost: 15.0
            },
            {
                id: 'openai/gpt-4o-mini',
                name: 'OpenAI GPT-4o Mini',
                provider: 'ai-gateway',
                costPer1kTokens: 0.15,
                description: 'Cost-effective and fast',
                contextLength: 128000,
                inputCost: 0.15,
                outputCost: 0.6
            },
            {
                id: 'openai/gpt-4-turbo',
                name: 'OpenAI GPT-4 Turbo',
                provider: 'ai-gateway',
                costPer1kTokens: 10.0,
                description: 'High-performance model for complex tasks',
                contextLength: 128000,
                inputCost: 10.0,
                outputCost: 30.0
            },
            {
                id: 'openai/gpt-4',
                name: 'OpenAI GPT-4',
                provider: 'ai-gateway',
                costPer1kTokens: 30.0,
                description: 'Original GPT-4 model',
                contextLength: 8192,
                inputCost: 30.0,
                outputCost: 60.0
            },
            {
                id: 'openai/gpt-3.5-turbo',
                name: 'OpenAI GPT-3.5 Turbo',
                provider: 'ai-gateway',
                costPer1kTokens: 0.5,
                description: 'Fast and reliable for most tasks',
                contextLength: 16384,
                inputCost: 0.5,
                outputCost: 1.5
            },
            {
                id: 'openai/o1-preview',
                name: 'OpenAI o1 Preview',
                provider: 'ai-gateway',
                costPer1kTokens: 15.0,
                description: 'Reasoning model for complex problem solving',
                contextLength: 128000,
                inputCost: 15.0,
                outputCost: 60.0
            },
            {
                id: 'openai/o1-mini',
                name: 'OpenAI o1 Mini',
                provider: 'ai-gateway',
                costPer1kTokens: 3.0,
                description: 'Smaller reasoning model',
                contextLength: 128000,
                inputCost: 3.0,
                outputCost: 12.0
            },
            // Anthropic models through AI Gateway
            {
                id: 'anthropic/claude-3-5-sonnet-20241022',
                name: 'Anthropic Claude 3.5 Sonnet',
                provider: 'ai-gateway',
                costPer1kTokens: 3.0,
                description: 'Most capable model for complex reasoning',
                contextLength: 200000,
                inputCost: 3.0,
                outputCost: 15.0
            },
            {
                id: 'anthropic/claude-sonnet-4',
                name: 'Anthropic Claude Sonnet 4',
                provider: 'ai-gateway',
                costPer1kTokens: 3.0,
                description: 'Latest Claude model with enhanced capabilities',
                contextLength: 200000,
                inputCost: 3.0,
                outputCost: 15.0
            },
            {
                id: 'anthropic/claude-3-5-haiku-20241022',
                name: 'Anthropic Claude 3.5 Haiku',
                provider: 'ai-gateway',
                costPer1kTokens: 0.8,
                description: 'Fast and efficient for simple tasks',
                contextLength: 200000,
                inputCost: 0.8,
                outputCost: 4.0
            },
            {
                id: 'anthropic/claude-3-opus-20240229',
                name: 'Anthropic Claude 3 Opus',
                provider: 'ai-gateway',
                costPer1kTokens: 15.0,
                description: 'Most powerful model for complex tasks',
                contextLength: 200000,
                inputCost: 15.0,
                outputCost: 75.0
            },
            // xAI models through AI Gateway
            {
                id: 'xai/grok-beta',
                name: 'xAI Grok Beta',
                provider: 'ai-gateway',
                costPer1kTokens: 0.5,
                description: 'xAI Grok model with real-time knowledge',
                contextLength: 128000,
                inputCost: 0.5,
                outputCost: 0.5
            },
            {
                id: 'xai/grok-4',
                name: 'xAI Grok 4',
                provider: 'ai-gateway',
                costPer1kTokens: 0.5,
                description: 'Latest xAI Grok model',
                contextLength: 128000,
                inputCost: 0.5,
                outputCost: 0.5
            },
            // Cohere models through AI Gateway
            {
                id: 'cohere/command',
                name: 'Cohere Command',
                provider: 'ai-gateway',
                costPer1kTokens: 1.0,
                description: 'Cohere Command model for text generation',
                contextLength: 128000,
                inputCost: 1.0,
                outputCost: 1.0
            },
            {
                id: 'cohere/command-light',
                name: 'Cohere Command Light',
                provider: 'ai-gateway',
                costPer1kTokens: 0.5,
                description: 'Lighter version of Cohere Command',
                contextLength: 128000,
                inputCost: 0.5,
                outputCost: 0.5
            },
            // Mistral models through AI Gateway
            {
                id: 'mistral/mistral-large',
                name: 'Mistral Large',
                provider: 'ai-gateway',
                costPer1kTokens: 2.0,
                description: 'Mistral Large model for complex tasks',
                contextLength: 128000,
                inputCost: 2.0,
                outputCost: 6.0
            },
            {
                id: 'mistral/mistral-medium',
                name: 'Mistral Medium',
                provider: 'ai-gateway',
                costPer1kTokens: 1.0,
                description: 'Balanced Mistral model',
                contextLength: 128000,
                inputCost: 1.0,
                outputCost: 3.0
            },
            {
                id: 'mistral/mistral-small',
                name: 'Mistral Small',
                provider: 'ai-gateway',
                costPer1kTokens: 0.5,
                description: 'Fast and efficient Mistral model',
                contextLength: 128000,
                inputCost: 0.5,
                outputCost: 1.5
            },
            // Perplexity models through AI Gateway
            {
                id: 'perplexity/llama-3.1-sonar-large-128k-online',
                name: 'Perplexity Llama 3.1 Sonar Large',
                provider: 'ai-gateway',
                costPer1kTokens: 1.0,
                description: 'Perplexity model with web search capabilities',
                contextLength: 128000,
                inputCost: 1.0,
                outputCost: 1.0
            },
            {
                id: 'perplexity/llama-3.1-sonar-small-128k-online',
                name: 'Perplexity Llama 3.1 Sonar Small',
                provider: 'ai-gateway',
                costPer1kTokens: 0.5,
                description: 'Smaller Perplexity model with web search',
                contextLength: 128000,
                inputCost: 0.5,
                outputCost: 0.5
            },
            // DeepSeek models through AI Gateway
            {
                id: 'deepseek/deepseek-chat',
                name: 'DeepSeek Chat',
                provider: 'ai-gateway',
                costPer1kTokens: 0.14,
                description: 'DeepSeek Chat model for conversations',
                contextLength: 128000,
                inputCost: 0.14,
                outputCost: 0.28
            },
            {
                id: 'deepseek/deepseek-coder',
                name: 'DeepSeek Coder',
                provider: 'ai-gateway',
                costPer1kTokens: 0.14,
                description: 'DeepSeek model optimized for coding',
                contextLength: 128000,
                inputCost: 0.14,
                outputCost: 0.28
            }
        ];
        // Try to fetch models from AI Gateway API
        try {
            const response = await fetch('https://ai-gateway.vercel.sh/v1/models', {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log('AI Gateway models response:', data);
                // If the API returns models, we could potentially merge them
                // For now, we'll return our comprehensive predefined list
                return models;
            } else {
                console.warn('AI Gateway models endpoint returned:', response.status);
            }
        } catch (error) {
            console.warn('AI Gateway API key test failed:', error);
        }
        return models; // Return comprehensive list anyway
    } catch (error) {
        console.error('Error fetching AI Gateway models:', error);
        return [];
    }
}
async function fetchProviderModels(provider, apiKey) {
    switch(provider){
        case 'google':
            return fetchGoogleModels(apiKey);
        case 'openai':
            return fetchOpenAIModels(apiKey);
        case 'anthropic':
            return fetchAnthropicModels(apiKey);
        case 'ai-gateway':
            return fetchAIGatewayModels(apiKey);
        default:
            return [];
    }
}
async function getAllProviderModels(apiKeys) {
    const providers = {};
    // Fetch models for each provider that has an API key
    for (const [provider, apiKey] of Object.entries(apiKeys)){
        if (apiKey) {
            try {
                const models = await fetchProviderModels(provider, apiKey);
                providers[provider] = {
                    name: provider === 'ai-gateway' ? 'Vercel AI Gateway' : provider === 'google' ? 'Google Gemini' : provider === 'openai' ? 'OpenAI' : provider === 'anthropic' ? 'Anthropic Claude' : provider,
                    models,
                    apiKeyUrl: provider === 'google' ? 'https://makersuite.google.com/app/apikey' : provider === 'openai' ? 'https://platform.openai.com/api-keys' : provider === 'anthropic' ? 'https://console.anthropic.com/' : provider === 'ai-gateway' ? 'https://vercel.com/ai-gateway' : '',
                    documentation: provider === 'google' ? 'https://ai.google.dev/gemini-api/docs' : provider === 'openai' ? 'https://platform.openai.com/docs' : provider === 'anthropic' ? 'https://docs.anthropic.com/' : provider === 'ai-gateway' ? 'https://vercel.com/docs/ai-gateway' : ''
                };
            } catch (error) {
                console.error(`Error fetching models for ${provider}:`, error);
            }
        }
    }
    return providers;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/app/api/ai-settings/models/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/ai-config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$dynamic$2d$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/dynamic-models.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$dynamic$2d$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$dynamic$2d$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function POST(request) {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication required'
            }, {
                status: 401
            });
        }
        const body = await request.json();
        const { provider, apiKey } = body;
        if (!provider) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Provider is required'
            }, {
                status: 400
            });
        }
        // If no API key provided, try to get it from user settings
        let finalApiKey = apiKey;
        if (!finalApiKey) {
            const userSettings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserAISettings"])(user.id);
            if (userSettings && userSettings.provider === provider) {
                finalApiKey = userSettings.apiKey;
            }
        }
        if (!finalApiKey) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'API key is required'
            }, {
                status: 400
            });
        }
        // Fetch models for the provider
        const models = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$dynamic$2d$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchProviderModels"])(provider, finalApiKey);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            provider,
            models
        });
    } catch (error) {
        console.error('Error fetching models:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch models'
        }, {
            status: 500
        });
    }
}
async function GET(request) {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication required'
            }, {
                status: 401
            });
        }
        const { searchParams } = new URL(request.url);
        const provider = searchParams.get('provider');
        if (provider) {
            // Get models for specific provider
            const userSettings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserAISettings"])(user.id);
            if (!userSettings || userSettings.provider !== provider) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'No settings found for this provider'
                }, {
                    status: 404
                });
            }
            const models = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$dynamic$2d$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchProviderModels"])(provider, userSettings.apiKey);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                provider,
                models
            });
        } else {
            // Return static model information (no API keys required)
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                providers: {
                    google: {
                        name: 'Google Gemini',
                        models: [
                            {
                                id: 'gemini-2.0-flash-lite',
                                name: 'Gemini 2.0 Flash Lite',
                                costPer1kTokens: 0.0375
                            },
                            {
                                id: 'gemini-1.5-flash-latest',
                                name: 'Gemini 1.5 Flash (Latest)',
                                costPer1kTokens: 0.075
                            },
                            {
                                id: 'gemini-1.5-pro-latest',
                                name: 'Gemini 1.5 Pro (Latest)',
                                costPer1kTokens: 1.25
                            },
                            {
                                id: 'gemini-1.0-pro',
                                name: 'Gemini 1.0 Pro',
                                costPer1kTokens: 0.5
                            }
                        ]
                    },
                    openai: {
                        name: 'OpenAI',
                        models: [
                            {
                                id: 'gpt-4o',
                                name: 'GPT-4o',
                                costPer1kTokens: 5.0
                            },
                            {
                                id: 'gpt-4o-mini',
                                name: 'GPT-4o Mini',
                                costPer1kTokens: 0.15
                            },
                            {
                                id: 'gpt-4-turbo',
                                name: 'GPT-4 Turbo',
                                costPer1kTokens: 10.0
                            },
                            {
                                id: 'gpt-3.5-turbo',
                                name: 'GPT-3.5 Turbo',
                                costPer1kTokens: 0.5
                            }
                        ]
                    },
                    anthropic: {
                        name: 'Anthropic Claude',
                        models: [
                            {
                                id: 'claude-3-5-sonnet-20241022',
                                name: 'Claude 3.5 Sonnet',
                                costPer1kTokens: 3.0
                            },
                            {
                                id: 'claude-3-5-haiku-20241022',
                                name: 'Claude 3.5 Haiku',
                                costPer1kTokens: 0.8
                            },
                            {
                                id: 'claude-3-opus-20240229',
                                name: 'Claude 3 Opus',
                                costPer1kTokens: 15.0
                            }
                        ]
                    },
                    'ai-gateway': {
                        name: 'Vercel AI Gateway',
                        models: [
                            {
                                id: 'google/gemini-2.0-flash-lite',
                                name: 'Google Gemini 2.0 Flash Lite',
                                costPer1kTokens: 0.0375
                            },
                            {
                                id: 'google/gemini-1.5-flash-latest',
                                name: 'Google Gemini 1.5 Flash',
                                costPer1kTokens: 0.075
                            },
                            {
                                id: 'openai/gpt-4o',
                                name: 'OpenAI GPT-4o',
                                costPer1kTokens: 5.0
                            },
                            {
                                id: 'openai/gpt-4o-mini',
                                name: 'OpenAI GPT-4o Mini',
                                costPer1kTokens: 0.15
                            },
                            {
                                id: 'anthropic/claude-3-5-sonnet-20241022',
                                name: 'Anthropic Claude 3.5 Sonnet',
                                costPer1kTokens: 3.0
                            },
                            {
                                id: 'anthropic/claude-sonnet-4',
                                name: 'Anthropic Claude Sonnet 4',
                                costPer1kTokens: 3.0
                            },
                            {
                                id: 'xai/grok-beta',
                                name: 'xAI Grok Beta',
                                costPer1kTokens: 0.5
                            },
                            {
                                id: 'xai/grok-4',
                                name: 'xAI Grok 4',
                                costPer1kTokens: 0.5
                            },
                            {
                                id: 'cohere/command',
                                name: 'Cohere Command',
                                costPer1kTokens: 1.0
                            }
                        ]
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error fetching models:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch models'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__014617bd._.js.map