import React, { useState } from 'react'
import { Link, Navigate, } from "react-router-dom"

import softtech from "../assets/image/softtech.png"
import Button from './call-to-action/button';

import { IoMenu } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import {
    Img, Logo, Menu, MobileNav, NavBarWrapper, NavList,
    NavListWrapper, NavMobile, SubListMobile, SubNav, SubNavList,
    SubNavMobile, SubNavMobileLi, SubNavMobileUl, SubNavWrapper, Cancel,
    MobileNavList, Contact,
    MobileBtn
} from '../styles/navbar.styles';



const NavBar = () => {

    const [navBarOpenAndClose, setNavBarOpenAndClose] = useState(false)


    const handleNavBarOpenAndClose = () => {
        setNavBarOpenAndClose((prev) => !prev)
    }


    const handleContact = () => {
        window.location.href = "https://wa.me/+2348160866646?text=Thank%20you%20for%20contacting%20KU-TECH!%20Please%20let%20us%20know%20how%20we%20can%20help%20you%20but%20if%20urgent%C2%A0pls%C2%A0call."
    }

    return (
        <>
            <NavBarWrapper>
                <Logo>
                    <Link to="/">
                        <Img src={softtech} alt="logo" />
                    </Link>
                </Logo>

                <NavListWrapper>
                    <Link to="/" className='nav-list'>
                        <NavList> Home</NavList>
                    </Link>
                    <NavList>
                        Our Services
                        <SubNavWrapper>
                            <SubNav >

                                <Link to="/project" >
                                    <SubNavList> Web Development </SubNavList>
                                </Link>
                                <Link to="/project" >
                                    <SubNavList> Mobile App </SubNavList>
                                </Link>
                                <Link to="/designs/figma" >
                                    <SubNavList> UI/UX Designs  </SubNavList>
                                </Link>
                                <Link to="/designs/figma" >
                                    <SubNavList> Graphics Design  </SubNavList>
                                </Link>
                            </SubNav>

                        </SubNavWrapper>
                    </NavList>

                    <Link to="/about" className='nav-list'>
                        <NavList> About Us</NavList>
                    </Link>

                </NavListWrapper>

                <Contact>
                    <Button
                    varient={'primary'}
                    title={'Get in Touch'}
                    onclick={handleContact}
                    icons={<MdArrowOutward />}
                />
                </Contact>

                {/* MOBILE SIDE OPEN AND CLOSE BTN */}
                <Menu onClick={handleNavBarOpenAndClose} >
                    <IoMenu />
                </Menu>


                {/* MOBILE HERE */}
                {navBarOpenAndClose &&
                    <NavMobile SideBarToggle={navBarOpenAndClose}>

                        <MobileNav>
                            <Logo>
                                <Link to="/">
                                    <Img src={softtech} alt="logo" />
                                </Link>
                            </Logo>

                            <Cancel onClick={handleNavBarOpenAndClose}>
                                <LiaTimesSolid  />
                            </Cancel>

                        </MobileNav>

                        <MobileNavList >

                            <Link to="/" className='nav-list-mobile'>
                            <SubNavMobileLi>Home</SubNavMobileLi>
                            </Link>

                            <SubNavMobileLi>
                                Our Services
                                <SubNavMobile onClick={handleNavBarOpenAndClose}>

                                    <SubNavMobileUl >
                                        <Link to="/web_dev" >
                                            <SubNavMobileLi>
                                                Web Development
                                            </SubNavMobileLi>
                                        </Link>

                                        <Link to="/project" >
                                            <SubNavMobileLi>
                                                Mobile App
                                            </SubNavMobileLi>
                                        </Link>

                                        <Link to="/ui/ux/designs" >
                                            <SubNavMobileLi>
                                                UI/UX Designs
                                            </SubNavMobileLi>
                                        </Link>

                                        <Link to="/designs" >
                                            <SubNavMobileLi>
                                                Graphics Design
                                            </SubNavMobileLi>
                                        </Link>

                                    </SubNavMobileUl>
                                </SubNavMobile>

                            </SubNavMobileLi>

                            <Link to="/project" >
                                <SubNavMobileLi>
                                    About Us
                                </SubNavMobileLi>
                            </Link>


                        </MobileNavList>

                        <MobileBtn onClick={() => { handleNavBarOpenAndClose(); handleContact() }}> 
                            Get In Touch
                        </MobileBtn>
                    </NavMobile>
                }
            </NavBarWrapper >

        </>

    )
}

export default NavBar