import React from "react";
import profile from '../../assets/img/profile.jpeg'
import './profile.css'
import SocialIcons from "../socialIcons/socialIcons";

const Profile = () => {
    return (

        <>
            <div className="profile-wrapper">

                    <div className="profile-text">
                        <h4>
                            Hey! I'm Fineface Kuroghoekigha Francis, a Full Stack Website Developer from
                            Nigeria who loves building websites that make businesses
                            stand out. I work with React.js, Next.js, Node.js,
                            and Express.js to create fast, user-friendly sites that
                            actually solve problems. I'm always
                            excited to take on new challenges. Got a project in mind?
                            Let's make it happen!
                        </h4>
                        <SocialIcons />
                        
                    </div>
                    <div className="profile-img">
                        <img src={profile} alt="" />
                    </div>

            </div>
        </>
    )
}


export default Profile