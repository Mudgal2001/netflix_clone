import React from 'react'
import './LoginScreen.css'
function LoginScreen() {
  return (
    <div className='loginScreen'>
        <img 
        className='loginScreen__Logo'
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <button className='loginScreen__button'>Sign In</button>
        <div className="loginScreen__gradient"/>
        <div className="loginScreen__body">
            <>
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="loginScreen__input">
                <form >
                    <input type="email" 
                        placeholder='Email Address'
                    />
                    <button className='loginScreen__getStarted'>Get Started</button>
                </form>
            </div>
            </>
        </div>
    </div>
  )
}

export default LoginScreen