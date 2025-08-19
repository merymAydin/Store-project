import React, { useContext } from 'react'
import './ProductItem.css'
import { CartContext } from '../../Contexts/CartProvider';

const ProductItem = ({product}) => {
  const {addToCart} = useContext(CartContext);

  return (
    <div className="card" >
                <img src={product.image} alt={product.name} className='card-image'/>
                <h3 className='card-title' >{product.name}</h3>
                <p className='card-desc'>{product.description}</p>
                <div>
                    <span>{product.rating}</span>
                    <span className='price'>{product.price} $</span>
                </div>
                <button className='add-to-cart' onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  )
}

export default ProductItem
