import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'data', 'transactions.json');

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.dirname(DB_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read transactions from file
export const readTransactions = () => {
  try {
    ensureDataDir();
    if (!fs.existsSync(DB_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading transactions:', error);
    return [];
  }
};

// Write transactions to file
export const writeTransactions = (transactions) => {
  try {
    ensureDataDir();
    fs.writeFileSync(DB_FILE, JSON.stringify(transactions, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing transactions:', error);
    return false;
  }
};

// Save a single transaction
export const saveTransaction = (transactionData) => {
  try {
    const transactions = readTransactions();
    
    // Check if transaction already exists (by txnId)
    const existingIndex = transactions.findIndex(t => t.txnId === transactionData.txnId);
    
    if (existingIndex >= 0) {
      // Update existing transaction
      transactions[existingIndex] = {
        ...transactions[existingIndex],
        ...transactionData,
        updatedAt: new Date().toISOString()
      };
    } else {
      // Add new transaction
      transactions.push({
        ...transactionData,
        createdAt: transactionData.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }
    
    const success = writeTransactions(transactions);
    if (success) {
      console.log(`Transaction ${transactionData.txnId} saved with status: ${transactionData.status}`);
    }
    return success;
  } catch (error) {
    console.error('Error saving transaction:', error);
    return false;
  }
};

// Get transaction by txnId
export const getTransaction = (txnId) => {
  const transactions = readTransactions();
  return transactions.find(t => t.txnId === txnId);
};

// Get all transactions
export const getAllTransactions = () => {
  return readTransactions();
};
