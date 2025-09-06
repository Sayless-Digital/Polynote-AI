module.exports = [
"[project]/apps/web/.next-internal/server/app/api/notes/analyze/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[externals]/@ai-sdk/google [external] (@ai-sdk/google, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@ai-sdk/google");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/ai [external] (ai, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("ai");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/web/src/lib/ai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "analyzeNote",
    ()=>analyzeNote,
    "geminiFlash",
    ()=>geminiFlash,
    "generateNoteResponse",
    ()=>generateNoteResponse,
    "generateSearchQuery",
    ()=>generateSearchQuery,
    "testAIConnection",
    ()=>testAIConnection,
    "transcribeAudio",
    ()=>transcribeAudio
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@ai-sdk/google [external] (@ai-sdk/google, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/ai [external] (ai, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const geminiFlash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__["google"])('models/gemini-1.5-flash-latest', {
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY
});
// Schema for note analysis
const NoteAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    categories: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    sentiment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    keyPoints: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
});
// Schema for search queries
const SearchQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    intent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    keywords: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    filters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        categories: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        dateRange: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })
});
async function analyzeNote(transcript) {
    const prompt = `You are an AI assistant that analyzes notes and extracts structured information.

Note content: "${transcript}"

Please analyze this content and provide:
1. A concise, descriptive title (not just the first few words)
2. A brief summary that captures the main ideas
3. 3-5 relevant tags/keywords
4. Appropriate categories
5. The overall sentiment
6. Key points mentioned

Make sure to actually analyze and summarize the content, not just repeat it.`;
    try {
        console.log('Calling AI analysis with prompt:', prompt.substring(0, 200) + '...');
        const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__["generateObject"])({
            model: geminiFlash,
            schema: NoteAnalysisSchema,
            prompt
        });
        console.log('AI analysis successful:', result.object);
        return result.object;
    } catch (error) {
        console.error('AI analysis failed, using fallback:', error);
        // Check if it's a quota exceeded error
        const isQuotaExceeded = error instanceof Error && (error.message.includes('quota') || error.message.includes('RESOURCE_EXHAUSTED') || error.message.includes('429'));
        if (isQuotaExceeded) {
            console.warn('AI API quota exceeded, using enhanced fallback analysis');
        }
        // Enhanced fallback analysis
        const words = transcript.split(' ').filter((word)=>word.length > 0);
        const firstSentence = transcript.split(/[.!?]/)[0] || transcript;
        return {
            title: words.slice(0, 6).join(' ') + (words.length > 6 ? '...' : ''),
            summary: firstSentence.length > 150 ? firstSentence.substring(0, 150) + '...' : firstSentence,
            tags: [
                'note',
                'analysis'
            ],
            categories: [
                'general'
            ],
            sentiment: 'neutral',
            keyPoints: words.length > 10 ? [
                words.slice(0, 10).join(' '),
                words.slice(10, 20).join(' ')
            ].filter(Boolean) : [
                transcript
            ]
        };
    }
}
async function generateSearchQuery(query) {
    const prompt = `
Analyze this search query and provide structured search parameters:

Query: "${query}"

Please identify:
- The user's intent
- Key search keywords
- Any category or tag filters mentioned
- Date range preferences if any

Make the search parameters specific and helpful.
`;
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__["generateObject"])({
            model: geminiFlash,
            schema: SearchQuerySchema,
            prompt
        });
        return result.object;
    } catch (error) {
        console.error('Error generating search query:', error);
        return {
            intent: 'general_search',
            keywords: query.split(' '),
            filters: {}
        };
    }
}
async function generateNoteResponse(question, context) {
    const prompt = `
Based on the following note content, answer the user's question:

Note Content: "${context}"

User Question: "${question}"

Provide a helpful, concise answer based on the note content.
`;
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__["generateText"])({
            model: geminiFlash,
            prompt
        });
        return result.text;
    } catch (error) {
        console.error('Error generating response:', error);
        return 'I apologize, but I encountered an error processing your question.';
    }
}
async function testAIConnection() {
    try {
        console.log('Testing AI connection with model:', geminiFlash);
        console.log('API Key present:', !!process.env.GOOGLE_GENERATIVE_AI_API_KEY);
        console.log('API Key length:', process.env.GOOGLE_GENERATIVE_AI_API_KEY?.length);
        const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__["generateText"])({
            model: geminiFlash,
            prompt: 'Say "Hello" if you can read this message.'
        });
        console.log('AI test result:', result.text);
        return result.text.includes('Hello') || result.text.length > 0;
    } catch (error) {
        console.error('AI connection test failed:', error);
        console.error('Error details:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });
        return false;
    }
}
async function transcribeAudio() {
    // This is a placeholder - in a real implementation, you'd use:
    // - Web Speech API for browser-based transcription
    // - Google Speech-to-Text API
    // - OpenAI Whisper API
    // For now, return a mock transcript
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("This is a mock transcript from the audio. In a real implementation, this would be the actual transcribed text from the user's voice recording.");
        }, 1000);
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/analysis/types.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalysisType",
    ()=>AnalysisType,
    "CategoriesAnalysisSchema",
    ()=>CategoriesAnalysisSchema,
    "ConfidenceScoreSchema",
    ()=>ConfidenceScoreSchema,
    "EntitiesAnalysisSchema",
    ()=>EntitiesAnalysisSchema,
    "KeyPointsAnalysisSchema",
    ()=>KeyPointsAnalysisSchema,
    "RelationshipsAnalysisSchema",
    ()=>RelationshipsAnalysisSchema,
    "SentimentAnalysisSchema",
    ()=>SentimentAnalysisSchema,
    "SummaryAnalysisSchema",
    ()=>SummaryAnalysisSchema,
    "TagsAnalysisSchema",
    ()=>TagsAnalysisSchema,
    "TitleAnalysisSchema",
    ()=>TitleAnalysisSchema,
    "TopicsAnalysisSchema",
    ()=>TopicsAnalysisSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
var AnalysisType = /*#__PURE__*/ function(AnalysisType) {
    AnalysisType["SUMMARY"] = "summary";
    AnalysisType["KEY_POINTS"] = "key_points";
    AnalysisType["CATEGORIES"] = "categories";
    AnalysisType["TAGS"] = "tags";
    AnalysisType["SENTIMENT"] = "sentiment";
    AnalysisType["TITLE"] = "title";
    AnalysisType["ENTITIES"] = "entities";
    AnalysisType["TOPICS"] = "topics";
    AnalysisType["RELATIONSHIPS"] = "relationships";
    AnalysisType["CONFIDENCE_SCORE"] = "confidence_score";
    return AnalysisType;
}({});
const SummaryAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10).max(1000),
    confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    wordCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1),
    keyThemes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).max(5),
    language: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const KeyPointsAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    keyPoints: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        point: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10).max(200),
        importance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
        category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        evidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })).min(1).max(10),
    totalPoints: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1),
    averageImportance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1)
});
const CategoriesAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    categories: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(50),
        confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
        reasoning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        subcategories: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
    })).min(1).max(5),
    primaryCategory: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(50),
    categoryHierarchy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
});
const TagsAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        tag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(30),
        relevance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'topic',
            'entity',
            'concept',
            'action',
            'emotion'
        ]),
        frequency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).optional()
    })).min(1).max(15),
    tagCloud: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()).optional()
});
const SentimentAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    sentiment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'positive',
        'negative',
        'neutral',
        'mixed'
    ]),
    confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    emotions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        emotion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        intensity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1)
    })).optional(),
    polarity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(-1).max(1)
});
const TitleAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5).max(100),
    alternatives: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).max(3).optional(),
    confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'descriptive',
        'question',
        'statement',
        'creative'
    ]).optional()
});
const EntitiesAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    entities: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'person',
            'organization',
            'location',
            'date',
            'product',
            'concept'
        ]),
        confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
        mentions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1),
        context: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })).min(0).max(20),
    entityRelationships: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        entity1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        entity2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        relationship: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1)
    })).optional()
});
const TopicsAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    topics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        topic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3).max(50),
        relevance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
        subtopics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        keywords: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
    })).min(1).max(8),
    topicDistribution: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()).optional()
});
const RelationshipsAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    relationships: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        relationship: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        strength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'causal',
            'temporal',
            'hierarchical',
            'associative',
            'contrastive'
        ])
    })).min(0).max(15),
    relationshipGraph: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())).optional()
});
const ConfidenceScoreSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    overallConfidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    analysisBreakdown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()),
    qualityIndicators: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        contentLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        clarity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        coherence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        completeness: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    }),
    recommendations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
});
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
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
"[project]/apps/web/src/lib/analysis/services/BaseAnalysisService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "BaseAnalysisService",
    ()=>BaseAnalysisService
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@ai-sdk/google [external] (@ai-sdk/google, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/ai-config.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
class BaseAnalysisService {
    model;
    userSettings = null;
    async initialize(userId) {
        console.log(`[${this.type.toUpperCase()}] Initializing service for user:`, userId);
        // Only try to get user settings if userId is not 'default'
        if (userId !== 'default') {
            this.userSettings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserAISettings"])(userId);
            console.log(`[${this.type.toUpperCase()}] User settings:`, {
                hasSettings: !!this.userSettings,
                provider: this.userSettings?.provider,
                model: this.userSettings?.model,
                hasApiKey: !!this.userSettings?.apiKey
            });
        }
        if (this.userSettings?.provider === 'google' && this.userSettings?.apiKey) {
            console.log(`[${this.type.toUpperCase()}] Using user's Google API key with model:`, this.userSettings.model);
            this.model = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__["google"])(this.userSettings.model, {
                apiKey: this.userSettings.apiKey
            });
        } else {
            // Fallback to environment variable
            console.log(`[${this.type.toUpperCase()}] Using environment variable for Google API key`);
            console.log(`[${this.type.toUpperCase()}] Environment API key present:`, !!process.env.GOOGLE_GENERATIVE_AI_API_KEY);
            this.model = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$ai$2d$sdk$2f$google__$5b$external$5d$__$2840$ai$2d$sdk$2f$google$2c$__esm_import$29$__["google"])('models/gemini-1.5-flash-latest', {
                apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY
            });
        }
    }
    /**
   * Validate the content before analysis
   */ validateContent(content) {
        if (!content || content.trim().length < 10) {
            return false;
        }
        return true;
    }
    /**
   * Create a base analysis result
   */ createBaseResult(noteId, status, result, error, processingTime) {
        return {
            id: `${noteId}_${this.type}_${Date.now()}`,
            noteId,
            type: this.type,
            status,
            result,
            error,
            createdAt: new Date(),
            updatedAt: new Date(),
            processingTime
        };
    }
    /**
   * Execute analysis with timeout and error handling
   */ async executeWithTimeout(operation, timeoutMs = this.timeout) {
        return Promise.race([
            operation(),
            new Promise((_, reject)=>setTimeout(()=>reject(new Error(`Analysis timeout after ${timeoutMs}ms`)), timeoutMs))
        ]);
    }
    /**
   * Execute analysis with retry logic and quota detection
   */ async executeWithRetry(operation, maxRetries = 1) {
        let lastError = null;
        for(let attempt = 0; attempt <= maxRetries; attempt++){
            try {
                return await operation();
            } catch (error) {
                lastError = error instanceof Error ? error : new Error('Unknown error');
                // Check if it's a quota exceeded error - don't retry
                const isQuotaExceeded = lastError.message.includes('quota') || lastError.message.includes('RESOURCE_EXHAUSTED') || lastError.message.includes('429') || lastError.message.includes('exceeded');
                if (isQuotaExceeded) {
                    console.log(`[${this.type.toUpperCase()}] Quota exceeded detected, not retrying`);
                    throw lastError;
                }
                // If this is the last attempt, throw the error
                if (attempt === maxRetries) {
                    throw lastError;
                }
                console.log(`[${this.type.toUpperCase()}] Attempt ${attempt + 1} failed, retrying...`);
                // Small delay before retry
                await new Promise((resolve)=>setTimeout(resolve, 1000));
            }
        }
        throw lastError || new Error('Max retries exceeded');
    }
    /**
   * Log analysis metrics
   */ async logMetrics(noteId, processingTime, success, error, userId, inputTokens, outputTokens) {
        console.log(`[${this.type.toUpperCase()}] Analysis completed:`, {
            noteId,
            processingTime: `${processingTime}ms`,
            success,
            error,
            timestamp: new Date().toISOString()
        });
        // Log token usage if we have user settings and userId
        if (this.userSettings && userId && inputTokens !== undefined && outputTokens !== undefined) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logTokenUsage"])(userId, {
                noteId,
                provider: this.userSettings.provider,
                model: this.userSettings.model,
                analysisType: this.type,
                inputTokens,
                outputTokens,
                totalTokens: inputTokens + outputTokens,
                requestDuration: processingTime,
                success,
                errorMessage: error
            });
        }
    }
    /**
   * Estimate input tokens (rough approximation)
   */ estimateInputTokens(text) {
        return Math.ceil(text.length / 4); // Rough estimate: 4 characters per token
    }
    /**
   * Estimate output tokens (rough approximation)
   */ estimateOutputTokens(result) {
        const resultText = JSON.stringify(result);
        return Math.ceil(resultText.length / 4);
    }
    /**
   * Get analysis priority (lower number = higher priority)
   */ getPriority() {
        return this.priority;
    }
    /**
   * Check if this analysis type is enabled
   */ isEnabled(enabledTypes) {
        return enabledTypes.includes(this.type);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/analysis/services/SummaryAnalysisService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SummaryAnalysisService",
    ()=>SummaryAnalysisService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/BaseAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/ai [external] (ai, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
class SummaryAnalysisService extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAnalysisService"] {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SUMMARY;
    priority = 1;
    timeout = 5000;
    async analyze(content, context) {
        const startTime = Date.now();
        if (!this.validateContent(content)) {
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, 'Content too short for analysis');
            this.logMetrics(context?.noteId || 'unknown', Date.now() - startTime, false, 'Content too short');
            return result;
        }
        try {
            const result = await this.executeWithRetry(async ()=>{
                return await this.executeWithTimeout(async ()=>{
                    const prompt = this.buildPrompt(content);
                    const analysis = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__["generateObject"])({
                        model: this.model,
                        schema: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SummaryAnalysisSchema"],
                        prompt
                    });
                    return analysis.object;
                });
            }, 1); // Only 1 retry attempt
            const processingTime = Date.now() - startTime;
            const analysisResult = this.createBaseResult(context?.noteId || 'unknown', 'completed', result, undefined, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, true);
            return analysisResult;
        } catch (error) {
            const processingTime = Date.now() - startTime;
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            // Check if it's a quota exceeded error
            const isQuotaExceeded = error instanceof Error && (error.message.includes('quota') || error.message.includes('RESOURCE_EXHAUSTED') || error.message.includes('429') || error.message.includes('exceeded'));
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, isQuotaExceeded ? 'API quota exceeded' : errorMessage, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, false, errorMessage);
            return result;
        }
    }
    buildPrompt(content) {
        return `You are an expert content analyst specializing in creating high-quality summaries.

Content to analyze:
"${content}"

Please create a comprehensive summary that:
1. Captures the main ideas and key concepts
2. Maintains the original meaning and context
3. Is concise but complete (10-1000 words)
4. Identifies the primary themes
5. Uses clear, professional language

Focus on extracting the essence of the content while preserving important details. The summary should be useful for someone who wants to quickly understand the main points without reading the full content.

Consider the content's:
- Main topic and purpose
- Key arguments or points
- Important details or examples
- Overall tone and perspective
- Target audience implications

Provide a confidence score (0-1) indicating how well you understood the content, and identify the primary language used.`;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/analysis/services/KeyPointsAnalysisService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "KeyPointsAnalysisService",
    ()=>KeyPointsAnalysisService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/BaseAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/ai [external] (ai, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
class KeyPointsAnalysisService extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAnalysisService"] {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].KEY_POINTS;
    priority = 2;
    timeout = 12000;
    async analyze(content, context) {
        const startTime = Date.now();
        if (!this.validateContent(content)) {
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, 'Content too short for key points extraction');
            this.logMetrics(context?.noteId || 'unknown', Date.now() - startTime, false, 'Content too short');
            return result;
        }
        try {
            const result = await this.executeWithTimeout(async ()=>{
                const prompt = this.buildPrompt(content);
                const analysis = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__["generateObject"])({
                    model: this.model,
                    schema: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KeyPointsAnalysisSchema"],
                    prompt
                });
                return analysis.object;
            });
            const processingTime = Date.now() - startTime;
            const analysisResult = this.createBaseResult(context?.noteId || 'unknown', 'completed', result, undefined, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, true);
            return analysisResult;
        } catch (error) {
            const processingTime = Date.now() - startTime;
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, errorMessage, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, false, errorMessage);
            return result;
        }
    }
    buildPrompt(content) {
        return `You are an expert content analyst specializing in extracting key points and insights.

Content to analyze:
"${content}"

Please extract the most important key points from this content. For each key point:

1. **Point**: A clear, concise statement of the main idea (10-200 characters)
2. **Importance**: A score from 0-1 indicating how critical this point is to understanding the content
3. **Category**: Optional categorization (e.g., "main argument", "supporting evidence", "conclusion", "action item")
4. **Evidence**: Optional supporting evidence or context from the content

Guidelines:
- Extract 1-10 key points (prioritize quality over quantity)
- Focus on the most significant ideas, arguments, or insights
- Avoid redundancy - each point should be distinct
- Consider both explicit and implicit key ideas
- Rank points by importance to the overall content
- Include actionable items if present
- Capture both facts and opinions/interpretations

The key points should help someone quickly understand the most important aspects of the content without reading it in full.`;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/analysis/services/CategoriesAnalysisService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CategoriesAnalysisService",
    ()=>CategoriesAnalysisService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/BaseAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/ai [external] (ai, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
class CategoriesAnalysisService extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAnalysisService"] {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].CATEGORIES;
    priority = 3;
    timeout = 8000;
    async analyze(content, context) {
        const startTime = Date.now();
        if (!this.validateContent(content)) {
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, 'Content too short for categorization');
            this.logMetrics(context?.noteId || 'unknown', Date.now() - startTime, false, 'Content too short');
            return result;
        }
        try {
            const result = await this.executeWithTimeout(async ()=>{
                const prompt = this.buildPrompt(content);
                const analysis = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__["generateObject"])({
                    model: this.model,
                    schema: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoriesAnalysisSchema"],
                    prompt
                });
                return analysis.object;
            });
            const processingTime = Date.now() - startTime;
            const analysisResult = this.createBaseResult(context?.noteId || 'unknown', 'completed', result, undefined, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, true);
            return analysisResult;
        } catch (error) {
            const processingTime = Date.now() - startTime;
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, errorMessage, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, false, errorMessage);
            return result;
        }
    }
    buildPrompt(content) {
        return `You are an expert content classifier specializing in intelligent categorization.

Content to analyze:
"${content}"

Please categorize this content using a hierarchical classification system. For each category:

1. **Name**: A clear, descriptive category name (2-50 characters)
2. **Confidence**: A score from 0-1 indicating how confident you are in this categorization
3. **Reasoning**: Brief explanation of why this category applies
4. **Subcategories**: Optional more specific subcategories

Consider these category types:
- **Subject Matter**: What is the content about? (e.g., Technology, Business, Health, Education)
- **Content Type**: What form is it? (e.g., Tutorial, Analysis, Opinion, News, Research)
- **Purpose**: What is the intent? (e.g., Informational, Persuasive, Instructional, Creative)
- **Domain**: What field or industry? (e.g., Software Development, Marketing, Medicine, Law)
- **Audience**: Who is it for? (e.g., Beginners, Professionals, General Public, Students)
- **Tone**: What is the style? (e.g., Formal, Casual, Technical, Academic)

Guidelines:
- Provide 1-5 categories (prioritize the most relevant)
- Use standard, recognizable category names
- Consider both primary and secondary categorizations
- Include confidence scores for each category
- Provide clear reasoning for your choices
- Consider the content's context and implications
- Use consistent naming conventions

The primary category should be the most important classification for organizing and finding this content.`;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/analysis/services/TagsAnalysisService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TagsAnalysisService",
    ()=>TagsAnalysisService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/BaseAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/ai [external] (ai, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
class TagsAnalysisService extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAnalysisService"] {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TAGS;
    priority = 4;
    timeout = 6000;
    async analyze(content, context) {
        const startTime = Date.now();
        if (!this.validateContent(content)) {
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, 'Content too short for tag extraction');
            this.logMetrics(context?.noteId || 'unknown', Date.now() - startTime, false, 'Content too short');
            return result;
        }
        try {
            const result = await this.executeWithTimeout(async ()=>{
                const prompt = this.buildPrompt(content);
                const analysis = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__["generateObject"])({
                    model: this.model,
                    schema: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagsAnalysisSchema"],
                    prompt
                });
                return analysis.object;
            });
            const processingTime = Date.now() - startTime;
            const analysisResult = this.createBaseResult(context?.noteId || 'unknown', 'completed', result, undefined, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, true);
            return analysisResult;
        } catch (error) {
            const processingTime = Date.now() - startTime;
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, errorMessage, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, false, errorMessage);
            return result;
        }
    }
    buildPrompt(content) {
        return `You are an expert content tagger specializing in creating comprehensive, searchable tags.

Content to analyze:
"${content}"

Please extract relevant tags that would help users find and organize this content. For each tag:

1. **Tag**: A concise, searchable term (2-30 characters)
2. **Relevance**: A score from 0-1 indicating how relevant this tag is to the content
3. **Type**: The type of tag (topic, entity, concept, action, emotion)
4. **Frequency**: Optional count of how often this concept appears in the content

Tag Types:
- **Topic**: Main subjects or themes (e.g., "machine-learning", "project-management")
- **Entity**: Specific people, places, organizations, products (e.g., "google", "javascript", "tesla")
- **Concept**: Abstract ideas or principles (e.g., "agile", "sustainability", "innovation")
- **Action**: Verbs or activities (e.g., "planning", "analysis", "implementation")
- **Emotion**: Emotional tone or sentiment (e.g., "optimistic", "concerned", "excited")

Guidelines:
- Extract 1-15 tags (prioritize the most relevant and useful)
- Use lowercase, hyphenated format for multi-word tags
- Avoid overly generic tags (like "information" or "content")
- Include both broad and specific tags
- Consider synonyms and related terms
- Focus on tags that would be useful for search and discovery
- Include technical terms, proper nouns, and key concepts
- Consider the content's context and domain

The tags should make this content easily discoverable and help users understand what it's about at a glance.`;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/analysis/services/SentimentAnalysisService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SentimentAnalysisService",
    ()=>SentimentAnalysisService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/BaseAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/ai [external] (ai, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
class SentimentAnalysisService extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAnalysisService"] {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SENTIMENT;
    priority = 5;
    timeout = 5000;
    async analyze(content, context) {
        const startTime = Date.now();
        if (!this.validateContent(content)) {
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, 'Content too short for sentiment analysis');
            this.logMetrics(context?.noteId || 'unknown', Date.now() - startTime, false, 'Content too short');
            return result;
        }
        try {
            const result = await this.executeWithTimeout(async ()=>{
                const prompt = this.buildPrompt(content);
                const analysis = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__["generateObject"])({
                    model: this.model,
                    schema: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SentimentAnalysisSchema"],
                    prompt
                });
                return analysis.object;
            });
            const processingTime = Date.now() - startTime;
            const analysisResult = this.createBaseResult(context?.noteId || 'unknown', 'completed', result, undefined, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, true);
            return analysisResult;
        } catch (error) {
            const processingTime = Date.now() - startTime;
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, errorMessage, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, false, errorMessage);
            return result;
        }
    }
    buildPrompt(content) {
        return `You are an expert sentiment analyst specializing in understanding emotional tone and attitude.

Content to analyze:
"${content}"

Please analyze the sentiment and emotional tone of this content. Provide:

1. **Overall Sentiment**: The primary emotional tone (positive, negative, neutral, mixed)
2. **Confidence**: How confident you are in this assessment (0-1)
3. **Emotions**: Specific emotions detected with their intensity (0-1)
4. **Polarity**: Overall emotional polarity (-1 to 1, where -1 is very negative, 0 is neutral, 1 is very positive)

Consider these aspects:
- **Tone**: Is the content optimistic, pessimistic, neutral, or mixed?
- **Emotional Language**: What emotions are expressed or implied?
- **Attitude**: How does the author feel about the subject matter?
- **Context**: Consider the purpose and context of the content
- **Nuance**: Look for subtle emotional cues and mixed sentiments

Emotions to consider:
- Joy, excitement, satisfaction, optimism
- Sadness, disappointment, frustration, concern
- Anger, irritation, criticism, hostility
- Fear, anxiety, worry, uncertainty
- Surprise, curiosity, interest, amazement
- Trust, confidence, certainty, assurance
- Disgust, contempt, rejection, disapproval

Guidelines:
- Consider both explicit and implicit emotional content
- Look for emotional indicators in word choice, tone, and context
- Account for sarcasm, irony, and other nuanced expressions
- Consider the overall message and its emotional impact
- Provide confidence scores based on clarity of emotional signals
- Identify mixed sentiments when multiple emotions are present

The analysis should help understand the emotional context and tone of the content for better interpretation and response.`;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/analysis/services/TitleAnalysisService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TitleAnalysisService",
    ()=>TitleAnalysisService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/BaseAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/ai [external] (ai, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
class TitleAnalysisService extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$BaseAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAnalysisService"] {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TITLE;
    priority = 1;
    timeout = 3000;
    async analyze(content, context) {
        const startTime = Date.now();
        if (!this.validateContent(content)) {
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, 'Content too short for title generation');
            this.logMetrics(context?.noteId || 'unknown', Date.now() - startTime, false, 'Content too short');
            return result;
        }
        try {
            const result = await this.executeWithRetry(async ()=>{
                return await this.executeWithTimeout(async ()=>{
                    const prompt = this.buildPrompt(content);
                    const analysis = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$ai__$5b$external$5d$__$28$ai$2c$__esm_import$29$__["generateObject"])({
                        model: this.model,
                        schema: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TitleAnalysisSchema"],
                        prompt
                    });
                    return analysis.object;
                });
            }, 1); // Only 1 retry attempt
            const processingTime = Date.now() - startTime;
            const analysisResult = this.createBaseResult(context?.noteId || 'unknown', 'completed', result, undefined, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, true);
            return analysisResult;
        } catch (error) {
            const processingTime = Date.now() - startTime;
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            // Check if it's a quota exceeded error
            const isQuotaExceeded = error instanceof Error && (error.message.includes('quota') || error.message.includes('RESOURCE_EXHAUSTED') || error.message.includes('429') || error.message.includes('exceeded'));
            const result = this.createBaseResult(context?.noteId || 'unknown', 'failed', null, isQuotaExceeded ? 'API quota exceeded' : errorMessage, processingTime);
            this.logMetrics(context?.noteId || 'unknown', processingTime, false, errorMessage);
            return result;
        }
    }
    buildPrompt(content) {
        return `You are an expert content titler specializing in creating compelling, descriptive titles.

Content to analyze:
"${content}"

Please generate an effective title for this content. Provide:

1. **Title**: A clear, engaging title (5-100 characters)
2. **Alternatives**: 1-3 alternative title options
3. **Confidence**: How confident you are in this title (0-1)
4. **Style**: The title style (descriptive, question, statement, creative)

Title Guidelines:
- **Descriptive**: Clearly describes what the content is about
- **Question**: Poses a question that the content answers
- **Statement**: Makes a declarative statement about the content
- **Creative**: Uses creative language or wordplay

Consider these factors:
- **Clarity**: The title should clearly indicate the content's main topic
- **Engagement**: Make it interesting and compelling to read
- **Accuracy**: Ensure it accurately represents the content
- **Length**: Keep it concise but informative
- **Keywords**: Include important terms for searchability
- **Tone**: Match the tone and style of the content
- **Uniqueness**: Make it distinctive and memorable

Avoid:
- Generic titles like "Notes" or "Content"
- Overly long or complex titles
- Misleading or inaccurate descriptions
- Titles that don't reflect the main content

The title should help users quickly understand what the content is about and encourage them to read it.`;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/analysis/AnalysisOrchestrator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "AnalysisOrchestrator",
    ()=>AnalysisOrchestrator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$SummaryAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/SummaryAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$KeyPointsAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/KeyPointsAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$CategoriesAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/CategoriesAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$TagsAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/TagsAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$SentimentAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/SentimentAnalysisService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$TitleAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/services/TitleAnalysisService.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$SummaryAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$KeyPointsAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$CategoriesAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$TagsAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$SentimentAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$TitleAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$SummaryAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$KeyPointsAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$CategoriesAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$TagsAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$SentimentAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$TitleAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
class AnalysisOrchestrator {
    services;
    cache;
    defaultConfig;
    constructor(){
        this.services = new Map();
        this.cache = new Map();
        // Initialize services
        this.initializeServices();
        // Default configuration
        this.defaultConfig = {
            enabledAnalyses: [
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TITLE,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SUMMARY,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].KEY_POINTS,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].CATEGORIES,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TAGS,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SENTIMENT
            ],
            priority: [
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TITLE,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SUMMARY,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].KEY_POINTS,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].CATEGORIES,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TAGS,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SENTIMENT
            ],
            timeout: 15000,
            retryAttempts: 1,
            cacheEnabled: true,
            cacheTTL: 24 * 60 * 60 * 1000
        };
    }
    async initializeServices(userId) {
        // Only create services if they don't exist or if we need to reinitialize with user settings
        if (this.services.size === 0 || userId) {
            const summaryService = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$SummaryAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SummaryAnalysisService"]();
            const keyPointsService = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$KeyPointsAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KeyPointsAnalysisService"]();
            const categoriesService = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$CategoriesAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoriesAnalysisService"]();
            const tagsService = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$TagsAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagsAnalysisService"]();
            const sentimentService = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$SentimentAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SentimentAnalysisService"]();
            const titleService = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$services$2f$TitleAnalysisService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TitleAnalysisService"]();
            // Initialize services with user settings if userId is provided
            if (userId) {
                await Promise.all([
                    summaryService.initialize(userId),
                    keyPointsService.initialize(userId),
                    categoriesService.initialize(userId),
                    tagsService.initialize(userId),
                    sentimentService.initialize(userId),
                    titleService.initialize(userId)
                ]);
            } else {
                // Initialize with default settings if no userId provided
                await Promise.all([
                    summaryService.initialize('default'),
                    keyPointsService.initialize('default'),
                    categoriesService.initialize('default'),
                    tagsService.initialize('default'),
                    sentimentService.initialize('default'),
                    titleService.initialize('default')
                ]);
            }
            this.services.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SUMMARY, summaryService);
            this.services.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].KEY_POINTS, keyPointsService);
            this.services.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].CATEGORIES, categoriesService);
            this.services.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TAGS, tagsService);
            this.services.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SENTIMENT, sentimentService);
            this.services.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TITLE, titleService);
        }
    }
    /**
   * Perform comprehensive analysis of content
   */ async analyze(request, userId) {
        const startTime = Date.now();
        const config = {
            ...this.defaultConfig,
            ...request.config
        };
        // Check cache first
        if (config.cacheEnabled && !request.forceRefresh) {
            const cached = this.getCachedAnalysis(request.noteId);
            if (cached) {
                return {
                    success: true,
                    data: cached
                };
            }
        }
        try {
            // Initialize services with user settings
            await this.initializeServices(userId);
            // Get enabled services in priority order
            const enabledServices = this.getEnabledServices(config);
            // Execute analyses in parallel with priority handling
            const results = await this.executeAnalyses(request.noteId, request.content, enabledServices, config);
            // Calculate overall confidence
            const overallConfidence = this.calculateOverallConfidence(results);
            // Create comprehensive analysis
            const comprehensiveAnalysis = {
                noteId: request.noteId,
                analyses: results,
                overallConfidence,
                processingTime: Date.now() - startTime,
                version: '1.0.0',
                createdAt: new Date(),
                updatedAt: new Date()
            };
            // Cache the result
            if (config.cacheEnabled) {
                this.cacheAnalysis(request.noteId, comprehensiveAnalysis);
            }
            return {
                success: true,
                data: comprehensiveAnalysis
            };
        } catch (error) {
            console.error('Analysis orchestration failed:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    /**
   * Get enabled services in priority order
   */ getEnabledServices(config) {
        return config.enabledAnalyses.map((type)=>this.services.get(type)).filter((service)=>service !== undefined).sort((a, b)=>a.getPriority() - b.getPriority());
    }
    /**
   * Execute analyses with parallel processing and error handling
   */ async executeAnalyses(noteId, content, services, config) {
        const results = {};
        const context = {
            noteId
        };
        // Execute high-priority analyses first (title, summary)
        const highPriorityServices = services.filter((s)=>s.getPriority() <= 2);
        const otherServices = services.filter((s)=>s.getPriority() > 2);
        // Run high-priority analyses sequentially for better results
        for (const service of highPriorityServices){
            try {
                const result = await service.analyze(content, context);
                results[service.type] = result;
            } catch (error) {
                console.error(`High-priority analysis failed for ${service.type}:`, error);
                results[service.type] = service.createBaseResult(noteId, 'failed', null, error instanceof Error ? error.message : 'Unknown error');
            }
        }
        // Run other analyses in parallel
        const otherPromises = otherServices.map(async (service)=>{
            try {
                return await service.analyze(content, context);
            } catch (error) {
                console.error(`Analysis failed for ${service.type}:`, error);
                return service.createBaseResult(noteId, 'failed', null, error instanceof Error ? error.message : 'Unknown error');
            }
        });
        const otherResults = await Promise.all(otherPromises);
        otherResults.forEach((result)=>{
            results[result.type] = result;
        });
        return results;
    }
    /**
   * Calculate overall confidence score
   */ calculateOverallConfidence(results) {
        const completedAnalyses = Object.values(results).filter((r)=>r.status === 'completed');
        if (completedAnalyses.length === 0) {
            return 0;
        }
        // Calculate weighted average based on analysis type importance
        const weights = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TITLE]: 0.2,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SUMMARY]: 0.25,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].KEY_POINTS]: 0.2,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].CATEGORIES]: 0.15,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TAGS]: 0.1,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SENTIMENT]: 0.1,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].ENTITIES]: 0.05,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TOPICS]: 0.05,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].RELATIONSHIPS]: 0.05,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].CONFIDENCE_SCORE]: 0.05
        };
        let totalWeight = 0;
        let weightedSum = 0;
        completedAnalyses.forEach((analysis)=>{
            const weight = weights[analysis.type] || 0.05;
            const confidence = this.extractConfidenceFromResult(analysis);
            weightedSum += confidence * weight;
            totalWeight += weight;
        });
        return totalWeight > 0 ? weightedSum / totalWeight : 0;
    }
    /**
   * Extract confidence score from analysis result
   */ extractConfidenceFromResult(result) {
        if (result.status !== 'completed' || !result.result) {
            return 0;
        }
        // Try to extract confidence from the result
        if (typeof result.result === 'object' && result.result !== null) {
            if ('confidence' in result.result) {
                return result.result.confidence;
            }
            if ('overallConfidence' in result.result) {
                return result.result.overallConfidence;
            }
        }
        // Default confidence based on status
        return result.status === 'completed' ? 0.8 : 0;
    }
    /**
   * Get cached analysis
   */ getCachedAnalysis(noteId) {
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
   */ cacheAnalysis(noteId, analysis) {
        this.cache.set(noteId, analysis);
        // Clean up old cache entries periodically
        if (this.cache.size > 100) {
            this.cleanupCache();
        }
    }
    /**
   * Clean up old cache entries
   */ cleanupCache() {
        const now = Date.now();
        const entries = Array.from(this.cache.entries());
        entries.forEach(([noteId, analysis])=>{
            const cacheAge = now - analysis.createdAt.getTime();
            if (cacheAge > this.defaultConfig.cacheTTL) {
                this.cache.delete(noteId);
            }
        });
    }
    /**
   * Get analysis statistics
   */ getStats() {
        return {
            totalAnalyses: this.cache.size,
            cacheSize: this.cache.size,
            availableServices: Array.from(this.services.keys())
        };
    }
    /**
   * Clear cache
   */ clearCache() {
        this.cache.clear();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/bcryptjs [external] (bcryptjs, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("bcryptjs");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
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
"[project]/apps/web/src/app/api/notes/analyze/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/ai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$AnalysisOrchestrator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/AnalysisOrchestrator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analysis/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$AnalysisOrchestrator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$AnalysisOrchestrator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
// Try to initialize the new system, but fallback to old system if it fails
let orchestrator = null;
try {
    orchestrator = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$AnalysisOrchestrator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisOrchestrator"]();
    console.log('New analysis system initialized successfully');
} catch (error) {
    console.error('Failed to initialize new analysis system, using fallback:', error);
    orchestrator = null;
}
async function POST(request) {
    try {
        // Get the current user (optional for analysis)
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        const body = await request.json();
        const { content, title, noteId } = body;
        if (!content?.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Content is required'
            }, {
                status: 400
            });
        }
        console.log('AI Analysis - Content received:', {
            noteId: noteId || 'legacy',
            contentLength: content.length,
            hasFileContent: content.includes('--- Content from'),
            contentPreview: content.substring(0, 200) + (content.length > 200 ? '...' : ''),
            fileContentSections: (content.match(/--- Content from .+? ---/g) || []).length,
            usingNewSystem: !!orchestrator
        });
        // Try new system first, fallback to old system
        if (orchestrator) {
            try {
                console.log('AI Analysis - Using new system with user:', user?.id || 'anonymous');
                const analysisRequest = {
                    noteId: noteId || `legacy_${Date.now()}`,
                    content: content.trim(),
                    config: {
                        enabledAnalyses: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TITLE,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SUMMARY,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].KEY_POINTS,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].CATEGORIES,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TAGS,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SENTIMENT
                        ],
                        priority: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TITLE,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SUMMARY,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].KEY_POINTS,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].CATEGORIES,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TAGS,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SENTIMENT
                        ],
                        timeout: 15000,
                        retryAttempts: 1,
                        cacheEnabled: true,
                        cacheTTL: 24 * 60 * 60 * 1000
                    },
                    forceRefresh: false
                };
                const result = await orchestrator.analyze(analysisRequest, user?.id || 'anonymous');
                console.log('AI Analysis - New system result:', {
                    success: result.success,
                    hasData: !!result.data,
                    error: result.error,
                    analysesCount: result.data ? Object.keys(result.data.analyses).length : 0
                });
                if (result.success && result.data) {
                    // Check if any analysis failed due to quota exceeded
                    const quotaExceeded = Object.values(result.data.analyses).some((analysis)=>analysis.error && analysis.error.includes('quota'));
                    if (quotaExceeded) {
                        console.warn('AI Analysis - Quota exceeded detected in analysis services');
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'API quota exceeded. Please check your API key limits or try again later.',
                            quotaExceeded: true,
                            fallback: {
                                title: title || 'Untitled Note',
                                summary: content.length > 150 ? content.substring(0, 150) + '...' : content,
                                tags: [
                                    'note'
                                ],
                                categories: [
                                    'general'
                                ],
                                sentiment: 'neutral',
                                keyPoints: [
                                    content.substring(0, 100) + '...'
                                ]
                            }
                        }, {
                            status: 429
                        });
                    }
                    // Transform the new format to the legacy format for backward compatibility
                    const legacyFormat = {
                        title: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TITLE]?.result?.title || title || 'Untitled Note',
                        summary: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SUMMARY]?.result?.summary || '',
                        tags: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TAGS]?.result?.tags?.map((t)=>t.tag) || [],
                        categories: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].CATEGORIES]?.result?.categories?.map((c)=>c.name) || [],
                        sentiment: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SENTIMENT]?.result?.sentiment || 'neutral',
                        keyPoints: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].KEY_POINTS]?.result?.keyPoints?.map((kp)=>kp.point) || [],
                        // Include new metadata
                        metadata: {
                            overallConfidence: result.data.overallConfidence,
                            processingTime: result.data.processingTime,
                            analysisVersion: result.data.version,
                            detailedResults: {
                                summary: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SUMMARY]?.result,
                                keyPoints: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].KEY_POINTS]?.result,
                                categories: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].CATEGORIES]?.result,
                                tags: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TAGS]?.result,
                                sentiment: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].SENTIMENT]?.result,
                                title: result.data.analyses[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analysis$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnalysisType"].TITLE]?.result
                            }
                        }
                    };
                    console.log('AI Analysis - New System Result:', {
                        title: legacyFormat.title,
                        tags: legacyFormat.tags,
                        categories: legacyFormat.categories,
                        summaryLength: legacyFormat.summary?.length || 0,
                        overallConfidence: legacyFormat.metadata.overallConfidence,
                        processingTime: legacyFormat.metadata.processingTime
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(legacyFormat);
                } else {
                    console.error('New system failed, falling back to old system:', result.error);
                    // Check if it's a quota exceeded error
                    const isQuotaExceeded = result.error && (result.error.includes('quota') || result.error.includes('RESOURCE_EXHAUSTED') || result.error.includes('429') || result.error.includes('exceeded'));
                    if (isQuotaExceeded) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'API quota exceeded. Please check your API key limits or try again later.',
                            quotaExceeded: true,
                            fallback: {
                                title: title || 'Untitled Note',
                                summary: content.length > 150 ? content.substring(0, 150) + '...' : content,
                                tags: [
                                    'note'
                                ],
                                categories: [
                                    'general'
                                ],
                                sentiment: 'neutral',
                                keyPoints: [
                                    content.substring(0, 100) + '...'
                                ]
                            }
                        }, {
                            status: 429
                        });
                    }
                }
            } catch (error) {
                console.error('New system error, falling back to old system:', error);
                // Check if it's a quota exceeded error
                const isQuotaExceeded = error instanceof Error && (error.message.includes('quota') || error.message.includes('RESOURCE_EXHAUSTED') || error.message.includes('429') || error.message.includes('exceeded'));
                if (isQuotaExceeded) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'API quota exceeded. Please check your API key limits or try again later.',
                        quotaExceeded: true,
                        fallback: {
                            title: title || 'Untitled Note',
                            summary: content.length > 150 ? content.substring(0, 150) + '...' : content,
                            tags: [
                                'note'
                            ],
                            categories: [
                                'general'
                            ],
                            sentiment: 'neutral',
                            keyPoints: [
                                content.substring(0, 100) + '...'
                            ]
                        }
                    }, {
                        status: 429
                    });
                }
            }
        }
        // Fallback to old system
        console.log('AI Analysis - Using legacy analysis system');
        try {
            const analysis = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["analyzeNote"])(content);
            console.log('AI Analysis - Legacy Result:', {
                title: analysis.title,
                tags: analysis.tags,
                categories: analysis.categories,
                summaryLength: analysis.summary?.length || 0
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(analysis);
        } catch (legacyError) {
            console.error('AI Analysis - Legacy system also failed:', legacyError);
            // Check if it's a quota exceeded error
            const isQuotaExceeded = legacyError instanceof Error && (legacyError.message.includes('quota') || legacyError.message.includes('RESOURCE_EXHAUSTED') || legacyError.message.includes('429') || legacyError.message.includes('exceeded'));
            if (isQuotaExceeded) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'API quota exceeded. Please check your API key limits or try again later.',
                    quotaExceeded: true,
                    fallback: {
                        title: title || 'Untitled Note',
                        summary: content.length > 150 ? content.substring(0, 150) + '...' : content,
                        tags: [
                            'note'
                        ],
                        categories: [
                            'general'
                        ],
                        sentiment: 'neutral',
                        keyPoints: [
                            content.substring(0, 100) + '...'
                        ]
                    }
                }, {
                    status: 429
                });
            }
            throw legacyError;
        }
    } catch (error) {
        console.error('Error analyzing note:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to analyze note'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62bff5eb._.js.map