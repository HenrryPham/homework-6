import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import "./ProductList.css"

const ProductList = (props) => {
const {products, addToCart} = props;
const ProductItems = products.map((product) => (
  <ProductItem 
  key = {product.id}
  product={product} 
  addToCart={addToCart} />
));
  return (
    <div className="product-container">
      {ProductItems}
    </div>
  )
}

export default ProductList
