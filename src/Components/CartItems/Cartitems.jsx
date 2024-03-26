import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'
function Cartitems() {
    const {all_products,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitem-format-main">
           <p>Products</p> 
           <p>Titile</p> 
           <p>Price</p> 
           <p>Quantity</p> 
           <p>Total</p> 
           <p>Remove</p>
        </div>
        <hr />
        { all_products.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className="caritems-format cartitem-format-main">
                    <img src={e.image} alt=""  className='carticon-product-icon'/>
                    <p>${e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>removeFromCart(e.id)} alt="" />
                </div>
                <hr />
                
            </div>
            }
return null
        })}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart totals</h1>
            <div>
                <div className="cartitems-total-items">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <p>Shipping Charge</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                <button>Checkout</button>
            </div>
           
        </div>
        <div className="cartitems-promocode">
                <p>If you have promocode , Enter it here</p>
                <div className="cartitems-promobox">
                   <input type="text" placeholder='promocode' /> 
                   <button>Submit</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Cartitems