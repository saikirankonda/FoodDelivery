import React, { useState } from 'react'
import "./LogInPopup.css"
import {assets} from"../../assets/assets"

const LogInPopup = ({setShowLogin}) => {
    const [currentState,setCurranetState] = useState("SignUp");
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-pop-title">
                <h2>{currentState} </h2>
                <img  onClick={() =>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {
                    currentState === "LogIn" ? <></> :  <input type="text" placeholder='Your Name' required />
                }
               
                <input type="email" placeholder='Email' required />
                <input type="password"  placeholder='Password' required />
            </div>
            <button>{currentState === "SignUp" ? "Create Account " : "LogIn"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p> By checking , i agree to the terms of use & privacy policy </p>
            </div>
            {
                currentState === "LogIn" ? <p>Create a new account ? <span onClick={()=> setCurranetState("SingUp")}>Click here</span></p> :
                 <p>Already have account ? <span onClick={() => setCurranetState("LogIn")}> LogIn</span> </p>
            }
           
           
        </form>
    </div>
  )
}

export default LogInPopup