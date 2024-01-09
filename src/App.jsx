import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from './Components/Pages/Shop'
import ShopCategory from './Components/Pages/ShopCategory'
import Product from './Components/Pages/Product'
import LoginSignup from './Components/Pages/LoginSignup'
import Cart from './Components/Pages/Cart'
function App() {
  

  return (
    <div>
      <BrowserRouter>

     <Navbar/>
     <Routes>
      <Route path="/" element ={<Shop/>}/>
      <Route path="/kids" element ={<ShopCategory category="kid"/>} />
      <Route path="/Mens" element ={<ShopCategory category="Men"  />}/>
      <Route path="/Womens" element ={<ShopCategory category="Women" />}/>
      <Route path='/Products' element={<Product/>}>

      </Route>
      <Route path="/Login" element ={<LoginSignup/>}/>
      <Route path="/Cart" element ={<Cart/>}/>
     </Routes>
     </BrowserRouter>
     </div>
  )
}

export default App
