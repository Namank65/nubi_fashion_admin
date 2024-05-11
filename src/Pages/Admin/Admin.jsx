import React from "react";
import "./Admin.css";
import SideBar from "../../Components/Sidebar/SideBar";
import {Routes, Route} from "react-router-dom";
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';

const Admin = () => {
  return <div className="admin">
    <SideBar/>
    <Routes>
      <Route path="/addProduct" element={<AddProduct/>}/>
      <Route path="/listProduct" element={<ListProduct/>}/>
    </Routes>
    </div>;
};

//please remove this comment if needed


export default Admin;
