import React, { use, useState } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = ({setShowLogin}) => {
  return (
    <div className="footer">
      <div className='footer-box'>
        <div className='left-col'>
          <h1 className='text-logo'>{assets.text_logo}</h1>
          <p>{assets.text_desc}</p>
          <p></p>
          <ul>
              <Link to={"/"}><li>Home</li></Link>
              <Link to={"/menu"}><li>Menu</li></Link>
              <Link to={"/products"}><li>Products</li></Link>
              <Link to={"/about-us"}><li>About Us</li></Link>
              <Link to={"/contact"}><li>Contact Us</li></Link>
          </ul>
        </div>

        <div className='mid-col'>
          <h1>Get In Touch</h1>
          <form>
              <div className="input-fields">
                  <label>Name</label>
                  <input type="text" placeholder='Enter Your Name' />
              </div>

              <div className="input-fields">
                  <label>Email Address</label>
                  <input type="text" placeholder='Enter Your Name' />
              </div>

              <div className="input-fields">
                  <label>Message</label>
                  <textarea placeholder='Enter Your Message'></textarea>
              </div>
              <button>Send Message</button>
          </form>
        </div>

        <div className='right-col'>
          <h1>Menu Link</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Payment Gateways</li>
            <li>React Router</li>
            <li>App Download</li>
            <li onClick={()=>setShowLogin(true)}>Login / Sign Up</li>
          </ul>
        </div>
    </div>
      <p className='copy'>&copy; 2025 Copyrights React Router All Rights Reserved</p>
    </div>
  )
}

export default Footer
