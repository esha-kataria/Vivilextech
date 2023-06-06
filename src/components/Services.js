import React from 'react'
import Navbar from './Navbar'
import '../App.css';

const Services = () => {
  return (
    <div>       
    <Navbar/>

    
    <div class="page-title-container">
        <div class="container">
            <h3>SERVICES</h3>
        </div>
    </div>
<section>
<div class="container">
<div class="row">
  <div class="col-md-4"> <a href="#"> <img class="img-responsive" src="../OurServices.gif" alt="..."/> </a> </div>
  <div class="col-md-8">
    <p align="justify">Vivilex  takes pride in its think-tank of technology geeks,who had delivered international products successfully in various industries. Vivilex has its continuous focus on innovation, passion in bleeding-edge technologies and a disciplined approach in the application of industry best practices,always ensuring deliverables of quality and value re-engineered.</p>
    <div class="servecemenu">
        <ul class="nav nav-list primary">
            <li><a href="software-development.html">Software Development</a></li>
            <li><a href="cloud.html">Cloud Services</a></li>
            <li><a href="mobile-application.html">Mobile Application </a></li>
            <li><a href="product-development.html">Product Development</a></li>
            <li><a href="it-consultinf-services.html">IT Consulting </a></li>
            <li><a href="software-testing.html">Software Testing</a></li>
            <li><a href="corporate-traning.html">Corporate Training </a></li>
          </ul>
    </div>
  </div>
</div>
</div>
</section>
      
    </div>
  )
}

export default Services
