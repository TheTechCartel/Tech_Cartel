import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '../shared'

export const LoginForm = () => {
    const inputWidth = ' w-[425px]'
  return (
    <>
    <form className=' bg-[#FFFFFF] my-[2em] h-[83vh] w-[574px] flex flex-col content-center items-center '>
        <p className=' font-bold mt-[100px] text-[1.5em]'> Log In</p>
        <div className=' mt-[2.5em]'>
            <label>Email</label>
            <Input placeholder='johndoe@example.com' addedClasses='mt-[.5em]' width={inputWidth} type='email' />
        </div>
        <div className=' mt-[2.5em]'>
            <label>Password</label>
            <Input placeholder='Enter your password' addedClasses='mt-[.5em]' width={inputWidth} type='password' />
        </div>
        <div className=' flex flex-row items-center mt-[3em] ml-[4.5em] space-x-[24.2em] w-[453px] text-[.7em] font-semibold border-[1px] border-[red]'>
            <div className=' flex flex-row items-center space-x-2'>
            <Input type='checkbox' />
            <p>Remember me</p>
            </div>
            <Link to='#'><p>Forgot password</p></Link>
        </div>
        <Button primary addedClasses='mt-[2em]'>Login</Button>
        <div className=' flex flex-row space-x-[.3em] mt-[2em]'>
            <p>Need an account?</p>
            <Link to='#'>Sign Up</Link>
        </div>
    </form>
    </>
  )
}
