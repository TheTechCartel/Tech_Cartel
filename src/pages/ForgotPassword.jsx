import React from 'react'
import { Step1 } from '../components/ForgotPassword'
import {  Logo } from '../components/shared'

const ForgotPassword = () => {
   

  return (
    <>
      <title>Tech Cartel ~ Forgot Password ~ 1</title>
      <div className=' flex flex-col justify-center space-y-4 items-center h-screen'>
    
        <Logo/>
        <Step1/>
      </div>
    </>
    
  )
}
export default ForgotPassword