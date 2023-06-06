import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Contactus = () => {
  return (
    <div>       
    <Navbar/>

    
    <div class="page-title-container">
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
                                {/* <!--<input name="mobile" type="number" class="form-control" />--> */}
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
    </section>

    <Footer/>
      
    </div>
  )
}

export default Contactus
