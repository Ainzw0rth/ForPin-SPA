import React from 'react'
import { useState } from 'react'
import './Postpage.css'
import Navbar from './../../components/navbar/Navbar.tsx'

function Postpage() {
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
        <Navbar />
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