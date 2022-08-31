import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import Bitcoin from './components/Bitcoin'
import { TransactionsProvider } from './context/TransactionContext';


ReactDOM.createRoot(document.getElementById('root')).render(

  <TransactionsProvider>
  
    <React.StrictMode>
  
    <App />
    
    
    
    </React.StrictMode>
  
    
  </TransactionsProvider>
  
  
  
)