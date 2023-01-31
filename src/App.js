import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [heading , setHeading ] = useState(""); 

  // useEffect Below illustrates comm with server . 

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
   <div className='font-main text-4xl p-5  bg-modal-bg text-heading min-h-screen align-middle items-center text-center'>
        { heading === "" ? <h1 className='animate-pulse border-b-4 border-btn-bg'> Sith Shop</h1> : <h1 className='animate-pulse border-b-4 border-btn-bg'>{heading}</h1> }
   </div>
  );
}

export default App;