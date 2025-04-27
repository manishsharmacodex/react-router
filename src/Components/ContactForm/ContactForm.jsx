import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <form>
        <input type="text" placeholder='enter your name : ' />
        <input type="email" placeholder='enter your email' />
        <textarea placeholder='enter your message'></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
