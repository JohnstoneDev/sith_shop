// import React, { useState } from "react";

// function Login() {
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     name: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     let { name, pass } = document.forms[0];

//     const userData = database.find((user) => user.username === name.value);

//     if (userData) {
//       if (userData.password !== pass.value) {
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "name", message: errors.name });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title">Login</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default Login;

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
    <div className='grid justify-items-center'>
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
          <Link to={`/signup`}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

