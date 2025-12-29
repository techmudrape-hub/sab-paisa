'use client';
import { useState } from 'react';
import PaymentStatus from '@/components/PaymentStatus';

export default function PaymentStatusDemo() {
  const [currentStatus, setCurrentStatus] = useState('pending');
  const [statusMessage, setStatusMessage] = useState('Payment is being processed...');

  const statuses = [
    {
      status: 'pending',
      message: 'Payment is being processed. Please wait...'
    },
    {
      status: 'success',
      message: 'Payment completed successfully!'
    },
    {
      status: 'cancelled',
      message: 'Payment was cancelled or failed. Please try again.'
    }
  ];

  const handleStatusChange = (newStatus) => {
    const statusInfo = statuses.find(s => s.status === newStatus);
    setCurrentStatus(newStatus);
    setStatusMessage(statusInfo.message);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Payment Status Demo</h1>
      <p>This page demonstrates the different payment status states:</p>
      
      {/* Status Controls */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Change Status:</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {statuses.map((statusInfo) => (
            <button
              key={statusInfo.status}
              onClick={() => handleStatusChange(statusInfo.status)}
              style={{
                padding: '10px 20px',
                backgroundColor: currentStatus === statusInfo.status ? '#0070f3' : '#f0f0f0',
                color: currentStatus === statusInfo.status ? 'white' : 'black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {statusInfo.status}
            </button>
          ))}
        </div>
      </div>

      {/* Payment Status Component */}
      <PaymentStatus 
        status={currentStatus} 
        message={statusMessage}
      />

      {/* Status Information */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h3>Status Information:</h3>
        <ul>
          <li><strong>Pending:</strong> Payment is being processed or waiting for confirmation</li>
          <li><strong>Success:</strong> Payment has been completed successfully</li>
          <li><strong>Cancelled:</strong> Payment was cancelled, failed, or rejected</li>
        </ul>
        
        <h4>Current Status Details:</h4>
        <p><strong>Status:</strong> {currentStatus}</p>
        <p><strong>Message:</strong> {statusMessage}</p>
      </div>

      {/* Integration Instructions */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e8f4fd', borderRadius: '8px' }}>
        <h3>Integration Notes:</h3>
        <p>The PaymentStatus component automatically handles:</p>
        <ul>
          <li>Visual indicators (icons, colors, animations)</li>
          <li>Status-specific messaging</li>
          <li>Loading animations for pending states</li>
          <li>Responsive design</li>
        </ul>
        
        <h4>Usage in Your App:</h4>
        <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px', overflow: 'auto' }}>
{`import PaymentStatus from '@/components/PaymentStatus';

<PaymentStatus 
  status="pending" 
  message="Payment is being processed..."
/>`}
        </pre>
      </div>
    </div>
  );
}
