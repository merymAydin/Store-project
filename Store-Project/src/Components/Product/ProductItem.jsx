import React from 'react'
import './ProductItem.css'

const ProductItem = ({product}) => {
  return (
    <div className="card" >
                <img src={product.image} alt={product.name} className='card-image'/>
                <h3 className='card-title' >{product.name}</h3>
                <p className='card-desc'>{product.description}</p>
                <div>
                    <span>****</span>
                    <span className='price'>{product.price} $</span>
                </div>
                <button className='add-to-cart'>Add To Cart</button>
    </div>
  )
}

export default ProductItem
