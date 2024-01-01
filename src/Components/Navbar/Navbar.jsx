import React from 'react'
import './Navbar.css'
import  logo from '../assets/logo.png'
function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt=""  />
            <p>INSTYLE</p>
        </div>
    </div>
  )
}

export default Navbar