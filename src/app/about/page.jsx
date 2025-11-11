import React from 'react'
import GeneralHeroSection from '../shared/GeneralHeroSection'
import AboutSection from '../components/about/AboutSection'
import MissionSection from '../components/about/MissionSection'
import VisionSection from '../components/about/VisionSection'
import ValuesSection from '../components/about/ValuesSection'
import ContactSection from '../shared/ContactSection'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const page = () => {
  return (
    <div className='pt-[90px]'>
      <Navbar />
      <GeneralHeroSection title="About Us"  />
      <AboutSection />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page
