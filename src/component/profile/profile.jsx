import React from "react";
import portfolio12 from '../../assets/img/portfolio12.jpg'
import './profile.css'
import SocialIcons from "../socialIcons/socialIcons";

const Profile = () => {
    return (

        <>
            <div className="profile-wrapper">

                    <div className="profile-text">
                        <h4>
                            Hey! I'm Francis Kuro, a Full Stack Website Developer from
                            Nigeria who loves building websites that make businesses
                            stand out. I work with React, TypeScript, Node.js,
                            and Express.js to create fast, user-friendly sites that
                            actually solve problems. I'm always
                            excited to take on new challenges. Got a project in mind?
                            Let's make it happen!
                        </h4>
                        <SocialIcons />
                        
                    </div>
                    <div className="profile-img">
                        <img src={portfolio12} alt="" />
                    </div>

            </div>
        </>
    )
}


export default Profile