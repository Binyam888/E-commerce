import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from './Components/Pages/Shop'
import ShopCategory from './Components/Pages/ShopCategory'
import Product from './Components/Pages/Product'
import LoginSignup from './Components/Pages/LoginSignup'
import Cart from './Components/Pages/Cart'
import Footer from './Components/Footer/Footer'
import banner_kids from './Components/assets/banner_kids.png'
import banner_mens from './Components/assets/banner_mens.png'
import banner_womens from './Components/assets/banner_women.png'




function App() {
  

  return (
    <div>
      <BrowserRouter>

     <Navbar/>
     <Routes>
      <Route path="/" element ={<Shop/>}/>
      <Route path="/kids" element ={<ShopCategory category="kid" banner={banner_kids}/>} />
      <Route path="/Mens" element ={<ShopCategory category="men" banner={banner_mens} />}/>
      <Route path="/Womens" element ={<ShopCategory category="women" banner={banner_womens} />}/>
      <Route path='/Product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path="/Login" element ={<LoginSignup/>}/>
      <Route path="/Cart" element ={<Cart/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     </div>
  )
}

export default App
