import React, { useState } from 'react'
import { Step1, Step2 } from '../components/ForgotPassword'
import {  Logo } from '../components/shared'

const ForgotPassword = () => {
  const freshData = {
    email:"",
    code:"",
    password:"",
    confirmPassword:""
  }
  const [showStepTwo, setShowStepTwo] = useState(false)
  const [data, setData] = useState(freshData)

  const handleChange = (e) =>{
    const { name, value } = e.target 
    setData(prevState=>{
      return {...prevState, [name]:value}
    })
  }
  return (
    <>
      <title>Tech Cartel ~ Forgot Password ~ 1</title>
      <div className=' flex flex-col justify-center space-y-4 items-center h-screen'>
    
        <Logo/>
        {
          !showStepTwo ? 
            <Step1 data={data} handleChange={handleChange} setShowStepTwo={setShowStepTwo}/> 
          : 
            <Step2 data={data} handleChange={handleChange} setShowStepTwo={setShowStepTwo}/>
        }
      </div>
    </>
    
  )
}
export default ForgotPassword