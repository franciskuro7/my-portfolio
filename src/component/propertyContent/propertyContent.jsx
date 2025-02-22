import React from 'react'
import { Link } from 'react-router-dom'
import './propertyContent.css'




const PropertyContent = () => {
    




    return (
        <>
            <div className="property-wrapper">
                <h1> All My Project Prev Live Demo And View Codes</h1>
                <div className="property-content">

                    <div className="property">
                        <div className="property-col">
                            <h2>E-commerce Site</h2>
                            <p>
                                This is a portfolio website I created for a WordPress
                                developer, highlighting their skills and projects in a
                                professional, visually engaging layout that emphasizes
                                their expertise and unique style.
                            </p>

                            <div className="propert-content-details">
                                <div className="propert-content-period">
                                    <div className="property-duration">
                                        <h2>Duration:</h2>
                                        <strong>6 Weeks</strong>
                                    </div>
                                    <div className="property-category">
                                        <h2>Caqtegory:</h2>
                                        <strong>Landing Page</strong>
                                    </div>
                                </div>
                                <div className="propert-content-tools">

                                </div>
                            </div>

                            <div className="demo-prev">
                                <Link> <span>Live Demo </span> </Link>
                                <Link> <span>View Code </span> </Link>
                            </div>
                        </div>

                        <div className="property-col">
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default PropertyContent