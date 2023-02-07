 import React from 'react';
 import sale from '../Images/sale3.jpg'
 import "../Components/About.css"

function About(){
    return(
        <>
            <div className='header'>
                <h1>About Us</h1>
            </div>
            <div className='one'>
                <img src={sale} alt=""/>
                <p>
                    Sith Shop is a multi-purpose shopping website that is
                    designed to offer customers with a taste of luxury A
                    central place to find just the items that they are 
                    looking for. The catalog ranges from household items
                    to children's toys and furniture.
                </p>
            </div>  
        </>
    )
}


export default About; 