import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import MetaTag from '../components/shared/MetaTag'
import { ComingSoon } from './ComingSoon'


export const Home = () => {
  return (
    <div className=''>
        <MetaTag  
            title="Tech Cartel ~ Home"
            description = "Tech Cartel is a community for new developers, designers and people interested in tech. Learn, build and Connect"
        />
        <Navbar />
        <ComingSoon />
        <Footer />
    </div>
  )
}
