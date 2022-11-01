import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function Layout() {
  return (
    <div>
        <Outlet />
        <Header />
        <Footer />
    </div>
  )
}

export default Layout
