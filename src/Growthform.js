import React from 'react'
import Navbar from './Navbar.js'
import './App.css'

function  Growthform() {
  return (
    <>
          <Navbar/>
        <div>
            <iframe id='frame' className="mx-auto col-12" title="growth" src="https://docs.google.com/forms/d/e/1FAIpQLSfrrLYmhVaByZsvFCLMCVARsmCOMYEs28edGUEihIaTMDdBlg/viewform?embedded=true" width="640" height="741" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </>
  )
}

export default Growthform;