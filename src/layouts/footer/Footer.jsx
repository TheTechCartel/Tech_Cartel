import React from 'react'
import { Facebook, Instagram, Linkedin, Mail, Twitter, Youtube } from 'react-feather'

import { IconContainer, Logo } from '../../components/shared'


const Footer = () => {
  const titleClass = "font-bold mb-[1.5em]"
  return (
    <footer className=' bg-primary  h-[220px] pt-[4em]'>

      <div className=' flex flex-row text-[#FFFFFF] mx-20 space-x-[10em]'>
        {/* Footer row 1 */}
        <div>
          <Logo secondary />
          <p className=' text-[.68em] ml-1 mt-[.2em]'> Your cartel for every tech resource</p>
          <p className=' text-[.8em] pt-[2em]'>© 2022 The Tech Cartel.</p>
          {/* Footer social links */}
          <div className=' flex flex-row space-x-4 mt-[3em]'>
            <IconContainer contained>
              <Facebook size={20}/>
            </IconContainer>
            <IconContainer contained>
              <Mail size={20}/>
            </IconContainer>
            <IconContainer contained>
              <Twitter size={20}/>
            </IconContainer>
            <IconContainer contained>
              <Instagram size={20}/>
            </IconContainer>
            <IconContainer contained>
              <Linkedin size={20}/>
            </IconContainer>
            <IconContainer contained>
              <Youtube size={20}/>
            </IconContainer>       
          </div>
        </div>
        {/* Footer row 2 */}
        <div className=' flex flex-col'>
          <h4 className={` ${titleClass}`}>Products</h4>
          <div className=' flex flex-col '>
          <h4>Home</h4>
          <h4>Log In</h4>
          <h4>Sign Up</h4>
          </div>
        </div>
        {/* Footer row 3 */}
        <div className=' flex flex-col font-thin'>
          <h4 className={` ${titleClass}`}>Company</h4>
          <h4>About Us</h4>
          <h4>Volunteer</h4>
        </div>
        {/* Footer row 2 */}
        <div className=' flex flex-col'>
          <h4 className={` ${titleClass}`}>Learning Paths</h4>
          <div className=' flex flex-row space-x-[4em] '>
            <div>
              <h4 className={` ${titleClass} `}>Courses</h4>
              <h4>Web Development</h4>
              <h4>Product Design(UI/UX)</h4>
            </div>
            <div>
              <h4 className={` ${titleClass}`}>Languages</h4>
              <h4>Html& css</h4>
              <h4>Python</h4>
              <h4>Javascript</h4>
              <h4>SQL</h4>
            </div>
          </div>
        </div>
      </div>       
    </footer>
  )
}

export default Footer