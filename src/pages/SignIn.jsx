import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Logo } from '../components/shared'

const SignIn = () => {
  return (
    <>
      <title> Tech Cartel ~ Sign Up</title>

        
      <section className="w-screen h-screen bg-tcBG flex justify-center items-center flex-col">

        <span className="hidden lg:inline mb-10">
          <Logo/>
        </span>
        <form className=" md:shadow-md w-3/4 max-w-[620px] h-[60%] min-h-[400px] min-w-[500px] justify-evenly bg-white  rounded-[10px] flex flex-col items-center">
          <p className=' font-bold text-[1.5em]'> Log In</p>
          <Input 
            placeholder='johndoe@example.com' 
            width="w-[70%]" 
            type='email'
            label="Email"
            required
          />
          <Input 
            placeholder='Enter your password'
            addedClasses="mt-10"
            width="w-[70%]"
            type='password' 
            label="Password"
            required
          />
          <div className=' flex flex-row items-center mt-[3em] ml-[3em] space-x-[21.2em] w-[453px] text-[.7em] font-semibold'>
            <div className=' flex flex-row items-center space-x-2'>
              <input type='checkbox' />
              <p>Remember me</p>
            </div>
            <Link to='/forgot-password'><p>Forgot password</p></Link>
          </div>
          <Button primary width="w-[50%]" addedClasses='mt-[2em]'>Login</Button>
          <div className=' flex flex-row'>
            <p>Need an account?</p>
            <Link className=' underline text-primary' to='/sign-up'>Sign Up</Link>
          </div>
      </form>
      </section>
    </>
  )
}

export default SignIn