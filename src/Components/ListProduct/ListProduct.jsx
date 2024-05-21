import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {

  const [allProducts, setallProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('https://nubifashon-backend.onrender.com/api/v1/upload/allProducts')
    .then((resp) => resp.json()).then((data) =>  { setallProducts(data?.data)})
    
  }

  

  useEffect(() => {
    fetchInfo();
  },[])

  const removeProduct = async (id) => {
    await fetch('https://nubifashon-backend.onrender.com/api/v1/upload/removeProduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='listProduct'>
      <h1>All Product List</h1>
      <div className="listproduct-formate-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listProduct-allProducts">
        <hr />
        {allProducts.map((product, index) => {
          return <>
          <div key={index} className='listproduct-formate-main listproduct-formate'>
            <img src={product.images} alt="ProductIcon" className='listProduct-icon' />
            <p>{product.name}</p>
            <p>{product.oldPrice}</p>
            <p>{product.newPrice}</p>
            <p>{product.category}</p>
            <img src={cross_icon} onClick={() => removeProduct(product.id)} alt="removeIcon" className='listProduct-removeIcon' />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
