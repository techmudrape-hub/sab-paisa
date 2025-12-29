'use client';
import { useState, useEffect } from 'react';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTransactions = async () => {
        try {
            const response = await fetch('/api/transactions');
            if (response.ok) {
                const data = await response.json();
                setTransactions(data);
            } else {
                console.error('Failed to fetch transactions');
            }
        } catch (error) {
            console.error('Error fetching transactions:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    const getStatusColor = (status) => {
        switch (status?.toUpperCase()) {
            case 'SUCCESS':
                return { backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb' };
            case 'FAILED':
                return { backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' };
            case 'PENDING':
                return { backgroundColor: '#fff3cd', color: '#856404', border: '1px solid #ffeaa7' };
            default:
                return { backgroundColor: '#e2e3e5', color: '#383d41', border: '1px solid #d6d8db' };
        }
    };

    if (loading) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Loading transactions...</h2>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <h2>Transaction History</h2>
            <p>Total transactions: {transactions.length}</p>
            
            <div style={{ marginBottom: '1rem' }}>
                <button 
                    onClick={fetchTransactions}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Refresh
                </button>
            </div>

            {transactions.length === 0 ? (
                <p>No transactions found.</p>
            ) : (
                <div style={{ overflowX: 'auto' }}>
                    <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ backgroundColor: '#f2f2f2' }}>
                            <tr>
                                <th style={{ textAlign: 'left' }}>Txn ID</th>
                                <th style={{ textAlign: 'left' }}>Status</th>
                                <th style={{ textAlign: 'left' }}>Amount</th>
                                <th style={{ textAlign: 'left' }}>User</th>
                                <th style={{ textAlign: 'left' }}>Response Message</th>
                                <th style={{ textAlign: 'left' }}>Created At</th>
                                <th style={{ textAlign: 'left' }}>Updated At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((txn, index) => (
                                <tr key={txn.txnId || index}>
                                    <td>{txn.txnId || 'N/A'}</td>
                                    <td>
                                        <span 
                                            style={{
                                                padding: '5px 10px',
                                                borderRadius: '3px',
                                                fontSize: '12px',
                                                fontWeight: 'bold',
                                                ...getStatusColor(txn.status)
                                            }}
                                        >
                                            {txn.status || 'UNKNOWN'}
                                        </span>
                                    </td>
                                    <td>{txn.amount || 'N/A'}</td>
                                    <td>{txn.userId || 'N/A'}</td>
                                    <td style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
                                        {txn.responseMessage || 'N/A'}
                                    </td>
                                    <td>{txn.createdAt ? new Date(txn.createdAt).toLocaleString() : 'N/A'}</td>
                                    <td>{txn.updatedAt ? new Date(txn.updatedAt).toLocaleString() : 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TransactionsPage;
