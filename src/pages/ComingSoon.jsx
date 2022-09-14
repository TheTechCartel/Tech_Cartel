import React from 'react'
import { ImageSection } from '../components/ComingSoon/ImageSection'
import { TextSection } from '../components/ComingSoon/TextSection'
import Footer from '../layouts/footer/Footer'
import Navbar from '../layouts/navbar/Navbar'

const ComingSoon = () => {
  return (
    <>
      <title>Tech Cartel ~ Coming Soon</title>
      <Navbar />
      <div className='flex flex-row space-x-[21em] pt-32 mx-20 mb-[10em]'>
          <TextSection /> 
          <ImageSection />
      </div>
      <Footer />
    </>
    
  )
}
export default ComingSoon
