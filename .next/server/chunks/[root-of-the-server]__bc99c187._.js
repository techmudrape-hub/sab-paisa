module.exports = {

"[project]/.next-internal/server/app/api/payment/callback/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

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
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/src/lib/siteAClient.js [app-route] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/app/api/payment/callback/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET,
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteAClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/siteAClient.js [app-route] (ecmascript)");
;
;
;
/**
 * ============================================
 * PAYMENT CALLBACK API - DESIGNED & ORGANIZED
 * ============================================
 * This route handles payment callbacks from SabPaisa gateway
 * It decrypts the response, processes the payment status,
 * and updates Site B with transaction details
 */ // ============================================
// CONSTANTS & CONFIGURATION
// ============================================
const DEFAULT_AUTH_KEY = 'doJx8Ihyb2s/sh1pbYEDfa6JdsogEYMXKEoPF/BEwrg=';
const DEFAULT_AUTH_IV = 'iw/0vT01OWRph/rQplst/W7k423JXrgo4xBn3gXPsIDXTTXE461f4V4QYKGQ8wTe';
// ============================================
// HELPER FUNCTIONS - DECRYPTION
// ============================================
/**
 * Decrypts SabPaisa encrypted response using AES-256-CBC
 * Tries multiple decryption approaches for compatibility
 */ function decryptSabPaisaResponse(encResponse, authKey, authIV) {
    try {
        // Decode base64 strings for key and IV
        const key = Buffer.from(authKey || DEFAULT_AUTH_KEY, 'base64');
        const fullIV = Buffer.from(authIV || DEFAULT_AUTH_IV, 'base64');
        // IV must be exactly 16 bytes for AES-256-CBC
        const iv = fullIV.slice(0, 16);
        // Log input details for debugging
        console.log('Input details:', {
            encResponseLength: encResponse ? encResponse.length : 0,
            keyLength: key.length,
            ivLength: iv.length,
            isHex: /^[0-9A-Fa-f]+$/.test(encResponse || '')
        });
        // If no encrypted response, return a mock response for testing
        if (!encResponse) {
            console.log('No encrypted response provided, returning mock data');
            return {
                status: 'success',
                message: 'This is a mock response for testing',
                txnId: 'MOCK_TXN_' + Date.now(),
                amount: '100.00',
                paymentMode: 'TEST',
                paymentDateTime: new Date().toISOString()
            };
        }
        // SabPaisa specific handling - try multiple approaches
        // APPROACH 1: Try with custom padding for SabPaisa format
        try {
            // Convert hex to buffer
            const encryptedData = Buffer.from(encResponse, 'hex');
            // Calculate padding needed for AES block size (16 bytes)
            const blockSize = 16;
            const remainder = encryptedData.length % blockSize;
            const paddingNeeded = remainder === 0 ? 0 : blockSize - remainder;
            // Add padding if needed
            let paddedData = encryptedData;
            if (paddingNeeded > 0) {
                paddedData = Buffer.concat([
                    encryptedData,
                    Buffer.alloc(paddingNeeded, paddingNeeded)
                ]);
                console.log('Added PKCS#7 padding:', paddingNeeded, 'bytes');
            }
            // Create decipher with manual padding handling
            const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipheriv('aes-256-cbc', key, iv);
            decipher.setAutoPadding(false);
            // Decrypt the data
            let decrypted = decipher.update(paddedData);
            decrypted = Buffer.concat([
                decrypted,
                decipher.final()
            ]);
            // Remove PKCS#7 padding manually
            const lastByte = decrypted[decrypted.length - 1];
            if (lastByte <= blockSize) {
                let validPadding = true;
                for(let i = 1; i <= lastByte; i++){
                    if (decrypted[decrypted.length - i] !== lastByte) {
                        validPadding = false;
                        break;
                    }
                }
                if (validPadding) {
                    decrypted = decrypted.slice(0, decrypted.length - lastByte);
                }
            }
            // Convert to string and clean up non-printable characters
            let result = decrypted.toString('utf8');
            console.log('Raw decrypted result (first 100 chars):', result.substring(0, 100));
            // Clean the result by removing non-printable characters
            const cleanedResult = result.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
            // Try to find a valid JSON object in the result
            const jsonMatch = cleanedResult.match(/\{[^\{\}]*(?:\{[^\{\}]*\}[^\{\}]*)*\}/);
            if (jsonMatch) {
                console.log('Found JSON object in decrypted data');
                try {
                    const parsedJson = JSON.parse(jsonMatch[0]);
                    console.log('Successfully parsed JSON from decrypted data');
                    return parsedJson;
                } catch (jsonError) {
                    console.log('Found JSON-like content but failed to parse:', jsonError.message);
                }
            }
            // If we couldn't find valid JSON, try to extract key-value pairs
            const keyValuePairs = cleanedResult.match(/([\w]+)=([^&]+)&?/g);
            if (keyValuePairs && keyValuePairs.length > 0) {
                console.log('Found key-value pairs in decrypted data');
                const resultObj = {};
                keyValuePairs.forEach((pair)=>{
                    const [key, value] = pair.replace('&', '').split('=');
                    if (key && value) {
                        resultObj[key] = value;
                    }
                });
                if (Object.keys(resultObj).length > 0) {
                    console.log('Created object from key-value pairs');
                    return resultObj;
                }
            }
        } catch (approachError) {
            console.log('Custom padding approach failed:', approachError.message);
        }
        // APPROACH 2: Try direct hex decoding with auto padding
        try {
            const encryptedData = Buffer.from(encResponse, 'hex');
            const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipheriv('aes-256-cbc', key, iv);
            let decrypted = decipher.update(encryptedData);
            decrypted = Buffer.concat([
                decrypted,
                decipher.final()
            ]);
            const result = decrypted.toString('utf8');
            console.log('Direct hex approach succeeded');
            try {
                return JSON.parse(result);
            } catch (jsonError) {
                console.log('JSON parsing failed, returning raw result');
                return {
                    rawResponse: result
                };
            }
        } catch (directError) {
            console.log('Direct hex approach failed:', directError.message);
        }
        // APPROACH 3: Try base64 decoding
        try {
            const encryptedData = Buffer.from(encResponse, 'base64');
            const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipheriv('aes-256-cbc', key, iv);
            let decrypted = decipher.update(encryptedData);
            decrypted = Buffer.concat([
                decrypted,
                decipher.final()
            ]);
            const result = decrypted.toString('utf8');
            console.log('Base64 approach succeeded');
            try {
                return JSON.parse(result);
            } catch (jsonError) {
                console.log('JSON parsing failed, returning raw result');
                return {
                    rawResponse: result
                };
            }
        } catch (base64Error) {
            console.log('Base64 approach failed:', base64Error.message);
        }
        // APPROACH 4: Return a fallback response with the error
        console.log('All decryption approaches failed, returning fallback response');
        return {
            status: 'error',
            message: 'Failed to decrypt the payment response',
            encryptedResponse: encResponse.substring(0, 50) + '...',
            clientCode: 'INDR81',
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error('Decryption error:', error);
        // Instead of throwing, return an error object
        return {
            status: 'error',
            message: `Failed to decrypt response: ${error.message}`,
            timestamp: new Date().toISOString()
        };
    }
}
// ============================================
// HELPER FUNCTIONS - VALIDATION
// ============================================
/**
 * Validates required callback parameters
 */ function validateCallbackParams(clientCode, encResponse) {
    const errors = [];
    if (!clientCode) {
        errors.push('clientCode is required');
    }
    if (!encResponse) {
        errors.push('encResponse is required');
    }
    return {
        isValid: errors.length === 0,
        errors
    };
}
/**
 * Checks if request is from a browser
 */ function isBrowserRequest(request) {
    const acceptHeader = request.headers.get('accept') || '';
    const userAgent = request.headers.get('user-agent') || '';
    return acceptHeader.includes('text/html') || userAgent.includes('Mozilla');
}
// ============================================
// HELPER FUNCTIONS - STATUS MAPPING
// ============================================
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
/**
 * Builds payload for Site B update
 */ function buildSiteBPayload(decryptedData, statusInfo) {
    return {
        txnId: extractField(decryptedData, [
            'clientTxnId',
            'CLIENT_TXN_ID',
            'txnId'
        ], ''),
        sabpaisaTxnId: extractField(decryptedData, [
            'sabpaisaTxnId',
            'SABPAISA_TXN_ID',
            'txnId'
        ], ''),
        referenceId: extractField(decryptedData, [
            'clientTxnId',
            'CLIENT_TXN_ID',
            'txnId'
        ], ''),
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
        userId: extractField(decryptedData, [
            'payerEmail',
            'userId',
            'PAYER_EMAIL'
        ], ''),
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
            'EMAIL',
            'userId'
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
}
// ============================================
// HELPER FUNCTIONS - RESPONSE FORMATTING
// ============================================
/**
 * Creates error response with consistent format
 */ function createErrorResponse(message, statusCode = 400, additionalData = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        status: 'error',
        message,
        timestamp: new Date().toISOString(),
        ...additionalData
    }, {
        status: statusCode
    });
}
/**
 * Creates success response with consistent format
 */ function createSuccessResponse(data, statusCode = 200) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        status: 'success',
        timestamp: new Date().toISOString(),
        ...data
    }, {
        status: statusCode
    });
}
/**
 * Creates redirect URL for browser requests
 */ function createRedirectUrl(baseUrl, encResponse, clientCode, statusInfo, error = null) {
    const redirectUrl = new URL('/response', baseUrl);
    redirectUrl.searchParams.set('encResponse', encResponse);
    redirectUrl.searchParams.set('clientCode', clientCode);
    redirectUrl.searchParams.set('success', statusInfo.status === 'success' ? 'true' : 'false');
    if (error) {
        redirectUrl.searchParams.set('error', error);
    }
    return redirectUrl.toString();
}
async function GET(request) {
    try {
        // Extract parameters from query string
        const { searchParams } = new URL(request.url);
        const clientCode = searchParams.get('clientCode');
        const encResponse = searchParams.get('encResponse');
        console.log('📥 Payment callback received:', {
            clientCode,
            encResponseLength: encResponse?.length || 0,
            timestamp: new Date().toISOString()
        });
        // Validate required parameters
        const validation = validateCallbackParams(clientCode, encResponse);
        if (!validation.isValid) {
            return createErrorResponse('Missing required parameters', 400, {
                missing: {
                    clientCode: !clientCode,
                    encResponse: !encResponse
                },
                errors: validation.errors
            });
        }
        // Get encryption keys from environment variables
        const authKey = process.env.AUTH_KEY || ("TURBOPACK compile-time value", "doJx8Ihyb2s/sh1pbYEDfa6JdsogEYMXKEoPF/BEwrg=") || DEFAULT_AUTH_KEY;
        const authIV = process.env.AUTH_IV || ("TURBOPACK compile-time value", "iw/0vT01OWRph/rQplst/W7k423JXrgo4xBn3gXPsIDXTTXE461f4V4QYKGQ8wTe") || DEFAULT_AUTH_IV;
        // Decrypt the payment response
        console.log('🔓 Decrypting payment response...');
        let decryptedData = decryptSabPaisaResponse(encResponse, authKey, authIV);
        // Validate decrypted data
        if (decryptedData && decryptedData.status === 'error') {
            console.error('❌ Decryption error:', decryptedData.message);
            return createErrorResponse('Payment data decryption failed: ' + decryptedData.message, 400, {
                encResponseFormat: {
                    length: encResponse?.length || 0,
                    sample: encResponse?.substring(0, 50) + '...' || 'empty',
                    isHex: /^[0-9A-Fa-f]+$/.test(encResponse || ''),
                    isBase64: /^[A-Za-z0-9+/=]+$/.test(encResponse || '')
                }
            });
        }
        if (!decryptedData) {
            return createErrorResponse('Empty decrypted response', 400);
        }
        if (typeof decryptedData !== 'object' || decryptedData === null) {
            console.error('❌ Invalid decrypted data format:', typeof decryptedData);
            return createErrorResponse('Decrypted response is not a valid object', 400, {
                dataType: typeof decryptedData
            });
        }
        console.log('✅ Decryption successful. Available fields:', Object.keys(decryptedData));
        // Map payment status from SabPaisa response
        const statusInfo = mapPaymentStatus(decryptedData);
        // Extract transaction details
        const transactionId = extractField(decryptedData, [
            'txnId',
            'transactionId',
            'clientTxnId'
        ], '');
        const clientTxnId = extractField(decryptedData, [
            'clientTxnId',
            'clientTransactionId'
        ], '');
        console.log('📊 Payment Status:', statusInfo.status);
        console.log('💰 Transaction ID:', transactionId);
        console.log('🆔 Client Transaction ID:', clientTxnId);
        // Build payload for Site B update
        const updatePayload = buildSiteBPayload(decryptedData, statusInfo);
        console.log('📦 Site B Payload:', {
            txnId: updatePayload.txnId,
            amount: updatePayload.amount,
            status: updatePayload.status,
            payerName: updatePayload.payerName,
            payerEmail: updatePayload.payerEmail,
            statusCode: updatePayload.statusCode
        });
        // Send transaction update to Site B
        try {
            console.log('📤 Sending transaction to Site B...');
            const siteBResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteAClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendTransactionToSiteB"])(updatePayload);
            console.log('✅ Site B response received:', siteBResponse);
            // Handle browser vs API requests differently
            if (isBrowserRequest(request)) {
                const redirectUrl = createRedirectUrl(request.url, encResponse, clientCode, statusInfo);
                console.log('🌐 Redirecting browser to:', redirectUrl);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl, {
                    status: 302
                });
            }
            // Return JSON for API requests
            return createSuccessResponse({
                message: 'Payment callback processed successfully',
                paymentStatus: statusInfo.status,
                paymentMessage: statusInfo.message,
                transactionId,
                clientTxnId,
                siteBResponse
            });
        } catch (siteBError) {
            console.error('❌ Site B update failed:', siteBError.message);
            // For browser requests, still redirect (payment was processed)
            if (isBrowserRequest(request)) {
                const redirectUrl = createRedirectUrl(request.url, encResponse, clientCode, statusInfo, 'Failed to update Site B');
                console.log('🌐 Redirecting browser (Site B error):', redirectUrl);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl, {
                    status: 302
                });
            }
            // For API requests, return error but with 200 (payment was processed)
            return createSuccessResponse({
                message: 'Payment processed but failed to update Site B',
                paymentStatus: statusInfo.status,
                paymentMessage: statusInfo.message,
                transactionId,
                clientTxnId,
                siteBError: siteBError.message,
                warning: 'Payment was processed but Site B update failed'
            }, 200);
        }
    } catch (error) {
        console.error('❌ Payment callback error:', error);
        return createErrorResponse('Internal server error', 500, {
            error: error.message,
            errorType: error.constructor.name
        });
    }
}
async function POST(request) {
    // Convert POST to GET handler for compatibility
    return GET(request);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bc99c187._.js.map