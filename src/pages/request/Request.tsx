import React from 'react'
import { useState } from 'react'
import './Request.css'
import Navbar from './../../components/navbar/Navbar.tsx'

function Request() {
    return (
        <>
        <Navbar />

        <div className='requests_list_section'>
            <div className='user_follow_request'>
                <div className='user_follow_request_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='user_follow_request_profile_pic'/>
                    <h3 className='user_follow_request_profile_name'>Ceritanya username</h3>
                </div>
                <div className='user_follow_request_buttons'>
                    <button className='accept_button'>Accept</button>
                    <button className='reject_button'>Reject</button>
                </div>
            </div>

            <div className='user_follow_request'>
                <div className='user_follow_request_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='user_follow_request_profile_pic'/>
                    <h3 className='user_follow_request_profile_name'>Ceritanya username</h3>
                </div>
                <div className='user_follow_request_buttons'>
                    <button className='accept_button'>Accept</button>
                    <button className='reject_button'>Reject</button>
                </div>
            </div>

            <div className='user_follow_request'>
                <div className='user_follow_request_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='user_follow_request_profile_pic'/>
                    <h3 className='user_follow_request_profile_name'>Ceritanya username</h3>
                </div>
                <div className='user_follow_request_buttons'>
                    <button className='accept_button'>Accept</button>
                    <button className='reject_button'>Reject</button>
                </div>
            </div>

            <div className='user_follow_request'>
                <div className='user_follow_request_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='user_follow_request_profile_pic'/>
                    <h3 className='user_follow_request_profile_name'>Ceritanya username</h3>
                </div>
                <div className='user_follow_request_buttons'>
                    <button className='accept_button'>Accept</button>
                    <button className='reject_button'>Reject</button>
                </div>
            </div>

            <div className='user_follow_request'>
                <div className='user_follow_request_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='user_follow_request_profile_pic'/>
                    <h3 className='user_follow_request_profile_name'>Ceritanya username</h3>
                </div>
                <div className='user_follow_request_buttons'>
                    <button className='accept_button'>Accept</button>
                    <button className='reject_button'>Reject</button>
                </div>
            </div>

            <div className='user_follow_request'>
                <div className='user_follow_request_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='user_follow_request_profile_pic'/>
                    <h3 className='user_follow_request_profile_name'>Ceritanya username</h3>
                </div>
                <div className='user_follow_request_buttons'>
                    <button className='accept_button'>Accept</button>
                    <button className='reject_button'>Reject</button>
                </div>
            </div>

            <div className='user_follow_request'>
                <div className='user_follow_request_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='user_follow_request_profile_pic'/>
                    <h3 className='user_follow_request_profile_name'>Ceritanya username</h3>
                </div>
                <div className='user_follow_request_buttons'>
                    <button className='accept_button'>Accept</button>
                    <button className='reject_button'>Reject</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Request;