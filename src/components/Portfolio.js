import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div>
      
      <Navbar/>

      
    {/* <div class="page-title-container">
        <div class="container">
            <h3>Portfolio</h3>
        </div>
    </div>

    
<section>
<div class="container">
<div class="main_content">
  <div class="col-md-12">
  <div class="portfolio-logos">
    <ul className='row'>
        <li class="col-md-6 col-lg-3 col-12"><img src="../TechM.png" width="200" height="200"/></li>
        <li class="col-md-6 col-lg-3 col-12"><img src="../Wipro.png" width="200" height="200"/></li>	
        <li class="col-md-6 col-lg-3 col-12"><img src="../Altimetrik.png" width="200" height="200"/></li>
        <li class="col-md-6 col-lg-3 col-12"><img src="../SLK.png" width="200" height="200"/></li>
    </ul>
    <ul className='row'>
        <li class="col-md-6 col-lg-3 col-12"><img src="../MF%20Logo.png" width="200" height="200"/></li>
        <li class="col-md-6 col-lg-3 col-12"><img src="../Powerup-LTI.png" width="200" height="200"/></li>
        <li class="col-md-6 col-lg-3 col-12"><img src="../OpenText.png" width="200" height="200"/></li>	 
        <li class="col-md-6 col-lg-3 col-12"><img src="../APSSDC.png" width="200" height="200"/></li>
    </ul>
    <ul className='row'>
      <li class="col-md-6 col-lg-3 col-12"><img src="../Nous%20Info.png" width="200" height="200"/></li>
      <li class="col-md-6 col-lg-3 col-12"><img src="../FP-Tech-Science-Logo.png" width="200" height="200"/></li>
      <li class="col-md-6 col-lg-3 col-12"><img src="../NHCE.png" width="200" height="200"/></li>
   </ul>
  </div>
  </div>
</div>
</div>
</section> */}

<section id="portfolio" class="portfolio">
      <div class="container pt-5">

        <div class="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="200">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="400">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="../portfolio-1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="../portfolio-2.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="../portfolio-3.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="../portfolio-4.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="../portfolio-5.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="../portfolio-6.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="../portfolio-7.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="../portfolio-8.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="../portfolio-9.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

<Footer/>
    </div>

  )
}

export default Portfolio
