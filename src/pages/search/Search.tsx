import React from 'react'
import { useState } from 'react'
import './Search.css'
import Navbar from './../../components/navbar/Navbar.tsx'

function Search() {

    return (
        <>
        <Navbar/>

        <div className='result_section'>
            <div className='searched_user'>
                <div className='searched_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='search_user_detail_profile_pic'/>
                    <h3 className='search_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Follow</button>
            </div>

            <div className='searched_user'>
                <div className='searched_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='search_user_detail_profile_pic'/>
                    <h3 className='search_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Follow</button>
            </div>

            <div className='searched_user'>
                <div className='searched_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='search_user_detail_profile_pic'/>
                    <h3 className='search_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Follow</button>
            </div>

            <div className='searched_user'>
                <div className='searched_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='search_user_detail_profile_pic'/>
                    <h3 className='search_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Follow</button>
            </div>

            <div className='searched_user'>
                <div className='searched_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='search_user_detail_profile_pic'/>
                    <h3 className='search_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Follow</button>
            </div>

            <div className='searched_user'>
                <div className='searched_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='search_user_detail_profile_pic'/>
                    <h3 className='search_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Follow</button>
            </div>

            <div className='searched_user'>
                <div className='searched_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='search_user_detail_profile_pic'/>
                    <h3 className='search_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Follow</button>
            </div>

            <div className='searched_user'>
                <div className='searched_user_profile'>
                    <img src="public/profile pic.gif" alt="profile picture" className='search_user_detail_profile_pic'/>
                    <h3 className='search_user_detail_profile_name'>Ceritanya username</h3>
                </div>
                <button className='follow_button'>Follow</button>
            </div>
        </div>
        </>
    )
}

export default Search;