import React from 'react'
import { Link } from 'react-router-dom'

import { IoIosMail } from "react-icons/io";
import { FooterWrapper, Mail } from '../styles/footer.style';
import SocialIcons from './socialIcons/socialIcons';



const Footer = () => {


    return (
        <>
            <FooterWrapper>
                <div className="connect">
                    <h2>Connect</h2>

                    <Mail>
                        <IoIosMail className='mail-icon'/>
                        <Link to='mailto: franciskuro7@gmail.com' className='mail-content'>franciskuro7@gmail.com</Link>
                    </Mail>
                </div>


                <div className="sicial-media">
                    <h2>My Social Media</h2>
                    <SocialIcons />
                </div>
            </FooterWrapper>
        </>
    )
}

export default Footer