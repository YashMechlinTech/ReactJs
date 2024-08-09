import React, { useState } from 'react'
import { CartContext } from '../context/Cart'
import { useContext } from 'react'
const Cart = () => {
  const cart=useContext(CartContext)
  const total=cart.item.reduce((a,b)=>a+b.price,0) // initially a=0 and then b iterates over the items and add the prices of item to a 
  return (
    <div className='cart'>
        <h1>Cart</h1>
        {
          cart && cart.item.map(item=>(<li>
            {item.name}-{item.price}
          </li>))
        }
      <h5>Total Bill $ {total} </h5>
    </div>
  ) //conditional rendering 
}

export default Cart
