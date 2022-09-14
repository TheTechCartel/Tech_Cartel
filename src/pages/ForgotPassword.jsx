import React from 'react'
import { Button, Input, Logo } from '../components/shared'
import {Link } from 'react-router-dom'

const ForgotPassword = () => {
   
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className=' flex flex-col justify-center space-y-4 items-center h-screen'>
   
      <Link to='/' className='no-underline' ><Logo/></Link>
      <form onSubmit={handleSubmit} className=' bg-[#FFFFFF] rounded-[10px] justify-evenly h-[50%] w-3/4 max-w-[620px] min-w-[500px] flex flex-col items-center '>
          <p className=' font-bold text-[1.5em]'> Reset Password</p>
          <p className='text-[1em]'>Reset your password by providing your email address</p>
          
          <div className="w-full flex flex-col items-center justify-center space-y-10">
            <Input required label="Email" placeholder='johndoe@example.com' width='w-[70%]' type='email' />
            <Button primary width="w-[50%]">Next</Button>
          </div>
      </form>
    </div>
  )
}
export default ForgotPassword