import React from 'react'
import Button from '../../components/shared/Button'
import {Link} from 'react-router-dom'
import Logo from '../../components/shared/Logo'

const Navbar = () => {
  return (
        <nav className='flex flex-col mx-20 '>
            <div className='flex flex-row space-x-[14em] items-center pb-1 h-[3.5rem]'>
                <Link className=' no-underline ' to='/'><Logo /></Link>
                {/* Nav links */}
                <ul className=' flex flex-row list-none  space-x-16 mt-[.2em] '>
                    <li><Link className=' hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] text-[#000] no-underline' to='/'>Home</Link></li>
                    <li><Link className=' hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] text-[#000] no-underline' to='/'>Community</Link></li>
                    <li><Link className=' hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] text-[#000] no-underline' to='/learning-path'>Learning paths</Link></li>
                    <li><Link className=' hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] text-[#000] no-underline' to='/about'>About</Link></li>
                </ul>
                
                <div className='flex flex-row items-center space-x-4 list-none'>
                    {/* <span className='hover:text-primary'>
                        <Link className=' text-[#000] hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] no-underline'  to='/sign-in'>Sign In</Link>
                    </span> */}
                    <Link className='' to='/sign-in'><Button primary><p className="mx-[1em] text-[14px]">Sign In</p></Button></Link>
                </div>
            </div>
            <div>
                <hr />  
            </div>
        </nav>
  )
}
export default Navbar