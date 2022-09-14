import React from 'react'
import SectionOne from '../components/Home/SectionOne'
import Meta from '../components/shared/Meta'
import Navbar from '../layouts/Navbar/Navbar'
import Footer from '../layouts/Footer/Footer'
import ComingSoon from './ComingSoon'


export const Home = () => {
  return (
    <>
        <Meta  
            title="Tech Cartel ~ Home"
            description = "Tech Cartel is a community for new developers, designers and people interested in tech. Learn, build and Connect"
        />
        <Navbar />
        <div className=' mx-20'>
          <SectionOne />
        </div>
        {/* <ComingSoon /> */}
        <Footer />
    </>
  )
}
