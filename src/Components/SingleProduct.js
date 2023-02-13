// React component for the product page
import React, { useState } from "react";
import '../Components/SingleProduct.css'

const ProductPage = () => {
  const [product, setProduct] = useState({
    name: "Product Name",
    description: "Quality Design Air Jordan 1 Retro High Satin Black Toe Sneakers, High Quality Unisex Fashion Sneakers Black/White/Red 40",
    price: "$10.00",
    image: "https://images.pexels.com/photos/13691727/pexels-photo-13691727.jpeg?auto=compress&cs=tinysrgb&w=1600"
  });
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };

  const removeFromCart = itemIndex => {
    setCart(cart.filter((_, index) => index !== itemIndex));
  };

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
     <div className="description"> <p >{product.description}</p>
      <p>Price: {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <p>Number of items in cart: {cart.length}</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
            <button onClick={() => removeFromCart(index)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ProductPage;
