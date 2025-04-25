import React, { useState } from 'react'
import './RootLayout.css'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import LoginPage from '../Pages/LoginPage/LoginPage'

const RootLayout = () => {

    const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPage setShowLogin={setShowLogin} />:<></>}
        <div className='RootLayout'>
        <Navbar setShowLogin={setShowLogin} />
        <Outlet/>
        <Footer setShowLogin={setShowLogin}/>
        </div>
    </>
  )
}

export default RootLayout
