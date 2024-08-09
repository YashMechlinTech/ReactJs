import { createContext, useCallback } from "react";
import { useState } from "react";
import React from 'react'

export const CartContext=createContext(null)

export const CartProvider=(props)=>{
    const [item,setItem]=useState([])
    return(
        <CartContext.Provider value={{item,setItem}}>
      {props.children}  </CartContext.Provider>
    )
}

