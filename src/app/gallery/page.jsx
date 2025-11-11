import React from 'react'
import GeneralHeroSection from '../shared/GeneralHeroSection'
import GallerySection from '../components/gallery/GallerySection'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const page = () => {
  return (
    <div className='pt-[90px]'>
      <Navbar />
      <GeneralHeroSection title="Our Gallery" />
      <GallerySection />
      <Footer />
    </div>
  )
}

export default page
