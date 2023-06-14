import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Index = () => {


  const mainkju = () => {
    const swiperscript = document.createElement('script');
    swiperscript.src="https://bootstrapmade.com/demo/templates/Vesperr/assets/js/main.js";
    swiperscript.async=true;
    document.body.appendChild(swiperscript);

    return () => {
      document.body.removeChild(swiperscript);
    }
  }
  const swiper = () => {
    const swiperscript = document.createElement('script');
    swiperscript.src="https://bootstrapmade.com/assets/vendor/swiper/swiper-bundle.min.js";
    swiperscript.async=true;
    swiperscript.onload=()=>{
      mainkju();
    }
    document.body.appendChild(swiperscript);

    return () => {
      document.body.removeChild(swiperscript);
    }
  }
  const GLightbox = () => {
    const swiperscript = document.createElement('script');
    swiperscript.src="https://bootstrapmade.com/assets/vendor/glightbox/js/glightbox.min.js";
    swiperscript.async=true;
    swiperscript.onload=()=>{
      mainkju();
    }
    document.body.appendChild(swiperscript);

    return () => {
      document.body.removeChild(swiperscript);
    }
  }
  const PureCounter = () => {
    const swiperscript = document.createElement('script');
    swiperscript.src="https://bootstrapmade.com/assets/vendor/purecounter/purecounter_vanilla.js";
    swiperscript.async=true;
    swiperscript.onload=()=>{
      mainkju();
    }
    document.body.appendChild(swiperscript);

    return () => {
      document.body.removeChild(swiperscript);
    }
  }




  useEffect(() => {
    // swiper();
    // GLightbox();
    // PureCounter();
    // main();
   
 
  },[]);


  const useScript = url => {
    
  }


 

  return (
    <div>
     

    <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">Grow your business with VIVILEX</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
          <div data-aos="fade-up" data-aos-delay="800">
            <Link to="Contactus" className="btn-get-started scrollto">Get Started</Link>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
          <img src="../hero-img.png" className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>

  <main id="main">

    <section id="clients" className="clients clients">
      <div className="container">

        <div className="row">

          <div className="col-lg-2 col-md-4 col-6">
            <img src="../client-1.png" className="img-fluid" alt="" data-aos="zoom-in"/>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <img src="../client-2.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100"/>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <img src="../client-3.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200"/>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <img src="../client-4.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300"/>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <img src="../client-5.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400"/>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <img src="../client-6.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500"/>
          </div>

        </div>

      </div>
    </section>

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


    <section id="testimonials" className="testimonials section-bg">
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
    </section>

    <section id="portfolio" className="portfolio">
      <div className="container pt-5">

        <div className="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="400">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="../portfolio-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="../portfolio-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="../portfolio-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="../portfolio-4.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="../portfolio-5.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="../portfolio-6.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

      

       

        
        </div>

      </div>
    </section>


    </main>

    </div>
  )
}

export default Index
