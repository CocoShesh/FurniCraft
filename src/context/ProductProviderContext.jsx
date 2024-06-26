// ProductContext.js
import React, { createContext, useContext } from "react";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProviderContext = ({ children }) => {
  const products = [];

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
