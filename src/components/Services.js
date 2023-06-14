import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Services = () => {
  return (
    <div>       
    <Navbar/>

    
    {/* <div className="page-title-container">
        <div className="container">
            <h3>SERVICES</h3>
        </div>
    </div>
<section>
<div className="container">
<div className="row">
  <div className="col-md-4"> <a href="#"> <img className="img-responsive" src="../OurServices.gif" alt="..."/> </a> </div>
  <div className="col-md-8">
    <p align="justify">Vivilex  takes pride in its think-tank of technology geeks,who had delivered international products successfully in various industries. Vivilex has its continuous focus on innovation, passion in bleeding-edge technologies and a disciplined approach in the application of industry best practices,always ensuring deliverables of quality and value re-engineered.</p>
    <div className="servecemenu">
        <ul className="nav nav-list primary">
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
</section> */}



<section id="services" className="services">
      <div className="container pt-5">

        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Feel the Quality</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="fa fa-cogs iconradious"></i></div>
              <h4 className="title"><a href="">Software Development</a></h4>
              <p className="description">We deal with different latest technologies and fast services in software development.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="fa fa-cloud-upload "></i></div>
              <h4 className="title"><a href="">Cloud Services</a></h4>
              <p className="description">Cloud native is the future of application development, with massive potential for business impact.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="fa fa-mobile"></i></div>
              <h4 className="title"><a href="">Mobile Application</a></h4>
              <p className="description">We provide all services in mobile applications, and your apps are safe in our hands.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="fa fa-leaf"></i></div>
              <h4 className="title"><a href="">IT Consulting</a></h4>
              <p className="description">IT Consulting is the sensitive and important service for any company we are very concerned in it.</p>
            </div>
          </div>

        </div>

      </div>
    </section>


    {/* <section id="more-services" className="more-services">
      <div className="container">

        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card" style={{ backgroundImage: `url("../more-services-1.jpg")` }} data-aos="fade-up" data-aos-delay="100">
              <div className="card-body">
                <h5 className="card-title"><a href="">Lobira Duno</a></h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="card" style={{ backgroundImage: `url("../more-services-2.jpg")` }} data-aos="fade-up" data-aos-delay="200">
              <div className="card-body">
                <h5 className="card-title"><a href="">Limere Radses</a></h5>
                <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>

          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4">
            <div className="card" style={{ backgroundImage: `url("../more-services-3.jpg")` }} data-aos="fade-up" data-aos-delay="100">
              <div className="card-body">
                <h5 className="card-title"><a href="">Nive Lodo</a></h5>
                <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4">
            <div className="card" style={{ backgroundImage: `url("../more-services-4.jpg")` }} data-aos="fade-up" data-aos-delay="200">
              <div className="card-body">
                <h5 className="card-title"><a href="">Pale Treda</a></h5>
                <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section> */}

    {/* <section id="testimonials" className="testimonials section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="../testimonials-1.jpg" className="testimonial-img" alt=""/>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="../testimonials-2.jpg" className="testimonial-img" alt=""/>
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="../testimonials-3.jpg" className="testimonial-img" alt=""/>
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="../testimonials-4.jpg" className="testimonial-img" alt=""/>
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="../testimonials-5.jpg" className="testimonial-img" alt=""/>
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section> */}

<Footer/>      
    </div>
  )
}

export default Services
