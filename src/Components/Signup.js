// Signup Form 
import React from 'react'
import { useState } from 'react'
import validation from './validation'

function Signup() {

const [values, setValues] = useState({ 
username: '',
email: '',
password: '',
confirm_password: ''
})  

const [errors, setErrors] = useState({})

const handleInput = (e) => {
setValues({...values, [e.target.name]: [e.target.value]})
}

function handleValidation (e) {
  e.preventDefault()
setErrors(validation(values))
}


  return (
    <div className="signup_container">
        <div className='signup_form'> 
        <h5>Hi There! Shop with us today.</h5>
        <h3>Sith Shop </h3>
        <div className='form'>
                <form onSubmit = {handleValidation}>
                    <label> Username:</label>
                <input type= 'username' placeholder='Enter Username'
               name='username' onChange={handleInput} className='form-control'/>

                <label>Email:</label>
                <input type='email' placeholder= 'Enter Email'
                name='email' onChange={handleInput} className='form-control'/>
                  {errors.email && <p>{errors.email}</p>}


                <label>Password:</label>
                <input type = 'password' placeholder='Enter Password'
                name='password' onChange={handleInput} className='form-control'/>
                {errors.password && <p>{errors.password}</p>}

                <label>Confirm Password:</label>
                <input type='password' placeholder='Enter Confirm Password'
                name='confirm_password' onChange={handleInput} className='form-control'/>
                 {errors.confirm_password && <p>{errors.confirm_password}</p>}

                <div><button>Sign Up</button></div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Signup

