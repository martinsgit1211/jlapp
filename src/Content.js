import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
import standingMan from './images/Successful businessman standing near growing bar chart.png';
import steppinMan from './images/Man stepping up as his business is growing.png';
import mouse from './images/Mouse.png';
import bill from './images/Ellipse 49.svg'
import sittingWoman from './images/Businesswoman sitting on a stack of bitcoins and analyzing finances.png';
import advertiser from './images/Social media marketing and online advertising.png';
import star from './images/Star 13.svg';
import './App.css'
import rightArrow from './images/Arrow 2.svg';
import leftArrow from './images/Arrow 3.svg';
import greenB from './images/Rectangle 116.png';
import lala from './images/Rectangle 120.png';
import creators from './images/Rectangle 119.png';
import blueW from './images/Rectangle 118.png';
import blueBolt from './images/Rectangle 115.png';
import hezmag from './images/Rectangle 117.png';
import adviser from './images/Business advisers with a big stack of coins.png'
import statisticsMan from './images/Man checking business statistics on the phone.png';
import discuss from './images/colleagues discussing team project.png';



function Content() {
    const containerRef = useRef(null);

    const scrollImages = (direction) => {
      const container = containerRef.current;
      const scrollAmount = 400;
  
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    };
  
  return (
    <>
        <div id="banner" class="row container-fluid mx-auto align-items-center">
            <div class="col-lg-6 mt-5">
                <h1 id="title" class="display-3">We help Businesses grow <span id="text-success">fast</span> and Brands
                    grow <span id="text-success">global</span>.</h1>
               
                <Link to="/growthform" id='btt' class="btn col-md-4 my-4 btn-lg">Grow my brand</Link>
                <div id="scroll" class="col-lg-6">
                <img src={mouse} class="img-fluid" alt="Placeholder"/>
                <span class="text-white">Scroll to see more section</span>
                </div>
            </div>
            <div class="col-md-6 mt-5 d-flex justify-content-start align-items-center">
                <img src={sittingWoman} class="col-4" alt="woman" />
                <img src={steppinMan} class="col-4" alt="woman" />
                <img src={standingMan} class="col-4" alt="woman" />
            </div>
            <a href='#next' style={{width:'50px'}} class="col text-center mx-auto">

            <img width="48" height="48" style={{width:'50px'}} class="btn mt-4 btn-outline-white rounded-circle border" src="https://img.icons8.com/fluency/48/000000/sort-down.png" alt="sort-down"/>
            </a>
        </div>
    <div id='next' class="container-fluid-md my-5 mx-auto" >
        <div style={{margin:'3rem 0rem'}} class="p-3 rounded-4 shadow-lg col-lg-12 text-center">
        <p id='primary' class="lead fs-5 my-4">With years of experience helping several companies triple their revenue in record time.</p>
        <div className="container d-flex justify-content-evenly align-items-center col-12 mx-auto mt-2">
        <div>

            <button className="btn rounded-circle border btn-outline-secondary me-2 p-1" onClick={() => scrollImages('left')}>
                <img src={leftArrow} alt='left'/>
            </button>
        </div>
            <div
        ref={containerRef}
        className="image-container col-sm-10 rounded-2 shadow-lg text-center"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap:'2.5rem'
        }}
      >
        <img src={greenB} alt="1" />
        <img src={lala} alt="2" />
        <img src={blueW} alt="3" />
        <img src={creators} alt="3" />
        <img src={blueBolt} alt="3" />
        <img src={hezmag} alt="3" />
        <img src={greenB} alt="1" />
        <img src={lala} alt="2" />
        <img src={blueW} alt="3" />
        <img src={creators} alt="3" />
        <img src={blueBolt} alt="3" />
        <img src={hezmag} alt="3" />
        <img src={greenB} alt="1" />
        <img src={lala} alt="2" />
        <img src={blueW} alt="3" />
        <img src={creators} alt="3" />
        <img src={blueBolt} alt="3" />
        <img src={hezmag} alt="3" />
        </div>
        <div>
            <button className="btn ml-3 rounded-circle border btn-outline-secondary ml-4 p-1" onClick={() => scrollImages('right')}>
            <img src={rightArrow} alt='right'/>
            </button>
        </div>
    </div>
        </div>

   




        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow-lg row text-center align-items-center">
            <div class="col-lg-6">
                <h1 id='primary' class="fs-3 my-4">WE POSITION...</h1>
               <p id='parag' class="fs-5">People need what you're offering, but don't know why they should choose you over your competitors. With our branding and design services, we dress up your company  and ensure your customers can’t say NO to your offers.
               </p>
                <Link to="/brandingform" id='btt' class="btn my-4 col-md-6 btn-md">Get a Free Brand Audit</Link>
        
            </div>
            <div class="col-lg-6">
                <img src={adviser} class="img-fluid"  alt="woman" />
            </div>
           
        </div>
        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow-lg row text-center align-items-center">
            <div class="col-lg-6">
                <img src={advertiser} class="img-fluid"  alt="woman" />
            </div>
            <div class="col-lg-6">
                <h1  id='primary' class="fs-3 my-4">WE PROMOTE...</h1>
               <p id='parag' class="fs-5">Tons of prospects are looking for the solutions you offer, but you're not where they are. With our Digital Marketing Tools, we help ensure you get noticed, convert more customers, and close more sales.
               </p>
                <Link to="/brandingform" class="btn btn-success my-4 col-md-4 btn-md">Get Notified</Link>
        
            </div>
           
        </div>
        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow-lg row text-center align-items-center">
            <div class="col-lg-6">
                <h1 class="fs-3 my-4" id='primary'>WE AUTOMATE...</h1>
               <p id='parag' class="fs-5">Imagine being able to focus on the 4% percent of your business that actually generates income, and leave the rest to our Automated systems to work for you, that's what the apps, websites and landing pages we can create for you would help you do.
               </p>
                <Link to="/brandingform" class="btn btn-success col-md-4 my-4 btn-md">Automate Now</Link>
        
            </div>
            <div class="col-lg-6">
                <img src={statisticsMan} class="img-fluid"  alt="woman" />
            </div>
           
        </div>
        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow-lg row text-center align-items-center">
            <div class="mx-auto col-lg-6">
                <img src={discuss} class="img-fluid"  alt="woman" />
            </div>
            <div class="mx-auto col-lg-6">
                <h1 class="fs-3 my-4" id='primary'>WE AUTOMATE...</h1>
               <p id='parag' class="fs-5">Perhaps you already have all these up and running but still aren't getting the results you desire. We can help you Re-Brand, Re-strategize, and Re-position for Peak Performance and Guaranteed results.
               </p>
                <Link to="/websiteform" class="btn btn-success col-md-6 my-4 btn-md">Get a Free Optimization Audit</Link>
        
            </div>
           
        </div>

        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 row justify-content-center text-center py-5 text-white">
        <div class="col-md-12">
            <h2 id='primary' class="mb-4 mx-auto shadow-sm col-md-6 pb-2" style={{borderBottom: '1px blue solid'}}>What our Clients are saying</h2>
            <div class="row justify-content-center">
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/>
                    <div class="h4 text-black">Bill Gates</div>
                    <div class="text-muted mb-3">Founder, Microsoft</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"JL Media transformed our processes, boosting productivity and saving costs. Their tailored approach was a game-changer for our growth."</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/>
                    <div class="h4 text-black">Bill Gates</div>
                    <div class="text-muted mb-3">Founder, Microsoft</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"Our digital presence soared with this tech company's cutting-edge solutions. Increased engagement led to higher revenue and market share. A decision we celebrate."</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/>
                    <div class="h4 text-black">Bill Gates</div>
                    <div class="text-muted mb-3">Founder, Microsoft</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"Impressed by this tech company's seamless solutions. They made us agile, enhancing collaboration and scalability. Highly recommend for any business aiming to thrive."</p>
                </div>
            </div>
        </div>
        </div>
    </div>

    </>
  )
}

export default Content