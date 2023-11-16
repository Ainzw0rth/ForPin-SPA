import React from 'react'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
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

    function goToHome() {
        window.location.href ='http://localhost:5173';
    };

    function goToPost() {
        window.location.href ='http://localhost:5173/postpage';
    };

    function goToReq() {
        window.location.href ='http://localhost:5173/request';
    };

    function goToSearch(event) {
        event.preventDefault();
        window.location.href ='http://localhost:5173/search';
    }

    return (
        <div className='navbar'>
            <div className="logo_section">
                <button className="logo" id="forpin_home_button" onClick={goToHome}>
                    <img src="logo.png" className="app_logo" alt="ForPin Logo" />
                </button>
                <div className="nav_buttons_container">
                    <button className="home_button" id="home_button" onClick={goToHome}>Home</button>
                    <button className="post_button" id="post_button" onClick={goToPost}>Post</button>
                </div>
            </div>
            <div className="search_section" id="searchsection">
                <form action="" className="search-bar" id="search-input" onSubmit={goToSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="search_symbol">
                        <circle cx="11" cy="11" r="7" stroke="#33363F" strokeWidth="2"/>
                        <path d="M20 20L17 17" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <input type="text" placeholder="Search.." id="searchbox" className="search-box"/>  
                </form>
            </div>
            <div className="profile_section">
                <button className="profile_button" id="profile-button">
                    <img src="profile pic.gif" className="app_logo" alt="ForPin Logo" />
                </button>
                <div className="settings-menu">
                    <button className="settings-dropdown" onClick={toggleDropdown}>
                        <img src="/dropdown_sign.png" className="dropdown_symbol" id="dropdownsymbol" alt="dropdown symbol"/>
                    </button>
                    <div id="menus-from-dropdown" className="menusdropdown">
                        <a id="request" onClick={goToReq}>Requests</a>
                        <a id="log-out">Log out</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;