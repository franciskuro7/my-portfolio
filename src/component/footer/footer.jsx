import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'


import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SocialIcons from '../socialIcons/socialIcons';



const Footer = () => {


    return (
        <>
            <footer>
                <div className="connect">
                    <h2>Connect</h2>

                    <div className="mail">
                        <IoIosMail className='mail-icon'/>
                        <Link to='mailto: franciskuro7@gmail.com' className='mail-content'>franciskuro7@gmail.com</Link>
                    </div>
                </div>


                <div className="sicial-media">
                    <h2>My Social Media</h2>
                    <SocialIcons />
                </div>
            </footer>
        </>
    )
}

export default Footer