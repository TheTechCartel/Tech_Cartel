import React from 'react'
import { Button, Input } from '../shared'

export const ForgotPasswordForm = () => {
    const inputWidth = ' w-[425px]'
  return (
    <>
    <form className=' bg-[#FFFFFF] my-[2em] h-[83vh] w-[574px] flex flex-col content-center items-center '>
        <p className=' font-bold mt-[100px] text-[1.5em]'> Reset Password</p>
        <p className='mt-[50px] text-[1em]'>Reset your password by providing your email address</p>
        <div className=' mt-[2.5em]'>
            <label>Email</label>
            <Input placeholder='johndoe@example.com' addedClasses='mt-[.5em]' width={inputWidth} type='email' />
        </div>
        <Button primary addedClasses='mt-[2em]'>Next</Button>
    </form>
    </>
  )
}