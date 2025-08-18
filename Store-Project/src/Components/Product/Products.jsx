import React from 'react'
import './Products.css'
import ProductItem from './ProductItem'
import products from '../../productData'
const Products = () => {
  return (
    <div className="products-wrapper">
        <div className="products">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default Products
