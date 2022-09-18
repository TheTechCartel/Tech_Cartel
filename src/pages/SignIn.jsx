import { Auth } from 'aws-amplify'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Logo } from '../components/shared'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const userData = {
    email:"",
    password:""
  }
  const [data, setData] = useState(userData)

  const handleChange = (e) => {
    const {name, value} = e.target

    setData(prevState=>{
      return {...prevState, [name]:value}
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      // eslint-disable-next-line no-unused-vars
      const{user} = await Auth.signIn(data?.email, data?.password)
      toast.success("Successfully LoggedIn")
    }
    catch(e){
      toast.error(e.message)
    }
  }
  return (
    <>
      <title> Tech Cartel ~ Sign Up</title>

        
      <section onSubmit={handleSubmit} className="w-screen h-screen bg-tcBG flex justify-center items-center flex-col">

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
            name="email"
            value={data?.email}
            onChange={handleChange}
            required
          />
          <Input 
            placeholder='Enter your password'
            addedClasses="mt-10"
            width="w-[70%]"
            type='password' 
            label="Password"
            name="password"
            onChange={handleChange}
            value={data?.password}
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