import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import Home from './page/home/home'
import Project from './page/project/project'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/project' element={<Project /> }/>
        {/* <Route path='/blog' element={<Blog /> }/> */}
       
      </Routes>
    </Router>
  )
}

export default App