import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Aboutus = () => {
  return (
    <div>
      <Navbar/>

      
    <div class="page-title-container">
        <div class="container">
            <h3>About Us</h3>
        </div>
    </div>

    <section className='py-3'>
        <div class="container">
            <div class="row main_content">
                <div class="col-md-4"> 
                    <a href="#"> 
                        <img class="img-responsive" src="../aboutus.png" alt="..."/> 
                    </a> 
                </div>
                <div class="col-md-8">
                    <p align=" mb-2" className='spacing'>We are one of the rapidly growing Software Consulting and Development firm. Leveraging best-in-class people, processes, and technologies. We at Vivilex provide high-quality, high-value software development and high-end consulting services to independent software service providers and enterprises.</p>
                    <p align=" mb-2 spacing" className='spacing'>We are dedicated to develop effective outsourcing partnerships with clients in order to accelerate time to market, reduce operational cost, and empower them to devote more time to their core business. Since our founding, Vivilex has built a successful business.</p>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    </div>
  )
}

export default Aboutus
