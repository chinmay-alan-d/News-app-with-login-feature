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
  left : '100px',
  top : '20%',
}

function Contact(){
  return <div>
      <Navbar />
      <h1 style={heading1}>Contact Us</h1>
      <h4 style={heading4}>Need to get in touch with us? mail us at support@weather.com</h4>
      <Copy />
  </div>
}

export default Contact;