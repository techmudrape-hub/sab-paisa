'use client';
import { useState, useEffect } from 'react';
import { submitPaymentForm } from "sabpaisa-pg-dev";
import { sendTransactionToSiteB } from '@/lib/siteBClient';
import PaymentStatus from '@/components/PaymentStatus';

const PaymentGatewayForm = () => {
  const [formState, setFormState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState('');

  // Initialize form state on client side to avoid hydration mismatch
  useEffect(() => {
    const clientCode = process.env.NEXT_PUBLIC_CLIENT_CODE || "INDR81";
    const transUserName = process.env.NEXT_PUBLIC_TRANS_USERNAME || "indrajeet@mudrape.com";
    const transUserPassword = process.env.NEXT_PUBLIC_TRANS_PASSWORD || "INDR81_SP23390";
    const authKey = process.env.NEXT_PUBLIC_AUTH_KEY || "doJx8Ihyb2s/sh1pbYEDfa6JdsogEYMXKEoPF/BEwrg=";
    const authIV = process.env.NEXT_PUBLIC_AUTH_IV || "iw/0vT01OWRph/rQplst/W7k423JXrgo4xBn3gXPsIDXTTXE461f4V4QYKGQ8wTe";
    
    // Generate unique clientTxnId
    const clientTxnId = `TXN${Date.now()}${Math.random().toString(36).substring(2, 7)}`;
    
    console.log("Client Code:", clientCode);
    console.log("Client Txn Id:", clientTxnId);

    const defaultValues = {
      clientCode,
      transUserName,
      transUserPassword,
      authKey,
      authIV,
      payerName: "Anand Kumar Shaw",
      payerEmail: "anand.kumar@sabpaisa.in",
      payerMobile: "6291312929",  
      amount: "1",
      amountType: "INR",
      clientTxnId,
      channelId: "npm",
      udf1: "", udf2: "", udf3: "", udf4: "", udf5: "",
      udf6: "", udf7: "", udf8: "", udf9: "", udf10: "",
      udf11: "", udf12: "", udf13: "", udf14: "", udf15: "",
      udf16: "", udf17: "", udf18: "", udf19: "", udf20: "",
      payerVpa: "", 
      modeTransfer: "", 
      byPassFlag: "",
      cardHolderName: "", 
      pan: "", 
      cardExpMonth: "", 
      cardExpYear: "", 
      cardType: "", 
      cvv: "",
      browserDetails: "", 
      bankId: "", 
      env: "PROD", 
      callbackUrl: "http://localhost:3000/response",
    };

    setFormState(defaultValues);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPaymentStatus('pending');
    setPaymentMessage('Initializing payment...');

    try {
      // Validate required fields
      if (!formState.payerName || !formState.payerEmail || !formState.payerMobile || !formState.userId) {
        throw new Error('Please fill all required fields including User ID');
      }

      if (!formState.amount || parseFloat(formState.amount) <= 0) {
        throw new Error('Please enter a valid amount');
      }

      // Save initial transaction to Site B before redirecting
      console.log('[SAVING INITIAL TRANSACTION]', formState.clientTxnId);

      try {
        const initialTransaction = {
          txnId: formState.clientTxnId,
          referenceId: formState.clientTxnId,
          amount: parseFloat(formState.amount),
          status: formState.status,
          statusCode: formState.statusCode, // Pending status code
          responseMessage: 'Payment initiated',
          userId: formState.userId, // Use the userId from form instead of payerEmail
          type: 'PAYMENT',
          description: 'Payment initiated',
          payerName: formState.payerName,
          payerMobile: formState.payerMobile,
          payerEmail: formState.payerEmail,
          metadata: {
            clientCode: formState.clientCode,
            clientTxnId: formState.clientTxnId,
            amount: formState.amount,
            amountType: formState.amountType,
            userId: formState.userId, // Store userId in metadata for retrieval in response
            initiatedAt: new Date().toISOString(),
          },
          createdAt: new Date().toISOString(),
        };

        await sendTransactionToSiteB(initialTransaction);
        console.log('[TRANSACTION SAVED]', initialTransaction);
      } catch (err) {
        console.warn('[FAILED TO SAVE INITIAL TRANSACTION]', err);
        // Continue even if save fails - callback will handle it
      }

      // Redirect to payment gateway
      setPaymentMessage('Redirecting to payment gateway...');
      console.log('[REDIRECTING TO SABPAISA]', formState);

      // Submit payment form - this will redirect user
      submitPaymentForm(formState);
      
      // If redirect doesn't happen, show loading
      setTimeout(() => {
        setLoading(false);
      }, 3000);

    } catch (err) {
      console.error('[PAYMENT INITIATION ERROR]', err);
      setError(err.message || 'Failed to initialize payment');
      setPaymentStatus('cancelled');
      setPaymentMessage('Failed to initialize payment');
      setLoading(false);
    }
  };

  // Don't render form until state is initialized
  if (!formState.clientCode) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Loading payment form...</p>
      </div>
    );
  }

  return (
    <>
      {/* Navigation Links */}
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
        <h1 style={{ margin: '0 0 10px 0' }}>SabPaisa Payment Integration</h1>
        <div style={{ marginTop: '10px' }}>
          <a 
            href="/transactions" 
            style={{ 
              margin: '0 10px', 
              padding: '10px 20px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '5px',
              display: 'inline-block'
            }}
          >
            View Transactions
          </a>
          <a 
            href="/response" 
            style={{ 
              margin: '0 10px', 
              padding: '10px 20px', 
              backgroundColor: '#28a745', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '5px',
              display: 'inline-block'
            }}
          >
            Payment Response
          </a>
        </div>
      </div>

      {/* Payment Status Display */}
      {paymentStatus && (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <PaymentStatus 
            status={paymentStatus} 
            message={paymentMessage}
          />
        </div>
      )}

      <form 
        onSubmit={handleSubmit} 
        style={{ 
          padding: '20px', 
          maxWidth: '600px', 
          margin: '20px auto',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }} 
        autoComplete="off"
      >
        <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>Payment Details</h2>
        
        {/* Essential Fields - Highlighted */}
        <div style={{ 
          backgroundColor: '#f0f8ff', 
          padding: '15px', 
          borderRadius: '5px', 
          marginBottom: '20px',
          border: '1px solid #b3d9ff'
        }}>
          <h3 style={{ marginTop: 0, color: '#0066cc' }}>Required Information</h3>
          
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Payer Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="payerName"
              value={formState.payerName || ''}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              autoComplete="off"
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Payer Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              name="payerEmail"
              value={formState.payerEmail || ''}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              autoComplete="off"
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Payer Mobile <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="tel"
              name="payerMobile"
              value={formState.payerMobile || ''}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              autoComplete="off"
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Amount (INR) <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="number"
              name="amount"
              value={formState.amount || ''}
              onChange={handleChange}
              required
              min="1"
              step="0.01"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              autoComplete="off"
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              User ID <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="userId"
              value={formState.userId || ''}
              onChange={handleChange}
              required
              placeholder="Enter User ID for Site B"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              autoComplete="off"
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Transaction ID
            </label>
            <input
              type="text"
              name="clientTxnId"
              value={formState.clientTxnId || ''}
              onChange={handleChange}
              readOnly
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '4px', 
                border: '1px solid #ccc',
                backgroundColor: '#f5f5f5'
              }}
              autoComplete="off"
            />
          </div>
        </div>

        {/* Optional/Technical Fields - Collapsible */}
        <details style={{ marginBottom: '20px' }}>
          <summary style={{ 
            cursor: 'pointer', 
            fontWeight: 'bold', 
            padding: '10px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px'
          }}>
            Advanced Settings (Optional)
          </summary>
          <div style={{ marginTop: '10px', padding: '10px' }}>
            {Object.keys(formState)
              .filter(key => !['payerName', 'payerEmail', 'payerMobile', 'amount', 'clientTxnId', 'userId'].includes(key))
              .map((key) => (
                <div key={key} style={{ marginBottom: 10 }}>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '12px', color: '#666' }}>
                    {key}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={formState[key] ?? ''}
                    onChange={handleChange}
                    style={{ 
                      width: '100%', 
                      padding: '6px', 
                      fontSize: '12px',
                      borderRadius: '4px',
                      border: '1px solid #ddd'
                    }}
                    autoComplete="off"
                  />
                </div>
              ))}
          </div>
        </details>

        {/* Error Display */}
        {error && (
          <div style={{ 
            marginBottom: '15px', 
            padding: '12px', 
            backgroundColor: '#ffebee', 
            border: '1px solid #f44336',
            borderRadius: '5px',
            color: '#c62828'
          }}>
            <strong>⚠️ Error:</strong> {error}
          </div>
        )}
        
        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            width: '100%',
            padding: '15px 20px',
            backgroundColor: loading ? '#ccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => !loading && (e.target.style.backgroundColor = '#0051cc')}
          onMouseOut={(e) => !loading && (e.target.style.backgroundColor = '#0070f3')}
        >
          {loading ? '⏳ Processing...' : '💳 Proceed to Pay'}
        </button>

        <p style={{ 
          marginTop: '15px', 
          fontSize: '12px', 
          color: '#666', 
          textAlign: 'center' 
        }}>
          🔒 Your payment is secure and encrypted
        </p>
      </form>
    </>
  );
};

export default PaymentGatewayForm;