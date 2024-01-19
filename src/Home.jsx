import React, { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [name, setName] = useState('');
    const [auth,setAuth] = useState(false);

    const navigate =useNavigate();


    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.get('http://localhost:7000')
        .then(res=>{
            if(res.data.valid){
                setName(res.data.username)
                setAuth(true)
                console.log(name)
            }else{
                setAuth(false);
                navigate('/')
            }
        })
        .catch(err=>console.log(err))
    }, [name , navigate])
    

    const handleLogOut=(()=>{
        axios.get('http://localhost:7000/logout')
        .then(res =>{
            if(res.data.Status === "succes"){
                Window.location.reload(true);
            }else{
                window.location.reload(true);
            }
        })
        .catch(err=>console.log(err));
    })

    
    const loggedIn =    <div>
                            <h2>Welcome,{name}</h2>
                            <button onClick={handleLogOut} className='btn-logout'>LOG OUT</button>
                        </div>

    const loggedOut =   <div>
                            <h2>You're not authorized,Please log in </h2>
                            <button><Link to={'/login'} className='btn-link'>LOG IN</Link></button>
                        </div>


return (
    <div className='home-container'>
        {auth ? loggedIn:loggedOut} 
    </div>
)}

export default Home
