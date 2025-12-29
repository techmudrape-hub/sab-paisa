export const sendTransactionToSiteB = async (transactionPayload) => {
  try {
    const SITE_A_PROXY_ENDPOINT = "/api/transactions";
    const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN || "testtoken123";
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
      createdAt: transactionPayload.createdAt || new Date().toISOString(),
    };

    console.log("Sending to Site B:", SITE_A_PROXY_ENDPOINT, completePayload);

    const response = await fetch(SITE_A_PROXY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${BEARER_TOKEN}`,
        "x-shared-secret": SHARED_SECRET,
      },
      body: JSON.stringify(completePayload),
    });

    const responseText = await response.text();
    console.log("Raw Response:", responseText);

    if (!response.ok) {
      throw new Error(`Site B Error (Status ${response.status}): ${responseText}`);
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { raw: responseText };
    }

    console.log("Parsed Response:", data);
    return data;
  } catch (error) {
    console.error("Failed to send transaction:", error.message);
    throw error;
  }
};
