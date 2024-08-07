import React, { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Menu from './Menu.jsx'
import CartView from './CartView.jsx'
import { cartContext } from './ContextCreation.jsx'
import Account from './Account.jsx'
import Services from './Services.jsx'
import AboutUs from './AboutUs.jsx'

const App = () => {
  const [cart,setCart]=useState([]);
  return (
    <>
    <cartContext.Provider value={{cart,setCart}}>
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Menu' element={<Menu />}/>
      <Route path='/About us' element={<AboutUs />} />
      <Route path='/Services' element={<Services/>}/>
      <Route path='/CartView' element={<CartView />}/>
      <Route path='/Account' element={<Account/>}/>
     </Routes>
    </BrowserRouter>

    </cartContext.Provider>
    </>
  )
}

export default App
