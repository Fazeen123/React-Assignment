import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className='Header-containor'>
        <div className='logo-containor'>Shop Logo</div>
        <div className='Navbar-containor'>
        <ul className='Navbar'>
            <li>
                <Link to={"/"} className='Nav-item'>Home</Link>
            </li>
            <li>
                <Link to={"/Menu"} className='Nav-item'>Menu</Link>
            </li>
            <li>
                <Link to={"/CartView"} className='Nav-item'>Cart View</Link>
            </li>
        </ul>  
        </div>
      </div>
    </>
  )
}

export default Header
