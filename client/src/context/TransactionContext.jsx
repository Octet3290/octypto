import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';
export const TransactionContext = React.createContext();

const {ethereum } = window;

const getEtheruemContract = ()=> {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract=new ethers.Contract(contractAddress, contractABI, signer);

   return transactionsContract;
}
export const TransactionsProvider = ({children}) =>{

    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setformData] = useState({addressTo: '', amount: '', keyword: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    

    const handleChange = (e, name) => {
        setformData((prevState)=>({ ...prevState, [name]: e.target.value}));
    };

    const checkIfWalletIsConnected = async () =>{
    try {
            if(!ethereum) return alert("Please install metamask");
            const accounts  = await ethereum.request({method: 'eth_accounts' });

        if(accounts.length){
            setCurrentAccount(accounts[0]);
            //getAllTransactions();
        }
            
    }   catch (error) {
            console.log(error);
            throw new Error("no ethereum object")
            
        }
           
    };

    const connectWallet = async ()=>{
        try{
            if(!ethereum) return alert("Please install metamask");
            const accounts  = await ethereum.request({method: 'eth_requestAccounts',});
            setCurrentAccount(accounts[0]);
        }
        catch(error){
            console.log(error);
            throw new Error("no ethereum object")
        }
    };

    

    const sendTransaction = async ()=>{
        try {
            if(ethereum){

            const { addressTo, amount, keyword, message } = formData;
            const transactionsContract = getEtheruemContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({ 
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo, 
                    gas: '0x5208',//21000 GWEI
                    value: parsedAmount._hex, //0.00001

                }],
            });

            const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);
            
            const transactionsCount = await transactionsContract.getTransactionCount();
            setTransactionCount(transactionsCount.toNumber());
            
        }
    }catch (error) {
            console.log(error);
            throw new Error("no ethereum object")
            
        }
    };
    

    useEffect(()=>{
        checkIfWalletIsConnected();
    },[]);
    return(
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setformData, handleChange, sendTransaction }}>
        {children}
        </TransactionContext.Provider>
    );
};
