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
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        console.log( "item",cartItems);
      if (cartItems[item] >0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount +=  cartItems[item] * itemInfo.new_price;
      }
     
    }
    return totalAmount;
  };

  const getTotalCartItem =()=>{
    let totalItem =0
    for(const item in cartItems){
       
        if(cartItems[item]> 0){
            totalItem+= cartItems[item]
        }
    }
    return totalItem
    
  }
  
  //   {context}

  const contextValue = { getTotalCartItem,getTotalCartAmount,all_products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
