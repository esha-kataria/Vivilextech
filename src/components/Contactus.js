import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Contactus = () => {
  return (
    <div>       
    <Navbar/>

    
   
<section id="contact" className="contact">
      <div className="container pt-5">

        <div className="section-title pt-5" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-about">
              <h3>Vivilex</h3>
              <p>We are one of the rapidly growing Software Consulting and Development firm. Leveraging best-in-class people, processes, and technologies. We at Vivilex provide high-quality, high-value software development and high-end consulting services to independent software service providers and enterprises.</p>
              <div className="social-links">
                <a href=" https://twitter.com/vivilextech" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="https://www.facebook.com/Vivilextech" className="facebook"><i className="fa fa-facebook"></i></a>
                
                <a href="https://www.linkedin.com/company/vivilex-technologies?trk=top_nav_home" className="linkedin"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
            <div className="info">
              <div>
              <i className="fa-solid fa-location-dot"></i>
                <p>#199/1, Level-2, 22nd Main,
HSR Layout, 1st Sector,
Bengaluru, Karnataka,</p>
              </div>

              <div>
              <i className="fa-solid fa-envelope"></i>
                <p>info@vivilextech.com</p>
              </div>

              <div>
                <i className="fa-solid fa-phone"></i>
                <p>+91 810 500 5202</p>
              </div>

            </div>
          </div>

          <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            <form action="" method="post" role="form" className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

    <Footer/>
      
    </div>
  )
}

export default Contactus
