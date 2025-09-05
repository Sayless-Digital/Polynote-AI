module.exports = [
"[project]/apps/web/.next-internal/server/app/api/extract-content/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/apps/web/src/lib/file-extraction.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractTextFromFile",
    ()=>extractTextFromFile,
    "extractTextFromFiles",
    ()=>extractTextFromFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mammoth/lib/index.js [app-route] (ecmascript)");
;
;
async function extractTextFromFile(file) {
    const fileName = file.name.toLowerCase();
    const fileType = file.type;
    try {
        // Handle text files
        if (fileType.startsWith('text/') || fileName.endsWith('.txt') || fileName.endsWith('.md')) {
            try {
                const text = await file.text();
                return {
                    text: text.trim(),
                    type: 'text',
                    success: true
                };
            } catch (textError) {
                console.warn(`Failed to read text file ${fileName}:`, textError);
                // Try reading as array buffer and convert to string
                try {
                    const arrayBuffer = await file.arrayBuffer();
                    const decoder = new TextDecoder('utf-8', {
                        fatal: false
                    });
                    const text = decoder.decode(arrayBuffer);
                    return {
                        text: text.trim(),
                        type: 'text',
                        success: true
                    };
                } catch (bufferError) {
                    console.error(`Failed to read text file ${fileName} as buffer:`, bufferError);
                    return {
                        text: `[Text file: ${file.name}] - Could not read file content. The file may be corrupted or use an unsupported encoding.`,
                        type: 'text',
                        success: false,
                        error: 'Text file reading failed'
                    };
                }
            }
        }
        // Handle PDF files
        if (fileType === 'application/pdf' || fileName.endsWith('.pdf')) {
            try {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(buffer);
                return {
                    text: data.text.trim(),
                    type: 'pdf',
                    success: true
                };
            } catch (pdfError) {
                console.error(`Failed to parse PDF ${fileName}:`, pdfError);
                return {
                    text: `[PDF file: ${file.name}] - Could not extract text from PDF. The file may be corrupted, password-protected, or contain only images.`,
                    type: 'pdf',
                    success: false,
                    error: 'PDF parsing failed'
                };
            }
        }
        // Handle DOCX files
        if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileName.endsWith('.docx')) {
            try {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extractRawText({
                    buffer
                });
                return {
                    text: result.value.trim(),
                    type: 'docx',
                    success: true
                };
            } catch (docxError) {
                console.error(`Failed to parse DOCX ${fileName}:`, docxError);
                return {
                    text: `[DOCX file: ${file.name}] - Could not extract text from DOCX. The file may be corrupted or use an unsupported format.`,
                    type: 'docx',
                    success: false,
                    error: 'DOCX parsing failed'
                };
            }
        }
        // Handle DOC files (basic support)
        if (fileName.endsWith('.doc')) {
            return {
                text: `[DOC file: ${file.name}] - Content extraction not supported for .doc files. Please convert to .docx for full text extraction.`,
                type: 'unsupported',
                success: false,
                error: 'DOC files not supported'
            };
        }
        // Handle images (placeholder for future implementation)
        if (fileType.startsWith('image/')) {
            return {
                text: `[Image file: ${file.name}] - Image content analysis not yet implemented.`,
                type: 'unsupported',
                success: false,
                error: 'Image analysis not implemented'
            };
        }
        // Handle audio/video (placeholder for future implementation)
        if (fileType.startsWith('audio/') || fileType.startsWith('video/')) {
            return {
                text: `[Media file: ${file.name}] - Audio/video transcription not yet implemented.`,
                type: 'unsupported',
                success: false,
                error: 'Media transcription not implemented'
            };
        }
        // Unsupported file type
        return {
            text: `[File: ${file.name}] - File type not supported for content extraction.`,
            type: 'unsupported',
            success: false,
            error: 'Unsupported file type'
        };
    } catch (error) {
        console.error('Error extracting text from file:', error);
        return {
            text: `[Error processing ${file.name}] - Could not extract content from this file.`,
            type: 'unsupported',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}
async function extractTextFromFiles(files) {
    const extractedTexts = [];
    let combinedText = '';
    let supportedFiles = 0;
    for (const file of files){
        const extracted = await extractTextFromFile(file);
        extractedTexts.push(extracted);
        if (extracted.success) {
            supportedFiles++;
            combinedText += `\n\n--- Content from ${file.name} ---\n${extracted.text}`;
        } else {
            combinedText += `\n\n--- ${file.name} (${extracted.error}) ---\n${extracted.text}`;
        }
    }
    return {
        extractedTexts,
        combinedText: combinedText.trim(),
        supportedFiles,
        totalFiles: files.length
    };
}
}),
"[project]/apps/web/src/app/api/extract-content/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$file$2d$extraction$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/file-extraction.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const formData1 = await request.formData();
        const file = formData1.get('file');
        if (!file) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No file provided'
            }, {
                status: 400
            });
        }
        console.log(`Extracting content from file: ${file.name} (${file.size} bytes, ${file.type})`);
        // Extract text content from the file
        const extracted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$file$2d$extraction$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractTextFromFile"])(file);
        console.log(`Extraction result for ${file.name}:`, {
            success: extracted.success,
            type: extracted.type,
            textLength: extracted.text.length,
            error: extracted.error
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: extracted.success,
            content: extracted.text,
            type: extracted.type,
            error: extracted.error,
            fileName: file.name,
            fileSize: file.size,
            fileType: file.type
        });
    } catch (error) {
        console.error('Error extracting file content:', {
            error: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
            fileName: formData?.get('file')?.name || 'unknown'
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to extract file content',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a7783a86._.js.map