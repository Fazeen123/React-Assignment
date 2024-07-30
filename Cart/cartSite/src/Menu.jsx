import React, { useState } from 'react'
import ItemList from './data.json'
import MenuStructure from './MenuStructure';
import './Menu.css'

const Menu = () => {
    const [Items]=useState(ItemList);
    
    // console.log(Items)
  return (
    <div className='Menu-containor'>
      <div className='Menu-heading'>Menu Card</div>
      <div className='Menu-content'>
      {Items.map((product)=>(
        <MenuStructure key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}

export default Menu
