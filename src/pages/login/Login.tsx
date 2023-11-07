import React from 'react'
import { useState } from 'react'
import './Login.css'

function Login() {
    return (
        <>
            <div className='canvas_login'>
                <div className='login_div'>
                <img src="public/logo.png" alt="ForPin Premium Logo" className='login_forpin_logo'/>
                <h1>ForPin Premium Login</h1>
                <label htmlFor="username_input">Username</label>
                <br />
                <input type="text" className='login_input_box' id='username_input' placeholder='Username'/>
                <br />
                <br />
                <label htmlFor="password_input">Password</label>
                <br />
                <input type="text" className='login_input_box' id='password_input' placeholder='Password'/>
                <br />
                <br />
                <button className='login_button'>Login</button>
                </div>
            </div>
        </>
      )
}

export default Login;