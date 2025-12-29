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
"[externals]/node:crypto [external] (node:crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

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
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteAClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/siteAClient.js [app-route] (ecmascript)");
;
;
;
// Server-side compatible decryption function
function decryptSabPaisaResponse(encResponse, authKey, authIV) {
    try {
        // Decode base64 strings for key and IV
        const key = Buffer.from(authKey || 'doJx8Ihyb2s/sh1pbYEDfa6JdsogEYMXKEoPF/BEwrg=', 'base64');
        const fullIV = Buffer.from(authIV || 'iw/0vT01OWRph/rQplst/W7k423JXrgo4xBn3gXPsIDXTTXE461f4V4QYKGQ8wTe', 'base64');
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
            const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createDecipheriv('aes-256-cbc', key, iv);
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
            const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createDecipheriv('aes-256-cbc', key, iv);
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
            const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createDecipheriv('aes-256-cbc', key, iv);
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
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const clientCode = searchParams.get('clientCode');
        const encResponse = searchParams.get('encResponse');
        console.log('Payment callback received:', {
            clientCode,
            encResponse
        });
        if (!clientCode || !encResponse) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: 'error',
                message: 'Missing required parameters',
                missing: {
                    clientCode: !clientCode,
                    encResponse: !encResponse
                }
            }, {
                status: 400
            });
        }
        // Parse the encrypted response from SabPaisa using server-side compatible method
        const authKey = process.env.AUTH_KEY || ("TURBOPACK compile-time value", "doJx8Ihyb2s/sh1pbYEDfa6JdsogEYMXKEoPF/BEwrg=") || "doJx8Ihyb2s/sh1pbYEDfa6JdsogEYMXKEoPF/BEwrg=";
        const authIV = process.env.AUTH_IV || ("TURBOPACK compile-time value", "iw/0vT01OWRph/rQplst/W7k423JXrgo4xBn3gXPsIDXTTXE461f4V4QYKGQ8wTe") || "iw/0vT01OWRph/rQplst/W7k423JXrgo4xBn3gXPsIDXTTXE461f4V4QYKGQ8wTe";
        let decryptedData = decryptSabPaisaResponse(encResponse, authKey, authIV);
        console.log('Decrypted payment data:', decryptedData);
        console.log('Decrypted data type:', typeof decryptedData);
        console.log('Decrypted data keys:', decryptedData ? Object.keys(decryptedData) : 'No keys');
        // Check if decryption returned an error object
        if (decryptedData && decryptedData.status === 'error') {
            console.error('Error decrypting payment response:', decryptedData.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: 'error',
                message: 'Payment data decryption failed: ' + decryptedData.message,
                encResponseFormat: {
                    length: encResponse ? encResponse.length : 0,
                    sample: encResponse ? encResponse.substring(0, 50) + '...' : 'empty',
                    isHex: /^[0-9A-Fa-f]+$/.test(encResponse || ''),
                    isBase64: /^[A-Za-z0-9+/=]+$/.test(encResponse || '')
                }
            }, {
                status: 400
            });
        }
        if (!decryptedData) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: 'error',
                message: 'Empty decrypted response',
                samplePayloadKeys: [
                    'raw'
                ]
            }, {
                status: 400
            });
        }
        // Check if decrypted data is actually an object with expected fields
        if (typeof decryptedData !== 'object' || decryptedData === null) {
            console.error('Decrypted data is not an object:', decryptedData);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: 'error',
                message: 'Decrypted response is not a valid object',
                decryptedData: decryptedData,
                samplePayloadKeys: [
                    'raw'
                ]
            }, {
                status: 400
            });
        }
        // Extract payment status and transaction ID
        // Only proceed if decryption was successful
        if (decryptedData && decryptedData.status !== 'error') {
            const paymentStatus = decryptedData.status || decryptedData.paymentStatus || decryptedData.statusCode;
            const transactionId = decryptedData.txnId || decryptedData.transactionId || decryptedData.clientTxnId || '';
            const clientTxnId = decryptedData.clientTxnId || decryptedData.clientTransactionId || '';
            console.log('Payment status:', paymentStatus);
            console.log('Transaction ID:', transactionId);
            console.log('Client Transaction ID:', clientTxnId);
            // Map payment status from SabPaisa response
            const mapPaymentStatus = (paymentData)=>{
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
            };
            const statusInfo = mapPaymentStatus(decryptedData);
            // Debug: Log all available fields in decrypted data
            console.log('Available fields in decrypted data:', Object.keys(decryptedData));
            console.log('Looking for specific fields:');
            console.log('- payerName:', decryptedData.payerName, 'PAYER_NAME:', decryptedData.PAYER_NAME);
            console.log('- payerEmail:', decryptedData.payerEmail, 'PAYER_EMAIL:', decryptedData.PAYER_EMAIL);
            console.log('- statusCode:', decryptedData.statusCode, 'STATUS_CODE:', decryptedData.STATUS_CODE);
            console.log('- Full decrypted object:', JSON.stringify(decryptedData, null, 2));
            // Extract fields with multiple fallback options
            const extractField = (obj, fieldNames, defaultValue = '')=>{
                for (const fieldName of fieldNames){
                    if (obj[fieldName] !== undefined && obj[fieldName] !== null && obj[fieldName] !== '') {
                        return obj[fieldName];
                    }
                }
                return defaultValue;
            };
            // Build update payload for Site B with required fields
            const updatePayload = {
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
                // Required fields for Site B validation with multiple fallbacks
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
            console.log('Built payload for Site B:', updatePayload);
            console.log('Required fields check:');
            console.log('- payerName:', updatePayload.payerName, '(required)');
            console.log('- payerEmail:', updatePayload.payerEmail, '(required)');
            console.log('- statusCode:', updatePayload.statusCode, '(required)');
            // Send to Site B
            try {
                const siteBResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteAClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendTransactionToSiteB"])(updatePayload);
                console.log('Site B response:', siteBResponse);
                // Check if this is a browser request (redirect to response page)
                // or an API request (return JSON)
                const acceptHeader = request.headers.get('accept') || '';
                const isBrowserRequest = acceptHeader.includes('text/html') || request.headers.get('user-agent')?.includes('Mozilla');
                // If browser request, redirect to response page with parameters
                if (isBrowserRequest) {
                    const redirectUrl = new URL('/response', request.url);
                    redirectUrl.searchParams.set('encResponse', encResponse);
                    redirectUrl.searchParams.set('clientCode', clientCode);
                    redirectUrl.searchParams.set('success', statusInfo.status === 'success' ? 'true' : 'false');
                    console.log('Redirecting browser to response page:', redirectUrl.toString());
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl.toString(), {
                        status: 302
                    });
                }
                // For API requests, return JSON
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    status: 'success',
                    message: 'Payment callback processed successfully',
                    paymentStatus: statusInfo.status,
                    paymentMessage: statusInfo.message,
                    siteBResponse: siteBResponse
                }, {
                    status: 200
                });
            } catch (siteBError) {
                console.error('Error sending to Site B:', siteBError);
                // Check if this is a browser request
                const acceptHeader = request.headers.get('accept') || '';
                const isBrowserRequest = acceptHeader.includes('text/html') || request.headers.get('user-agent')?.includes('Mozilla');
                // If browser request, still redirect to response page even if Site B failed
                if (isBrowserRequest) {
                    const redirectUrl = new URL('/response', request.url);
                    redirectUrl.searchParams.set('encResponse', encResponse);
                    redirectUrl.searchParams.set('clientCode', clientCode);
                    redirectUrl.searchParams.set('success', 'false');
                    redirectUrl.searchParams.set('error', 'Failed to update Site B');
                    console.log('Redirecting browser to response page (Site B error):', redirectUrl.toString());
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl.toString(), {
                        status: 302
                    });
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    status: 'error',
                    message: 'Payment processed but failed to update Site B',
                    paymentStatus: statusInfo.status,
                    paymentMessage: statusInfo.message,
                    siteBError: siteBError.message
                }, {
                    status: 200
                }) // Still return 200 since payment was processed
                ;
            }
        } else {
            // If decryption returned an error object
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: 'error',
                message: 'Failed to decrypt payment response',
                error: decryptedData.message
            }, {
                status: 400
            });
        }
    } catch (error) {
        console.error('Payment callback error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: 'error',
            message: 'Internal server error',
            error: error.message
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    // Handle POST requests if needed (some payment gateways use POST)
    return GET(request);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__beabf6c5._.js.map