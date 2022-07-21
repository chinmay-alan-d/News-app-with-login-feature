import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../helper/AuthContext'
import Navbar2 from '../Navigation/Navbar2'
import Copy from './Copy'

const box1 ={
    position : 'absolute',
    top : '15%',
    left : '30%',
    right : '30%'
}

const link = {
    position : 'absolute',
    top : '78%',
    left : '30%',
    color : 'black',
    textDecoration: 'none'
}

function Login() {
    const [name, setName] = useState('');
    const [userName,setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('')
    const [verdict,setVerdict] = useState('');
    const navigate = useNavigate();
    const auth = useAuth();

    function handleSubmit (e){
        e.preventDefault();
        axios.post('http://localhost:4000/login',{
            userName : userName,
            password : password,
        }).then( response=>{
            if (response.data === 'match'){
                auth.Namelogin(name);
                auth.Usernamelogin(userName);
                auth.Emaillogin(email);
                navigate("/", { replace: true });
            }else if(response.data === 'username doesnt exist'){
                navigate('/login',{ replace: true });
                console.log("username doesnt exist");
                setVerdict('username doesnt exist');
            }else{
                navigate('/login',{replace : true});
                setVerdict('password and username doesnt match')
            }
        } )
    }
    return (
        <div>
            <Navbar2 />
            <form onSubmit={handleSubmit} style={box1}>
                <h5>Login</h5>
                <br />
                <label>What's your name</label>
                <input type="text" className="col-xs-4 form-control"  placeholder='Name' onChange={(e)=> setName(e.target.value) } ></input>
                <br />
                <label>Enter username(unique)</label>
                <input type="text" placeholder='Username' onChange={(e)=> setUserName(e.target.value) } className="form-control"></input>
                <br />
                <lable>enter email</lable>
                <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value) } className="form-control"></input>
                <br />
                <label>Password</label>
                <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value) } className="form-control"></input>
                <br />
                <button className='btn btn-secondary'>Submit</button>
            </form>
            <h3>{verdict}</h3>
            <br />            
            <Link style={link} to="/signUp">New Here? sign Up!!</Link>
            <Copy />
        </div>
    )
}

export default Login