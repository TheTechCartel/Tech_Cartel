import React from 'react'
import SectionOne from '../components/Home/SectionOne'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'


const Home = () => {
  return (
    <>
      <title>Tech Cartel ~ Home</title>

      <Navbar />
      <div className=' mx-20'>
        <SectionOne />
      </div>
      {/* <ComingSoon /> */}
      <Footer />
    </>
 
 )
}
export default Home