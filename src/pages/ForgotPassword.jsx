import React from 'react'
import {Link } from 'react-router-dom'
import { Logo,Meta } from '../components/shared'
import {ForgotPasswordForm} from '../components/ForgotPassword/ForgotPasswordForm'

const ForgotPassword = () => {
  return (
    <div className=' flex flex-col content-center items-center h-[100vh]'>
    
      title="Tech Cartel ~ Forgot Password"
      description = "Tech Cartel is a community for new developers, designers and people interested in tech. Learn, build and Connect"
    
    <Link to='/' className=' pt-4 no-underline' ><Logo/></Link>
    <ForgotPasswordForm />
    </div>

      
  
  )
}

export default ForgotPassword;