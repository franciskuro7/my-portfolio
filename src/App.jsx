import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import Home from './page/home/home'
import Project from './page/project/project'
import Designs from './page/project/designs/designs'
import ErrorPage from './page/error/error'
import { GlobalStyles } from './styles/globalStyles'






function App() {

  return (
    <>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/web_dev' element={<Project />} />
        <Route path='/ui/ux/designs' element={<Designs />} />
        {/* <Route path='/solar/system_installation' element={<Project />} />
        <Route path='/designs/graphic_designs' element={<Designs />} /> */}

      </Routes>
    </Router>
    </>
  )
}

export default App