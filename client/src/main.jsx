import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import App from './App';
import { TransactionsProvider } from './context/TransactionContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionsProvider>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </TransactionsProvider>
  
)