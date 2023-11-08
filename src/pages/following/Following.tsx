import React from 'react'
import { useState } from 'react'
import './Following.css'

function Following() {
    function toggleDropdown() {
        const menu_option = document.getElementById("menus-from-dropdown");
        if (menu_option != null) {
            if (menu_option.style.display != "block") {
                menu_option.style.display = "block";
            } else {
                menu_option.style.display = "none";
            }
        }
    };

    return (
        <>
        <div className='navbar'>
            <div className="logo_section">
                <button className="logo">
                    <img src="public/logo.png" className="app_logo" alt="ForPin Logo" />
                </button>
                <div className="nav_buttons_container">
                    <button className="home_button">Home</button>
                    <button className="post_button">Post</button>
                </div>
            </div>
            <div className="search_section" id="searchsection">
                <form action="" className="search-bar" id="search-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="search_symbol">
                    <circle cx="11" cy="11" r="7" stroke="#33363F" stroke-width="2"/>
                    <path d="M20 20L17 17" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <input type="text" placeholder="Search.." id="searchbox" className="search-box"/>  
                </form>
            </div>
            <div className="profile_section">
                <button className="profile_button" id="profile-button">
                    <img src="public/profile pic.gif" className="app_logo" alt="ForPin Logo" />
                </button>
                <div className="settings-menu">
                    <button className="settings-dropdown" onClick={toggleDropdown}>
                        <img src="/public/dropdown_sign.png" className="dropdown_symbol" id="dropdownsymbol" alt="dropdown symbol"/>
                    </button>
                    <div id="menus-from-dropdown" className="menusdropdown">
                        <a href="#" id="request">Requests</a>
                        <a href="#" id="log-out">Log out</a>
                    </div>
                </div>
            </div>
        </div>

        <div className='followings_section'>
            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Unfollow</button>
            </div>

            <div className='followed_user'>
                <div className='followed_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='followed_user_detail_profile_pic'/>
                    <h3 className='followed_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Unfollow</button>
            </div>
        </div>
        </>
    )
}

export default Following;