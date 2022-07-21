import React from 'react'
import { useAuth } from '../helper/AuthContext'
import Navbar from '../Navigation/Navbar'
import Copy from './Copy'

const container = {
  position : 'absolute',
  top : '10%',
  left : '15px'
}

const pic = {
  position : 'absolute',
  height : '150px',
  top : '10px',
  left : '50px'
}

const name = {
  position : 'relative',
  left : '200px',
  top : '160%',
  font: "italic",
  fontSize: '60px'
}

const username = {
  position : 'absolute',
  left : '220px',
  bottom : '-60%'
}

const email = {
  position : 'absolute',
  left : '220px',
  // top : '600%'
  bottom : '-120%'
}

function Profile() {
    const auth = useAuth();
  return (
    <div>
        <Navbar />
        <div className='container' style={container}>
          <h2 style={name}>{auth.name}</h2>
          <h3 style={username}>Username : {auth.userName}</h3>
          <h3 style={email}>Email : {auth.email}</h3>
          <img style={pic} src='https://png.pngtree.com/png-vector/20201229/ourmid/pngtree-a-squatting-tabby-cat-png-image_2664942.jpg' alt='_image'/>
        </div>
        <Copy />
    </div>
  )
}

export default Profile