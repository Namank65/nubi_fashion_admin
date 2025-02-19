import "./AllOrders.css";
import React, { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";

const AllOrders = () => {
  const [allOrders, setallOrders] = useState([]);

  useEffect(() => {
    fetch("https://nubifashon-backend.onrender.com/api/v1/order/allOrders")
      .then((resp) => resp.json())
      .then((data) => data?.data.map((e) => e.orderItems))
      .then((e) => e.flat())
      .then((e) => setallOrders(e));
  }, []);

  console.log(allOrders);

  return (
    <div className="CartItems">
      <h1>All Orders By Your Customers</h1>
      {allOrders ? (
        <div className="cartItems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Size</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
      ) : (
        <h1>No Orders Right Now!</h1>
      )}
<div className="main">
      <hr />
      {allOrders?.map((e, index) => {
        if (allOrders) {
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
                    // removefromCart(e.id);
                  }}
                  alt="removeIcon"
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
      </div>
    </div>
  );
};

export default AllOrders;
