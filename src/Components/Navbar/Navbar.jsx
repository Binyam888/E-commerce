import React, { useContext, useState } from 'react'
import './Navbar.css'
import  logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
function Navbar() {
     const {getTotalCartItem } = useContext(ShopContext)
    const [menu,setMenu]=useState("")
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="logo"  />
            <p>INSTYLE</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setMenu("shop")}> <Link style={{textDecoration:"none"}} to="/" >Shop</Link>  {menu === "shop" &&<hr/> }</li>
            <li onClick={()=>setMenu("Mens")}> <Link style={{textDecoration:"none"}} to="/Mens" >Mens</Link>  {menu === "Mens" &&<hr/> }</li>
            <li onClick={()=>setMenu("Womens")}> <Link style={{textDecoration:"none"}} to="/Womens" >Womens</Link> {menu === "Womens" &&<hr/> }</li>
            <li onClick={()=>setMenu("kids")}> <Link  style={{textDecoration:"none"}}to="/kids" >Kids</Link>  {menu === "kids" &&<hr/> }</li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/Login"><button>Login</button></Link> 
          <Link to="/Cart"> <img src={cart_icon} alt="" /></Link> 
        <div className='nav-cart-count'>{getTotalCartItem ()}</div>

        </div>
    </div>
  )
}

export default Navbar