import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg"> */}
  {/* <div className="container">
    <a className="navbar-brand" href="#"><img src='../logo.png'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item mx-1 navlinks">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-1 navlinks">
          <Link className="nav-link" to="/Aboutus">About Us</Link>
        </li>
        <li className="nav-item dropdown mx-1 navlinks">
          <Link className="nav-link dropdown-toggle" to="/Services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Softwaredevelopement">Software Development</Link></li>
            <li><Link className="dropdown-item" to="#">Cloud Services</Link></li>
            <li><Link className="dropdown-item" to="/Mobileapplication">Mobile Application</Link></li>
            <li><Link className="dropdown-item" to="#">Product Development</Link></li>
            <li><Link className="dropdown-item" to="/Itconsulting">IT Consulting</Link></li>
            <li><Link className="dropdown-item" to="/Softwaretesting">Software Testing</Link></li>
            <li><Link className="dropdown-item" to="/Corporatetraining">Corporate Training</Link></li>
          </ul>
        </li>
        <li className="nav-item mx-1 navlinks">
          <Link className="nav-link" to="/Portfolio">Portfolio</Link>
        </li>
        <li className="nav-item mx-1 navlinks">
          <Link className="nav-link" to="/Career">Careers</Link>
        </li>
        <li className="nav-item mx-1 navlinks">
          <Link className="nav-link" to="/Contactus">Contact</Link>
        </li>
      </ul>
      <div className="social navbar-right mt-4">
        <ul className="social-share">
          <li><a target="_blank" title="Facebook" className='mx-1 socialicons' href="/"><i className="fa fa-facebook"></i></a></li>
           <li><a target="_blank" title="Linkedin" className='mx-1 socialicons' href="/"><i className="fa fa-linkedin"></i></a></li>
        <li><a target="_blank" title="Twitter" className='mx-1 socialicons' href="/"><i className="fa fa-twitter"></i></a></li>
          <li> <a target="_blank" title="Skype" className='mx-1 socialicons' href="/"><i className="fa fa-skype"></i></a></li>
		  <p className='orgclr'>An ISO 9001:2015 certified company</p>
        </ul>
      </div>
    </div>
  </div>
</nav> */}



  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
       <img src='../logo.png' className='w-100' />
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
          <li><Link className="nav-link scrollto" to="/Aboutus">About</Link></li>
          <li className="dropdown"><a href="#"><span>Services</span> <i className="bi bi-chevron-down"></i></a>
            <ul className="dropdown-menu">
            <li><Link className="nav-link scrollto" to="/Services">Services</Link></li>
              <li><Link className="dropdown-item" to="/Softwaredevelopement">Software Development</Link></li>
              <li><Link className="dropdown-item" to="#">Cloud Services</Link></li>
              <li><Link className="dropdown-item" to="/Mobileapplication">Mobile Application</Link></li>
              <li><Link className="dropdown-item" to="#">Product Development</Link></li>
              <li><Link className="dropdown-item" to="/Itconsulting">IT Consulting</Link></li>
              <li><Link className="dropdown-item" to="/Softwaretesting">Software Testing</Link></li>
              <li><Link className="dropdown-item" to="/Corporatetraining">Corporate Training</Link></li>
            </ul>
          </li>
          <li><Link className="nav-link scrollto " to="/Portfolio">Portfolio</Link></li>
          
          <li><Link className="nav-link scrollto" to="/Contactus">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </div>
  )
}

export default Navbar
