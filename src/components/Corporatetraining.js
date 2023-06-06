import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import Footer from './Footer';

const Corporatetraining = () => {
  return (
    <div>   
    <Navbar/>

    <div class="page-title-container">
        <div class="container">
            <h3>CORPORATE TRAINING</h3>
        </div>
    </div>
<section>
<div class="container py-5">
<div class="row">
  <div class="col-md-4"> <a href="#"> <img class="img-responsive pt-3" src="../Corporate-Training.jpg" alt="..."/> </a> </div>
  <div class="col-md-8">
    <p align="justify" className='pt-3'>Testing accounts for almost 30 percent of the software development market. US spends an approximate $ 69.5 Bn on testing and the global outsourced testing market is estimated to be a $13 billion industry. With the boom of the third party software testing business, the need for quality and trained manpower has become a critical issue in the industry. Typically, the training focuses on process, tools, and certification in the testing space, and focused at creating entry level testers. Thus it presents a great opportunity for offering formal technical education in Software Testing, leading to an international certification.</p>
    <p align="justify"> Vivilex training’s are aimed at "learning by doing" and equip participants to go back and implement what they learn on-the-job. Training’s whether instructor-led or delivered online provide practical and ready-to-use inputs, and are aided by state-of-the-art and state-of-practice research papers, tools, guides, manuals, videos, data, benchmarks, games, case studies, and exercises. </p>
    <p align="justify">We believe that if the right people are given the right tools and correct support, they can do wonders. This is the foundation on which our teams are built. The thread of mutual trust, extensive collective experience and high degree of individual fulfilment holds us together.</p>
  </div>
</div>
</div>
</section>
      
      <Footer/>
    </div>
  )
}

export default Corporatetraining
