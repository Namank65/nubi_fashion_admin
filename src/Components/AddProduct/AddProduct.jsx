import React, { useState } from "react";
import "./AddProduct.css";
import UploadArea from "../../assets/upload_area.svg";

const AddProduct = () => {

  const [image, setImage] = useState(false);
  const [productDetail, setProductDetails] = useState({
    name: "",
    images: "",
    category: "Women",
    newPrice: "",
    oldPrice: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetails({...productDetail, [e.target.name]: e.target.value})
  }

  const addProductHandler = async () => {
    let responceData;
    let product = productDetail;
    let formData = new FormData();
    formData.append('images', image);
    await fetch('https://nubifashon-backend.onrender.com/api/v1/upload/product', {
      method: 'POST', 
      headers: {
        Accept: 'application/json'
      },
      withCredentials: true,
      body: formData
    }).then((resp) => resp.json()).then((data) => responceData = data )
    console.log(responceData)

    // if(responceData.success){
    //   product.images = responceData.image_url
    //   console.log(product)
    // }
  }

  return (
    <div className="addProduct">
      <div className="addProductField">
        <p>Product Title</p>
        <input value={productDetail.name} onChange={changeHandler} type="text" name="name" placeholder="Type Here..." />
      </div>

      <div className="addProductPrice">
        <div className="addProductField">
          <p>Price</p>
          <input value={productDetail.oldPrice} onChange={changeHandler} type="text" name="oldPrice" placeholder="Type Here..." />
        </div>

        <div className="addProductField">
          <p> Offer Price</p>
          <input value={productDetail.newPrice} onChange={changeHandler} type="text" name="newPrice" placeholder="Type Here..." />
        </div>

      </div>

      <div className="addProductField">
        <p>Product Category</p>
        <select value={productDetail.category} onChange={changeHandler} name="category" className="addProductSelector">
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Kid">Kid</option>
        </select>
      </div>

      <div className="addProductField">
        <label htmlFor="fileInput">
          <img src={image? URL.createObjectURL(image):UploadArea} alt="uploadarea" className="addProductThumbnail"/>
        </label>
        <input type="file" onChange={imageHandler} name="image" id="fileInput" hidden />
      </div>

      <button onClick={() => {addProductHandler()}} className="addProductBtn">ADD</button>

    </div>
  );
};

export default AddProduct;