import React from 'react'
import { useState, useEffect } from 'react'
import './Home.css'
import Navbar from './../../components/navbar/Navbar.tsx'

function Home() {
    function nextSlides(slide_no, media_no) {
        const media_curr_idx = document.getElementById("media_index" + slide_no);
        const current_idx = parseInt(media_curr_idx.value);
        
        let medias = document.getElementsByClassName("media_slideshow" + slide_no) as HTMLCollectionOf<HTMLElement>;;
        if (current_idx == 1 && media_no == -1) {
            // do nothing
        } else if (current_idx == medias.length && media_no == 1) {
            // do nothing
        } else {
            if (media_no == 0) {
                medias[0].style.display = "block";
            } else {
                for (let i = 1; i <= medias.length; i++) {
                    if (current_idx + media_no == i) {
                        medias[i-1].style.display = "block";
                    } else {
                        medias[i-1].style.display = "none";
                    }
                }
                media_curr_idx.value = current_idx + media_no;
            }
        }
    }

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/exclusiveContent/');
                const result = await response.json();
                const postViewer = document.getElementById('post_viewer');

                setPosts(result);
                //console.log((result.data).length);

                if (postViewer) {
                    while (postViewer.firstChild) {
                      postViewer.removeChild(postViewer.firstChild);
                    }
                }

                (result.data).forEach(post => {
                    console.log(post);
                    // create the post
                    // the all container
                    const post_container = document.createElement('div'); // container
                    post_container.className = "post_container";

                    // the user detail container
                    const user_detail_container = document.createElement('div'); // container
                    user_detail_container.className = "user_detail_container";

                    const user_detail_profile_pic = document.createElement('img');
                    user_detail_profile_pic.className = "user_detail_profile_pic";
                    user_detail_profile_pic.src = post.premium_user.profile_path;
                    user_detail_profile_pic.alt = "profile picture";

                    const user_detail_profile_name = document.createElement('h3');
                    user_detail_profile_name.className = "user_detail_profile_name";
                    user_detail_profile_name.textContent = post.premium_user.username;

                    // the media container
                    const media_container = document.createElement('div');
                    media_container.className = "media_container";

                    // media container index
                    const media_index = document.createElement('input');
                    media_index.id = "media_index" + post.post_id;
                    media_index.value = "1";
                    media_index.className = "media_index";

                    // media container buttons
                    const prev_button = document.createElement('a');
                    prev_button.className = "prev_button";
                    prev_button.textContent = "<";
                    prev_button.addEventListener("click", () => {
                        nextSlides(post.post_id, -1);
                    }); 

                    const next_button = document.createElement('a');
                    next_button.className = "next_button";
                    next_button.textContent = ">";
                    next_button.addEventListener("click", () => {
                        nextSlides(post.post_id, 1);
                    }); 
                    
                    // the media posted
                    (post.exclusive_media).forEach(exc_media => {
                        if (String(exc_media.media_path).endsWith(".mp4")) {
                            const media = document.createElement('video');
                            media.className = "post_media media_slideshow media_slideshow" + post.post_id;
                            media.controls = true;
                            media.src = exc_media.media_path;

                            if (exc_media == post.exclusive_media[0]) {
                                media.style.display = "block";
                            }
                            
                            media_container.appendChild(media);
                        } else if (String(exc_media.media_path).endsWith("png") || String(exc_media.media_path).endsWith("jpg") || String(exc_media.media_path).endsWith("jpeg") || String(exc_media.media_path).endsWith("gif")) {
                            const media = document.createElement('img');
                            media.className = "post_media media_slideshow media_slideshow" + post.post_id;
                            media.alt = "post image";
                            media.src = exc_media.media_path;
                            media.style.display = "block";

                            if (exc_media == post.exclusive_media[0]) {
                                media.style.display = "block";
                            }
                            
                            media_container.appendChild(media);
                        } else {
                            // do nothing
                        }
                    })
                    
                    // button container
                    const buttons_container = document.createElement('div');
                    buttons_container.className = "button_container";

                    // the buttons
                    const createHeartIcon = (width: number = 37, height: number = 37, className: string = 'blue-heart'): SVGElement => {
                        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                        svg.setAttribute('width', width.toString());
                        svg.setAttribute('height', height.toString());
                        svg.setAttribute('viewBox', '0 0 37 37');
                        svg.setAttribute('fill', 'none');
                        
                        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        path.setAttribute('d', 'M6.86141 21.4418L17.58 31.5108L17.58 31.5108C17.9493 31.8576 18.1339 32.031 18.3515 32.0738C18.4495 32.093 18.5504 32.093 18.6484 32.0738C18.8661 32.031 19.0507 31.8576 19.4199 31.5108L30.1385 21.4418C33.1543 18.6088 33.5205 13.9468 30.9841 10.6776L30.5072 10.0629C27.4729 6.1521 21.3823 6.80798 19.2502 11.2752C18.9491 11.9062 18.0508 11.9062 17.7497 11.2752C15.6176 6.80798 9.52703 6.1521 6.49276 10.0629L6.01583 10.6776C3.47942 13.9468 3.84564 18.6088 6.86141 21.4418Z');
                        path.setAttribute('stroke', 'transparent');
                        path.setAttribute('stroke-width', '1.54167');
                        path.setAttribute('id', 'heart');
                        path.setAttribute('class', className);
                      
                        svg.appendChild(path);
                      
                        return svg;
                    };

                    const createDeleteButton = (width: number = 37, height: number = 37, viewBox: string = "0 -7.5 37 37"): SVGElement => {
                        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                        svg.setAttribute("width", width.toString());
                        svg.setAttribute("height", height.toString());
                        svg.setAttribute("viewBox", viewBox);
                        svg.setAttribute("fill", "none");
                      
                        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        path.setAttribute(
                          "d",
                          "M14.0625 3.51562V5.46875H17.5781 C17.8889 5.46875 18.187 5.59221 18.4068 5.81198C18.6265 6.03175 18.75 6.32982 18.75 6.64062C18.75 6.95143 18.6265 7.2495 18.4068 7.46927C18.187 7.68904 17.8889 7.8125 17.5781 7.8125H1.17188C0.861074 7.8125 0.563003 7.68904 0.343234 7.46927C0.123465 7.2495 0 6.95143 0 6.64062C0 6.32982 0.123465 6.03175 0.343234 5.81198C0.563003 5.59221 0.861074 5.46875 1.17188 5.46875H4.6875V3.51562C4.6875 2.00625 5.9125 0.78125 7.42188 0.78125H11.3281C12.8375 0.78125 14.0625 2.00625 14.0625 3.51562ZM3.9 11.2109L4.93125 21.5234C4.94094 21.6199 4.98612 21.7092 5.05802 21.7742C5.12992 21.8392 5.22341 21.8751 5.32031 21.875H13.4297C13.5266 21.8751 13.6201 21.8392 13.692 21.7742C13.7639 21.7092 13.8091 21.6199 13.8187 21.5234L14.85 11.2109C14.8887 10.9082 15.044 10.6326 15.2829 10.4426C15.5217 10.2526 15.8252 10.1633 16.1288 10.1936C16.4325 10.224 16.7123 10.3716 16.9089 10.605C17.1054 10.8385 17.2031 11.1394 17.1813 11.4437L16.15 21.7562C16.0833 22.4312 15.7678 23.0572 15.265 23.5124C14.7621 23.9675 14.1079 24.2193 13.4297 24.2188H5.32031C4.64251 24.2187 3.9889 23.9668 3.48626 23.5121C2.98362 23.0574 2.66778 22.4322 2.6 21.7578L1.56875 11.4453C1.54918 11.2902 1.56086 11.1327 1.60311 10.9821C1.64536 10.8315 1.71732 10.6909 1.81474 10.5686C1.91217 10.4463 2.0331 10.3447 2.17039 10.2698C2.30769 10.1949 2.45859 10.1483 2.61419 10.1327C2.76979 10.117 2.92695 10.1327 3.0764 10.1787C3.22586 10.2248 3.36458 10.3002 3.48441 10.4007C3.60424 10.5012 3.70274 10.6247 3.77412 10.7638C3.84549 10.903 3.88829 11.055 3.9 11.2109ZM7.03125 3.51562V5.46875H11.7188V3.51562C11.7188 3.41202 11.6776 3.31267 11.6043 3.23941C11.5311 3.16616 11.4317 3.125 11.3281 3.125H7.42188C7.31827 3.125 7.21892 3.16616 7.14566 3.23941C7.0724 3.31267 7.03125 3.41202 7.03125 3.51562Z"
                        );
                        path.setAttribute("fill", "white");
                      
                        svg.appendChild(path);
                      
                        return svg;
                    };

                    const heart_button = createHeartIcon();
                    const delete_button = createDeleteButton();
                    
                    // caption container
                    const post_caption_detail = document.createElement('div');
                    post_caption_detail.className = "post_caption_detail";
                    
                    // caption
                    const post_caption = document.createElement('h1');
                    post_caption.className = "post_caption"
                    post_caption.textContent = post.caption;

                    // description
                    const post_description = document.createElement('h2');
                    post_description.className = "post_description"
                    post_description.textContent = post.descriptions;


                    // put elements to containers
                    // captions and descriptions
                    post_caption_detail.appendChild(post_caption);
                    post_caption_detail.appendChild(post_description);

                    // buttons
                    buttons_container.appendChild(heart_button);
                    buttons_container.appendChild(delete_button);

                    // poster details
                    user_detail_container.appendChild(user_detail_profile_pic);
                    user_detail_container.appendChild(user_detail_profile_name);

                    // the media
                    media_container.appendChild(media_index);
                    media_container.appendChild(prev_button);
                    media_container.appendChild(next_button);

                    // to the main container
                    post_container.appendChild(user_detail_container);
                    post_container.appendChild(media_container);
                    post_container.appendChild(buttons_container);
                    post_container.appendChild(post_caption_detail);

                    postViewer?.appendChild(post_container);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);

    return (
        <>
        <Navbar/>
        <div className='post_canvas_scrollable'>
            <div className='post_canvas'>
                <div className="post_viewer" id="post_viewer">
                </div>
            </div>
        </div>
        </>
      )
}

export default Home;