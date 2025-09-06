module.exports = [
"[externals]/@ai-sdk/google [external] (@ai-sdk/google, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@ai-sdk/google");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/web/src/lib/ai.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
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
const NoteAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    categories: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    sentiment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    keyPoints: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
});
// Schema for search queries
const SearchQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    intent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    keywords: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    filters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        categories: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        dateRange: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4155015f._.js.map