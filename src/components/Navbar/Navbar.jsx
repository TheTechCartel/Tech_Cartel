import React from 'react'
import Button from '../shared/Button'
import {Link} from 'react-router-dom'
import Logo from '../shared/Logo'

export const Navbar = () => {
  return (
    <>
        {/* Div for navbar */}
        <div className='flex flex-col mx-20 '>
            <div className='flex flex-row space-x-[18.2em] items-center pb-1 h-[3.5rem]'>
                <Link className=' no-underline ' to='/login'><Logo /></Link>
                {/* Nav links */}
                <nav className=' flex flex-row list-none  space-x-16 mt-[.2em] '>
                    <li className='  '><Link className=' hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] text-[#000] no-underline' to='/'>Home</Link></li>
                    <li className='  '><Link className=' hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] text-[#000] no-underline' to=''>Learning paths</Link></li>
                    <li className='  '><Link className=' hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] text-[#000] no-underline' to=''>About</Link></li>
                </nav>
                
                <div className='flex flex-row items-center space-x-4 list-none'>
                    <li className='hover:text-primary'><Link className=' text-[#000] hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] no-underline'  to='/login'><p>Login</p></Link></li>
                    <Link className='' to='/'><button className=' hover:cursor-pointer bg-primary px-3 py-2 border-0 rounded-md text-secondary'>Sign up</button></Link>
                </div>
            </div>
            <div>
                <hr />  
            </div>
        </div>
    </>
  )
}
