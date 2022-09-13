import React from 'react'
import Footer  from '../layouts/footer/Footer'
import Navbar  from '../layouts/navbar/Navbar'
import ComingSoon from './ComingSoon'
import ForgotPassword from './ForgotPassword'


const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <ComingSoon />
        <ForgotPassword/>
        <Footer />
    </div>
  )
}

export default Home;
