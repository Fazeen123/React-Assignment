import React from 'react'
import './Home.css'
import HomeStructure from './HomeStructure'
import SecondHome from './SecondHome'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home-main-containor'>
      <SecondHome/>
      <HomeStructure/>
      <Footer/>
    </div>
  )
}

export default Home
