import React from "react";
import "./Admin.css";
import SideBar from "../../Components/Sidebar/SideBar";
import {Routes, Route} from "react-router-dom";
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';
import AllOrders from '../../Components/AllOrders/AllOrders';

const Admin = () => {
  return <div className="admin">
    <SideBar/>
    <Routes>
      <Route path="/" element={<AllOrders/>}/>
      <Route path="/addProduct" element={<AddProduct/>}/>
      <Route path="/listProduct" element={<ListProduct/>}/>
    </Routes>
    </div>;
};

export default Admin;
