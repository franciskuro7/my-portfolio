import React, { useState } from 'react'
import { Link, Navigate, } from "react-router-dom"

import softtech from "../assets/image/softtech.png"

import { IoMenu } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import {
    Cancel, Menu, MobileBtn,
    NavLinks, HireBtn, Logo, Nav, NavMobile, MobileNavList, MobileNav


} from '../styles/navbar.styles';
import { IoMdMenu } from 'react-icons/io';

const NavBar = () => {



    const [navBarOpenAndClose, setNavBarOpenAndClose] = useState(false)


    const handleNavBarOpenAndClose = () => {
        setNavBarOpenAndClose((prev) => !prev)
    }


    const handleContact = () => {
        window.location.href = "https://wa.me/+2348160866646?text=Thank%20you%20for%20contacting%20KU-TECH!%20Please%20let%20us%20know%20how%20we%20can%20help%20you%20but%20if%20urgent%C2%A0pls%C2%A0call."
    }

    return (
        <Nav>
            <Logo>{"</>"} <span>FrancisKuro</span></Logo>
            <NavLinks>
                {/* <a href="#about">About</a> */}
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </NavLinks>
            <HireBtn onClick={handleContact}>Hire Me</HireBtn>




            <Menu onClick={handleNavBarOpenAndClose} >
                <IoMdMenu />
            </Menu>


            {/* MOBILE HERE */}
            {navBarOpenAndClose && <NavMobile SideBarToggle={navBarOpenAndClose}>



                <MobileNav>
                    <Logo>
                        <Logo>{"</>"} <span>FrancisKuro</span></Logo>
                    </Logo>

                    <Cancel onClick={handleNavBarOpenAndClose}>
                        <LiaTimesSolid />
                    </Cancel>

                </MobileNav>

                <MobileNavList >
                    {/* <a href="#about">About</a> */}
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </MobileNavList>

                <MobileBtn onClick={() => { handleNavBarOpenAndClose(); handleContact() }}>
                    Get In Touch
                </MobileBtn>

            </NavMobile>}


        </Nav>
    )
}

export default NavBar;