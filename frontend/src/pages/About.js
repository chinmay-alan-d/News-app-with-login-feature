import React from 'react'
import Navbar from '../Navigation/Navbar'
import Copy from './Copy'

const heading1={
  position : 'fixed',
  left : '100px',
  top: '10%',
  color : 'purple'
}

const heading4={
  position : 'fixed',
  // left : '20%'
  left : '100px',
  top : '20%',
}

function About(){
  return <div>
      <Navbar />
      <h1 style={heading1}>About us</h1>
      <h4 style={heading4}>Our company provides most accurate weather details at your location</h4>
      <Copy />
  </div>
}

export default About;