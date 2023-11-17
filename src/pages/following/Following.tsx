import React from 'react'
import { useState } from 'react'
import './Following.css'
import Navbar from './../../components/navbar/Navbar.tsx'

function Following() {
    return (
        <>
        <Navbar/>

        <div className='followings_section'>
            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='unfollow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='unfollow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='unfollow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='unfollow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='unfollow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='unfollow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='unfollow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='unfollow_button'>Unfollow</button>
            </div>
        </div>
        </>
    )
}

export default Following;