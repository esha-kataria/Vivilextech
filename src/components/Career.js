import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Career = () => {
  return (
    <div>      
      <Navbar/>

      
    <div class="page-title-container">
        <div class="container">
            <h3>Career</h3>
        </div>
    </div>

    <section className='py-3'>
        <div className="container">
            <div className="row">
                <div class="col-md-4"> 
                    <img class="img-responsive" src="../crop.jpg" alt="..."/>
                </div>

            <div class="col-md-8 bullets">
                <p align="justify">We hunt for the best and the brightest helping them grow as developers, managers and people.
                A job interview can be a great opportunity to consider your potential with us and to learn more about our people, culture and business strategies. </p>
                <p></p>
                <h5>Featured Jobs</h5>

                <ul>
                <li>Fullstack Developers 4+ years experienced</li>
                <li>Python Developers 4+ years experienced</li>
                <li>Oil and Gas Upstream Consultant 5+ years experienced</li>
                <li>Oracle Apps Technical develpoer 7+ years experienced</li>
                <li>Tableau Developer 5+ years experienced</li>
                <li>Automation Testing with Selenium 3+ years experienced</li>
                <li>Performance Testing with Jmeter/LoadRunner/Neoload/Gatling/AppPerfect 4+ years experienced</li>  
                </ul>

            </div>
            </div>
        </div>

        <div class="container py-5">
<div class="col-md-7 col-12 col-lg-5">
<div class="send_message">
    <h5>How can we help you?</h5>
    <div class="form">
      <form  method="post" action="http://vivilextech.com/careers.php" name="form2" enctype="multipart/form-data">
          <p class="label">Your name <span className='clr'>*</span></p>
        <div class="field required">
          <input type="text" id="txtNumeric" name="name" class="req form-control" required />
        </div>
        <p class="label">E-mail <span className='clr'>*</span></p>
        <div class="field required">
          <input type="email" name="email" class="req form-control" required />
        </div>
        <p class="label">Mobile Number <span className='clr'>*</span></p>
        <div class="field required">
          {/* <!--<input name="mobile" type="number" class="form-control" />--> */}
          <input id="cmun" name="mobile" class="req form-control" required maxlength="16"  onkeypress="return isNumberKey(event)" />
        </div>
        <p class="label">Technologies <span className='clr'>*</span></p>
        <div class="field required">
          <input type="text" id="techno" name="techno" class="req form-control" required />
        </div>
        <p class="label">Work exp <span className='clr'>*</span></p>
        <div class="field required">
          <input type="text" id="workexp" name="workexp" class="req form-control" required />
        </div>
        <p class="label">Message <span className='clr'>*</span></p>
        <div class="textarea required">
          <textarea name="comments" cols="1" rows="3" class="req form-control" required></textarea>
        </div>
        {/* <!--<input type="file" name="uploadfile" required="required" class="req" value="ChooseFile" />--> */}
        <p></p>
        <p class="field"><input type="file" name="uploadfile" id="fileToUpload"/></p>
        
        
        <div class="button">
          <input type="submit" class="general_button btn" value="Send Message" />
        </div>
      </form>
    </div>
  </div>

</div>
{/* <div class="col-sm-7"></div> */}

</div> 
    </section>

    <Footer/>
    </div>
  )
}

export default Career
