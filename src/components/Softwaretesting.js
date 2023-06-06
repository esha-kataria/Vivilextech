import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Softwaretesting = () => {
  return (
    <div>    
    <Navbar/>

    <div class="page-title-container">
        <div class="container">
            <h3>SOFTWARE TESTING</h3>
        </div>
    </div>
<section>
<div class="container py-5">
<div class="row">
  <div class="col-md-4"> <a href="#"> <img class="img-responsive pt-3" src="../soft.jpg" alt="..."/> </a> </div>
  <div class="col-md-8">
    <p align="justify" className='pt-3'>The quality of the success of day-to-day operations of complex &amp; critical businesses with the consistent challenges posed by the dynamically evolving environment, keeping pace with progressively competitive Industry, in addition to the demand of the need to provide customer focused solutions, which are accomplished by innovative dimensions of customer expectations, firms must ensure the solutions would meet the exponentially rising customer expectations. Vivilex Testing solutions and services understand the challenges and business needs to bring offective combination of proven methodologies &amp; best practices deployed in the process, and technology that ensures to achieve the objectives of quality in delivery of meeting requirements on time and with a measurable ROI and a reduction in Cost of Quality (CoQ). We strive to improve software testing practices and have built a team of international test experts &amp; consultants that deliver customized testing solutions, Consulting, and outsourcing services to companies that are looking to improve their software testing and QA processes.</p>
    <p align="justify">Vivilex Is specialized in setting up end-to-end software test process and methodology to ensure highest level of test solution delivered to achieve customer satisfaction. Vivilex offers a complete and comprehensive suite of software testing services spanning Consulting, enterprise services and functionality testing. Built upon in-depth vertical knowledge acquired by a team of test experts with advanced skills &amp; expertise over various technologies across a wide range of industries, we flexibly map our services delivery to evolving business needs. </p>
  </div>
</div>
</div>
</section>
      
      <Footer/>
    </div>
  )
}

export default Softwaretesting
