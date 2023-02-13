 import React from 'react';
 import sale from '../Images/sale3.jpg'
//  import "../Components/About.css"

function About(){
    return(
        <section className='max-h-3/4 grid grid-cols-2 p-4 align-middle justify-center items-start'>
            <img src={sale} alt="" className='border border-main-bg rounded-md w-full max-h-full'/>
            <div className='header p-3 flex flex-col gap-4'>
                <h1 className='text-4xl border-b-heading border-b-4'>About Us</h1>
                <p className='text-left'>
                    Sith Shop is a multi-purpose shopping website that is
                    designed to offer customers with a taste of luxury A
                    central place to find just the items that they are 
                    looking for. The catalog ranges from household items
                    to children's toys and furniture.
                </p>
            </div>  
        </section>
    )
}


export default About; 