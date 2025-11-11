import React from 'react'
import GeneralHeroSection from '../shared/GeneralHeroSection'
import ContactSection from '../shared/ContactSection'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const page = () => {
  return (
    <div className='pt-[90px]'>
      <Navbar />
      <GeneralHeroSection title="Contact Us" />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page
