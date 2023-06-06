import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      
<section id="bottom" className='bg-dark'>
  <div class="container wow py-5">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="widget ">
          <h4 className='orgclr'>Corporate</h4>
          <ul class="nav nav-list primary display">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Aboutus">About Us</Link></li>
            <li><Link to="/Services">Services</Link></li>
             <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Career">Careers</Link></li>
            <li><Link to="/Contactus">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="widget">
          <h4 className='orgclr'>Services</h4>
          <ul class="nav nav-list primary display">
            <li><Link to="/Softwaredevelopement">Software Development</Link></li>
             <li><Link to="#">Cloud Services</Link></li>
            <li><Link to="/Mobileapplication">Mobile Application </Link></li>
            <li><Link to="#">Product Development</Link></li>
            <li><Link to="/Itconsulting">IT Consulting </Link></li>
            <li><Link to="/Softwaretesting">Software Testing</Link></li>
            <li><Link to="/Corporatetraining">Corporate Training</Link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="widget">
          <h4 className='orgclr'>Reach Us</h4>
          <div class="address">
            <p><strong>Vivilex Technologies Pvt Ltd</strong></p>
            <p>#199/1, Level-2, 22nd Main, </p>
           <p>HSR Layout, 1st Sector,</p>
           <p>Bengaluru, Karnataka,</p>
           <p>India</p>
           <p>Pin: 560 102</p>
            <p><i class="fa fa-phone color contact-icon"></i> +91 810 500 5202</p>
            <p><a href="#" className='orgclr text-decoration-none'><i class="fa fa-envelope color contact-icon"></i> </a><a href="mailto:info@vivilextech.com" className='orgclr text-decoration-none'>info@vivilextech.com</a></p>
            <p> Web: www.vivilextech.com </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="widget">
          <h4 className='orgclr'> Connect On</h4>
          <div class="social">
            <ul class="social-share">
              <li><a target="_blank" title="Facebook" href="/" className='mx-1'><i class="fa fa-facebook"></i></a></li> 
              <li><a target="_blank" title="Linkedin" href="/" className='mx-1'><i class="fa fa-linkedin mx-1"></i></a></li>
              <li><a target="_blank" title="Twitter" href="/" className='mx-1'><i class="fa fa-twitter mx-1"></i></a></li>
              <li> <a target="_blank" title="Skype" href="/" className='mx-1'><i class="fa fa-skype mx-1"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!--/#bottom--> */}
<footer id="footer">
  <div class="container text-center">
    <div class="row">
      <div class="col-sm-6"> Copyright © 2021 Vivilex Technologies Pvt. Ltd. All rights reserved </div>
      <div class="col-sm-6"> </div>
    </div>
  </div>
</footer>
{/* <!--/#footer--> */}
    </div>
  )
}

export default Footer
