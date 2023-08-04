import { useState } from 'react'

import Cart from './Components/Cart/Cart'
import './App.css'
import ProductList from './Components/ProductList/ProductList'
import { products } from './Components/Data'
import ProductItem from './Components/ProductItem/ProductItem'

function App() {
  const [productInCart, setProductInCart] = useState([]);


  const addToCart = (ProductItem) => {
    let newProductInCart = [...productInCart]
    const findIndex = newProductInCart.findIndex((item) => { return item.id === ProductItem.id })
    if (findIndex !== -1) {
      newProductInCart[findIndex].sl += 1
      setProductInCart(newProductInCart)
    } else {
      let newProductInCart = [...productInCart, ProductItem]
      setProductInCart(newProductInCart)
    }
  };
  const increaseProduct = () => {

  }

  const decreaseProduct = () => {

  }

  return (
    <>
      <Cart productInCart={productInCart} increaseProduct={increaseProduct} decreaseProduct={decreaseProduct} />
      <ProductList products={products} addToCart={addToCart} />
    </>
  )
}

export default App
