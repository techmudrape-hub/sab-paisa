'use client';

/**
 * Payment Status Component
 * Simple client component for displaying payment status with styling
 * Uses 'use client' only for CSS-in-JS styling, no client-side logic needed
 */
const PaymentStatus = ({ status, message }) => {
  const currentStatus = status || 'pending';
  const statusMessage = message || '';

  const getStatusConfig = (status) => {
    switch (status.toLowerCase()) {
      case 'success':
      case 'completed':
      case 'paid':
        return {
          color: '#4caf50',
          backgroundColor: '#e8f5e8',
          borderColor: '#4caf50',
          icon: '✅',
          text: 'Payment Successful',
          message: statusMessage || 'Your payment has been processed successfully!'
        };
      case 'cancelled':
      case 'canceled':
      case 'failed':
      case 'error':
        return {
          color: '#f44336',
          backgroundColor: '#ffebee',
          borderColor: '#f44336',
          icon: '❌',
          text: 'Payment Failed',
          message: statusMessage || 'Payment was cancelled or failed. Please try again.'
        };
      case 'pending':
      case 'processing':
      case 'in_progress':
        return {
          color: '#ff9800',
          backgroundColor: '#fff3e0',
          borderColor: '#ff9800',
          icon: '⏳',
          text: 'Payment Pending',
          message: statusMessage || 'Your payment is being processed. Please wait...'
        };
      default:
        return {
          color: '#9e9e9e',
          backgroundColor: '#f5f5f5',
          borderColor: '#9e9e9e',
          icon: '❓',
          text: 'Unknown Status',
          message: statusMessage || 'Payment status is unknown.'
        };
    }
  };

  const config = getStatusConfig(currentStatus);

  return (
    <div style={{
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px',
      border: `2px solid ${config.borderColor}`,
      backgroundColor: config.backgroundColor,
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        fontSize: '48px',
        marginBottom: '10px'
      }}>
        {config.icon}
      </div>
      
      <h2 style={{
        color: config.color,
        margin: '0 0 10px 0',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        {config.text}
      </h2>
      
      <p style={{
        color: config.color,
        margin: '0 0 15px 0',
        fontSize: '16px',
        lineHeight: '1.4'
      }}>
        {config.message}
      </p>

      {currentStatus === 'pending' && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15px'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            border: `2px solid ${config.color}`,
            borderTop: '2px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginRight: '10px'
          }}></div>
          <span style={{ color: config.color, fontSize: '14px' }}>
            Processing...
          </span>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PaymentStatus;
