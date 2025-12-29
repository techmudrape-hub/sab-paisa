(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/siteAClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendTransactionToSiteB": ()=>sendTransactionToSiteB
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const sendTransactionToSiteB = async (transactionPayload)=>{
    try {
        const SITE_A_PROXY_ENDPOINT = "/api/transactions";
        const BEARER_TOKEN = ("TURBOPACK compile-time value", "my-client-token") || "testtoken123";
        const SHARED_SECRET = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SHARED_SECRET || "mytransactionsecratekeyinder81";
        // Ensure complete payload
        const completePayload = {
            txnId: transactionPayload.txnId || "TXN-".concat(Date.now()),
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
                "Authorization": "Bearer ".concat(BEARER_TOKEN),
                "x-shared-secret": SHARED_SECRET
            },
            body: JSON.stringify(completePayload)
        });
        const responseText = await response.text();
        console.log("Raw Response:", responseText);
        if (!response.ok) {
            throw new Error("Site B Error (Status ".concat(response.status, "): ").concat(responseText));
        }
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/response/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sabpaisa$2d$pg$2d$dev$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sabpaisa-pg-dev/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteAClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/siteAClient.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ResponsePage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [siteBStatus, setSiteBStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [siteBMessage, setSiteBMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [decrypted, setDecrypted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paymentStatus, setPaymentStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('pending');
    const [paymentMessage, setPaymentMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const SHARED_SECRET = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SHARED_SECRET || 'mytransactionsecratekeyinder81';
    const CLIENT_TXN_ID = ("TURBOPACK compile-time value", "INDR81") || 'clientTxnId';
    /* ------------------- 1️⃣ Payment status mapper ------------------- */ const mapPaymentStatus = (paymentData)=>{
        const rawStatus = (paymentData.status || paymentData.STATUS || paymentData.paymentStatus || '').toString().toUpperCase();
        const statusCode = (paymentData.statusCode || paymentData.STATUS_CODE || paymentData.gatewayResponseCode || '').toString();
        const respMsg = (paymentData.sabpaisaMessage || paymentData.responseMessage || paymentData.RESPONSE_MESSAGE || paymentData.message || paymentData.bankMessage || '').toString();
        const isSuccess = [
            'SUCCESS',
            'SUCCESSFUL',
            'COMPLETED'
        ].includes(rawStatus) || [
            '0000',
            '00'
        ].includes(statusCode);
        const isFail = [
            'FAILED',
            'FAILURE',
            'CANCELLED',
            'CANCELED',
            'ERROR',
            'REJECTED'
        ].includes(rawStatus);
        if (isSuccess) return {
            status: 'success',
            message: respMsg || 'Payment completed successfully!'
        };
        if (isFail) return {
            status: 'cancelled',
            message: respMsg || 'Payment failed or cancelled.'
        };
        return {
            status: 'pending',
            message: 'Payment is being processed...'
        };
    };
    /* ------------------- 2️⃣ Send data to Site B ------------------- */ // const sendToSiteB = async (paymentData) => {
    //   try {
    //     const transactionPayload = {
    //       txnId: paymentData.clientTxnId || paymentData.CLIENT_TXN_ID || paymentData.txnId || '',
    //       sabpaisaTxnId: paymentData.sabpaisaTxnId || paymentData.SABPAISA_TXN_ID || paymentData.txnId || '',
    //       referenceId: paymentData.clientTxnId || paymentData.CLIENT_TXN_ID || paymentData.txnId || '',
    //       amount: Number(paymentData.amount) || 0,
    //       status: paymentData.status || 'UNKNOWN',
    //       responseMessage: paymentData.sabpaisaMessage || paymentData.responseMessage || paymentData.message || paymentData.bankMessage || '',
    //       userId: paymentData.payerEmail || paymentData.userId || '',
    //       type: paymentData.type || 'PAYMENT',
    //       description: paymentData.description || 'Payment',
    //       metadata: paymentData.metadata || {},
    //       createdAt: paymentData.createdAt || new Date().toISOString(),
    //     };
    //     console.log('============== SENDING TO SITE B ==============');
    //     console.log('Payload ::', transactionPayload);
    //     // Send to Site B
    //     const siteBResponse = await sendViaSiteAClient(transactionPayload);
    //     console.log('Site B Response:', siteBResponse);
    //     // ALSO send to Pay777 HAB callback URL
    //     const habCallbackUrl = 'https://hab.pay777.co.uk/sab-callback';
    //     const habResponse = await fetch(habCallbackUrl, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(transactionPayload),
    //     });
    //     console.log('HAB Callback Response Status:', habResponse.status);
    //     setSiteBStatus('success');
    //     setSiteBMessage('Transaction sent to Site B & HAB successfully.');
    //   } catch (error) {
    //     console.error('Error forwarding transaction:', error);
    //     setSiteBStatus('error');
    //     setSiteBMessage('Error sending transaction to Site B or HAB.');
    //   }
    // };
    /* ------------------- 3️⃣ Parse and handle SabPaisa response ------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResponsePage.useEffect": ()=>{
            const authKey = ("TURBOPACK compile-time value", "doJx8Ihyb2s/sh1pbYEDfa6JdsogEYMXKEoPF/BEwrg=");
            const authIV = ("TURBOPACK compile-time value", "iw/0vT01OWRph/rQplst/W7k423JXrgo4xBn3gXPsIDXTTXE461f4V4QYKGQ8wTe");
            const parseResponse = {
                "ResponsePage.useEffect.parseResponse": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sabpaisa$2d$pg$2d$dev$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePaymentResponse"])(authKey, authIV);
                        console.log('🔑 Decrypted response:', data);
                        setDecrypted(data || {});
                        setResponse(data && typeof data === 'object' ? Object.entries(data) : []);
                        if (data && typeof data === 'object') {
                            const statusInfo = mapPaymentStatus(data);
                            setPaymentStatus(statusInfo.status);
                            setPaymentMessage(statusInfo.message);
                            const updatePayload = {
                                txnId: data.clientTxnId || data.CLIENT_TXN_ID || data.txnId || '',
                                sabpaisaTxnId: data.sabpaisaTxnId || data.SABPAISA_TXN_ID || data.txnId || '',
                                referenceId: data.clientTxnId || data.CLIENT_TXN_ID || data.txnId || '',
                                amount: Number(data.amount) || 0,
                                status: statusInfo.status === 'success' ? 'SUCCESS' : statusInfo.status === 'cancelled' ? 'FAILED' : 'PENDING',
                                responseMessage: data.sabpaisaMessage || data.responseMessage || data.message || data.bankMessage || statusInfo.message,
                                userId: data.payerEmail || data.userId || '',
                                type: data.type || 'PAYMENT',
                                description: data.description || 'Payment',
                                payerName: data.payerName || data.PAYER_NAME || 'Unknown User',
                                payerEmail: data.payerEmail || data.PAYER_EMAIL || data.userId || '',
                                statusCode: data.statusCode || data.STATUS_CODE || data.gatewayResponseCode || (statusInfo.status === 'success' ? '0000' : '9999'),
                                metadata: {
                                    ...data
                                },
                                createdAt: new Date().toISOString()
                            };
                            // NOTE: sendToSiteB is commented out - if needed, uncomment the function above
                            // console.log(`[RESPONSE] Sending to Site B & HAB...`);
                            // await sendToSiteB(updatePayload);
                            // 4️⃣ Also credit the authenticated user's wallet inside our app
                            // We call our secure transactions API which derives userId from auth-token.
                            if (updatePayload.amount > 0) {
                                try {
                                    const response = await fetch('/api/transactions', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        credentials: 'include',
                                        body: JSON.stringify({
                                            amount: updatePayload.amount,
                                            transactionId: updatePayload.referenceId,
                                            sabpaisaTxnId: updatePayload.sabpaisaTxnId,
                                            paymentData: {
                                                statusCode: updatePayload.statusCode,
                                                // normalize mappedStatus to "success" | "cancelled" | "pending"
                                                mappedStatus: (statusInfo.status || '').toLowerCase(),
                                                ...data
                                            }
                                        })
                                    });
                                    const result = await response.json();
                                    if (response.ok) {
                                        if (result.success) {
                                            console.log('✅ Transaction saved successfully and wallet credited:', result);
                                        } else {
                                            console.log('⚠️ Transaction saved but payment not successful:', result);
                                        }
                                    } else {
                                        console.error('❌ Failed to save transaction:', result);
                                    }
                                } catch (walletError) {
                                    console.error('❌ Failed to save transaction:', walletError);
                                }
                            }
                        }
                    } catch (error) {
                        console.error('Error parsing payment response:', error);
                        setPaymentStatus('cancelled');
                        setPaymentMessage('Error processing payment response');
                    }
                }
            }["ResponsePage.useEffect.parseResponse"];
            parseResponse();
        }
    }["ResponsePage.useEffect"], []);
    /* ------------------- 4️⃣ UI ------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '2rem',
            fontFamily: 'Arial'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            margin: 0
                        },
                        children: "Payment Response Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 162,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/pay-in'),
                        style: {
                            padding: '10px 20px',
                            backgroundColor: '#0070f3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s'
                        },
                        onMouseOver: (e)=>e.target.style.backgroundColor = '#0051cc',
                        onMouseOut: (e)=>e.target.style.backgroundColor = '#0070f3',
                        children: "← Back to Add Money"
                    }, void 0, false, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/response/page.js",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            siteBStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '1rem',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: siteBStatus === 'success' ? '#d4edda' : '#f8d7da',
                    border: "1px solid ".concat(siteBStatus === 'success' ? '#c3e6cb' : '#f5c6cb'),
                    color: siteBStatus === 'success' ? '#155724' : '#721c24'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: siteBMessage
                }, void 0, false, {
                    fileName: "[project]/src/app/response/page.js",
                    lineNumber: 194,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/response/page.js",
                lineNumber: 184,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                border: "1",
                cellPadding: "10",
                cellSpacing: "0",
                style: {
                    width: '100%',
                    borderCollapse: 'collapse'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        style: {
                            backgroundColor: '#f2f2f2'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        textAlign: 'left'
                                    },
                                    children: "Field"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/response/page.js",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        textAlign: 'left'
                                    },
                                    children: "Value"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/response/page.js",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/response/page.js",
                            lineNumber: 200,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 199,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: response.map((param)=>{
                            let [key, value] = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: key
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/response/page.js",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: value === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            style: {
                                                color: 'gray'
                                            },
                                            children: "N/A"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/response/page.js",
                                            lineNumber: 209,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)) : String(value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/response/page.js",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, key, true, {
                                fileName: "[project]/src/app/response/page.js",
                                lineNumber: 207,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/response/page.js",
                        lineNumber: 205,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/response/page.js",
                lineNumber: 198,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/response/page.js",
        lineNumber: 160,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ResponsePage, "27tCuSIOPKQbWud+O3Dq4vpTkYY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ResponsePage;
const __TURBOPACK__default__export__ = ResponsePage;
var _c;
__turbopack_context__.k.register(_c, "ResponsePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/sabpaisa-pg-dev/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parsePaymentResponse": ()=>i,
    "submitPaymentForm": ()=>c
});
const e = [];
for(let t = 0; t < 256; ++t)e.push((t + 256).toString(16).slice(1));
let t;
const a = new Uint8Array(16);
var r = {
    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};
function n(n, o, s) {
    var _n_rng;
    if (r.randomUUID && !n) return r.randomUUID();
    var _random, _ref;
    const d = (_ref = (_random = (n = n || {}).random) !== null && _random !== void 0 ? _random : (_n_rng = n.rng) === null || _n_rng === void 0 ? void 0 : _n_rng.call(n)) !== null && _ref !== void 0 ? _ref : function() {
        if (!t) {
            if ("undefined" == typeof crypto || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            t = crypto.getRandomValues.bind(crypto);
        }
        return t(a);
    }();
    if (d.length < 16) throw new Error("Random bytes length must be >= 16");
    return d[6] = 15 & d[6] | 64, d[8] = 63 & d[8] | 128, function(t) {
        let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return (e[t[a + 0]] + e[t[a + 1]] + e[t[a + 2]] + e[t[a + 3]] + "-" + e[t[a + 4]] + e[t[a + 5]] + "-" + e[t[a + 6]] + e[t[a + 7]] + "-" + e[t[a + 8]] + e[t[a + 9]] + "-" + e[t[a + 10]] + e[t[a + 11]] + e[t[a + 12]] + e[t[a + 13]] + e[t[a + 14]] + e[t[a + 15]]).toLowerCase();
    }(d);
}
const o = {
    async encrypt (e, t, a) {
        const r = s(e), n = s(t), o = crypto.getRandomValues(new Uint8Array(12)), d = await crypto.subtle.importKey("raw", r, "AES-GCM", !1, [
            "encrypt"
        ]), c = await crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: o,
            tagLength: 128
        }, d, (new TextEncoder).encode(a)), i = new Uint8Array(o.length + c.byteLength);
        i.set(o), i.set(new Uint8Array(c), o.length);
        const u = await crypto.subtle.importKey("raw", n, {
            name: "HMAC",
            hash: "SHA-384"
        }, !1, [
            "sign"
        ]), p = await crypto.subtle.sign("HMAC", u, i), l = new Uint8Array(p.byteLength + i.length);
        return l.set(new Uint8Array(p)), l.set(i, p.byteLength), f = l, Array.from(f).map((e)=>e.toString(16).padStart(2, "0").toUpperCase()).join("");
        //TURBOPACK unreachable
        ;
        var f;
    },
    async decrypt (e, t, a) {
        const r = s(e), n = s(t), o = function(e) {
            const t = new Uint8Array(e.length / 2);
            for(let a = 0; a < e.length; a += 2)t[a / 2] = parseInt(e.substring(a, a + 2), 16);
            return t;
        }(a);
        if (o.length < 76) throw new Error("Invalid ciphertext length");
        const d = o.slice(0, 48), c = o.slice(48), i = await crypto.subtle.importKey("raw", n, {
            name: "HMAC",
            hash: "SHA-384"
        }, !1, [
            "verify"
        ]);
        if (!await crypto.subtle.verify("HMAC", i, d, c)) throw new Error("HMAC validation failed. Data may be tampered!");
        const u = c.slice(0, 12), p = c.slice(12), l = await crypto.subtle.importKey("raw", r, "AES-GCM", !1, [
            "decrypt"
        ]), f = await crypto.subtle.decrypt({
            name: "AES-GCM",
            iv: u,
            tagLength: 128
        }, l, p);
        return (new TextDecoder).decode(f);
    }
};
function s(e) {
    return Uint8Array.from(atob(e), (e)=>e.charCodeAt(0));
}
const d = "https://stage-securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1", c = async (param)=>{
    let { clientCode: e, transUserName: t, transUserPassword: a, callbackUrl: r, authKey: s, authIV: c, payerName: i, payerEmail: u, payerMobile: p, amount: l, udf1: f, udf2: y, udf3: m, udf4: h, udf5: w, udf6: b, udf7: g, udf8: U, udf9: A, udf10: E, udf11: C, udf12: v, udf13: I, udf14: S, udf15: P, udf16: M, udf17: x, udf18: D, udf19: L, udf20: H, payerVpa: R, modeTransfer: T, byPassFlag: V, cardHolderName: N, pan: K, cardExpMonth: k, cardExpYear: G, cardType: j, cvv: F, browserDetails: O, bankId: Y, channelId: q, clientTxnId: z, env: B } = param;
    const J = z || n().replace(/-/g, "").slice(0, 20).toUpperCase(), Q = new URLSearchParams({
        payerName: i,
        payerEmail: u,
        payerMobile: p,
        clientTxnId: J,
        amount: l,
        clientCode: e,
        transUserName: t,
        transUserPassword: a,
        callbackUrl: r,
        channelId: q,
        udf1: f,
        udf2: y,
        udf3: m,
        udf4: h,
        udf5: w,
        udf6: b,
        udf7: g,
        udf8: U,
        udf9: A,
        udf10: E,
        udf11: C,
        udf12: v,
        udf13: I,
        udf14: S,
        udf15: P,
        udf16: M,
        udf17: x,
        udf18: D,
        udf19: L,
        udf20: H,
        payerVpa: R,
        modeTransfer: T,
        byPassFlag: V,
        cardHolderName: N,
        pan: K,
        cardExpMonth: k,
        cardExpYear: G,
        cardType: j,
        cvv: F,
        browserDetails: O,
        bankId: Y
    }), W = await o.encrypt(s, c, Q.toString());
    if (!W) throw new Error("Encryption failed");
    {
        const t = document.createElement("form");
        t.method = "POST", t.action = ((e)=>({
                uat: "https://secure.sabpaisa.in/SabPaisa/sabPaisaInit?v=1",
                stag: d,
                prod: "https://securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1"
            })[e] || d)(B.toLowerCase());
        const a = (e, t)=>{
            const a = document.createElement("input");
            return a.type = "hidden", a.name = e, a.value = t, a;
        };
        t.appendChild(a("encData", W)), t.appendChild(a("clientCode", e)), document.body.appendChild(t), t.submit();
    }
}, i = async (e, t)=>{
    const a = new URLSearchParams(window.location.search).get("encResponse");
    if (e && t && a) {
        const r = ((e)=>{
            const t = Object.fromEntries(new URLSearchParams(e));
            for(const e in t)"null" === t[e] && (t[e] = null);
            return t;
        })(await o.decrypt(e, t, a.replaceAll(" ", "+")));
        if (r) return r;
        throw new Error("Invalid response data");
    }
};
;
 //# sourceMappingURL=index.mjs.map
}),
}]);

//# sourceMappingURL=_54d4c709._.js.map