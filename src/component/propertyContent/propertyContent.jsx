import React from 'react'
import { Link } from 'react-router-dom'
import './propertyContent.css'
import hero from "../../assets/img/portfolio1.jpg"
import { ProjectData } from '../../data/projectData'




const PropertyContent = () => {

    console.log(ProjectData)



    return (
        <>
            <div className="project-wrapper">
                <h1> All My Project Prev Live Demo And View Codes</h1>

                <div className="project-details">
                    <div className="project-content">



                        {ProjectData.map((data) => {

                            return (
                                <div key={data.id} className="project-content-wrapper">
                                    <div className="project-col">
                                        <h2>{data.title}</h2>
                                        <p>{data.desc}</p>

                                        <div className="project-content-details">

                                            <div className="project-content-period">
                                                <div className="project-category">
                                                    <h2>Duration:</h2>
                                                    <strong>{data.catTime.duration}</strong>
                                                </div>

                                                <div className="project-category">
                                                    <h2>Category:</h2>
                                                    <strong>{data.catTime.category}</strong>
                                                </div>

                                            </div>

                                            <div className="project-content-tools">

                                                <span className="project-tools">{data.tools.tool1}</span>
                                                <span className="project-tools">{data.tools.tool2}</span>
                                                <span className="project-tools">{data.tools.tool3}</span>
                                                <span className="project-tools">{data.tools.tool4}</span>
                                                <span className="project-tools">{data.tools.tool5}</span>
                                            </div>
                                        </div>

                                        <div className="demo-prev">
                                            <Link to={data.links.demo} target='_blank'> <span>{data.feeds.demo} </span> </Link>
                                            <Link to={data.links.prev} target='_blank'> <span>{data.feeds.prev}</span> </Link>
                                        </div>

                                    </div>

                                    <div className="project-col">
                                        <img src={data.imgUrl} alt="" />
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>

            </div>
        </>
    )
}

export default PropertyContent