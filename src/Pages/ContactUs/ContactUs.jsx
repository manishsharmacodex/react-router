import React from 'react'
import './ContactUs.css'
import Title from '../../Title/Title';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

    const heading = "Contact Us";
    const navigate = useNavigate();

  return (
    <div className='contact'>
        <Title title={heading} />
        <div className="button-box">
          <button onClick={()=>navigate("info")}>Contact Info</button>
          <button onClick={()=>navigate("form")}>Contact Form</button>
        </div>
    </div>
  )
}

export default ContactUs
