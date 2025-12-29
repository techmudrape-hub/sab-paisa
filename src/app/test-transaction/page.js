'use client'

import { useState } from 'react'
import { sendTransactionToSiteB } from '@/lib/siteBClient'

export default function TestTransaction() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleSendTransaction = async () => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const transactionData = {
        referenceId: `REF-${Date.now()}`,
        amount: 1999,
        type: 'SALE',
        description: 'Test transaction from Next.js app',
        metadata: { 
          orderId: `O-${Date.now()}`,
          customerId: 'CUST-123',
          source: 'nextjs-app'
        },
        createdAt: new Date().toISOString()
      }

      console.log('Sending transaction to Site B:', transactionData)
      const response = await sendTransactionToSiteB(transactionData)
      setResult(response)
      console.log('Site B response:', response)
    } catch (err) {
      setError(err.message)
      console.error('Transaction failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Test Transaction to Site B</h1>
      <p>This will send transaction data to: <code>http://localhost:3000/transactions</code></p>
      
      <button 
        onClick={handleSendTransaction}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Sending...' : 'Send Test Transaction'}
      </button>

      {error && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#ffebee', 
          border: '1px solid #f44336',
          borderRadius: '5px',
          color: '#c62828'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {result && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#e8f5e8', 
          border: '1px solid #4caf50',
          borderRadius: '5px',
          color: '#2e7d32'
        }}>
          <strong>Success! Site B Response:</strong>
          <pre style={{ marginTop: '10px', fontSize: '12px', overflow: 'auto' }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <h3>Transaction Data Structure:</h3>
        <ul>
          <li><strong>referenceId:</strong> Unique transaction reference</li>
          <li><strong>amount:</strong> Transaction amount (1999)</li>
          <li><strong>type:</strong> Transaction type (SALE)</li>
          <li><strong>description:</strong> Transaction description</li>
          <li><strong>metadata:</strong> Additional data (orderId, customerId, source)</li>
          <li><strong>createdAt:</strong> ISO timestamp</li>
        </ul>
        <p><strong>Security:</strong> Data is signed with HMAC-SHA256 using SHARED_SECRET</p>
      </div>
    </div>
  )
}
