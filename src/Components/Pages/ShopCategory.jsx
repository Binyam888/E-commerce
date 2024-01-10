import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../Item/Item'
import './css/shopcategory.css'

function ShopCategory(props) {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shopcatogory'>

      <img className='shopcatogory-banner' src={props.banner} alt="banner" />
      <div className="shopcatogory-indexSort">
<p>
  <span>Showing 1-12 </span>out of 36 products
</p>
        <div className="shopcatogory-sort">
            sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcatogory-products">
        {all_products.map((item,i)=>{
          if(props.category === item.category){
             return <Item key ={i} id={item.id} name={item.name} image={item.image}
               new_price={item.new_price} old_price={item.old_price} />
                   }else{
                      return null
 }
        })}
      </div>
    </div>
  )
}

export default ShopCategory