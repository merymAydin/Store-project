
import { useContext } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Header from './Components/Layout/Header'
import Products from './Components/Product/Products'
import Slider from './Components/Slider/Slider'
import { CartContext } from './Contexts/CartProvider'

function App() {
const {cartIsShown} = useContext(CartContext);

  return (
    <>
    {
      cartIsShown && <Cart cartIsShown={cartIsShown} /> 
    } 
      <Header/>
      <Slider/>
      <Products/>
      
    </>
  )
}

export default App
