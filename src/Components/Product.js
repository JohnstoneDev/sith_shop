// A single product 

import { Link } from "react-router-dom"; 

function Product( {  product }){
    const { id ,img , name , category , price } = product ; 


    console.log(img)

    return(
        <Link to={`/products/${id}`}>
            <div className="flex flex-col">
                <img src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <h4>{category}</h4>
                    <h4>{price}</h4>
                </div>
            </div>
        </Link>
    )
}

export default Product;