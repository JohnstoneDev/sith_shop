import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);

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
          setSuccess(user);
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

  if (success === !null) return <NavLink to={'/me'} />;

  return (
    <div className='flex flex-col  justify-between'>
      <h1>Login</h1>
      <form className='grid grid-cols-2 gap-3 m-10' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className=" bg-[#A97777] rounded-full" type='submit'>{isLoading ? 'Loading...' : 'Login'}</button>

        {errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </form>
      <div >
        
        <p>
        Don't have an account? &nbsp;
          <Link to={`/signup`} >
           Sign Up
          </Link>
        </p>
      </div>
      <div className='bg-[#A97777] mt-60 h-12'>
    
      </div>

    </div>
  );
}

export default Login;

