import React from 'react'
// import Profile from '../../component/profile/profile'
import RecentProject from '../../component/projectDetails/recentProject'
import SkillsDetails from '../../component/skillsDetails/skillsDetails'
import ExploreMyOffer from '../../component/Explore-My-Offerings/ExploreMyOffer'
import InfoForm from '../../component/infoForm/infoForm'
import NavBar from '../../component/navBar'
import Hero from '../../component/hero'
import Services from '../../component/services'
import Footer from '../../component/footer'



const Home = () => {
    return (
        <>
            <div>
                <NavBar />
                <Hero />
                {/* <Profile /> */}
                <SkillsDetails />
                <Services/>
                <RecentProject />
                <ExploreMyOffer />
                <InfoForm/>
                <Footer />
            </div>
        </>
    )
}

export default Home