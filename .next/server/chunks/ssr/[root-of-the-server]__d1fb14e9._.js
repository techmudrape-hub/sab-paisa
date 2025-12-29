module.exports = {

"[project]/.next-internal/server/app/response/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[externals]/node:crypto [external] (node:crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[project]/src/lib/sabpaisa/decrypt.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "decryptSabPaisaResponse": ()=>decryptSabPaisaResponse
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sabpaisa$2d$pg$2d$dev$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sabpaisa-pg-dev/dist/index.mjs [app-rsc] (ecmascript)"); // This is a library that can parse the payment response
;
;
function decryptSabPaisaResponse(encResponse) {
    try {
        console.log('[DECRYPT] Decrypting payment response:', encResponse);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sabpaisa$2d$pg$2d$dev$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePaymentResponse"])(encResponse);
    } catch (error) {
        console.error('[DECRYPT] Decryption error:', error);
        return {
            status: 'error',
            message: `Failed to decrypt response: ${error.message}`,
            timestamp: new Date().toISOString()
        };
    }
} // export function decryptSabPaisaResponse(encResponse, authKey, authIV) {
 //   try {
 //     // Decode base64 strings for key and IV
 //     const key = Buffer.from(authKey || '', 'base64')
 //     const fullIV = Buffer.from(authIV || '', 'base64')
 //     // IV must be exactly 16 bytes for AES-256-CBC
 //     const iv = fullIV.slice(0, 16)
 //     // Validate inputs
 //     if (!encResponse) {
 //       console.log('[DECRYPT] No encrypted response provided')
 //       return {
 //         status: 'error',
 //         message: 'No encrypted response provided',
 //         timestamp: new Date().toISOString()
 //       }
 //     }
 //     if (key.length === 0 || iv.length === 0) {
 //       console.error('[DECRYPT] Invalid key or IV length')
 //       return {
 //         status: 'error',
 //         message: 'Invalid encryption key or IV',
 //         timestamp: new Date().toISOString()
 //       }
 //     }
 //     // Log input details for debugging
 //     console.log('[DECRYPT] Input details:', {
 //       encResponseLength: encResponse.length,
 //       keyLength: key.length,
 //       ivLength: iv.length,
 //       isHex: /^[0-9A-Fa-f]+$/.test(encResponse),
 //     })
 //     // APPROACH 1: Try with custom padding for SabPaisa format (hex encoded)
 //     try {
 //       const encryptedData = Buffer.from(encResponse, 'hex')
 //       // Calculate padding needed for AES block size (16 bytes)
 //       const blockSize = 16
 //       const remainder = encryptedData.length % blockSize
 //       const paddingNeeded = remainder === 0 ? 0 : blockSize - remainder
 //       // Add padding if needed
 //       let paddedData = encryptedData
 //       if (paddingNeeded > 0) {
 //         paddedData = Buffer.concat([encryptedData, Buffer.alloc(paddingNeeded, paddingNeeded)])
 //         console.log('[DECRYPT] Added PKCS#7 padding:', paddingNeeded, 'bytes')
 //       }
 //       // Create decipher with manual padding handling
 //       const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
 //       decipher.setAutoPadding(false)
 //       // Decrypt the data
 //       let decrypted = decipher.update(paddedData)
 //       decrypted = Buffer.concat([decrypted, decipher.final()])
 //       // Remove PKCS#7 padding manually
 //       const lastByte = decrypted[decrypted.length - 1]
 //       if (lastByte <= blockSize) {
 //         let validPadding = true
 //         for (let i = 1; i <= lastByte; i++) {
 //           if (decrypted[decrypted.length - i] !== lastByte) {
 //             validPadding = false
 //             break
 //           }
 //         }
 //         if (validPadding) {
 //           decrypted = decrypted.slice(0, decrypted.length - lastByte)
 //         }
 //       }
 //       // Convert to string and clean up non-printable characters
 //       let result = decrypted.toString('utf8')
 //       console.log('[DECRYPT] Raw decrypted result (first 100 chars):', result.substring(0, 100))
 //       // Clean the result by removing non-printable characters
 //       const cleanedResult = result.replace(/[\x00-\x1F\x7F-\x9F]/g, '')
 //       // Try to find a valid JSON object in the result
 //       const jsonMatch = cleanedResult.match(/\{[^\{\}]*(?:\{[^\{\}]*\}[^\{\}]*)*\}/)
 //       if (jsonMatch) {
 //         console.log('[DECRYPT] Found JSON object in decrypted data')
 //         try {
 //           const parsedJson = JSON.parse(jsonMatch[0])
 //           console.log('[DECRYPT] Successfully parsed JSON from decrypted data')
 //           return parsedJson
 //         } catch (jsonError) {
 //           console.log('[DECRYPT] Found JSON-like content but failed to parse:', jsonError.message)
 //         }
 //       }
 //       // If we couldn't find valid JSON, try to extract key-value pairs
 //       const keyValuePairs = cleanedResult.match(/([\w]+)=([^&]+)&?/g)
 //       if (keyValuePairs && keyValuePairs.length > 0) {
 //         console.log('[DECRYPT] Found key-value pairs in decrypted data')
 //         const resultObj = {}
 //         keyValuePairs.forEach(pair => {
 //           const [key, value] = pair.replace('&', '').split('=')
 //           if (key && value) {
 //             resultObj[key] = value
 //           }
 //         })
 //         if (Object.keys(resultObj).length > 0) {
 //           console.log('[DECRYPT] Created object from key-value pairs')
 //           return resultObj
 //         }
 //       }
 //     } catch (approachError) {
 //       console.log('[DECRYPT] Custom padding approach failed:', approachError.message)
 //     }
 //     // APPROACH 2: Try direct hex decoding with auto padding
 //     try {
 //       const encryptedData = Buffer.from(encResponse, 'hex')
 //       const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
 //       let decrypted = decipher.update(encryptedData)
 //       decrypted = Buffer.concat([decrypted, decipher.final()])
 //       const result = decrypted.toString('utf8')
 //       console.log('[DECRYPT] Direct hex approach succeeded')
 //       // Try JSON parsing first
 //       try {
 //         return JSON.parse(result)
 //       } catch (jsonError) {
 //         console.log('[DECRYPT] JSON parsing failed, trying key-value pairs')
 //         // Try to parse as key-value pairs (URL-encoded format)
 //         const cleanedResult = result.replace(/[\x00-\x1F\x7F-\x9F]/g, '')
 //         const keyValuePairs = cleanedResult.match(/([\w]+)=([^&]+)&?/g)
 //         if (keyValuePairs && keyValuePairs.length > 0) {
 //           console.log('[DECRYPT] Found key-value pairs in decrypted data')
 //           const resultObj = {}
 //           keyValuePairs.forEach(pair => {
 //             const [key, value] = pair.replace('&', '').split('=')
 //             if (key && value) {
 //               resultObj[key] = decodeURIComponent(value)
 //             }
 //           })
 //           if (Object.keys(resultObj).length > 0) {
 //             console.log('[DECRYPT] Created object from key-value pairs')
 //             return resultObj
 //           }
 //         }
 //         // If all parsing fails, return error
 //         console.log('[DECRYPT] All parsing attempts failed')
 //         return { rawResponse: result, status: 'error', message: 'Failed to parse decrypted response' }
 //       }
 //     } catch (directError) {
 //       console.log('[DECRYPT] Direct hex approach failed:', directError.message)
 //     }
 //     // APPROACH 3: Try base64 decoding
 //     try {
 //       const encryptedData = Buffer.from(encResponse, 'base64')
 //       const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
 //       let decrypted = decipher.update(encryptedData)
 //       decrypted = Buffer.concat([decrypted, decipher.final()])
 //       const result = decrypted.toString('utf8')
 //       console.log('[DECRYPT] Base64 approach succeeded')
 //       // Try JSON parsing first
 //       try {
 //         return JSON.parse(result)
 //       } catch (jsonError) {
 //         console.log('[DECRYPT] JSON parsing failed, trying key-value pairs')
 //         // Try to parse as key-value pairs (URL-encoded format)
 //         const cleanedResult = result.replace(/[\x00-\x1F\x7F-\x9F]/g, '')
 //         const keyValuePairs = cleanedResult.match(/([\w]+)=([^&]+)&?/g)
 //         if (keyValuePairs && keyValuePairs.length > 0) {
 //           console.log('[DECRYPT] Found key-value pairs in decrypted data')
 //           const resultObj = {}
 //           keyValuePairs.forEach(pair => {
 //             const [key, value] = pair.replace('&', '').split('=')
 //             if (key && value) {
 //               resultObj[key] = decodeURIComponent(value)
 //             }
 //           })
 //           if (Object.keys(resultObj).length > 0) {
 //             console.log('[DECRYPT] Created object from key-value pairs')
 //             return resultObj
 //           }
 //         }
 //         // If all parsing fails, return error
 //         console.log('[DECRYPT] All parsing attempts failed')
 //         return { rawResponse: result, status: 'error', message: 'Failed to parse decrypted response' }
 //       }
 //     } catch (base64Error) {
 //       console.log('[DECRYPT] Base64 approach failed:', base64Error.message)
 //     }
 //     // APPROACH 4: Return a fallback response with the error
 //     console.log('[DECRYPT] All decryption approaches failed, returning fallback response')
 //     return {
 //       status: 'error',
 //       message: 'Failed to decrypt the payment response',
 //       encryptedResponse: encResponse.substring(0, 50) + '...',
 //       timestamp: new Date().toISOString()
 //     }
 //   } catch (error) {
 //     console.error('[DECRYPT] Decryption error:', error)
 //     return {
 //       status: 'error',
 //       message: `Failed to decrypt response: ${error.message}`,
 //       timestamp: new Date().toISOString()
 //     }
 //   }
 // }
}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/src/lib/database.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/lib/siteAClient.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "sendTransactionToSiteB": ()=>sendTransactionToSiteB
});
const sendTransactionToSiteB = async (transactionPayload)=>{
    try {
        const SITE_A_PROXY_ENDPOINT = "/api/transactions";
        const BEARER_TOKEN = ("TURBOPACK compile-time value", "my-client-token") || "testtoken123";
        const SHARED_SECRET = process.env.SHARED_SECRET || "mytransactionsecratekeyinder81";
        // Ensure complete payload
        const completePayload = {
            txnId: transactionPayload.txnId || `TXN-${Date.now()}`,
            payerName: transactionPayload.payerName || "Unknown User",
            payerEmail: transactionPayload.payerEmail || "unknown@example.com",
            amount: transactionPayload.amount || 0,
            description: transactionPayload.description || "Payment",
            type: transactionPayload.type || "PAYMENT",
            referenceId: transactionPayload.referenceId || "REF-${Date.now()}",
            currency: transactionPayload.currency || "INR",
            status: transactionPayload.status || "UNKNOWN",
            responseMessage: transactionPayload.responseMessage || "",
            userId: transactionPayload.userId || "",
            metadata: transactionPayload.metadata || {},
            statusCode: transactionPayload.statusCode || "PENDING",
            createdAt: transactionPayload.createdAt || new Date().toISOString()
        };
        console.log("Sending to Site B:", SITE_A_PROXY_ENDPOINT, completePayload);
        const response = await fetch(SITE_A_PROXY_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${BEARER_TOKEN}`,
                "x-shared-secret": SHARED_SECRET
            },
            body: JSON.stringify(completePayload)
        });
        const responseText = await response.text();
        console.log("Raw Response:", responseText);
        if (!response.ok) {
            throw new Error(`Site B Error (Status ${response.status}): ${responseText}`);
        }
        let data;
        try {
            data = JSON.parse(responseText);
        } catch  {
            data = {
                raw: responseText
            };
        }
        console.log("Parsed Response:", data);
        return data;
    } catch (error) {
        console.error("Failed to send transaction:", error.message);
        throw error;
    }
};
}),
"[project]/src/components/PaymentStatus.js [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/PaymentStatus.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/PaymentStatus.js <module evaluation>", "default");
}),
"[project]/src/components/PaymentStatus.js [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/PaymentStatus.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/PaymentStatus.js", "default");
}),
"[project]/src/components/PaymentStatus.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentStatus$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/PaymentStatus.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentStatus$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/PaymentStatus.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentStatus$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/response/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * ============================================
 * PAYMENT RESPONSE PAGE - SERVER-SIDE RENDERED
 * ============================================
 * 
 * WHY SERVER-SIDE:
 * - Payment gateway secrets (AUTH_KEY, AUTH_IV) are server-only (NOT NEXT_PUBLIC_*)
 * - Client-side decryption breaks after HTTP → HTTPS redirects (307) in production
 * - Server-side decryption works reliably in all environments
 * - Prevents exposure of sensitive encryption keys to the browser
 * 
 * This page:
 * 1. Reads encrypted response from URL searchParams (server-side)
 * 2. Decrypts payment data on the server using AUTH_KEY/AUTH_IV env vars
 * 3. Fetches userId from database if needed
 * 4. Sends transaction update to Site B (server-side)
 * 5. Renders decrypted data in a table
 */ __turbopack_context__.s({
    "default": ()=>ResponsePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sabpaisa$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sabpaisa/decrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteAClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/siteAClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PaymentStatus.js [app-rsc] (ecmascript)");
;
;
;
;
;
/**
 * Maps SabPaisa payment status to standardized status
 */ function mapPaymentStatus(paymentData) {
    const rawStatus = (paymentData.status || paymentData.STATUS || paymentData.paymentStatus || '').toString().toUpperCase();
    const statusCode = (paymentData.statusCode || paymentData.STATUS_CODE || paymentData.gatewayResponseCode || '').toString();
    const respMsg = (paymentData.sabpaisaMessage || paymentData.responseMessage || paymentData.RESPONSE_MESSAGE || paymentData.message || paymentData.bankMessage || '').toString();
    // Known success signals
    const isExplicitSuccess = rawStatus === 'SUCCESS' || rawStatus === 'SUCCESSFUL' || rawStatus === 'COMPLETED';
    if (isExplicitSuccess) {
        return {
            status: 'success',
            message: respMsg || 'Payment completed successfully!'
        };
    }
    // Known failure signals
    const isExplicitFailure = rawStatus === 'FAILED' || rawStatus === 'FAILURE' || rawStatus === 'CANCELLED' || rawStatus === 'CANCELED' || rawStatus === 'ERROR' || rawStatus === 'REJECTED';
    if (isExplicitFailure) {
        return {
            status: 'cancelled',
            message: respMsg || 'Payment was cancelled or failed.'
        };
    }
    // Check status codes for additional validation
    if (statusCode === '0000' || statusCode === '00') {
        return {
            status: 'success',
            message: respMsg || 'Payment completed successfully!'
        };
    }
    if (statusCode && statusCode !== '0000' && statusCode !== '00') {
        return {
            status: 'cancelled',
            message: respMsg || 'Payment failed with status code: ' + statusCode
        };
    }
    // Otherwise keep pending
    return {
        status: 'pending',
        message: respMsg || 'Payment is being processed...'
    };
}
/**
 * Extracts field value with multiple fallback options
 */ function extractField(obj, fieldNames, defaultValue = '') {
    for (const fieldName of fieldNames){
        if (obj[fieldName] !== undefined && obj[fieldName] !== null && obj[fieldName] !== '') {
            return obj[fieldName];
        }
    }
    return defaultValue;
}
async function ResponsePage({ searchParams }) {
    // Get encrypted response and client code from URL search params (server-side)
    const encResponse = searchParams?.encResponse;
    const clientCode = searchParams?.clientCode;
    const urlSuccess = searchParams?.success;
    const urlError = searchParams?.error;
    // Get encryption keys from server environment variables
    // For production: Use AUTH_KEY and AUTH_IV (server-only, NOT NEXT_PUBLIC_*)
    // For development: Fallback to defaults if env vars not set
    const authKey = process.env.AUTH_KEY || ("TURBOPACK compile-time value", "doJx8Ihyb2s/sh1pbYEDfa6JdsogEYMXKEoPF/BEwrg=") || "doJx8Ihyb2s/sh1pbYEDfa6JdsogEYMXKEoPF/BEwrg=";
    const authIV = process.env.AUTH_IV || ("TURBOPACK compile-time value", "iw/0vT01OWRph/rQplst/W7k423JXrgo4xBn3gXPsIDXTTXE461f4V4QYKGQ8wTe") || "iw/0vT01OWRph/rQplst/W7k423JXrgo4xBn3gXPsIDXTTXE461f4V4QYKGQ8wTe";
    let decryptedData = null;
    let paymentStatus = 'pending';
    let paymentMessage = 'Processing payment response...';
    let siteBStatus = null;
    let siteBMessage = '';
    let error = null;
    // Check if required parameters are present
    if (!encResponse || !clientCode) {
        error = {
            message: 'Missing payment response parameters',
            details: {
                encResponse: !encResponse ? 'Missing' : 'Present',
                clientCode: !clientCode ? 'Missing' : 'Present'
            },
            suggestion: 'Please complete the payment or check the payment status.'
        };
    } else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        try {
            // Decrypt payment response on the server
            console.log('[RESPONSE] Decrypting payment response on server...');
            decryptedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sabpaisa$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptSabPaisaResponse"])(encResponse, authKey, authIV);
            // Check if decryption was successful
            if (decryptedData && decryptedData.status === 'error') {
                error = {
                    message: 'Failed to decrypt payment response',
                    details: decryptedData.message,
                    suggestion: 'The payment response could not be decrypted. Please contact support.'
                };
            } else if (!decryptedData || typeof decryptedData !== 'object') {
                error = {
                    message: 'Invalid payment response data',
                    details: 'Decrypted data is not a valid object',
                    suggestion: 'Please try again or contact support if the issue persists.'
                };
            } else if (decryptedData.rawResponse) {
                // rawResponse means JSON parsing failed - decryption partially worked but data is corrupted
                error = {
                    message: 'Failed to parse decrypted payment response',
                    details: 'The payment response was decrypted but could not be parsed. This may indicate corrupted or invalid data.',
                    suggestion: 'Please contact support with the transaction details.'
                };
                console.error('[RESPONSE] Decryption returned rawResponse - JSON parsing failed');
                // Don't process further if we have rawResponse
                decryptedData = null;
            } else {
                // Validate that we have at least some expected payment fields
                const hasValidFields = decryptedData.status || decryptedData.STATUS || decryptedData.txnId || decryptedData.clientTxnId || decryptedData.CLIENT_TXN_ID || decryptedData.amount || decryptedData.AMOUNT;
                if (!hasValidFields && Object.keys(decryptedData).length > 0) {
                    // Check if all values look corrupted (contain unusual characters)
                    const allValuesCorrupted = Object.values(decryptedData).every((val)=>{
                        const strVal = String(val);
                        // Check if value contains mostly non-printable or unusual characters
                        return strVal.length > 0 && /[^\x20-\x7E]/.test(strVal) && strVal.match(/[^\x20-\x7E]/g)?.length > strVal.length * 0.3;
                    });
                    if (allValuesCorrupted) {
                        error = {
                            message: 'Decrypted data appears to be corrupted',
                            details: 'The payment response was decrypted but the data appears corrupted or invalid.',
                            suggestion: 'Please contact support with the transaction details.'
                        };
                        console.error('[RESPONSE] Decrypted data appears corrupted - all values contain unusual characters');
                        decryptedData = null;
                    }
                }
                if (decryptedData) {
                    // Map payment status
                    const statusInfo = mapPaymentStatus(decryptedData);
                    paymentStatus = statusInfo.status;
                    paymentMessage = statusInfo.message;
                    console.log('[RESPONSE] Payment status:', paymentStatus, paymentMessage);
                    // Extract transaction details
                    const clientTxnId = extractField(decryptedData, [
                        'clientTxnId',
                        'CLIENT_TXN_ID',
                        'txnId'
                    ], '');
                    // Try to fetch userId from database (stored during payment initiation)
                    let userIdFromDB = null;
                    if (clientTxnId) {
                        try {
                            const dbTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTransaction"])(clientTxnId);
                            if (dbTransaction) {
                                userIdFromDB = dbTransaction.userId || dbTransaction.metadata?.userId || null;
                                console.log('[RESPONSE] Fetched userId from database:', userIdFromDB);
                            }
                        } catch (dbError) {
                            console.warn('[RESPONSE] Could not fetch from database:', dbError);
                        }
                    }
                    // Extract userId from metadata or decrypted data
                    const userIdFromMetadata = decryptedData.metadata?.userId || decryptedData.metadata?.USER_ID;
                    const finalUserId = userIdFromDB || userIdFromMetadata || extractField(decryptedData, [
                        'userId',
                        'payerEmail',
                        'PAYER_EMAIL'
                    ], '');
                    // Build payload for Site B
                    const updatePayload = {
                        txnId: clientTxnId,
                        sabpaisaTxnId: extractField(decryptedData, [
                            'sabpaisaTxnId',
                            'SABPAISA_TXN_ID',
                            'txnId'
                        ], ''),
                        referenceId: clientTxnId,
                        amount: Number(extractField(decryptedData, [
                            'amount',
                            'AMOUNT'
                        ], 0)),
                        status: statusInfo.status === 'success' ? 'SUCCESS' : statusInfo.status === 'cancelled' ? 'FAILED' : 'PENDING',
                        responseMessage: extractField(decryptedData, [
                            'sabpaisaMessage',
                            'responseMessage',
                            'message',
                            'bankMessage'
                        ], statusInfo.message),
                        userId: finalUserId,
                        type: extractField(decryptedData, [
                            'type'
                        ], 'PAYMENT'),
                        description: extractField(decryptedData, [
                            'description'
                        ], 'Payment'),
                        payerName: extractField(decryptedData, [
                            'payerName',
                            'PAYER_NAME',
                            'customerName',
                            'CUSTOMER_NAME'
                        ], 'Unknown User'),
                        payerEmail: extractField(decryptedData, [
                            'payerEmail',
                            'PAYER_EMAIL',
                            'email',
                            'EMAIL'
                        ], ''),
                        statusCode: extractField(decryptedData, [
                            'statusCode',
                            'STATUS_CODE',
                            'gatewayResponseCode',
                            'responseCode'
                        ], statusInfo.status === 'success' ? '0000' : '9999'),
                        metadata: {
                            ...decryptedData
                        },
                        createdAt: new Date().toISOString()
                    };
                    console.log('[RESPONSE] Sending transaction to Site B...');
                    console.log('[RESPONSE] Final userId:', finalUserId);
                    console.log('[RESPONSE] Payment status:', updatePayload.status);
                    // Send to Site B (server-side)
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteAClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendTransactionToSiteB"])(updatePayload);
                        siteBStatus = 'success';
                        siteBMessage = 'Transaction saved successfully';
                        console.log('[RESPONSE] Transaction sent to Site B successfully');
                    } catch (siteBError) {
                        console.error('[RESPONSE] Error sending to Site B:', siteBError);
                        siteBStatus = 'error';
                        siteBMessage = 'Transaction processed but failed to update external system. Please contact support.';
                    }
                }
            }
        } catch (err) {
            console.error('[RESPONSE] Error processing payment response:', err);
            error = {
                message: 'Error processing payment response',
                details: err.message || 'Unknown error',
                suggestion: 'Please contact support if this issue persists.'
            };
        }
    }
    // Prepare response data for display
    const responseEntries = decryptedData && typeof decryptedData === 'object' ? Object.entries(decryptedData) : [];
    // Render the page
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '2rem',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '1200px',
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '20px',
                    textAlign: 'right'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    style: {
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        fontWeight: 'bold'
                    },
                    children: "← Back to Add Money"
                }, void 0, false, {
                    fileName: "[project]/src/app/response/page.js",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/response/page.js",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    marginTop: 0
                },
                children: "Payment Response Details"
            }, void 0, false, {
                fileName: "[project]/src/app/response/page.js",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '20px',
                    marginBottom: '20px',
                    backgroundColor: '#f8d7da',
                    border: '1px solid #f5c6cb',
                    borderRadius: '5px',
                    color: '#721c24'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            marginTop: 0,
                            color: '#721c24'
                        },
                        children: [
                            "⚠️ ",
                            error.message
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this),
                    error.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: '10px 0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Details:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/response/page.js",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this),
                            " ",
                            typeof error.details === 'object' ? JSON.stringify(error.details, null, 2) : error.details
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 285,
                        columnNumber: 13
                    }, this),
                    error.suggestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: '10px 0',
                            fontWeight: 'bold'
                        },
                        children: error.suggestion
                    }, void 0, false, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 290,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/response/page.js",
                lineNumber: 275,
                columnNumber: 9
            }, this),
            !error && paymentStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                status: paymentStatus,
                message: paymentMessage
            }, void 0, false, {
                fileName: "[project]/src/app/response/page.js",
                lineNumber: 299,
                columnNumber: 9
            }, this),
            siteBStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '1rem',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: siteBStatus === 'success' ? '#d4edda' : '#f8d7da',
                    border: `1px solid ${siteBStatus === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                    color: siteBStatus === 'success' ? '#155724' : '#721c24'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: siteBMessage
                }, void 0, false, {
                    fileName: "[project]/src/app/response/page.js",
                    lineNumber: 315,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/response/page.js",
                lineNumber: 307,
                columnNumber: 9
            }, this),
            !error && responseEntries.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '40px',
                    textAlign: 'center',
                    backgroundColor: '#fff3cd',
                    border: '1px solid #ffc107',
                    borderRadius: '5px',
                    marginBottom: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            color: '#856404',
                            marginTop: 0
                        },
                        children: "⚠️ No Payment Data Found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#856404'
                        },
                        children: "No payment response data was received. This could happen if:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: {
                            textAlign: 'left',
                            display: 'inline-block',
                            color: '#856404'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Payment gateway did not redirect properly with parameters"
                            }, void 0, false, {
                                fileName: "[project]/src/app/response/page.js",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Payment transaction was not completed"
                            }, void 0, false, {
                                fileName: "[project]/src/app/response/page.js",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "You accessed this page directly without completing a payment"
                            }, void 0, false, {
                                fileName: "[project]/src/app/response/page.js",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/response/page.js",
                lineNumber: 321,
                columnNumber: 9
            }, this),
            responseEntries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            marginBottom: '10px'
                        },
                        children: "Response Data:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        border: "1",
                        cellPadding: "10",
                        cellSpacing: "0",
                        style: {
                            width: '100%',
                            borderCollapse: 'collapse',
                            backgroundColor: 'white'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                style: {
                                    backgroundColor: '#f2f2f2'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                textAlign: 'left',
                                                padding: '12px'
                                            },
                                            children: "Field"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/response/page.js",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                textAlign: 'left',
                                                padding: '12px'
                                            },
                                            children: "Value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/response/page.js",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/response/page.js",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/response/page.js",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: responseEntries.map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid #ddd'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    fontWeight: 'bold'
                                                },
                                                children: key
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/response/page.js",
                                                lineNumber: 355,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    wordBreak: 'break-word'
                                                },
                                                children: value === null || value === undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    style: {
                                                        color: 'gray'
                                                    },
                                                    children: "N/A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/response/page.js",
                                                    lineNumber: 358,
                                                    columnNumber: 23
                                                }, this) : typeof value === 'object' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    style: {
                                                        margin: 0,
                                                        fontSize: '12px',
                                                        overflow: 'auto'
                                                    },
                                                    children: JSON.stringify(value, null, 2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/response/page.js",
                                                    lineNumber: 360,
                                                    columnNumber: 23
                                                }, this) : String(value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/response/page.js",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/src/app/response/page.js",
                                        lineNumber: 354,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/response/page.js",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/response/page.js",
                lineNumber: 343,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/response/page.js",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/response/page.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/response/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d1fb14e9._.js.map