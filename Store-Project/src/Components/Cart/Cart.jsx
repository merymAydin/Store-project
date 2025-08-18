import React from 'react'
import './Cart.css'
import OffCanvas from '../General/OffCanvas'


const Cart = () => {
  return (
   <div className='OffCanvas'>
     <div className="content">
        <div className="cart">
            <div className="card-header">
                <h2>Cart</h2>
                <a href="/">X</a>
            </div>
            ergt
            <div className="cart-total">
                <span>Total</span>
                <span>$100</span>
            </div>
            <div className="action-buttons">
                <button className="order-button">Pay</button>
                <button className="cart-clear">Clear</button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Cart
