import React from "react";
import './skillsDetails.css'


const SkillsDetails = () => {
    return (
        <>
            <div className="skills-details">


                <h1> My Area Of Expertises </h1>

                <div className="skills-wrapper">

                    <div className="skills-content">
                        <h2>Projects</h2>
                        <span>All Websites</span>
                        <span>E-Commerce</span>
                        <span>Landing Page</span>
                        <span>Web Applications</span>
                        {/* <span>Design System</span> */}
                    </div>



                    <div className="skills-content">
                        <h2>Developmenting</h2>
                        <span>Saas</span>
                        <span>Personal Brand</span>
                        <span>Content Platform</span>
                        <span>Design System</span>
                    </div>



                    <div className="skills-content">
                        <h2>Frameworks & Tools</h2>
                        <span>React, Next.js</span>
                        <span>Figma, Canva</span>
                        <span>Git, Github</span>
                        <span>Vercel, Netlify</span>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SkillsDetails