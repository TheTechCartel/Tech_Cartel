import React from 'react'
import Footer  from '../layouts/footer/Footer'
import Navbar  from '../layouts/navbar/Navbar'
import ComingSoon from './ComingSoon'


const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <ComingSoon />
        <Footer />
    </div>
  )
}

export default Home