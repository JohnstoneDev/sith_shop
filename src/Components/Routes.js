// All the Routes are here 
import { Routes, Route , useParams } from "react-router-dom"

import Cart from "./Cart";
import ProductList from "./ProductList";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import ProductPage from "./SingleProduct";

function Paths(){
    let { product_id } = useParams()

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductList />} />
            <Route path={`/products/:${product_id}`}  element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}


export default Paths; 