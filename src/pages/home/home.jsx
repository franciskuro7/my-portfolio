import React from 'react'
import NavBar from '../../component/navBar/navBar'
import Footer from '../../component/footer/footer'
import Hero from '../../component/hero/hero'
import Profile from '../../component/profile/profile'
import RecentProject from '../../component/projectDetails/recentProject'

const Home = ()=>{
    return(
        <>
        <div>
        <NavBar />

        {/* <Hero /> */}
        <Profile />
        <RecentProject />
        <Footer/>
        </div>
        </>
    )
}

export default Home