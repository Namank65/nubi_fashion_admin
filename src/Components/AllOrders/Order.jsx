import React from 'react'
import cross_icon from "../../assets/cross_icon.png";
const Order = ({e,index}) => {
    console.log(e);
    
    return (
        <div key={index}> 
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
            <img
              className="cartItems-remove-icon"
              src={cross_icon}
              onClick={() => {
                // removeOrder(e._id);
              }}
              alt="removeIcon"
            />
          </div>
          <hr />
        </div>
      );
}

export default Order
