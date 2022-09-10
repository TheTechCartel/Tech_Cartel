import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../shared/Input'

export const TextSection = () => {
  return (
    <div className='flex flex-col space-y-[2em]'>
        <div className=' mt-[3em]'>
            <h3 className=' text-primary font-bold text-lg'>Coming soon.</h3>
            <p className=' text-[rgba(28, 28, 28, 1)]'>We are currently under construction.</p>
        </div>
        <div>
            <p className=' text-[black] text-[.86em] mg font-semibold'>Get notified when we launch.</p>
            <div className='flex flex-row w-[20em] my-[.5em]'>
                {/* <input className=' bg-inherit h-[2em] rounded-md w-[15em] border-[red]-[1px] ' placeholder='Enter your email address'></input> */}
                <Input type='text' addedClasses=' bg-secondary placeholder:text-[#6D6D6D] border-[1px]  border-[#6D6D6D]' placeholder = {'Enter your email address'} />
                <Link to='/'><button className=' bg-primary px-3 py-[.5em] hover:cursor-pointer  rounded-md text-secondary border-0 text-sm'>Notify Me</button></Link>
            </div>
            <p className='text-[#1C1C1C] text-[.76em]'><span className = ' text-[red]'>*</span>Don't worry we will not spam you.</p>
        </div>
    </div>
  )
}
