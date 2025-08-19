import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartIsShown, setCartIsShown] = useState(false);
    const [cartList, setCartList] = useState([]);

    const showCartHandle = () => {
      setCartIsShown(true);
    };
    const hideCartHandle = (e) => {
      e.preventDefault();
      setCartIsShown(false);
    };

    const addToCart = (product) => {
      setCartList([...cartList, product]);
    };

    useEffect(() => {
      console.log(cartList);
    }, [cartList]);


    const values = {
      cartIsShown,
      setCartIsShown,
      cartList,
      setCartList,
      hideCartHandle,
      showCartHandle,
      addToCart
    };
  return (
    <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
