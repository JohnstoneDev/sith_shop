// Signup Form 
import React from 'react'

function Signup() {
  return (
    <div className="signup_container">
        <div className='signup_for'> 
        <h3>SignUP Form Validation </h3>
        <div className='form'>
                <form>
                    <label> Username:</label>
                <input type= 'username' placeholder='Enter Username'/>

                <label>Email:</label>
                <input type='email' placeholder= 'Enter Email'/>

                <label>Password:</label>
                <input type = 'password' placeholder='Enter Password'/>

                <label>Confirm Password:</label>
                <input type='password' placeholder='Enter Confirm Password'/>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Signup
