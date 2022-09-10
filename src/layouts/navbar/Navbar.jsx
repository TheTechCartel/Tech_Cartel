import React from 'react'
import Button from '../../components/shared/Button'
import {Link} from 'react-router-dom'
import Logo from '../../components/shared/Logo'

const Navbar = () => {
  return (
        <nav className='flex flex-col mx-20 '>
            <div className='flex flex-row space-x-[18.2em] items-center pb-1 h-[3.5rem]'>
                <Link className=' no-underline ' to='/'><Logo /></Link>
                {/* Nav links */}
                <ul className=' flex flex-row list-none  space-x-16 mt-[.2em] '>
                    <li className='  '><Link className=' hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] text-[#000] no-underline' to='/'>Home</Link></li>
                    <li className='  '><Link className=' hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] text-[#000] no-underline' to=''>Learning paths</Link></li>
                    <li className='  '><Link className=' hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] text-[#000] no-underline' to=''>About</Link></li>
                </ul>
                
                <div className='flex flex-row items-center space-x-4 list-none'>
                    <span className='hover:text-primary'>
                        <Link className=' text-[#000] hover:text-primary hover:underline hover:decoration-[primary]  hover:decoration-4 hover:underline-offset-[.5em] no-underline'  to='/signin'>Login</Link>
                    </span>
                    <Link className='' to='/signup'><Button primary width="w-[100px]">Sign up</Button></Link>
                </div>
            </div>
            <div>
                <hr />  
            </div>
        </nav>
  )
}
export default Navbar