import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import facebook from './assets/facebook.svg'
import mail from './assets/mail.svg'
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'
import linkedIn from './assets/linkedIn.svg'
import youTube from './assets/youTube.svg'

export const Footer = () => {
  const [titleClass, setTitleClass] = useState(' font-bold mb-2')
  return (
    <footer className=' bg-theme-blue-2  h-[250px] pt-[4em]'>

      <div className=' flex flex-row text-[#FFFFFF] mx-20 space-x-[10em]'>
        {/* Footer row 1 */}
        <div>
          <Link to='/'><p className=' text-2xl pt-px  '>the<span className='font-bold text-[1.2em]'>TechCartel</span></p></Link>
          <p className=' text-[.68em] ml-1'> Your cartel for every tech resource</p>
          <p className=' text-[.8em] pt-[1em]'>© 2022 The Tech Cartel.</p>
          {/* Footer social links */}
          <div className=' flex flex-row space-x-4 mt-8'>
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
          <h4>Home</h4>
          <h4>Log In</h4>
          <h4>Sign Up</h4>
        </div>
        {/* Footer row 3 */}
        <div className=' flex flex-col'>
          <h4 className={` ${titleClass}`}>Company</h4>
          <h4>About Us</h4>
          <h4>Volunteer</h4>
        </div>
        {/* Footer row 2 */}
        <div className=' flex flex-col'>
          <h4 className={` ${titleClass}`}>Learning Paths</h4>
          <div className=' flex flex-row space-x-[4em] mt-[.3em]'>
            <div>
              <h4 className={` ${titleClass}`}>Courses</h4>
              <h4>Web Development</h4>
              <h4>Product Design(UI/UX)</h4>
            </div>
            <div>
              <h4 className={` ${titleClass}`}>Languages</h4>
              <h4>Log In</h4>
              <h4>Sign Up</h4>
            </div>
          </div>
        </div>
      </div>       
    </footer>
  )
}
