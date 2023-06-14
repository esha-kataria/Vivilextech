import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';
// import ScriptTag from 'react-script-tag';

const Aboutus = () => {
  return (
    <div>
      <Navbar/>

      
    {/* <div className="page-title-container">
        <div className="container">
            <h3>About Us</h3>
        </div>
    </div>

    <section className='py-3'>
        <div className="container">
            <div className="row main_content">
                <div className="col-md-4"> 
                    <a href="#"> 
                        <img className="img-responsive" src="../aboutus.png" alt="..."/> 
                    </a> 
                </div>
                <div className="col-md-8">
                    <p align=" mb-2" className='spacing'>We are one of the rapidly growing Software Consulting and Development firm. Leveraging best-in-class people, processes, and technologies. We at Vivilex provide high-quality, high-value software development and high-end consulting services to independent software service providers and enterprises.</p>
                    <p align=" mb-2 spacing" className='spacing'>We are dedicated to develop effective outsourcing partnerships with clients in order to accelerate time to market, reduce operational cost, and empower them to devote more time to their core business. Since our founding, Vivilex has built a successful business.</p>
                </div>
            </div>
        </div>
    </section> */}

    {/* <ScriptTag isHydrating={true} type="text/javascript" src="../main.js"/> */}

<main id='#main'>
<section id="about" className="about">
      <div className="container pt-5">

        <div className="section-title pt-5" data-aos="fade-up">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
            We are one of the rapidly growing Software Consulting and Development firm. Leveraging best-in-class people, processes, and technologies. We at Vivilex provide high-quality, high-value software development and high-end consulting services to independent software service providers and enterprises
            </p>
            <ul>
              <li><i className="fa-solid fa-check-double"></i> Truested Company</li>
              <li><i className="fa-solid fa-check-double"></i> Experienced</li>
              <li><i className="fa-solid fa-check-double"></i> 3rd Point</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <p>
            We are dedicated to develop effective outsourcing partnerships with clients in order to accelerate time to market, reduce operational cost, and empower them to devote more time to their core business. Since our founding, Vivilex has built a successful business.
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>


    <section id="counts" className="counts">
      <div className="container">

        <div className="row">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <img src="../counts-img.svg" alt="" className="img-fluid"/>
          </div>

          <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="fa-solid fa-face-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                  <i className="fa-solid fa-book"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                 
                    <i className="fa-solid fa-clock"></i>
                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                  <i className="fa-solid fa-award"></i>
                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </main>


    <Footer/>
    </div>
  )
}

export default Aboutus
