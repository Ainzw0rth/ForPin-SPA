import React from 'react'
import { useState, useEffect } from 'react'
import './Postpage.css'
import Navbar from './../../components/navbar/Navbar.tsx'

function Postpage() {
    function togglePostDetails() {
        const menu_option = document.getElementById("temporary_uploaded_post_details");
        if (menu_option != null) {
            document.getElementById('temporary_upload_media')?.click()
            if (menu_option.style.display != "block") {
                menu_option.style.display = "block";
            }
        }
    };

    let [uploadedMedias, setUploadedMedias] = useState([]);

    const changeTemporaryImage = async () => {
        const input = document.getElementById("temporary_upload_media");
        try {
            const formData = new FormData();

            const num_of_medias = (input.files).length;
            for (let i = 0; i < num_of_medias; i++) {
                formData.append('file', input.files[i]);
            }

            const response = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData
            }).then(response => {
                if (response.ok) {
                    return response.json();   
                }
            }).then(data => {
                if ((data.media_paths).length >= 1) {
                    uploadedMedias = data;

                    document.getElementById("temporary_uploaded_post")?.removeChild(document.getElementById("upload_container"));
                    const newMediaContainer = document.createElement('div');
                    newMediaContainer.id = "upload_container";
                    newMediaContainer.className = "upload_container";
                    newMediaContainer.style.backgroundColor = "transparent";
    
                    (data.media_paths).forEach(media_path => {
                        if (String(media_path).endsWith(".mp4")) {
                            const newMedia = document.createElement('video');
                            newMedia.className = "upload_image";
                            newMedia.controls = true;
                            newMedia.src = media_path;
                            newMediaContainer.appendChild(newMedia);
                        } else if (String(media_path).endsWith("png") || String(media_path).endsWith("jpg") || String(media_path).endsWith("jpeg") || String(media_path).endsWith("gif")) {
                            const newMedia = document.createElement('img');
                            newMedia.className = "upload_image";
                            newMedia.src = media_path;
                            newMedia.alt = "upload image symbol";
                            newMediaContainer.appendChild(newMedia);
                        } else {
                            // do nothing
                        }
                    })
    
                    document.getElementById("temporary_uploaded_post")?.appendChild(newMediaContainer);

                    window.location.href = 'http://localhost:5173/';
                }
            });
        } catch (error) {
            // do nothing
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tagsResponse = await fetch('http://localhost:3000/tags/');
                const result = await tagsResponse.json();
                
                const the_dropdown = document.getElementById("category_dropdown");
                // delete the previous choices first

                if (the_dropdown) {
                    while (the_dropdown.firstChild) {
                      the_dropdown.removeChild(the_dropdown.firstChild);
                    }
                }

                const dropdownTitle = document.createElement("option");
                dropdownTitle.value = "0";
                dropdownTitle.text = "- choose category -";
                the_dropdown?.appendChild(dropdownTitle);

                (result.data).forEach(dataGenre => {
                    const genreTitle = document.createElement("option");
                    genreTitle.value = dataGenre.genre;
                    genreTitle.text = dataGenre.genre;
                    the_dropdown?.appendChild(genreTitle);
                })


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const uploadTheData = async () => {
        const selectedGenre = document.getElementById("category_dropdown")?.value;

        if (selectedGenre == "0") {
            // do nothing
        } else {
            try {
                // the genres
                let inputted_genres = [];
                inputted_genres.push(selectedGenre);

                const inputtedTags = document.getElementById("tags_input_bar")?.value;
                let tagsArray = inputtedTags.split(',');
                tagsArray.forEach(tag => {
                    if (tag == "" || tag == " ") {
                        // do nothing
                    } else {
                        inputted_genres.push(tag);
                    }
                });

                const upload_req = {};
                upload_req.user_id = 1; // TODO: link this shit 
                upload_req.caption = document.getElementById("title_input_bar")?.value;
                upload_req.descriptions = document.getElementById("description_input_bar")?.value;
                upload_req.media_paths = uploadedMedias.media_paths;
                upload_req.genres = inputted_genres;

                const response = await fetch('http://localhost:3000/exclusiveContent/', {
                    method: 'POST',
                    body: JSON.stringify(upload_req),
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                }).then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
            } catch (error) {
                // do nothing
            }
        }
    }

    return (
        <>
        <Navbar />
        <div className='uploading_post_container'>
            <div className='temporary_uploaded_post' id='temporary_uploaded_post'>
                <div id='upload_container' className='upload_container' onClick={togglePostDetails}>
                    <img src="public/upload_image.png" className="upload_image" id="upload_image" alt="upload image symbol" />
                </div>
            </div>
            <input type="file" id="temporary_upload_media" onChange={changeTemporaryImage} multiple />
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
                    <button className='upload_button' onClick={uploadTheData}>Upload</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Postpage;