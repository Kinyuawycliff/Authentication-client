import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(()=>{
    axios.get('http://localhost:7000')
    .then(res=>{
        if(res.data.valid){
            navigate('/');
        }else{
            navigate('/login')
        }
    })
    .catch(err=>console.log(err))
}, [navigate])


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    axios.post('http://localhost:7000/login',{email,password})
    .then(res => {
      if (res.data.Login) {
          navigate('/')
      }else{
        alert("No record")
      }
      console.log(res);
    })
    .catch(err => console.log(err));

  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2 className='header'>Sign-in</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          maxLength={16}
          minLength={6}
          required
        />
        <button type="submit">Log In</button>
        <p>Agree to our terms and conditions</p>
        <p>Don`t have an Account ? <a href="http://">forgort password</a></p>
        <button><Link to={'/signup'} className='btn-link'>Create Account</Link></button>
      </form>
    </div>
  );
}

export default Login;
