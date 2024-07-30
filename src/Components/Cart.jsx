import React, { useEffect, useState, useContext } from 'react'
import './Cart.css'
import { cartContext } from '../App';

export const Cart = () => {

  const {cart,setCart}=useContext(cartContext);
  const [total,setTotal]=useState(0);

  const removeCart=(product)=>{
    setCart(cart.filter((c)=>c.id!==product.id))
  }


  useEffect(()=>{
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0))
  },[cart])
  return (
    <>
    <h1 className='cart-heading'>Cart Products</h1>
    <div className="cart-container">
      {
        cart.map((product)=>(
          <div className="cart-product" key={product.id}>
        <div className="img">
          <img src={product.pic} alt="img" />
        </div>
       
        <div className="cart-product-details">
          <h3>{product.name}</h3>
          <p>Price Rs {product.amt}</p>
          <button className='remove-btn' onClick={()=>removeCart(product)}>Remove</button>
        </div>
  
        
      </div>
        ))
      }
      
    </div>
    <h2 className='cart-amt'>Total Amount Rs : {total}</h2>
    </>
  )
}
