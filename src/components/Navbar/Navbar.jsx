import React from 'react'
import {Link} from 'react-router-dom'
import Line from './assets/line.svg'

export const Navbar = () => {
  return (
    <>
        {/* Div for navbar */}
        <div className='flex flex-col pb-1 mx-20'>
            <div className='flex flex-row space-x-[20.5em] pt-5 pb-1'>
                {/* Site logo with span to design 'TechCartel' */}
                <Link to='/'><div className=' ml-[.2em] flex flow-row text-theme-blue-2'>
                <p className=' pt-px  '>the</p>
                <p className='text-lg font-bold '>TechCartel</p>
                </div></Link>
                {/* Nav links */}
                <nav className=' flex flex-row list-none space-x-16 '>
                    <li className=' hover:text-theme-blue-2'><Link to='/'>Home</Link></li>
                    <li className=' hover:text-theme-blue-2'><Link to=''>Learning paths</Link></li>
                    <li className=' hover:text-theme-blue-2'><Link to=''>About</Link></li>
                </nav>

                <div className='flex flex-row space-x-4 list-none'>
                    <li className='hover:text-theme-blue-2'><Link  to='/login'><p>Login</p></Link></li>
                    <Link className='' to='/sign-up'><button className=' bg-theme-blue-2 px-2  rounded-md text-theme-blue-1'>Sign up</button></Link>
                </div>
            </div>
            <div>
                <img src={Line} alt='Line below navbar' ></img>
            </div>
        </div>
    </>
  )
}
