import "./AllOrders.css";
import React, { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";
import toast from "react-hot-toast";
import Order from "./Order";

const AllOrders = () => {
  const [allOrders, setallOrders] = useState([]);


  const Orders = async() => {
   await fetch("https://nubifashon-backend.onrender.com/api/v1/order/allOrders")
    .then((resp) => resp.json())
    .then((data) => data?.data.map((e) => e.orderItems))
    .then((e) => e.flat())
    .then((e) => setallOrders(e))
    // .then((data) => setallOrders(data?.data))
    // .then((e) => setallOrders(e));
  }

  useEffect(() => {
    Orders()
  }, []);


  const removeOrder = async (ProductId) => {
    console.log(ProductId);
    
    await fetch(
      "https://nubifashon-backend.onrender.com/api/v1/order/removeOrder",
      {
        method: "POST",
        body: JSON.stringify({ ProductId}),
      }).then((resp) => resp.json()).then((data) => {
        data.success? toast.success('Order Removed Sucessfully') : toast.error('Failed To Remove Product')
      });
      Orders()
  };

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
console.log(e);

return (
  <div key={index}>
    <h4>{e.user}</h4>
    {e.orderItems.map((e) => <Order e={e} key={e.ProductId}/>
    )}
  </div>
)

      })}
      </div>
    </div>
  );
};

export default AllOrders;
