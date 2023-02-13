import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import Paths from './Components/Routes';


function Footer(){
  return(
          <footer className=''>
                 ProDev Copyright 2023. All Rights Reserved.
          </footer>   
  )
}


function App() {
  const [heading , setHeading ] = useState(""); 

  // useEffect Below illustrates comm with server . 

  function Navigation(){
    return(
      <div className='flex gap-6 align-middle justify-center items-center'>
        <Link to="/">
          { heading === "" ? <h1 className='animate-pulse mr-5 border-b-4 border-btn-bg'> Sith Shop</h1> : <h1 className='animate-pulse mr-5 border-b-4 border-btn-bg'>{heading}</h1> }
        </Link>
        <Link to="/about" className='border-b-4 border-btn-bg'>About</Link>
        <Link to="/products" className='border-b-4 border-btn-bg'>Products</Link>

        <div className='flex gap-5 ml-10'>
          <Link to="/cart" className='border-b-4 border-btn-bg'>Cart</Link>
          <Link to="/login" className='border-b-4 border-btn-bg'>Log In </Link>
          <Link to="/signup" className='border-b-4 border-btn-bg'> Sign Up</Link>
        </div>
      </div>
    )
  }

  useEffect(() => {
    fetch('/heading', {
      method : 'GET'
    })
    .then(r => r.json())
    .then(d => {
      console.log(d)
      setHeading(d.message)
    })
    .catch(e => console.log(e))
  })

  return (
        <div className='flex flex-col font-main text-xl p-5 mt-0 bg-modal-bg text-heading min-h-screen align-middle items-center text-center'>
          <Navigation />
          <Paths />
          <Footer />
        </div>
  );
}

export default App;