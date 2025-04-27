import React from 'react'
import ContactUs from '../Pages/ContactUs/ContactUs'
import { Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <div>
      <ContactUs />
      <Outlet />
    </div>
  )
}

export default ContactLayout
