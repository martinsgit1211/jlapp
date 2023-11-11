import React, { useRef } from 'react';
import {Link} from 'react-router-dom';
import standingMan from './images/Successful businessman standing near growing bar chart.png';
import steppinMan from './images/Man stepping up as his business is growing.png';
import mouse from './images/Mouse.png';
import zhiri from './images/_STG8680 - Obadiah Zhiri.jpg';
import emmanuel from './images/IMG_20230824_105708_508 - Daniel Emmanuel (ElWins).jpg';
import adeniyi from './images/IMG_20230722_124134_870 - Oluwasegun Adeniyi (1).jpg';
import sittingWoman from './images/Businesswoman sitting on a stack of bitcoins and analyzing finances.png';
import advertiser from './images/Social media marketing and online advertising.png';
import star from './images/Star 13.svg';
import './App.css';
import ayo from './images/IMG-20231102-WA0013.jpg';
import uche from './images/IMG-20220712-WA0006 - Uche Faith.jpg';
import rightArrow from './images/Arrow 2.svg';
import leftArrow from './images/Arrow 3.svg';
import greenB from './images/Rectangle 116.png';
import lala from './images/Rectangle 120.png';
import creators from './images/Rectangle 119.png';
import blueW from './images/Rectangle 118.png';
import blueBolt from './images/let logo red-1.png';
import hezmag from './images/Rectangle 117.png';
import adviser from './images/Business advisers with a big stack of coins.png';
import statisticsMan from './images/Man checking business statistics on the phone.png';
import discuss from './images/colleagues discussing team project.png';
import accent from './images/Accent.png';
import summit from './images/1692997775321.png';
import cathy from './images/Cathy Foundation-01.jpg';
import b3c from './images/-5924654729542088927_121.jpg';
import thama from './images/ThamaniHub3.png';
import goodluck from './images/IMG-20231102-WA0012.jpg';
import gloria from './images/IMG-20231102-WA0011.jpg';
import onuigbo from './images/IMG-20231102-WA0010.jpg';
import gbenga from './images/onuigbo.jpg';
import zyna from './images/IMG-20231102-WA0008.jpg';
import akintayo from './images/IMG-20231102-WA0007.jpg';
import onye from './images/IMG-20231102-WA0014.jpg';
import idowu from './images/IMG-20231102-WA0018.jpg';
import achine from './images/IMG-20231102-WA0017.jpg';
import shaba from './images/IMG-20231102-WA0015.jpg';

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
               
                <Link to="/growthform" id='btt' class="btn rounded-1 p-3 col-md-4 my-4 btn-lg">Grow my brand</Link>
                <div id="scroll" class="col-lg-6">
                <img src={mouse} class="img-fluid" alt="Placeholder"/>
                <span class="text-dark">Scroll to see more section</span>
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
        className="image-container pb-2 col-sm-10 rounded-2 text-center"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap:'2.5rem'
        }}
      >
        <img src={accent} width='80' height='70' alt="3" />
        <img src={summit} width='80' height='70' alt="3" />
        <img src={lala} alt="2" />
        <img src={cathy} width='80' height='70'   alt="2" />
        <img src={b3c} width='80' height='70'  alt="2" />
        <img src={thama} width='120' height='70'  alt="2" />
        <img src={blueW} alt="3" />
        <img src={creators} alt="3" />
        <img src={blueBolt} width='100' height='70' alt="3" />
        <img src={hezmag} alt="3" />
        <img src={greenB} alt="3" />
        <img src={accent} width='80' height='70' alt="3" />
        <img src={summit} width='80' height='70' alt="3" />
        <img src={lala} alt="2" />
        <img src={cathy} width='80' height='70'   alt="2" />
        <img src={b3c} width='80' height='70'  alt="2" />
        <img src={thama} width='120' height='70'  alt="2" />
        <img src={blueW} alt="3" />
        <img src={creators} alt="3" />
        <img src={blueBolt} width='100' height='70' alt="3" />
        <img src={hezmag} alt="3" />
        <img src={greenB} alt="3" />
        </div>
        <div>
            <button className="btn ml-3 rounded-circle border btn-outline-secondary ml-4 p-1" onClick={() => scrollImages('right')}>
            <img src={rightArrow} alt='right'/>
            </button>
        </div>
    </div>
        </div>

   

        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow row text-center align-items-center">
            <div class="col-lg-6">
                <h1 id='primary' class="fs-3 my-4">WE POSITION</h1>
               <p id='parag' class="fs-5">People need what you're offering, but don't know why they should choose you over your competitors. With our branding and design services, we dress up your company  and ensure your customers can’t say NO to your offers.
               </p>
                <Link to="/brandingform" id='btt' class="btn rounded-1 p-3 my-4 col-md-6 btn-md">Get a Free Brand Audit  <img width='15' src={rightArrow} alt='right'/></Link>
        
            </div>
            <div class="col-lg-6">
                <img src={adviser} class="img-fluid"  alt="woman" />
            </div>
           
        </div>
        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow row text-center align-items-center">
    <div class="col-lg-6 order-lg-2 order-1">
        <h1 id='primary' class="fs-3 my-4">WE PROMOTE</h1>
        <p id='parag' class="fs-5">Tons of prospects are looking for the solutions you offer, but you're not where they are. With our Digital Marketing Tools, we help ensure you get noticed, convert more customers, and close more sales.
        </p>
        <Link to="/brandingform" id='btt' class="btn rounded-1 p-3 my-4 col-md-4 btn-md">Get Noticed  <img width='15' src={rightArrow} alt='right'/></Link>
    </div>
    <div class="col-lg-6 order-lg-1 order-2">
        <img src={advertiser} class="img-fluid" alt="woman" />
    </div>
</div>

        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow row text-center align-items-center">
            <div class="col-lg-6">
                <h1 class="fs-3 my-4" id='primary'>WE AUTOMATE</h1>
               <p id='parag' class="fs-5">Imagine being able to focus on the 4% percent of your business that actually generates income, and leave the rest to our Automated systems to work for you, that's what the apps, websites and landing pages we can create for you would help you do.
               </p>
                <Link to="/automate" id='btt' class="btn rounded-1 p-3 col-md-4 my-4 btn-md">Automate Now <img width='15' src={rightArrow} alt='right'/></Link>
        
            </div>
            <div class="col-lg-6">
                <img src={statisticsMan} class="img-fluid"  alt="woman" />
            </div>
           
        </div>
        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow row text-center align-items-center">
            <div class="mx-auto col-lg-6 order-lg-1 order-2">
                <img src={discuss} class="img-fluid"  alt="woman" />
            </div>
            <div class="mx-auto col-lg-6 order-lg-2 order-1">
                <h1 class="fs-3 my-4" id='primary'>WE OPTIMIZE</h1>
               <p id='parag' class="fs-5">Perhaps you already have all these up and running but still aren't getting the results you desire. We can help you Re-Brand, Re-strategize, and Re-position for Peak Performance and Guaranteed results.
               </p>
                <Link to="/websiteform" id='btt' class="btn rounded-1 p-3 col-md-6 my-4 btn-md">Get a Free Optimization Audit <img width='15' src={rightArrow} alt='right'/></Link>
            </div>
        </div>

        <div style={{margin:'4.5rem 0.5rem 11.5rem 0.5rem'}} class="p-0 rounded-4 row justify-content-center text-center py-5 text-white">
        <div class="col-md-12 p-0" style={{minWidth:'100%'}}>
            <h2 id='primary' class="mb-4 mx-auto shadow-sm col-md-6 pb-2" style={{borderBottom: '1px blue solid'}}>What our Clients are saying</h2>
        <div className="container-fluid d-flex justify-content-evenly align-items-center p-0 col-12 mx-auto mt-2">
        {/* <div>

            <button className="btn rounded-circle border btn-outline-secondary me-2 p-2" onClick={() => scrollImages('left')}>
                <img src={leftArrow} alt='left'/>
               
            </button>
        </div> */}
         <div>
         <button id='left' className="btn rounded-circle border btn-outline-light p-2" onClick={() => scrollImages('left')}>
         <img width="50" height="50" src="https://img.icons8.com/ios/50/02A12F/less-than.png" alt="less-than"/>
               
            </button>
         {/* <span class="text-dark me-3">Scroll here to read more...</span>
            <button className="btn ml-3 rounded-circle border btn-outline-secondary ml-4 p-2" onClick={() => scrollImages('right')}>
            <img src={rightArrow} alt='right'/>
            </button> */}
        </div>
            <div
        ref={containerRef}
        className="image-container pb-2 col-sm-12 text-center"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap:'1rem'
        }}
      >
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={emmanuel} alt="Client 1"/>
                    <div class="h4 text-black">Balogun Emmanuel</div>
                    <div class="text-muted mb-3">Founder, Exquisite Integrated Resources</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"Our digital presence soared with this tech company's cutting-edge solutions. Increased engagement led to higher revenue and market share. A decision we celebrate."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                            <img class="img-fluid rounded-circle mb-3 col-4" src={zhiri} alt="Client 1"/>
                            <div class="h4 text-black">Zhiri Obadiah Adams</div>
                            <div class="text-muted mb-3">Founder, zhiREAL Studios</div>
                            <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                            <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                            <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                            <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                            <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                            <p class="mt-3 text-black">"JLmedia is truly a top-notch company offering exceptional digital and branding services. Their ability to understand their clients' needs, their comprehensive approach, and their commitment to excellence have undoubtedly made a positive impact on my business. I wholeheartedly recommend JLmedia to anyone seeking to elevate their brand presence in the digital landscape."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={uche} alt="Client 1"/>
                    <div class="h4 text-black">Uche Faith</div>
                    <div class="text-muted mb-3">Student, FUT Minna</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black"> "Outstanding support! Their tailored solutions made us more agile and productive. Seamless integration enhanced team collaboration. Delighted with the results and eager for a long-lasting partnership."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={adeniyi} alt="Client 1"/>
                    <div class="h4 text-black">Oluwasegun Adeniyi</div>
                    <div class="text-muted mb-3">C. E. O., LET INNOVATIONS</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"Impressed by this tech company's seamless solutions. They made us agile, enhancing collaboration and scalability. Highly recommend for any business aiming to thrive."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={goodluck} alt="Client 1"/>
                    <div class="h4 text-black">Goodluck Adioha</div>
                    <div class="text-muted mb-3">Cathy Bakery and Kitchens</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"
                    Our Re-Brand by JLmedia was excellent. Their delivery is top-notch. They made our brand stand out digitally.
                    We look forward to working more with their company."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={ayo} alt="Client 1"/>
                    <div class="h4 text-black">Ilesanmi Ayomide (YINJU)</div>
                    <div class="text-muted mb-3">Creative Director, Pisteuo Clothings </div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"JL media is doing a very good job at delivering customers'projects. I like the fact that they don't just work on your projects, they are also interested in your growth personally even as a brand.
"</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={gloria} alt="Client 1"/>
                    <div class="h4 text-black">Gloria Unachukwu</div>
                    <div class="text-muted mb-3">Founder, Peak-Health</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"The Team and their responses are great, They're a great company to entrust your business into."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={onuigbo} alt="Client 1"/>
                    <div class="h4 text-black">Emmanuel Onuigbo</div>
                    <div class="text-muted mb-3">Pioneer, iPresh Movement </div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"JLMedia takes up publicity contents (videos especially) for our programs like it's theirs. We feel like they belong to our team. And their excellence in delivery stands out."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={gbenga} alt="Client 1"/>
                    <div class="h4 text-black">Oyenuhi Gbenga Emmanuel</div>
                    <div class="text-muted mb-3">Founder, Gbengs Enterprises</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                 
                    <p class="mt-3 text-black">" JLmedia's is swift and delivers within time-frame, with compromising on quality."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={zyna} alt="Client 1"/>
                    <div class="h4 text-black">Nagya Jessica Zyna</div>
                    <div class="text-muted mb-3">Creative Writer, Papers and Pentagons</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                 
                    <p class="mt-3 text-black">"The services and delivery I have seen so far have been nothing short of masterpieces. It shows how much each staff in the company pays attention to details and are willing to give excellence in every way."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={akintayo} alt="Client 1"/>
                    <div class="h4 text-black">Akintayo Esther</div>
                    <div class="text-muted mb-3">Founder, Akillycouture</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"Their services are always great and on time... I love the fact that they don't delay when it comes to delivering."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={onye} alt="Client 1"/>
                    <div class="h4 text-black">Onyemaeme Favour Chinaecherem </div>
                    <div class="text-muted mb-3">Customer service agent, ProjectSolutionsNG</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"If you need it done excellently and on time, call JL Media!"</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={idowu} alt="Client 1"/>
                    <div class="h4 text-black">Idowu David</div>
                    <div class="text-muted mb-3">Creative director, Disviz</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"We had the pleasure of working with JLmedia to enhance our brand, and we couldn't be more pleased with the results. Their expertise and creative approach significantly increased our client base. We say thank you!
"</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 shadow m-2 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={achine} alt="Client 1"/>
                    <div class="h4 text-black">Achine Elijah Iripia</div>
                    <div class="text-muted mb-3">COO, Accent interior</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"
                    Thanks to this tech company, our financial management processes are streamlined and efficient. Their support led to unprecedented growth. Grateful for their invaluable expertise."</p>
                </div>
                <div id='review' class="col-12 col-sm-6 col-md-4 col-lg-3 rounded shadow m-4 p-4" style={{minWidth:'280px'}}>
                    <img class="img-fluid rounded-circle mb-3 col-4" src={shaba} alt="Client 1"/>
                    <div class="h4 text-black">Shaba Mercy Taiye</div>
                    <div class="text-muted mb-3">CEO and Creative Director of Tags Co.</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">“A call with JLmedia helped my organization gain clarity on certain operations and tick all the boxes to move into the next round and since then operations have been smoother than before.”</p>
                </div>
        </div>
        <div>
            <button id='right' className="btn ml-3 rounded-circle border btn-outline-light p-2" onClick={() => scrollImages('right')}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/02A12F/more-than.png" alt="more-than"/>
            </button>
        </div>
    </div>

        </div>
        </div>
    </div>

    </>
  )
}

export default Content;