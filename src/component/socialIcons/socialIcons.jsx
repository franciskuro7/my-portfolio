import React from "react";

import './socialIcons.css'


import { Link } from "react-router-dom";


import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const SocialIcons =()=>{

    return(
        <>
             <div className="sicial-media">
                    {/* <h2>My Social Media</h2> */}

                    <div className="social-media-wrapper">
                        <Link to="/" className='social-icons'><FaFacebookF className="social-media-icons" /></Link>
                        <Link to="/" className='social-icons'><FaLinkedinIn className="social-media-icons" /></Link>
                        <Link to="/" className='social-icons'><FaGithub className="social-media-icons" /></Link>
                        <Link to="/" className='social-icons'><FaXTwitter className="social-media-icons" /></Link>
                    </div>
                </div>
        </>
    )

}

export default SocialIcons