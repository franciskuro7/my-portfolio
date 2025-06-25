import React from "react";

import './hero.css'
import { FaLaptopCode } from "react-icons/fa";
import { IoBrush } from "react-icons/io5";

const Hero = () => {
    return (

        <>
            <div className="hero">
                <h2>
                    Helping business and Company Build Websites, that 
                    Works and Suits there Business and Companies.
                </h2>
                <div className="hero-specialize-wrapper">
                    <div className="hero-specialize">
                        <span className="hero-specialize-content"><IoBrush /> Design</span>
                        <span className="hero-specialize-content"> <FaLaptopCode /> Reactjs Mern-Stack Developer</span>
                        <span className="hero-specialize-content"> Webpress</span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Hero