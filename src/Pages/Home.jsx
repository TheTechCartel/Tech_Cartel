import React from 'react'
import { Footer } from '../components/Footer/Footer'
import SectionOne from '../components/Home/SectionOne'
import { Navbar } from '../components/Navbar/Navbar'
import Meta from '../components/shared/Meta'
import { ComingSoon } from './ComingSoon'


export const Home = () => {
  return (
    <>
        <Meta  
            title="Tech Cartel ~ Home"
            description = "Tech Cartel is a community for new developers, designers and people interested in tech. Learn, build and Connect"
        />
        <Navbar />
        <ComingSoon />
        <SectionOne />
        <Footer />
    </>
  )
}
