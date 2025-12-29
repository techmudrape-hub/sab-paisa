'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parsePaymentResponse } from 'sabpaisa-pg-dev';
import { sendTransactionToSiteB as sendViaSiteAClient } from '../../lib/siteAClient';

const ResponsePage = () => {
  const router = useRouter();
  const [response, setResponse] = useState([]);
  const [siteBStatus, setSiteBStatus] = useState(null);
  const [siteBMessage, setSiteBMessage] = useState('');
  const [decrypted, setDecrypted] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [paymentMessage, setPaymentMessage] = useState('');

  const SHARED_SECRET = process.env.SHARED_SECRET || 'mytransactionsecratekeyinder81';
  const CLIENT_TXN_ID = process.env.NEXT_PUBLIC_CLIENT_CODE || 'clientTxnId';

  /* ------------------- 1️⃣ Payment status mapper ------------------- */
  const mapPaymentStatus = (paymentData) => {
    const rawStatus = (paymentData.status || paymentData.STATUS || paymentData.paymentStatus || '').toString().toUpperCase();
    const statusCode = (paymentData.statusCode || paymentData.STATUS_CODE || paymentData.gatewayResponseCode || '').toString();
    const respMsg = (paymentData.sabpaisaMessage || paymentData.responseMessage || paymentData.RESPONSE_MESSAGE || paymentData.message || paymentData.bankMessage || '').toString();

    const isSuccess = ['SUCCESS', 'SUCCESSFUL', 'COMPLETED'].includes(rawStatus) || ['0000', '00'].includes(statusCode);
    const isFail = ['FAILED', 'FAILURE', 'CANCELLED', 'CANCELED', 'ERROR', 'REJECTED'].includes(rawStatus);

    if (isSuccess) return { status: 'success', message: respMsg || 'Payment completed successfully!' };
    if (isFail) return { status: 'cancelled', message: respMsg || 'Payment failed or cancelled.' };
    return { status: 'pending', message: 'Payment is being processed...' };
  };

  /* ------------------- 2️⃣ Send data to Site B ------------------- */
  // const sendToSiteB = async (paymentData) => {
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

  /* ------------------- 3️⃣ Parse and handle SabPaisa response ------------------- */
  useEffect(() => {
    const authKey = process.env.NEXT_PUBLIC_AUTH_KEY;
    const authIV = process.env.NEXT_PUBLIC_AUTH_IV;

    const parseResponse = async () => {
      try {
        const data = await parsePaymentResponse(authKey, authIV);
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
            metadata: { ...data },
            createdAt: new Date().toISOString(),
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
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', // send auth-token cookie so API can identify the user
                body: JSON.stringify({
                  amount: updatePayload.amount,
                  transactionId: updatePayload.referenceId,
                  sabpaisaTxnId: updatePayload.sabpaisaTxnId,
                  paymentData: {
                    statusCode: updatePayload.statusCode,
                    // normalize mappedStatus to "success" | "cancelled" | "pending"
                    mappedStatus: (statusInfo.status || '').toLowerCase(),
                    ...data,
                  },
                }),
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
    };

    parseResponse();
  }, []);

  /* ------------------- 4️⃣ UI ------------------- */
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ margin: 0 }}>Payment Response Details</h2>
        <button
          onClick={() => router.push('/pay-in')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0051cc'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
        >
          ← Back to Add Money
        </button>
      </div>

      {siteBStatus && (
        <div
          style={{
            marginBottom: '1rem',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: siteBStatus === 'success' ? '#d4edda' : '#f8d7da',
            border: `1px solid ${siteBStatus === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
            color: siteBStatus === 'success' ? '#155724' : '#721c24',
          }}
        >
          <strong>{siteBMessage}</strong>
        </div>
      )}

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th style={{ textAlign: 'left' }}>Field</th>
            <th style={{ textAlign: 'left' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {response.map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value === null ? <i style={{ color: 'gray' }}>N/A</i> : String(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsePage;
