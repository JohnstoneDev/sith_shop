// Home display & landing page 
import  chairs from '../Images/chairs.jpg'
import  phonehand from '../Images/phonehand.jpg'

import { Link } from 'react-router-dom';

function Home(){
    return(
            <div className="grid grid-cols-2 gap-8 pt-8 text-left text-4xl items-start min-w-screen min-h-screen overflow-hidden">
                <div className='h-1/2 flex flex-col gap-10'>
                    <p className='mt-30 align-middle justify-center items-center'>A Taste of luxury , A central place to find just the items you're looking for. </p>
                    <div className='flex gap-4 items-center'>
                        <Link to="/about" className='border-b-4 border-btn-bg text-slate-400'>About Us</Link>
                        <Link to="/products" className='border-b-4 border-btn-bg'>Products</Link>
                    </div>
                </div>
                <div className='relative m-0 p-0 h-1/2'>
                    <img src={phonehand} alt="" className='flex-auto  absolute top-0 left-0  object-cover rounded-lg w-screen' />
                    <img src={chairs} alt="" className='object-cover absolute top-0 left-0 mt-32 ml-40 h-0.8 rounded-lg w-screen' />
                </div>
            </div>
    )
}


export default Home; 