import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Cart'
const Items = (props) => {
const cart=useContext(CartContext)
  return (
    <div className='item-card'>
        <h4>{props.name}</h4>
        <p>Price:{props.price}</p>
        <button onClick={()=>{cart.setItem([...cart.item,{name:props.name,price:props.price}])
          
        }}>Add to Cart</button>
    </div>
  )
}

export default Items
