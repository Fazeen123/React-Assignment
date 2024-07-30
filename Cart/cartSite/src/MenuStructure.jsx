import React, { useContext } from 'react'
import './MenuStructure.css'
import { cartContext } from './ContextCreation'

const MenuStructure = ({product}) => {
  const {cart,setCart}=useContext(cartContext);

  const addItem =()=>{
    setCart([...cart,product])
  }
  const removeItem=()=>{
    setCart(cart.filter((c)=> c.id!==product.id))
  }

  return (
    <>
    <div className='Item-containor'>
        
    <div className='Image-containor'><img src={product.loc} alt={product.item} /></div>
    <h4>{product.item}</h4>
    <p>Price : Rs.{product.price}</p>
    <h5>{product.type}</h5>
    {
      cart.includes(product)?(<button className='remove-btn' onClick={removeItem}>Remove from item</button>):(<button onClick={addItem}>Add to cart</button>)
    }
    </div>
    </>
  )
}

export default MenuStructure
