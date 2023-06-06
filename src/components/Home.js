import React from 'react'
import Navbar from './Navbar'
import Index from './Index'
import Footer from './Footer'
import '../App.css';


const Home = () => {
  return (
    <div className='body'>
        <Navbar/>
        <Index/>
        <Footer/>
    </div>
  )
}

export default Home
