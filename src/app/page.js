import React from 'react'
import LandingPage from './components/home/LandingPage'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

const page = () => {
  return (
    <div className='pt-[90px]'>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default page
