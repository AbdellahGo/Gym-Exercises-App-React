import React from 'react'
import NavBar from '../components/navBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const RootLayout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout