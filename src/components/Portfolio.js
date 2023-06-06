import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div>
      
      <Navbar/>

      
    <div class="page-title-container">
        <div class="container">
            <h3>Portfolio</h3>
        </div>
    </div>

    
<section>
<div class="container">
<div class="main_content">
  <div class="col-md-12">
  <div class="portfolio-logos">
    <ul className='row'>
        <li class="col-md-6 col-lg-3 col-12"><img src="../TechM.png" width="200" height="200"/></li>
        <li class="col-md-6 col-lg-3 col-12"><img src="../Wipro.png" width="200" height="200"/></li>	
        <li class="col-md-6 col-lg-3 col-12"><img src="../Altimetrik.png" width="200" height="200"/></li>
        <li class="col-md-6 col-lg-3 col-12"><img src="../SLK.png" width="200" height="200"/></li>
    </ul>
    <ul className='row'>
        <li class="col-md-6 col-lg-3 col-12"><img src="../MF%20Logo.png" width="200" height="200"/></li>
        <li class="col-md-6 col-lg-3 col-12"><img src="../Powerup-LTI.png" width="200" height="200"/></li>
        <li class="col-md-6 col-lg-3 col-12"><img src="../OpenText.png" width="200" height="200"/></li>	 
        <li class="col-md-6 col-lg-3 col-12"><img src="../APSSDC.png" width="200" height="200"/></li>
    </ul>
    <ul className='row'>
      <li class="col-md-6 col-lg-3 col-12"><img src="../Nous%20Info.png" width="200" height="200"/></li>
      <li class="col-md-6 col-lg-3 col-12"><img src="../FP-Tech-Science-Logo.png" width="200" height="200"/></li>
      <li class="col-md-6 col-lg-3 col-12"><img src="../NHCE.png" width="200" height="200"/></li>
   </ul>
  </div>
  </div>
</div>
</div>
</section>

<Footer/>
    </div>

  )
}

export default Portfolio
