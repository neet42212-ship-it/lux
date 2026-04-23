import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity, shade) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => 
        item.product.id === product.id && item.shade === shade
      );

      if (existingItemIndex >= 0) {
        const newCart = [...prev];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      }

      return [...prev, { product, quantity, shade }];
    });
  };

  const handleIncrement = (index) => {
    setCartItems(prev => {
      const newCart = [...prev];
      newCart[index].quantity += 1;
      return newCart;
    });
  };

  const handleDecrement = (index) => {
    setCartItems(prev => {
      const newCart = [...prev];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      }
      return newCart;
    });
  };

  const handleRemove = (index) => {
    setCartItems(prev => {
      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const value = {
    cartItems,
    addToCart,
    handleIncrement,
    handleDecrement,
    handleRemove,
    subtotal,
    cartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
