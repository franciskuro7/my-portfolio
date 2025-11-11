import React from "react";
import './project.css'

import PropertyContent from "../../component/propertyContent/propertyContent";
import Footer from "../../component/footer";
import NavBar from "../../component/navBar";



const Project =()=>{

    return(
        <>
            <div className="project">
                <NavBar />
                <PropertyContent />
                <Footer />
            </div>
        </>
    )

}

export default Project