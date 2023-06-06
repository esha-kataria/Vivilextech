import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Itconsulting = () => {
  return (
    <div>    
    <Navbar/>

    <div class="page-title-container">
        <div class="container">
            <h3>IT CONSULTING</h3>
        </div>
    </div>
<section>
<div class="container pb-5">
<div class="row">
  <div class="col-md-4"> <a href="#"> <img class="img-responsive pt-5" src="../consultancy.png" alt="..."/> </a> </div>
  <div class="col-md-8 bullets">
    <h3 className='pt-5'>INFORMATION TECHNOLOGY CONSULTING SERVICES</h3>
    <p>We have been instrumental in enabling clients fine tune their business and technology strategies to reach milestones early on.</p>
      
       <ul>
      <li>IT roadmap and portfolio rationalization</li>
      <li>Enterprise architecture and planning</li>
      <li>Application architecture strategy and design</li>
      <li>Application portfolio management</li>
      <li>Enterprise security architecture</li>
      <li>Best practice management</li>
      <li>Testing center of excellence </li>
      </ul>
      
  </div>
</div>
</div>
</section>

<Footer/>
      
    </div>
  )
}

export default Itconsulting
