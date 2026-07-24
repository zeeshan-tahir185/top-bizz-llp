import React from 'react'
import HeroSection from './components/home/HeroSection'
import AboutSection from './components/home/AboutSection'
import PartnersSection from './components/home/PartnersSection'
import ServicesSection from './components/home/ServicesSection'
import ContactSection from './shared/ContactSection'
import HomeGallery from './components/home/HomeGallery'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

const page = () => {
  return (
    <div className='pt-[90px]'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <PartnersSection /> */}
      <ServicesSection />
      <HomeGallery />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page
