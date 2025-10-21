import React from 'react'
import GeneralHeroSection from '../shared/GeneralHeroSection'
import ServicesSection from '../components/services/ServicesSection'
import ContactSection from '../shared/ContactSection'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const page = () => {
  return (
    <div className=''>
      <Navbar />
      <GeneralHeroSection title="Services We Offer" />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page
