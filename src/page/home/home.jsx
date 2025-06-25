import React from 'react'
import NavBar from '../../component/navBar/navBar'
import Footer from '../../component/footer/footer'
import Hero from '../../component/hero/hero'
import Profile from '../../component/profile/profile'
import RecentProject from '../../component/projectDetails/recentProject'
import SkillsDetails from '../../component/skillsDetails/skillsDetails'

const Home = () => {
    return (
        <>
            <div>
                <NavBar />
                <Hero />
                <Profile />
                <SkillsDetails />
                <RecentProject />
                <Footer />
            </div>
        </>
    )
}

export default Home