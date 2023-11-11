import React from 'react';
import "./App.css";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
   
   <div id='bottom' style={{maxHeight:'290vh',padding: '50vh 0 0', position: 'relative' }} className="container-fluid bg-black text-white mx-auto">
  <div id='top' style={{
    position: 'absolute',
    top: '-10%',
    right: '10%',
    width: '80%',
    maxWidth: '80%', // Set a maximum width to maintain readability
    margin: '1.5rem auto',
    padding: '2rem 3rem',
    backgroundColor: 'rgba(9, 9, 30)',
    
    borderRadius: '10px'
  }} className="text-white py-4">
    <div className="row justify-content-center">
      <div className="col-md-12 text-center">
        <h2 style={{fontFamily:'800'}} className="display-7 mb-4">Get to Learn how popular companies grew from startups to unicorns.</h2>
        <p className="lead fs-6 mb-4">Access the Growth-secrets the leading 4% of companies run with, but won't share on the media.</p>
        <Link to="/learnmore" className="btn btn-lg col-md-6 btn-success">Learn Now</Link>
      </div>
    </div>
  </div>
  <div className="container p-4">
    <div className="row">
    <div className="col-md-3">
            <h3 style={{color:'#ffff', fontWeight:'700'}}>JL Media HQ</h3>
            <p>JLmedia is the Fastest Growing Creative Design and Digital Marketing Agency. Aimed at helping businesses and brands grow fast and grow global.</p>
          </div>
       
          <div className="col-md-3">
          <h3 style={{color:'#ffff', fontWeight:'700'}}>Our Services</h3>
            <ul className="list-unstyled">
              <li>Brand Identity Design</li>
              <li>Marketing Fliers</li>
              <li>Video Editing and Ads</li>
              <li>Digital Marketing</li>
              <li>Web Design and SEO</li>
              <li>App Development
</li>
<li>Social Media Management 
</li>
<li>Copywriting and Content Marketing</li>
            </ul>
          </div>
          <div className="col-md-3">
          <h3 style={{color:'#ffff', fontWeight:'700'}}>Connect with Us</h3>
            <ul className="list-unstyled">
           <li> <Link class='text-decoration-none text-white'
                            to="https://x.com/jlmediaglobal?t=7HIINaS9dElyGvoYZU9LLQ&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                      X
                          </Link></li>
                          <li><Link class='text-decoration-none text-white' to="tiktok.com/@jlmediaglobal" target="_blank" rel="noopener noreferrer">
                           Tiktok
                          </Link></li>
                         <li> <Link class='text-decoration-none text-white'
                            to="https://instagram.com/jlmediaglobal?igshid=MzRlODBiNWFlZA=="
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          Instagram
                          </Link></li>
                         <li> <Link class='text-decoration-none text-white' to='https://www.facebook.com/profile.php?id=100087289263138&mibextid=ZbWKwL'>

                        Facebook
                          </Link></li>
                         <li> <Link class='text-decoration-none text-white' to='https://www.linkedin.com/company/jlmediaglobal/'>

                         LinkedIn
                          </Link></li>
                         <li> <Link class='text-decoration-none text-white' href='mailto:jlmedia.hub8@gmail.com'>

                        Email
                          </Link> </li>
            </ul>
          </div>
          <div className='col-md-3 mb-4'>
          <h3 style={{color:'#ffff', fontWeight:'700'}}>Socials</h3>
          <Link
                            to="https://x.com/jlmediaglobal?t=7HIINaS9dElyGvoYZU9LLQ&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img width="48" height="48" src="https://img.icons8.com/color/48/000000/twitterx--v1.png" alt="twitterx--v1"/>
                          </Link>
                          <Link to="tiktok.com/@jlmediaglobal" target="_blank" rel="noopener noreferrer">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/tiktok--v1.png"
                              alt="tiktok--v1"
                            />
                          </Link>
                          <Link
                            to="https://instagram.com/jlmediaglobal?igshid=MzRlODBiNWFlZA=="
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/instagram-new--v1.png"
                              alt="instagram-new--v1"
                            />
                          </Link>
                          <Link to='https://www.facebook.com/profile.php?id=100087289263138&mibextid=ZbWKwL'>

                          <img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>

                          </Link>
                          <Link to='https://www.linkedin.com/company/jlmediaglobal/'>

                          <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                          </Link>
                          <Link href='mailto:jlmedia.hub8@gmail.com'>

                          <img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/>
                          </Link> 
          </div>
    </div>
      <div className="col-md-12 text-center" style={{ borderTop: '1px solid #009900', height:'20vh' }}>
        <p className="mb-0 pt-4 pb-5">JL Media Inc@2023</p>
      </div>
    
  </div>
</div>

      

    </>
  );
}

export default Footer;
