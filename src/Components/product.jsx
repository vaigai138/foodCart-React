import React from 'react'
import "./product.css"
import { useContext } from 'react'
import { cartContext } from '../App'

export const Product = ({products}) => {

  const {cart,setCart}=useContext(cartContext);

  const addCart=()=>{
    setCart([...cart,products])
  }
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id!==products.id))
  }


  return (
    <div className='products'>
        <div className="img">
            <img src={products.pic} alt={products.name} />
        </div>
        <div className="product-details">
        <h3>{products.name}</h3>
        <p>Price Rs : {products.amt}</p>
        {
          cart.includes(products)?<button className="removecart" onClick={removeCart}>Remove from cart</button>:
          <button onClick={addCart}>Add to Cart</button>
        }
        </div>
    </div>
  )
}