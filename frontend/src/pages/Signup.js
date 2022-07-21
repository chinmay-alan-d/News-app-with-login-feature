import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Copy from './Copy'

const box1 = {
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

function Signup() {
    const [name, setName] = useState('');
    const [userName,setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [result,setResult] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:4000/signUp',{
            name : name,
            userName : userName,
            email : email,
            password : password,
        }).then(response=>{
            console.log(response);
            if(response.data === 'ok'){
                setResult('Account created. Please login again');
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={box1}>
                <h5>Sign Up</h5>
                <br />
                <label>Name</label>
                <input type="text" className="col-xs-4 form-control" placeholder='Name' onChange={(e)=> setName(e.target.value)}></input>
                <br />
                <label>Username (unique)</label>
                <input type="text" placeholder='Username' onChange={(e)=> setUserName(e.target.value)} className="form-control"></input>
                <br />
                <label>Email</label>
                <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} className="form-control"></input>
                <br />
                <label>Password</label>
                <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} className="form-control"></input>
                <br />
                <button className='btn btn-secondary'>Create Account</button>
            </form>   
            <br />  
            <Link to="/login" style={link}>Login</Link>    
            <h4>{result}</h4> 
            <Copy />
        </div>
    )
}

export default Signup