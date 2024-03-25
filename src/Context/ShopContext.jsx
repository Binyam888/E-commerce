import React, { createContext, useState } from "react";
import all_products from "../Components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("add to cart", cartItems);
  };
  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: [itemId] - 1 }));
  };
  const contextValue = { all_products, cartItems, addToCart, removeToCart };
  console.log("cart items", cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
