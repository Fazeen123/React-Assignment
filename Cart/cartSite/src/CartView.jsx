import React, { useContext, useEffect, useState } from 'react'
import './CartView.css'
import { cartContext } from './ContextCreation.jsx';

const CartView = () => {
  const [total,setTotal]=useState(0);
  const {cart, setCart}=useContext(cartContext);
  // console.log(cart);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+(parseInt(curr.price)*(curr.num)),0))
  },[cart]);
 
  // const addItemNum = (e)=>{
  //   setCart(cart.map((c)=>(c.id===e.id ? [...cart,c.num+1]:cart)));
  // }
  return (
    <>
    <div className='cart-view-heading'>Cart List</div>
    {cart.map((product)=>(<div className='cart-list-containor-CV' key={product.id}>
      <div className='Item-containor-CV'>
        <div className='Image-containor-CV'><img src={product.loc} alt="" /></div>
        <div className='Item-details-CV'>
          <h4>Product name : {product.item}</h4>
          <h4>Product Price : Rs.{product.price}</h4>
          <h4>Number of Product : {product.num}</h4>
        </div>
        <div className='btn-containor-CV'>
          {/* <button className='Add-num-CV' onClick={addItemNum}>+</button> */}
        </div>
      </div>
    </div>))}
    <div className='total-containor'><p>Total amount : Rs.{total}</p></div>
    </>
  )
}

export default CartView
