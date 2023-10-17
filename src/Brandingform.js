import React from 'react'
import Navbar from './Navbar.js'
import './App.css'

function  Brandingform() {
  return (
    <>
        <Navbar/>
        <div>
        <iframe id='frame' className="mx-auto col-12" title="brand" src="https://docs.google.com/forms/d/e/1FAIpQLScaSYtQWMw5DH6eoV_1wUrxpB5i9ZywRC3GN7oNoBuw9JhQCA/viewform?embedded=true" width="640" height="741" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </>
  )
}

export default Brandingform



