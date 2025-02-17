import React from 'react';
import './SideBar.css';
import {Link} from 'react-router-dom';
import addProductIcon from '../../assets/Product_Cart.svg';
import listProduct from '../../assets/Product_list_icon.svg';


const SideBar = () => {
  return (
    <div className='sideBar'>
        <Link to={"/"} style={{textDecoration: "none"}}>
            <div className="sideBarItem">
                <h1>🧥</h1>
                <p>All Orders</p>
            </div>
        </Link>
        <Link to={"/addProduct"} style={{textDecoration: "none"}}>
            <div className="sideBarItem">
                <img src={addProductIcon} alt="addProduct" />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={"/listProduct"} style={{textDecoration: "none"}}>
            <div className="sideBarItem">
                <img src={listProduct} alt="listProduct" />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default SideBar