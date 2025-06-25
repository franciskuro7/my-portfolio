import React, { useState } from 'react'
import softtech from '../../assets/image/softtech.png'

import { Link, Navigate, } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";

import './nav.css'
import Button from '../button/button';


const NavBar = () => {

    const [navBarOpenAndClose, setNavBarOpenAndClose] = useState("hide")



    const handleNavBarOpenAndClose = () => {
        setNavBarOpenAndClose(prevState => prevState === "hide" ? "show" : "hide");
    }
    const handleContact = () => {
        window.location.href = "https://wa.me/+2348160866646?text=Thank%20you%20for%20contacting%20KU-TECH!%20Please%20let%20us%20know%20how%20we%20can%20help%20you%20but%20if%20urgent%C2%A0pls%C2%A0call."
    }

    return (
        <>
            <nav>
                <div className="nav">
                    <div className="logo">
                        <Link to="/">
                            <img src={softtech} alt="logo" />
                        </Link>
                    </div>
                    <ul>

                        <li>
                            <Link to="/" className='nav-list'>Home</Link>
                        </li>

                        <li>
                            <Link to="/project" className='nav-list'> All Project</Link>
                        </li>

                        <li>
                            <Link to="/about" className='nav-list'> About Us</Link>
                        </li>
                    </ul>
                    <Button
                        classname={'primary'}
                        title={'Get in Touch'}
                        onclick={handleContact}
                    />
                    <IoMenu className='menu' onClick={handleNavBarOpenAndClose} />
                </div>


                {/* MOBILE SCREEN HERE */}

                <div className={`nav-mobile ${navBarOpenAndClose}`}>

                    <div className="sub-nav">
                        <div className="logo-mobile">
                            <Link to="/">
                                <img src={softtech} alt="logo" />
                            </Link>
                        </div>
                        <LiaTimesSolid className="cancel" onClick={handleNavBarOpenAndClose} />
                    </div>

                    <ul onClick={handleNavBarOpenAndClose}>

                        <Link to="/" className='nav-list-mobile'><li>Home</li></Link>

                        <Link to="/project" className='nav-list'><li>All Project</li></Link>

                        <Link to="/project" className='nav-list-mobile'><li> About Us</li></Link>

                    </ul>

                    <span onClick={() => { handleNavBarOpenAndClose(); handleContact() }}> Get In Touch</span>
                </div>
            </nav >

        </>

    )
}

export default NavBar