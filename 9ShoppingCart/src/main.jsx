import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CartProvider  } from './context/Cart.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> 
      <App/>
    </CartProvider>
  </StrictMode>,
)


//cart provider is an context provider here which provides the context over the App