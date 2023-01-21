import React from 'react'
import { createContext } from "react";
import { useState, useEffect } from "react";

export const GeneralContext = createContext()

export function GeneralContextProvider(props) {
    const [ProductC, setProductC] = useState([])
    console.log(ProductC)
    const [cart, setCart] = useState(false);

    function addCart(Product) {
        setProductC([...ProductC,Product])
    }

    function Vaciar() {
      setProductC([]);
    }

  return (
    <GeneralContext.Provider value={{
        addCart,
        ProductC,
        setCart,
        cart,
        Vaciar
    }}>
        {props.children}
    </GeneralContext.Provider>
  )
}

