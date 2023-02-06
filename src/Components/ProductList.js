// Product list component to house and handle the dispay of products on the Home Page 

import React, {useState, useEffect} from 'react';
import "../Components/ProductList.css";

function ProductList(){
  const [products, setProducts] = useState([])
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => { setProducts(data)
        console.log(data)
      })
    return(
        <>
            <div className='content'>
                <h2><b>Products</b></h2>
                <h3>Category</h3>
                <ul>
                    <h4>All</h4>
                    <ol>Office</ol>
                    <ol>Living room</ol>
                    <ol>Kitchen</ol>
                    <ol>Bedroom</ol>
                    <ol>Dining</ol>
                    <ol>Kids</ol>
                    <h4>Price</h4>
                </ul>
            </div>
        </>
    )
}

export default ProductList; 