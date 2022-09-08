import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { ComingSoon } from './ComingSoon'

export const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <ComingSoon />
        <Footer />
    </div>
  )
}
