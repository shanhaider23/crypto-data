import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("DKK");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "DKK") setSymbol("Kr.");
    else if (currency === "EUR") setSymbol("€");
    else if (currency === "PKR") setSymbol("Rs.");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
