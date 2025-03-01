import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <h2>My Library</h2>
      <div className='nav-links'>
        <Link className='nav-link' to="/">Home</Link>
        <Link   className='nav-link'to="/login">Login</Link>
        <Link   className='nav-link'to="/register">Register</Link>
      </div>  
    </div>
  )
}

export default Navbar
