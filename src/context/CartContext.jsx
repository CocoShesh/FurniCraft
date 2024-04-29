import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    const exisitingIndex = cartItems.findIndex(
      existingItem => existingItem.id === item.id
    );
    if (exisitingIndex !== -1) {
      const updatedCart = [...cartItems];
      const existingItem = updatedCart[exisitingIndex];
      existingItem.quantity += item.quantity;
      existingItem.price += item.price;

      setCartItems(updatedCart);
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));
      return;
    }
    setCartItems(prevItems => {
      const products = [...prevItems, item];
      window.localStorage.setItem("cart", JSON.stringify(products));
      return products;
    });
  };

  const deleteItem = itemId => {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart.splice(itemIndex, 1);
      setCartItems(updatedCart);
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }
  };

  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
