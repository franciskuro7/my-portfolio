import React from 'react'

import ExploreMyOffer from '../../component/Explore-My-Offers'
// import InfoForm from '../../component/infoForm/infoForm'
import NavBar from '../../component/navBar'
import RecentsProjects from "../../component/recent-project"
import Skills from "../../component/skills-tech"
import ContactForm from "../../component/contact-form"
import Hero from '../../component/herosection'
import Services from '../../component/services'
import Footer from '../../component/footer'



const Home = () => {
    return (
        <>
            <div>
                <NavBar />
                <Hero />
                <Skills />
                <Services/>
                <RecentsProjects />
                <ExploreMyOffer />
                <ContactForm / >
                <Footer />
            </div>
        </>
    )
}

export default Home