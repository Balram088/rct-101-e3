import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [selectedIteam, selectedIteam] = useState([]);

  return <CartContext.Provider value={0}>{children}</CartContext.Provider>;
};
