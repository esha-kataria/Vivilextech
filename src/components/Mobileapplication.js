import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Mobileapplication = () => {
  return (
    <div>    
    <Navbar/>

    <div className="page-title-container">
        <div className="container">
            <h3>MOBILE APPLICATION</h3>
        </div>
    </div>
<section>
<div className="container py-5">
<div className="row">
  <div className="col-md-4"> <a href="#"> <img className="img-responsive" src="../mobile-app-development.jpg" alt="..."/> </a> </div>
  <div className="col-md-8">
    <p align="justify">In today’s world where business of Smartphones and Tablets is soaring high, you need a trustworthy and dedicated partner to create handcrafted apps.What can we do? We here at Vivilex offer you exceptional service and a dedicated team with a broad range of expertise from Cocoa framework to Swift, from Lollypop to Material Design for the apps you have envisioned.The team will walk with you to identify your exact needs and cater to them with a quick turnaround time in short Sprints using the Agile process. Result: A product that is meticulously coded, which boasts impeccable quality and transforms your ideas to life.</p>
  </div>
  <div className="clearfix"></div>
</div>
</div>
</section>

<Footer/>
      
    </div>
  )
}

export default Mobileapplication
