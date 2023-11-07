import React from 'react'
import { useState } from 'react'
import './Home.css'

function Home() {
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
        <div className='post_canvas'>
            <div className="post_viewer">
                <div className="post_container">
                    <div className='user_detail_container'>
                        <img src="public/profile pic.gif" alt="profile picture" className='user_detail_profile_pic'/>
                        <h3 className='user_detail_profile_name'>Ceritanya username</h3>
                    </div>
                    <video src="public/Jamming.mp4" className="post_media" controls/>
                    <div className="button_container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none" id="likes">
                            <path d="M6.86141 21.4418L17.58 31.5108L17.58 31.5108C17.9493 31.8576 18.1339 32.031 18.3515 32.0738C18.4495 32.093 18.5504 32.093 18.6484 32.0738C18.8661 32.031 19.0507 31.8576 19.4199 31.5108L30.1385 21.4418C33.1543 18.6088 33.5205 13.9468 30.9841 10.6776L30.5072 10.0629C27.4729 6.1521 21.3823 6.80798 19.2502 11.2752C18.9491 11.9062 18.0508 11.9062 17.7497 11.2752C15.6176 6.80798 9.52703 6.1521 6.49276 10.0629L6.01583 10.6776C3.47942 13.9468 3.84564 18.6088 6.86141 21.4418Z" stroke="transparent" stroke-width="1.54167"  id="heart" className="blue-heart"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 -7.5 37 37" fill="none">
                            <path d="M14.0625 3.51562V5.46875H17.5781 C17.8889 5.46875 18.187 5.59221 18.4068 5.81198C18.6265 6.03175 18.75 6.32982 18.75 6.64062C18.75 6.95143 18.6265 7.2495 18.4068 7.46927C18.187 7.68904 17.8889 7.8125 17.5781 7.8125H1.17188C0.861074 7.8125 0.563003 7.68904 0.343234 7.46927C0.123465 7.2495 0 6.95143 0 6.64062C0 6.32982 0.123465 6.03175 0.343234 5.81198C0.563003 5.59221 0.861074 5.46875 1.17188 5.46875H4.6875V3.51562C4.6875 2.00625 5.9125 0.78125 7.42188 0.78125H11.3281C12.8375 0.78125 14.0625 2.00625 14.0625 3.51562ZM3.9 11.2109L4.93125 21.5234C4.94094 21.6199 4.98612 21.7092 5.05802 21.7742C5.12992 21.8392 5.22341 21.8751 5.32031 21.875H13.4297C13.5266 21.8751 13.6201 21.8392 13.692 21.7742C13.7639 21.7092 13.8091 21.6199 13.8187 21.5234L14.85 11.2109C14.8887 10.9082 15.044 10.6326 15.2829 10.4426C15.5217 10.2526 15.8252 10.1633 16.1288 10.1936C16.4325 10.224 16.7123 10.3716 16.9089 10.605C17.1054 10.8385 17.2031 11.1394 17.1813 11.4437L16.15 21.7562C16.0833 22.4312 15.7678 23.0572 15.265 23.5124C14.7621 23.9675 14.1079 24.2193 13.4297 24.2188H5.32031C4.64251 24.2187 3.9889 23.9668 3.48626 23.5121C2.98362 23.0574 2.66778 22.4322 2.6 21.7578L1.56875 11.4453C1.54918 11.2902 1.56086 11.1327 1.60311 10.9821C1.64536 10.8315 1.71732 10.6909 1.81474 10.5686C1.91217 10.4463 2.0331 10.3447 2.17039 10.2698C2.30769 10.1949 2.45859 10.1483 2.61419 10.1327C2.76979 10.117 2.92695 10.1327 3.0764 10.1787C3.22586 10.2248 3.36458 10.3002 3.48441 10.4007C3.60424 10.5012 3.70274 10.6247 3.77412 10.7638C3.84549 10.903 3.88829 11.055 3.9 11.2109ZM7.03125 3.51562V5.46875H11.7188V3.51562C11.7188 3.41202 11.6776 3.31267 11.6043 3.23941C11.5311 3.16616 11.4317 3.125 11.3281 3.125H7.42188C7.31827 3.125 7.21892 3.16616 7.14566 3.23941C7.0724 3.31267 7.03125 3.41202 7.03125 3.51562Z" fill="white"/>
                        </svg>
                    </div>
                    <div className='post_caption_detail'>
                        <h1 className='post_caption'>Ceritanya caption</h1>
                    </div>
                </div>

                <div className="post_container">
                    <div className='user_detail_container'>
                        <img src="public/profile pic.gif" alt="profile picture" className='user_detail_profile_pic'/>
                        <h3 className='user_detail_profile_name'>Ceritanya username</h3>
                    </div>
                    <video src="public/sO yOU HAve a MoThER.mp4" className="post_media" controls/>
                    <div className="button_container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none" id="likes">
                            <path d="M6.86141 21.4418L17.58 31.5108L17.58 31.5108C17.9493 31.8576 18.1339 32.031 18.3515 32.0738C18.4495 32.093 18.5504 32.093 18.6484 32.0738C18.8661 32.031 19.0507 31.8576 19.4199 31.5108L30.1385 21.4418C33.1543 18.6088 33.5205 13.9468 30.9841 10.6776L30.5072 10.0629C27.4729 6.1521 21.3823 6.80798 19.2502 11.2752C18.9491 11.9062 18.0508 11.9062 17.7497 11.2752C15.6176 6.80798 9.52703 6.1521 6.49276 10.0629L6.01583 10.6776C3.47942 13.9468 3.84564 18.6088 6.86141 21.4418Z" stroke="transparent" stroke-width="1.54167"  id="heart" className="blue-heart"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 -7.5 37 37" fill="none">
                            <path d="M14.0625 3.51562V5.46875H17.5781 C17.8889 5.46875 18.187 5.59221 18.4068 5.81198C18.6265 6.03175 18.75 6.32982 18.75 6.64062C18.75 6.95143 18.6265 7.2495 18.4068 7.46927C18.187 7.68904 17.8889 7.8125 17.5781 7.8125H1.17188C0.861074 7.8125 0.563003 7.68904 0.343234 7.46927C0.123465 7.2495 0 6.95143 0 6.64062C0 6.32982 0.123465 6.03175 0.343234 5.81198C0.563003 5.59221 0.861074 5.46875 1.17188 5.46875H4.6875V3.51562C4.6875 2.00625 5.9125 0.78125 7.42188 0.78125H11.3281C12.8375 0.78125 14.0625 2.00625 14.0625 3.51562ZM3.9 11.2109L4.93125 21.5234C4.94094 21.6199 4.98612 21.7092 5.05802 21.7742C5.12992 21.8392 5.22341 21.8751 5.32031 21.875H13.4297C13.5266 21.8751 13.6201 21.8392 13.692 21.7742C13.7639 21.7092 13.8091 21.6199 13.8187 21.5234L14.85 11.2109C14.8887 10.9082 15.044 10.6326 15.2829 10.4426C15.5217 10.2526 15.8252 10.1633 16.1288 10.1936C16.4325 10.224 16.7123 10.3716 16.9089 10.605C17.1054 10.8385 17.2031 11.1394 17.1813 11.4437L16.15 21.7562C16.0833 22.4312 15.7678 23.0572 15.265 23.5124C14.7621 23.9675 14.1079 24.2193 13.4297 24.2188H5.32031C4.64251 24.2187 3.9889 23.9668 3.48626 23.5121C2.98362 23.0574 2.66778 22.4322 2.6 21.7578L1.56875 11.4453C1.54918 11.2902 1.56086 11.1327 1.60311 10.9821C1.64536 10.8315 1.71732 10.6909 1.81474 10.5686C1.91217 10.4463 2.0331 10.3447 2.17039 10.2698C2.30769 10.1949 2.45859 10.1483 2.61419 10.1327C2.76979 10.117 2.92695 10.1327 3.0764 10.1787C3.22586 10.2248 3.36458 10.3002 3.48441 10.4007C3.60424 10.5012 3.70274 10.6247 3.77412 10.7638C3.84549 10.903 3.88829 11.055 3.9 11.2109ZM7.03125 3.51562V5.46875H11.7188V3.51562C11.7188 3.41202 11.6776 3.31267 11.6043 3.23941C11.5311 3.16616 11.4317 3.125 11.3281 3.125H7.42188C7.31827 3.125 7.21892 3.16616 7.14566 3.23941C7.0724 3.31267 7.03125 3.41202 7.03125 3.51562Z" fill="white"/>
                        </svg>
                    </div>
                    <div className='post_caption_detail'>
                        <h1 className='post_caption'>Ceritanya caption</h1>
                    </div>
                </div>

                <div className="post_container">
                    <div className='user_detail_container'>
                        <img src="public/profile pic.gif" alt="profile picture" className='user_detail_profile_pic'/>
                        <h3 className='user_detail_profile_name'>Ceritanya username</h3>
                    </div>
                    <video src="public/Gang Torture Dance.mp4" className="post_media" controls/>
                    <div className="button_container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none" id="likes">
                            <path d="M6.86141 21.4418L17.58 31.5108L17.58 31.5108C17.9493 31.8576 18.1339 32.031 18.3515 32.0738C18.4495 32.093 18.5504 32.093 18.6484 32.0738C18.8661 32.031 19.0507 31.8576 19.4199 31.5108L30.1385 21.4418C33.1543 18.6088 33.5205 13.9468 30.9841 10.6776L30.5072 10.0629C27.4729 6.1521 21.3823 6.80798 19.2502 11.2752C18.9491 11.9062 18.0508 11.9062 17.7497 11.2752C15.6176 6.80798 9.52703 6.1521 6.49276 10.0629L6.01583 10.6776C3.47942 13.9468 3.84564 18.6088 6.86141 21.4418Z" stroke="transparent" stroke-width="1.54167"  id="heart" className="blue-heart"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 -7.5 37 37" fill="none">
                            <path d="M14.0625 3.51562V5.46875H17.5781 C17.8889 5.46875 18.187 5.59221 18.4068 5.81198C18.6265 6.03175 18.75 6.32982 18.75 6.64062C18.75 6.95143 18.6265 7.2495 18.4068 7.46927C18.187 7.68904 17.8889 7.8125 17.5781 7.8125H1.17188C0.861074 7.8125 0.563003 7.68904 0.343234 7.46927C0.123465 7.2495 0 6.95143 0 6.64062C0 6.32982 0.123465 6.03175 0.343234 5.81198C0.563003 5.59221 0.861074 5.46875 1.17188 5.46875H4.6875V3.51562C4.6875 2.00625 5.9125 0.78125 7.42188 0.78125H11.3281C12.8375 0.78125 14.0625 2.00625 14.0625 3.51562ZM3.9 11.2109L4.93125 21.5234C4.94094 21.6199 4.98612 21.7092 5.05802 21.7742C5.12992 21.8392 5.22341 21.8751 5.32031 21.875H13.4297C13.5266 21.8751 13.6201 21.8392 13.692 21.7742C13.7639 21.7092 13.8091 21.6199 13.8187 21.5234L14.85 11.2109C14.8887 10.9082 15.044 10.6326 15.2829 10.4426C15.5217 10.2526 15.8252 10.1633 16.1288 10.1936C16.4325 10.224 16.7123 10.3716 16.9089 10.605C17.1054 10.8385 17.2031 11.1394 17.1813 11.4437L16.15 21.7562C16.0833 22.4312 15.7678 23.0572 15.265 23.5124C14.7621 23.9675 14.1079 24.2193 13.4297 24.2188H5.32031C4.64251 24.2187 3.9889 23.9668 3.48626 23.5121C2.98362 23.0574 2.66778 22.4322 2.6 21.7578L1.56875 11.4453C1.54918 11.2902 1.56086 11.1327 1.60311 10.9821C1.64536 10.8315 1.71732 10.6909 1.81474 10.5686C1.91217 10.4463 2.0331 10.3447 2.17039 10.2698C2.30769 10.1949 2.45859 10.1483 2.61419 10.1327C2.76979 10.117 2.92695 10.1327 3.0764 10.1787C3.22586 10.2248 3.36458 10.3002 3.48441 10.4007C3.60424 10.5012 3.70274 10.6247 3.77412 10.7638C3.84549 10.903 3.88829 11.055 3.9 11.2109ZM7.03125 3.51562V5.46875H11.7188V3.51562C11.7188 3.41202 11.6776 3.31267 11.6043 3.23941C11.5311 3.16616 11.4317 3.125 11.3281 3.125H7.42188C7.31827 3.125 7.21892 3.16616 7.14566 3.23941C7.0724 3.31267 7.03125 3.41202 7.03125 3.51562Z" fill="white"/>
                        </svg>
                    </div>
                    <div className='post_caption_detail'>
                        <h1 className='post_caption'>Ceritanya caption</h1>
                    </div>
                </div>

                <div className="post_container">
                    <div className='user_detail_container'>
                        <img src="public/profile pic.gif" alt="profile picture" className='user_detail_profile_pic'/>
                        <h3 className='user_detail_profile_name'>Ceritanya username</h3>
                    </div>
                    <img src="public/hakari.gif" className="post_media"/>
                    <div className="button_container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none" id="likes">
                            <path d="M6.86141 21.4418L17.58 31.5108L17.58 31.5108C17.9493 31.8576 18.1339 32.031 18.3515 32.0738C18.4495 32.093 18.5504 32.093 18.6484 32.0738C18.8661 32.031 19.0507 31.8576 19.4199 31.5108L30.1385 21.4418C33.1543 18.6088 33.5205 13.9468 30.9841 10.6776L30.5072 10.0629C27.4729 6.1521 21.3823 6.80798 19.2502 11.2752C18.9491 11.9062 18.0508 11.9062 17.7497 11.2752C15.6176 6.80798 9.52703 6.1521 6.49276 10.0629L6.01583 10.6776C3.47942 13.9468 3.84564 18.6088 6.86141 21.4418Z" stroke="transparent" stroke-width="1.54167"  id="heart" className="blue-heart"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 -7.5 37 37" fill="none">
                            <path d="M14.0625 3.51562V5.46875H17.5781 C17.8889 5.46875 18.187 5.59221 18.4068 5.81198C18.6265 6.03175 18.75 6.32982 18.75 6.64062C18.75 6.95143 18.6265 7.2495 18.4068 7.46927C18.187 7.68904 17.8889 7.8125 17.5781 7.8125H1.17188C0.861074 7.8125 0.563003 7.68904 0.343234 7.46927C0.123465 7.2495 0 6.95143 0 6.64062C0 6.32982 0.123465 6.03175 0.343234 5.81198C0.563003 5.59221 0.861074 5.46875 1.17188 5.46875H4.6875V3.51562C4.6875 2.00625 5.9125 0.78125 7.42188 0.78125H11.3281C12.8375 0.78125 14.0625 2.00625 14.0625 3.51562ZM3.9 11.2109L4.93125 21.5234C4.94094 21.6199 4.98612 21.7092 5.05802 21.7742C5.12992 21.8392 5.22341 21.8751 5.32031 21.875H13.4297C13.5266 21.8751 13.6201 21.8392 13.692 21.7742C13.7639 21.7092 13.8091 21.6199 13.8187 21.5234L14.85 11.2109C14.8887 10.9082 15.044 10.6326 15.2829 10.4426C15.5217 10.2526 15.8252 10.1633 16.1288 10.1936C16.4325 10.224 16.7123 10.3716 16.9089 10.605C17.1054 10.8385 17.2031 11.1394 17.1813 11.4437L16.15 21.7562C16.0833 22.4312 15.7678 23.0572 15.265 23.5124C14.7621 23.9675 14.1079 24.2193 13.4297 24.2188H5.32031C4.64251 24.2187 3.9889 23.9668 3.48626 23.5121C2.98362 23.0574 2.66778 22.4322 2.6 21.7578L1.56875 11.4453C1.54918 11.2902 1.56086 11.1327 1.60311 10.9821C1.64536 10.8315 1.71732 10.6909 1.81474 10.5686C1.91217 10.4463 2.0331 10.3447 2.17039 10.2698C2.30769 10.1949 2.45859 10.1483 2.61419 10.1327C2.76979 10.117 2.92695 10.1327 3.0764 10.1787C3.22586 10.2248 3.36458 10.3002 3.48441 10.4007C3.60424 10.5012 3.70274 10.6247 3.77412 10.7638C3.84549 10.903 3.88829 11.055 3.9 11.2109ZM7.03125 3.51562V5.46875H11.7188V3.51562C11.7188 3.41202 11.6776 3.31267 11.6043 3.23941C11.5311 3.16616 11.4317 3.125 11.3281 3.125H7.42188C7.31827 3.125 7.21892 3.16616 7.14566 3.23941C7.0724 3.31267 7.03125 3.41202 7.03125 3.51562Z" fill="white"/>
                        </svg>
                    </div>
                    <div className='post_caption_detail'>
                        <h1 className='post_caption'>Ceritanya caption</h1>
                    </div>
                </div>


            </div>
        </div>
        </>
      )
}

export default Home;