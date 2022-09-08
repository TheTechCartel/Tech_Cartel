import React from 'react'

export const TextSection = () => {
  return (
    <div className='flex flex-col space-y-[2em]'>
        <div className=' mt-[3em]'>
            <h3 className=' text-theme-blue-2 font-bold text-lg'>Coming soon.</h3>
            <p className=' text-[rgba(28, 28, 28, 1)]'>We are currently under construction.</p>
        </div>
        <div>
            <p className=' text-[black] font-normal'>Get notified when we launch.</p>
            <div className='flex flex-row w-[20em]'>
                <input className=' bg-inherit h-[2em] rounded-md w-[15em] border-[red]-[1px] ' placeholder='Enter your email address'></input>
                <button className=' bg-theme-blue-2 px-2  rounded-md text-theme-blue-1 text-sm'>Notify Me</button>
            </div>
            <p className='text-[#1C1C1C]'><span className = ' text-[red]'>*</span>Don't worry we will not spam you.</p>
        </div>
    </div>
  )
}
