import React, { useState } from 'react'
import softtech from '../../assets/image/anchor.svg'

import { Link, } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

import './nav.css'


const NavBar = () => {

    const [navBarOpenAndClose, setNavBarOpenAndClose]= useState("hide")



    const handleNavBarOpenAndClose = () => {
        setNavBarOpenAndClose(prevState => prevState === "hide" ? "show" : "hide");
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
                            <Link to="/about" className='nav-list'> About Us</Link>
                        </li>

                        <li>
                            <Link to="/blog" className='nav-list'>Blog</Link>
                        </li>
                    </ul>

                    <span>Get In Touch</span>
                    <IoMenu className='menu' onClick={handleNavBarOpenAndClose} />


                </div>



                {/* MOBILE SCREEN HERE */}

                <div className={`nav-mobile ${navBarOpenAndClose}`}>

                    <div className="sub-nav">
                        <div className="logo-mobile">
                            <img src={softtech} alt="logo" />
                        </div>
                        <LiaTimesSolid className="cancel" onClick={handleNavBarOpenAndClose}/>
                    </div>

                    <ul>

                        <Link to="/" className='nav-list-mobile'><li>Home</li></Link>

                        <Link to="/project" className='nav-list'><li>All Project</li></Link>

                        <Link to="/project" className='nav-list-mobile'><li> About Us</li></Link>

                        <Link to="/blog" className='nav-list-mobile'> <li>Blog</li></Link>

                        {/* <Link className='nav-list-mobile'> <li>Contact Us</li></Link> */}

                    </ul>

                    <span>Get In Touch</span>
                </div>
            </nav>
            
        </>
    )
}

export default NavBar