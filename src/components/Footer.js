import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      



<footer id="footer">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 text-lg-left text-center">
          <div className="copyright">
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vesperr-free-bootstrap-template/ --> */}
           Copyright © 2023 Vivilex Technologies Pvt. Ltd. All rights reserved
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <Link to="/" className="scrollto">Home</Link>
            <Link to="/Aboutus" className="scrollto">About</Link>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
      </div>
    </div>
</footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}

export default Footer
