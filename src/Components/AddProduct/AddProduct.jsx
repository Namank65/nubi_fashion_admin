import React from "react";
import "./AddProduct.css";
import UploadArea from "../../assets/upload_area.svg";

const AddProduct = () => {
  return (
    <div className="addProduct">
      <div className="addProductField">
        <p>Product Title</p>
        <input type="text" name="name" placeholder="Type Here..." />
      </div>

      <div className="addProductPrice">
        <div className="addProductField">
          <p>Price</p>
          <input type="text" name="name" placeholder="Type Here..." />
        </div>

        <div className="addProductField">
          <p> Offer Price</p>
          <input type="text" name="name" placeholder="Type Here..." />
        </div>

      </div>

      <div className="addProductField">
        <p>Product Category</p>
        <select name="Category" className="addProductSelector">
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Kid">Kid</option>
        </select>
      </div>

      <div className="addProductField">
        <label htmlFor="fileInput">
          <img src={UploadArea} alt="uploadarea" className="addProductThumbnail"/>
        </label>
        <input type="file" name="image" id="fileInput"  />
      </div>
      <button className="addProductBtn">ADD</button>

    </div>
  );
};

export default AddProduct;