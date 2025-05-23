import "./AllOrders.css";
import React, { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";
import toast from "react-hot-toast";
import Order from "./Order";

const AllOrders = () => {
  const [allOrders, setallOrders] = useState([]);

  const Orders = async () => {
    await fetch(
      "https://nubifashon-backend.onrender.com/api/v1/order/allOrders"
    )
      .then((resp) => resp.json())
      .then((data) => data?.data)
      .then((e) => e.flat())
      .then((e) => setallOrders(e));
  };

  useEffect(() => {
    Orders();
  }, []);

  const removeOrder = async (_id) => {
    await fetch(
      "https://nubifashon-backend.onrender.com/api/v1/order/removeOrder",
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({ _id }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        data.success
          ? toast.success("Order Removed Sucessfully")
          : toast.error("Failed To Remove Product");
      });
    toast.success("Order Removed Sucessfully");
    Orders();
  };

  return (
    <div className="CartItems">
      {allOrders.length > 0 ? (
        <div>
          <h1>All Orders By Your Customers</h1>
          <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Size</p>
            <p>Quantity</p>
            <p>Remove</p>
          </div>
        </div>
      ) : (
        <h1>No Orders Right Now!</h1>
      )}

      <div className="main">
        <hr />
        {allOrders?.map((e) => {
          return (
            <div key={e._id}>
              <div className="username">
              <h4>{e.user.userName}</h4>
              <img src={cross_icon} onClick={() => removeOrder(e._id)}/>
              </div>
              {e.orderItems.map((e) => (
                <Order key={e._id} e={e} unique={e.ProductId} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllOrders;
