import React from "react";

import portfolio7 from '../../assets/img/portfolio7.jpg'
import './recentProject.css'



import NavBar from "../../component/navBar/navBar";
import { Link } from "react-router-dom";


const RecentProject = () => {

    return (
        <>
            <div className="recent-project">


                <h1> Recent Project</h1>

                <div className="recent-project-wrapper">

                    <div className="recent-project-details">

                        <div className="recent-project-image">
                            <img src={portfolio7} alt="" />
                        </div>
                        <div className="recent-project-text">
                            <h2>Askify Q&A Platform</h2>
                            <p>
                                A web-based software that helps students manage their
                                assignments and submit them to their teachers. AI is used
                                to grade assignments and provide feedback.
                            </p>
                            <div className="recent-project-tools">
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                            </div>
                            <div className="recent-project-buttons">
                                <Link className="btn-link-tags"> <span className="btn">Live Demo</span></Link>
                                <Link className="btn-link-tags"> <span className="btn">Preview Code</span></Link>
                            </div>
                        </div>
                    </div>



                    <div className="recent-project-details">

                        <div className="recent-project-image">
                            <img src={portfolio7} alt="" />
                        </div>


                        <div className="recent-project-text">
                            <h2>Askify Q&A Platform</h2>
                            <p>
                                A web-based software that helps students manage their
                                assignments and submit them to their teachers. AI is used
                                to grade assignments and provide feedback.
                            </p>

                            <div className="recent-project-tools">
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                            </div>
                            <div className="recent-project-buttons">
                                <Link className="btn-link-tags"> <span className="btn">Live Demo</span></Link>
                                <Link className="btn-link-tags"> <span className="btn">Preview Code</span></Link>
                            </div>
                        </div>
                    </div>



                    <div className="recent-project-details">

                        <div className="recent-project-image">
                            <img src={portfolio7} alt="" />
                        </div>
                        <div className="recent-project-text">
                            <h2>Askify Q&A Platform</h2>
                            <p>
                                A web-based software that helps students manage their
                                assignments and submit them to their teachers. AI is used
                                to grade assignments and provide feedback.
                            </p>
                            <div className="recent-project-tools">
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                                <span className="recent-project-toolds-used">Reactjs</span>
                            </div>
                            <div className="recent-project-buttons">
                                <Link className="btn-link-tags"> <span className="btn">Live Demo</span></Link>
                                <Link className="btn-link-tags"> <span className="btn">Preview Code</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default RecentProject