import { useState } from 'react'
import Items from './components/Items'
import './App.css'
import Cart from './components/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Items name="Macbook pro" price={123343}/>
   <Items name="Pendrive" price={4000}/>
   <Items name="Macbook pro" price={35000}/>
   <hr />
   Your Cart
   <Cart/>

    </>
  )
}

export default App
