import React from 'react'
import {SectionOne, SectionTwo, SectionThree, SectionFour} from '../components/Home'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'


const Home = () => {
  return (
    <>
      <title>Tech Cartel ~ Home</title>
      <Navbar />
      <div className=' mx-20'>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
      {/* <ComingSoon /> */}
      <Footer />
    </>
 
 )
}
export default Home