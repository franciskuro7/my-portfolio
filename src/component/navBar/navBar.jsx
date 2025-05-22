import React, { useState } from 'react'
import softtech from '../../assets/image/anchor.svg'

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
    const handleContact =()=>{
        window.location.href = "tel:+2348160866646";
    }

    return (
        <>
            <nav>
                <div className="nav">
                    <div className="logo">
                        <img src={softtech} alt="logo" />
                    </div>
                    <ul>

                        <li>
                            <Link to="/" className='nav-list'>Home</Link>
                        </li>

                        <li>
                            <Link to="/project" className='nav-list'> All Project</Link>
                        </li>

                        <li>
                            <Link to="#about" className='nav-list'> About Us</Link>
                        </li>

                        {/* <li>
                            <Link to="/blog" className='nav-list'>Blog</Link>
                        </li> */}
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
                            <img src={softtech} alt="logo" />
                        </div>
                        <LiaTimesSolid className="cancel" onClick={handleNavBarOpenAndClose} />
                    </div>

                    <ul onClick={handleNavBarOpenAndClose}>

                        <Link to="/" className='nav-list-mobile'><li>Home</li></Link>

                        <Link to="/project" className='nav-list'><li>All Project</li></Link>

                        <Link to="/project" className='nav-list-mobile'><li> About Us</li></Link>

                        {/* <Link to="/blog" className='nav-list-mobile'> <li>Blog</li></Link> */}

                        {/* <Link className='nav-list-mobile'> <li>Contact Us</li></Link> */}

                    </ul>

                    {/* <Button
                    className='hello'
                    onclick={handleNavBarOpenAndClose}
                    title={'get in touch'}
                    /> */}

                    <span onClick={handleNavBarOpenAndClose} >Get In Touch</span>
                </div>
            </nav>

        </>
    )
}

export default NavBar