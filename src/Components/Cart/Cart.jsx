import React from 'react'
import "./Cart.css"

const Cart = (props) => {
  const { productInCart, increaseProduct } = props;
  const totalProduct = props.productInCart.length;
  const detailProduct = productInCart.map((product) => (
    <>
      <div className="modal-body">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
          <label className="form-check-label d-flex" htmlFor="flexCheckDefault">
            <img src={"https://xcafe.space" + product.image} className="img-detai" />
            <div className="flex-column content-lable">
              <h4 className="name-product">Name: {product.name}</h4>
              <p className="">Price: {product.price.toLocaleString()} VND</p>
              <div className="count-detail">
                <button name={product.id} onClick={increaseProduct}>-</button><span className="count">{product.sl}</span><button name={product.id}>+</button>
              </div>
              <div className="sum">Tổng tiền = {(Number(product.price) * Number(product.sl)).toLocaleString()} VND</div>
            </div>
          </label>
          <hr/>
        </div>
      </div>
    </>
  ))


  return (
    <div className="cart-container">
      <div className="icon-cart">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512">
            <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
          </svg>
          <span>{totalProduct}</span>

        </button>
        <div className="modal fade modal-lg" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Cart</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              {detailProduct}

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Cart
