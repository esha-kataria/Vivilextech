import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Contactus = () => {
  return (
    <div>       
    <Navbar/>

    
    {/* <div class="page-title-container">
        <div class="container">
            <h3>CONTACT US</h3>
        </div>
    </div>
    <section className=' py-3'>
        <div className="container">
            <div className="row">
                <div class="col-md-5">
                    <div class="send_message">
                    <h5 className='pt-5'>How can we help you?</h5>
                        <div class="form">
                            <form  method="post" action="http://vivilextech.com/contact-form.php" name="form1" onSubmit="return aa()">
                                <p class="label">Your Name <span className='clr'>*</span></p>
                                <div class="field required">
                                <input type="text"  name="name" id="name"class="req form-control" required />
                                </div>
                                <p class="label">E-mail <span className='clr'>*</span></p>
                                <div class="field required">
                                <input type="email" name="email" id="email" class="req form-control" required />
                                </div>
                                <p class="label">Mobile Number <span className='clr'>*</span></p>
                                <div class="field required">
                                <input  name="mobile" id="mobile" class="req form-control" required maxlength="16"  onkeypress="return isNumberKey(event)" />
                                </div>
                                <p class="label">Organization <span className='clr'>*</span></p>
                                <div class="field required">
                                <input type="text" id="organization" name="organization" class="req form-control" required />
                                </div>
                                <p class="label">Message <span className='clr'>*</span></p>
                                <div class="textarea required">
                                <textarea name="comments" id="comments" cols="1" rows="3" class="req form-control" required></textarea>
                                </div>
                                <p></p>
                                <div class="button">
                                <input type="submit" class="general_button btn" value="Send Message" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-7">
                    <table class="table line-height">
                    <tr>
                    <td><h4 className='pt-5'>Corporate Address :</h4>
                    <p className='mb-0'><span class="text_subtitle_2"></span><b>Vivilex Technologies Pvt Ltd</b><br />
                        #199/1, Level-2, 22nd Main, <br />
                    HSR Layout, 1st Sector,<br />
                        Bengaluru, Karnataka,<br />
                        India<br/>
                        Pin: 560 102</p>
                    <p className='mb-0'><span class="text_subtitle_2 phones">Phone:</span> +91 810 500 5202</p>
                    <p className='mb-0'><span class="text_subtitle_2">Email:</span> <a href="mailto:#" target="_blank" className='orgclr text-decoration-none'>info@vivilextech.com</a></p>
                    <p><span class="text_subtitle_2">Web:</span> <a href="index-2.html" target="_blank" className='orgclr text-decoration-none'>www.vivilextech.com</a></p>
                            <h4 className='pt-2'>Development & Testing Centre :</h4>
                    <p className='mb-0'><span class="text_subtitle_2"></span><b>Vivilex Technologies Pvt Ltd</b><br />
                        Plot No:11, Quantum Hub, 2nd Floor, <br />
                    Opposite HSBC and Service Tax Office,<br />
                        Siripuram Junction, Visakhapatnam, <br />
                        Andhra Pradesh, India.<br/>
                        Pin: 530 003</p>
                        
                        
                    <h4 className='pt-2'>Branches :</h4>
                    <p className='mb-0 pb-0'><span class="text_subtitle_2"> Chennai </span></p>
                    <p className='mb-0'><span class="text_subtitle_2">Hyderabad </span></p>
                    </td>
                    <td width="10"><p></p>
                    <p></p>
                    <p></p></td>
                    <td valign="top">
                    <h4 className='pt-5'>Registered Address :</h4>
                    <p><span class="text_subtitle_2"></span><b>Vivilex Technologies Pvt Ltd</b><br />
                        7-1190A, Harihara Nagar, <br />
                        2nd Line,
                        Mangamuru Road,<br />
                        Ongole,&nbsp;Prakasam Dist,<br />
                        Andhra Pradesh, India.<br />
                        Pin: 523 002</p>
                    </td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>
    </section> */}

<section id="contact" class="contact">
      <div class="container pt-5">

        <div class="section-title pt-5" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="contact-about">
              <h3>Vesperr</h3>
              <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              <div class="social-links">
                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
            <div class="info">
              <div>
              <i class="fa-solid fa-location-dot"></i>
                <p>A108 Adam Street<br/>New York, NY 535022</p>
              </div>

              <div>
              <i class="fa-solid fa-envelope"></i>
                <p>info@example.com</p>
              </div>

              <div>
                <i class="fa-solid fa-phone"></i>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>
          </div>

          <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
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
