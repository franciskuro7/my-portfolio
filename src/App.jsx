import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import Home from './page/home'
// import Designs from './page/project/designs/designs'
// import ErrorPage from './page/error/error'
import { GlobalStyles } from './styles/globalStyles'
import AllProjects from './page/all-project'


function App() {

  return (
    <>
    <GlobalStyles />
    <Router>
      <Routes>
        {/* <Route path='*' element={<ErrorPage />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/all-projects' element={<AllProjects />} />
        {/* <Route path='/ui/ux/designs' element={<Designs />} /> */}
        {/* <Route path='/solar/system_installation' element={<Project />} />
        <Route path='/designs/graphic_designs' element={<Designs />} /> */}

      </Routes>
    </Router>
    </>
  )
}

export default App