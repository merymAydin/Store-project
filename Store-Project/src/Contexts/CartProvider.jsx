import React, { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandle = () => {
      setCartIsShown(true);
    };
    const hideCartHandle = () => {
      //e.preventDefault();
      setCartIsShown(false);
    };

    const values = {
      cartIsShown,
      setCartIsShown,
      hideCartHandle,
      showCartHandle
    };
  return (
    <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
