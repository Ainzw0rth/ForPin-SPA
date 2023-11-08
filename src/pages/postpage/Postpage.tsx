import React from 'react'
import { useState } from 'react'
import './Postpage.css'

function Postpage() {
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

    function togglePostDetails() {
        const menu_option = document.getElementById("temporary_uploaded_post_details");
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

        <div className='uploading_post_container'>
            <div className='temporary_uploaded_post' onClick={togglePostDetails}>
                <img src="public/upload_image.png" className="upload_image" alt="upload image symbol" />
            </div>
            <div className='temporary_uploaded_post_details' id='temporary_uploaded_post_details'>
                <div className='temporary_uploaded_post_detail'>
                    <div>
                        <label htmlFor="title_input_bar_form" className='input_labels'>Title</label>
                        <form action="" className='title_input_bar_form post_input_form' id='title_input_bar_form'>
                            <input type="text" placeholder="Add a title" id="title_input_bar" className="title_input_bar temporary_uploaded_post_input_fields"/>  
                        </form>
                    </div>
                    <br />

                    <div>
                        <label htmlFor="description_input_bar_form" className='input_labels'>Description</label>
                        <form action="" className='description_input_bar_form post_input_form' id='description_input_bar_form'>
                            <textarea id="description_input_bar" className="description_input_bar temporary_uploaded_post_input_fields" role="textbox" placeholder='Add Description'></textarea >
                        </form>
                    </div>
                    <br />

                    <div>
                        <label htmlFor="category_dropdown" className='input_labels'>Category</label>
                        <br />
                        <select name="category" id="category_dropdown" className="category_dropdown post_input_form">
                            <option value="0">- choose category -</option>
                        </select>
                    </div>
                    <br />

                    <div>
                        <label htmlFor="tags_input_bar_form" className='input_labels'>Tags</label>
                        <br />
                        <label htmlFor="tags_input_bar_form" className='example_labels'>Ex: tag1, tag2</label>
                        <form action="" className='tags_input_bar_form post_input_form' id='tags_input_bar_form'>
                            <input type="text" placeholder="Add tags" id="tags_input_bar" className="tags_input_bar temporary_uploaded_post_input_fields"/>  
                        </form>
                    </div>
                    <br />
                    <br />
                </div>

                <div className='upload_button_section'>
                    <button className='upload_button'>Upload</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Postpage;