import React, { useState } from 'react'
import './LoginPage.css'
// import Title from '../../Title/Title';

const LoginPage = ({setShowLogin}) => {

    const [currState,SetCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <p onClick={()=>setShowLogin(false)}>X</p>
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>{currState==="Sign Up"?"Create An New Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p required>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create An New Accoun ? <span onClick={()=>SetCurrState("Sign Up")}>Click here</span></p>
        :<p>Already Have An Account ? <span onClick={()=>SetCurrState("Login")}>Click here</span></p>
        }  
      </form>
    </div>
  )
}

export default LoginPage
