import React from 'react'
const Order = ({e, unique}) => {
    return (
        <div key={unique}> 
          <div className="cartItems-Formate cartItems-format-main">
            <img
              src={e.images}
              alt="cartIcon"
              className="cartIcon-product-icon"
            />
            <p>{e.name}</p>
            <p>₹{e.newPrice}</p>
            <p>{e.size}</p>
            <div className="quantitySection">
              <button className="cartItems-quantity">{e.quantity}</button>
            </div>
          </div>
          <hr />
        </div>
      );
}

export default Order
