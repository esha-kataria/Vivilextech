import React from 'react'

const Index = () => {
  return (
    <div>
        {/* slider section start */}
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../slider1.jpg" class="img-fluid d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../slider2.jpg" class="img-fluid d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../slider3.jpg" class="img-fluid d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon arrowicon" aria-hidden="true"></span>
    <span class="visually-hidden " >Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon arrowicon" aria-hidden="true"></span>
    <span class="visually-hidden ">Next</span>
  </button>
</div>

    {/* slider section closed */}

    {/* section2 start */}

    <section className='bggrey text-center'>
        <div className="container py-5">
                <div className="txt">
                    <h2 className='orgclr'>Vivilex Technologies Pvt Ltd</h2>
                    <p className='fs-4'>Feel the Quality</p>
                </div>
            <div className="row py-3">
                <div class="col-md-3 col-sm-6">
                    <div class="feature-wrap my-3"> 
                        <i class="fa fa-cogs iconradious my-2"></i>
                        <h4 className='orgclr'>Software Development</h4>
                        <p>We deal with different latest technologies and fast services in software development.</p>
                        <a href="software-development.html" class="btn btn-dark push-top push-top_btn">Readmore</a> 
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="feature-wrap my-3"> <i class="fa fa-cloud-upload "></i>
                        <h4 className='orgclr'>Cloud Services</h4>
                        <p>Cloud native is the future of application development, with massive potential for business impact.</p>
                        <a href="cloud.html" class="btn btn-dark push-top push-top_btn">Readmore</a> 
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="feature-wrap my-3"> <i class="fa fa-mobile"></i>
                        <h4 className='orgclr'>Mobile  Application</h4>
                        <p>We provide all services in mobile applications, and your apps are safe in our hands.</p>
                        <a href="mobile-application.html" class="btn btn-dark push-top push-top_btn">Readmore</a> 
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="feature-wrap my-3"> <i class="fa fa-leaf"></i>
                        <h4 className='orgclr'>IT Consulting</h4>
                        <p>IT Consulting is the sensitive and important service for any company we are very concerned in it.</p>
                        <a href="it-consultinf-services.html" class="btn btn-dark push-top push-top_btn">Readmore</a> 
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* section2 closed */}

    </div>
  )
}

export default Index
