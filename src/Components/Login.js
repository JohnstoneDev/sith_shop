import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          navigate('/products')
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
          console.log(err);
        });
      }
    });
    setEmail('');
    setPassword('');
  }

  

  return (
    <div className='flex flex-col  justify-between'>
      <h1 className='mt-10'>Login</h1>
      <form className='grid grid-cols-2 gap-4 mt-10 ' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input className='w-11/12'
          type='text'
          id='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='password'>Password:</label>
        <input className='w-11/12'
          type='password'
          id='password'
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-[#A97777] rounded-full w-24 py-3 px-2" type='submit'>{isLoading ? 'Loading...' : 'Login'}</button>
        
        {errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </form>
      <div className='mb-20' >
        
        <p className='ml-24 mt-4'>
        Don't have an account? &nbsp;
          <Link to={`/signup`} >
           Sign Up 
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

