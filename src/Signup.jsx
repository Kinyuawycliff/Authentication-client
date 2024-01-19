import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    axios.post('http://localhost:7000/signup',{username,email,password,})
    .then(res => {
      console.log(res)
      navigate('/login')
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h2 className='header'>Sign-up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p>Already have an account? Sign in</p>
        <button><Link to={'/login'} className='btn-link'>Log in</Link></button>
      </form>
    </div>
  );
}

export default Signup;
