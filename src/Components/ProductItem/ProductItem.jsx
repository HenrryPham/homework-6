import React from 'react'

import "./ProductItem.css"

const ProductItem = (props) => {
    const {product, addToCart} = props;
  return (
    <div className="productItem">
      <img src={"https://xcafe.space" + product.image} alt="" className="product-img" />
      <h4>Name: {product.name}</h4>
      <p>Price: {product.price.toLocaleString()} VND {''}
      {product.isSoldOut && (<span style={{color:"red"}}>Hết hàng</span>)}
      </p>
      
      <button className="btn-addToCart" onClick={() => addToCart(product)}>Add to cart</button>
      
    </div>
    )
}

export default ProductItem
