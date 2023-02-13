// Product list component to house and handle the dispay of products on the Home Page 

import  { useState, useEffect } from 'react';


import Product from './Product';

function ProductList(){
  const [products, setProducts] = useState([]); 
  const [categories, setCategories ] = useState([]);

  
  useEffect(() => {

    fetch('/categories')
    .then(r => r.json())
    .then(d => {
      setCategories(d)
      // console.log(categories , "<= Categories fetched from db.json")
    })
    .catch(e => console.log(e))

    fetch('/products')
    .then(r => r.json())
    .then(d => {
      setProducts(d)
      // console.log(products,"<= Products fetched from db.json")
    })
    .catch(e => console.log(e))
 
  },[])

    return(
        <section className='flex p-5 m-5 gap-8'>
          <div>
            <ul className='text-left'>
                {categories.map((cat) => {
                  return (
                  <li 
                  key={Math.random() * 10}
                  className='p-1 cursor-pointer border-b-4 border-b-btn-bg'
                  >
                    {cat}
                    </li> )
                })}
            </ul>
          </div>

          <div>
            {products.map((product) => {
              return <Product key={product.id} product={product}/>
            })}
          </div>

        </section>      
    )
}

export default ProductList; 