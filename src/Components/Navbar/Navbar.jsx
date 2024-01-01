import React, { useState } from 'react'
import './Navbar.css'
import  logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
function Navbar() {

    const [menu,setMenu]=useState("")
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="logo"  />
            <p>INSTYLE</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setMenu("shop")}>Shop {menu === "shop" &&<hr/> }</li>
            <li onClick={()=>setMenu("Mens")}>Mens {menu === "Mens" &&<hr/> }</li>
            <li onClick={()=>setMenu("Womens")}>Womens {menu === "Womens" &&<hr/> }</li>
            <li onClick={()=>setMenu("kids")}>Kids {menu === "kids" &&<hr/> }</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
        <div className='nav-cart-count'>0</div>

        </div>
    </div>
  )
}

export default Navbar