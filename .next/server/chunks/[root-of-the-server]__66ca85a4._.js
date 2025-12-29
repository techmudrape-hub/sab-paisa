module.exports = {

"[project]/.next-internal/server/app/api/transactions/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[project]/src/lib/crypto/signature.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createHmacSha256Signature": ()=>createHmacSha256Signature
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
function createHmacSha256Signature(payloadObject) {
    if (!process.env.SHARED_SECRET) {
        throw new Error('Missing SHARED_SECRET environment variable');
    }
    const json = JSON.stringify(payloadObject);
    const hmac = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHmac('sha256', process.env.SHARED_SECRET);
    hmac.update(json, 'utf8');
    const signatureHex = hmac.digest('hex');
    return {
        json,
        signatureHex
    };
}
}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/src/lib/database.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getAllTransactions": ()=>getAllTransactions,
    "getTransaction": ()=>getTransaction,
    "readTransactions": ()=>readTransactions,
    "saveTransaction": ()=>saveTransaction,
    "writeTransactions": ()=>writeTransactions
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const DB_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data', 'transactions.json');
// Ensure data directory exists
const ensureDataDir = ()=>{
    const dataDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(DB_FILE);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(dataDir)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(dataDir, {
            recursive: true
        });
    }
};
const readTransactions = ()=>{
    try {
        ensureDataDir();
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(DB_FILE)) {
            return [];
        }
        const data = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading transactions:', error);
        return [];
    }
};
const writeTransactions = (transactions)=>{
    try {
        ensureDataDir();
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(DB_FILE, JSON.stringify(transactions, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing transactions:', error);
        return false;
    }
};
const saveTransaction = (transactionData)=>{
    try {
        const transactions = readTransactions();
        // Check if transaction already exists (by txnId)
        const existingIndex = transactions.findIndex((t)=>t.txnId === transactionData.txnId);
        if (existingIndex >= 0) {
            // Update existing transaction
            transactions[existingIndex] = {
                ...transactions[existingIndex],
                ...transactionData,
                updatedAt: new Date().toISOString()
            };
        } else {
            // Add new transaction
            transactions.push({
                ...transactionData,
                createdAt: transactionData.createdAt || new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
        }
        const success = writeTransactions(transactions);
        if (success) {
            console.log(`Transaction ${transactionData.txnId} saved with status: ${transactionData.status}`);
        }
        return success;
    } catch (error) {
        console.error('Error saving transaction:', error);
        return false;
    }
};
const getTransaction = (txnId)=>{
    const transactions = readTransactions();
    return transactions.find((t)=>t.txnId === txnId);
};
const getAllTransactions = ()=>{
    return readTransactions();
};
}),
"[project]/src/app/api/transactions/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET,
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto/signature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.js [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        console.log('API route called - checking environment variables');
        console.log('SITE_B_ENDPOINT:', process.env.SITE_B_ENDPOINT);
        console.log('SHARED_SECRET exists:', !!process.env.SHARED_SECRET);
        if (!process.env.SITE_B_ENDPOINT) {
            console.error('Missing SITE_B_ENDPOINT environment variable');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing SITE_B_ENDPOINT'
            }, {
                status: 500
            });
        }
        const body = await request.json();
        console.log('Received transaction data:', body);
        const requiredFields = [
            'referenceId',
            'amount',
            'type',
            'description',
            'metadata',
            'createdAt'
        ];
        for (const field of requiredFields){
            if (!(field in body)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Missing field: ${field}`
                }, {
                    status: 400
                });
            }
        }
        // Save transaction to local database first
        console.log('Saving transaction to local database...');
        const dbSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveTransaction"])(body);
        if (!dbSuccess) {
            console.error('Failed to save transaction to local database');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to save transaction locally'
            }, {
                status: 500
            });
        }
        console.log('Transaction saved to local database successfully');
        const { json, signatureHex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHmacSha256Signature"])(body);
        console.log('Generated signature:', signatureHex);
        console.log('Sending to Site B:', process.env.SITE_B_ENDPOINT);
        const upstreamHeaders = {
            'Content-Type': 'application/json',
            'X-Signature': signatureHex
        };
        // Prefer Authorization header from incoming request; else use env token if present
        const incomingAuth = request.headers.get('authorization');
        const envAuthToken = process.env.SITE_B_BEARER_TOKEN;
        if (incomingAuth) {
            upstreamHeaders['Authorization'] = incomingAuth;
        } else if (envAuthToken) {
            upstreamHeaders['Authorization'] = `Bearer ${envAuthToken}`;
        }
        if (!upstreamHeaders['Authorization']) {
            console.warn('No Authorization header provided for Site B request');
        }
        // For testing: Skip Site B call and return success
        if (("TURBOPACK compile-time value", "development") === 'development' && !process.env.SITE_B_ENDPOINT) {
            console.log('Development mode: Skipping Site B call');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                message: 'Transaction saved (development mode)',
                transactionId: body.referenceId
            }, {
                status: 200
            });
        }
        const res = await fetch(process.env.SITE_B_ENDPOINT, {
            method: 'POST',
            headers: upstreamHeaders,
            body: json,
            cache: 'no-store'
        });
        const text = await res.text();
        let parsed;
        try {
            parsed = text ? JSON.parse(text) : null;
        } catch (e) {
            parsed = {
                raw: text
            };
        }
        console.log('Site B response status:', res.status);
        console.log('Site B response:', parsed);
        if (!res.ok) {
            console.error('Site B returned error:', {
                status: res.status,
                data: parsed
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Upstream error',
                status: res.status,
                data: parsed
            }, {
                status: 502
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(parsed ?? null, {
            status: 200
        });
    } catch (error) {
        console.error('API route error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unexpected error',
            message: error?.message ?? String(error)
        }, {
            status: 500
        });
    }
}
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const txnId = searchParams.get('txnId');
        // If txnId is provided, return specific transaction
        if (txnId) {
            console.log(`GET /api/transactions?txnId=${txnId} - fetching transaction`);
            const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTransaction"])(txnId);
            if (!transaction) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Transaction not found'
                }, {
                    status: 404
                });
            }
            console.log(`Found transaction: ${txnId}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(transaction, {
                status: 200
            });
        }
        // Otherwise return all transactions
        console.log('GET /api/transactions - fetching all transactions');
        const transactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllTransactions"])();
        console.log(`Found ${transactions.length} transactions`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(transactions, {
            status: 200
        });
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch transactions',
            message: error?.message ?? String(error)
        }, {
            status: 500
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__66ca85a4._.js.map