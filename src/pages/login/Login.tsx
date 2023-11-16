import React from 'react'
import { useState } from 'react'
import './Login.css'

function Login() {
    let pattern: RegExp = /^(|.*\s.*)$/;

    function validUsernameCheck() {
        const label = document.getElementById("warning_label_username");
        const field = document.getElementById("username_input");
        if (field != null) {
            if (pattern.test(field.value)) {
                label.innerText = "Username can't be empty and must not contain spaces"
                label.style.display = "block";
            } else {
                label.style.display = "none";
            }
        }
    }

    function validPasswordCheck() {
        const label = document.getElementById("warning_label_password");
        const field = document.getElementById("password_input");
        if (field != null) {
            if (pattern.test(field.value)) {
                label.innerText = "Password can't be empty and must not contain spaces"
                label.style.display = "block";
            } else {
                label.style.display = "none";
            }
        }
    }

    async function loggingIn() {
        const label1 = document.getElementById("warning_label_password");
        const label2 = document.getElementById("warning_label_username");

        const username_input = document.getElementById("username_input")?.value;
        const password_input = document.getElementById("password_input")?.value;

        if (label1 != null && label2 != null) {
            if (label1.style.display == "none" && label2.style.display == "none" && !pattern.test(username_input) && !pattern.test(password_input)) {
                try {
                    const req = {};
                    req.username = username_input;
                    req.password = password_input;
        
                    console.log(req);
        
                    const response = await fetch('http://localhost:3000/user/login', {
                        method: 'POST',
                        body: JSON.stringify(req),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }).then(response => response.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('user_id', data.data.user_id);
                        localStorage.setItem('user_profile', data.data.profile_path);
                    })
                    .catch(error => console.error('Error:', error));

                    window.location.href = "http://localhost:5173/";

                } catch (error) {
                    console.log("error: ", error);
                }
            } else {
                // do nothing
            }
        }
    }

    return (
        <>
            <div className='canvas_login'>
                <div className='login_div'>
                <img src="logo.png" alt="ForPin Premium Logo" className='login_forpin_logo'/>
                <h1>ForPin Premium Login</h1>
                <label htmlFor="username_input">Username</label>
                <br />
                <label htmlFor="username_input" className='warning_label' id='warning_label_username'>username is not valid</label>
                <br />
                <input type="text" className='login_input_box' id='username_input' placeholder='Username' onBlur={validUsernameCheck}/>
                <br />
                <br />
                <label htmlFor="password_input">Password</label>
                <br />
                <label htmlFor="password_input" className='warning_label' id='warning_label_password'>password is not valid</label>
                <br />
                <input type="text" className='login_input_box' id='password_input' placeholder='Password' onBlur={validPasswordCheck}/>
                <br />
                <br />
                <button className='login_button' onClick={loggingIn}>Login</button>
                </div>
            </div>
        </>
      )
}

export default Login;