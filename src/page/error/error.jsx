import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Button from '../../component/call-to-action/button'
import { Error } from '../../styles/error'


const ErrorPage = () => {
  const navigate = useNavigate()

  const Home = () => {
    setTimeout(() => {
      navigate("/")
    },1000)
  }

  return (
    <>
      <Error>
        <h1>404</h1>
        <h2>Page Not Found.</h2>

        <Button
          title={"HOME"}
          onclick={Home}
        />
        
      </Error>
    </>
  )
}

export default ErrorPage