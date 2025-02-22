import React from "react";
import './project.css'
import NavBar from "../../component/navBar/navBar";
import PropertyContent from "../../component/propertyContent/propertyContent";
import Footer from "../../component/footer/footer";



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