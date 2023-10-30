import React from 'react';
import "./App.css";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
   
   <div id='bottom' style={{maxHeight:'250vh',padding: '40vh 0 0', position: 'relative' }} className="container-fluid bg-black text-white mx-auto">
  <div id='top' style={{
    position: 'absolute',
    top: '-10%',
    right: '10%',
    width: '80%',
    maxWidth: '80%', // Set a maximum width to maintain readability
    margin: '1.5rem auto',
    padding: '2rem 3rem',
    backgroundColor: 'rgba(2, 10, 54)',
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
  <div className="container">
    <div className="row">
    <div className="col-md-3">
            <h3 style={{color:'#ffff', fontWeight:'700'}}>JL Media HQ</h3>
            <p>JL Media is a fast rising digital marketing agency with the aim to help business and brand grow fast and grow global.</p>
          </div>
       
          <div className="col-md-3">
          <h3 style={{color:'#ffff', fontWeight:'700'}}>Services</h3>
            <ul className="list-unstyled">
              <li>SEO</li>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Content Creation</li>
              <li>Digital Marketing</li>
              <li>Consultancy</li>
            </ul>
          </div>
          <div className="col-md-3">
          <h3 style={{color:'#ffff', fontWeight:'700'}}>Connect with Us</h3>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Tiktok</li>
            </ul>
          </div>
          <div className='col-md-3 mb-4'>
          <h3 style={{color:'#ffff', fontWeight:'700'}}>Socials</h3>
          <Link
                            to="https://x.com/jlmediaglobal?t=7HIINaS9dElyGvoYZU9LLQ&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/twitter--v1.png"
                              alt="twitter--v1"
                            />
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
      <div className="col-md-12 text-center" style={{ borderTop: '1px solid #009900' }}>
        <p className="mb-0 pt-4 pb-5">JL Media Inc@2023</p>
      </div>
    
  </div>
</div>

      

    </>
  );
}

export default Footer;
