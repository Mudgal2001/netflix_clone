import React from 'react'
import "./signupScreen.css"
function SignUpScreen() {
  return (
    <div className='signUpScreen'>

        <form action="">
        <h1>Sign In</h1>
            <input placeholder='Email' type="email" />
            <input placeholder='Password'type="password" />
            <button type="submit">Sign In</button>
        </form>
    </div>
  );
}

export default SignUpScreen