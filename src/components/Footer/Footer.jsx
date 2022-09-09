import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import facebook from './assets/facebook.svg'
import mail from './assets/mail.svg'
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'
import linkedIn from './assets/linkedIn.svg'
import youTube from './assets/youTube.svg'
import { Logo } from '../shared'


export const Footer = () => {
  const [titleClass] = useState(' font-bold mb-[1.5em]')
  return (
    <footer className=' bg-primary  h-[220px] pt-[4em]'>

      <div className=' flex flex-row text-[#FFFFFF] mx-20 space-x-[10em]'>
        {/* Footer row 1 */}
        <div>
          <Logo location='footer' />
          <p className=' text-[.68em] ml-1 mt-[.2em]'> Your cartel for every tech resource</p>
          <p className=' text-[.8em] pt-[2em]'>© 2022 The Tech Cartel.</p>
          {/* Footer social links */}
          <div className=' flex flex-row space-x-4 mt-[3em]'>
            <img className=' w-[1.8em] h-[1.8em]' src={facebook} alt='face book logo for social link'></img>
            <img className=' w-[1.8em] h-[1.8em]' src={mail} alt='face book logo for social link'></img>
            <img className=' w-[1.8em] h-[1.8em]' src={twitter} alt='face book logo for social link'></img>
            <img className=' w-[1.8em] h-[1.8em]' src={instagram} alt='face book logo for social link'></img>
            <img className=' w-[1.8em] h-[1.8em]' src={linkedIn} alt='face book logo for social link'></img>
            <img className=' w-[1.8em] h-[1.8em]' src={youTube} alt='face book logo for social link'></img>
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
