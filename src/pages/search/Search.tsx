import React from 'react'
import { useState } from 'react'
import './Search.css'
import Navbar from './../../components/navbar/Navbar.tsx'

function Search() {
    const getResults = async () => {
        try {
            const req = {
                subscriber_username : localStorage.getItem("username")
            };

            const response = await fetch("http://localhost:3000/subscription", {
                method: 'POST',
                body: JSON.stringify(req)
            }).then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(data => {
                console.log(data);

                const result_section = document.getElementById('result_section');

                (data.data).forEach(element => {
                    const searched_user = document.createElement('div');
                    searched_user.className = "searched_user";
    
                    const searched_user_profile = document.createElement('div');
                    searched_user_profile.className = "searched_user_profile";
    
                    const search_user_detail_profile_pic = document.createElement('img');
                    search_user_detail_profile_pic.className = "search_user_detail_profile_pic";
                    search_user_detail_profile_pic.alt = "profile picture";
                    search_user_detail_profile_pic.src = element.profile_path;
    
                    const search_user_detail_profile_name = document.createElement('h3');
                    search_user_detail_profile_name.textContent = element.username;
    
                    const follow_button = document.createElement('button');
                    follow_button.className = 'follow_button';
                    follow_button.onclick = getResults;
                    follow_button.textContent = "Follow";
                    
                    searched_user_profile.appendChild(search_user_detail_profile_pic);
                    searched_user_profile.appendChild(search_user_detail_profile_name);

                    searched_user.appendChild(searched_user_profile);
                    searched_user.appendChild(follow_button);

                    result_section?.appendChild(searched_user);
                });
            });
        } catch (error) {
            console.log("error: ", error);
        }
    }
    
    return (
        <>
        <Navbar/>

        <div className='result_section' id='result_section'>
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