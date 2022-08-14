import React, { useState, useEffect, createContext } from "react";

export const TransactionContext = createContext();

let eth;

if (typeof window !== "undefined") {
  eth = window.ethereum;
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  console.log("Account ", currentAccount);

  useEffect(() => {
    checkIfWalletIsConnected();
    console.log("Wallet is already connected !");
  }, []);

  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert("Please install metamask");

      const accounts = await metamask.request({
        method: "eth_requestAccounts",
      }); // Connect
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      throw new Error(`No ethereum Object.`);
    }
  };

  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert("Please install metamask");

      const accounts = await metamask.request({
        method: "eth_accounts",
      }); // Connect

      if (accounts?.length) {
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.error(error);
      throw new Error(`No ethereum Object.`);
    }
  };

  return (
    <TransactionContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
