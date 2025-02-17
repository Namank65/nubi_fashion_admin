import "./AllOrders.css";
import React, { useEffect, useState } from "react";

const AllOrders = () => {
  const [allOrders, setallOrders] = useState([]);

    useEffect(() => {
      fetch("https://nubifashon-backend.onrender.com/api/v1/order/allOrders")
        .then((resp) => resp.json())
        .then((data) => {
          setallOrders(data?.data);
        });
    }, []);

    console.log(allOrders);

  return (
    <div className="CartItems">
      {allOrders > 0 ? (
        <div className="cartItems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Size</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      ) : (
        <h1>No Orders Right Now!</h1>
      )}

      <hr />
      {allOrders?.map((e, index) => {
        if (allOrders > 0) {
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
                <p>{cartItems[e.id].productSize}</p>
                <div className="quantitySection">
                  <button className="cartItems-quantity">
                    {cartItems[e.id].quantity}
                  </button>
                </div>
                <p>₹{e.newPrice * cartItems[e.id].quantity}</p>
                <img
                  className="cartItems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    // removefromCart(e.id);
                  }}
                  alt="removeIcon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default AllOrders;
