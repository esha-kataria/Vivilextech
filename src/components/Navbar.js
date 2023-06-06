import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#"><img src='../logo.png'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item mx-1 navlinks">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item mx-1 navlinks">
          <Link class="nav-link" to="/Aboutus">About Us</Link>
        </li>
        <li class="nav-item dropdown mx-1 navlinks">
          <Link class="nav-link dropdown-toggle" to="/Services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Softwaredevelopement">Software Development</Link></li>
            <li><Link class="dropdown-item" to="#">Cloud Services</Link></li>
            <li><Link class="dropdown-item" to="/Mobileapplication">Mobile Application</Link></li>
            <li><Link class="dropdown-item" to="#">Product Development</Link></li>
            <li><Link class="dropdown-item" to="/Itconsulting">IT Consulting</Link></li>
            <li><Link class="dropdown-item" to="/Softwaretesting">Software Testing</Link></li>
            <li><Link class="dropdown-item" to="/Corporatetraining">Corporate Training</Link></li>
          </ul>
        </li>
        <li class="nav-item mx-1 navlinks">
          <Link class="nav-link" to="/Portfolio">Portfolio</Link>
        </li>
        <li class="nav-item mx-1 navlinks">
          <Link class="nav-link" to="/Career">Careers</Link>
        </li>
        <li class="nav-item mx-1 navlinks">
          <Link class="nav-link" to="/Contactus">Contact</Link>
        </li>
      </ul>
      <div class="social navbar-right mt-4">
        <ul class="social-share">
          <li><a target="_blank" title="Facebook" className='mx-1 socialicons' href="/"><i class="fa fa-facebook"></i></a></li>
           <li><a target="_blank" title="Linkedin" className='mx-1 socialicons' href="/"><i class="fa fa-linkedin"></i></a></li>
        <li><a target="_blank" title="Twitter" className='mx-1 socialicons' href="/"><i class="fa fa-twitter"></i></a></li>
          <li> <a target="_blank" title="Skype" className='mx-1 socialicons' href="/"><i class="fa fa-skype"></i></a></li>
		  <p className='orgclr'>An ISO 9001:2015 certified company</p>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
