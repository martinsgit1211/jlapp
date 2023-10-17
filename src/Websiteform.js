import React from 'react'
import Navbar from './Navbar.js'
import './App.css'

function  Websiteform() {
  return (
    <>
        <Navbar/>
        <div>
          <iframe id='frame' className="mx-auto col-12" title="web" src="https://docs.google.com/forms/d/e/1FAIpQLSfT16qhFh9tdxNA0C714G4FRN4NcpHOINrswcG4FwZIH-0MYQ/viewform?embedded=true" width="640" height="741" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </>
  )
}

export default Websiteform