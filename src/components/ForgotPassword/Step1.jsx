import { Auth } from 'aws-amplify'
import React from 'react'
import { Button, Input } from '../shared'

const Step1 = ({ data, setShowStepTwo, handleChange}) => {
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      await Auth.forgotPassword(data?.email)
      setShowStepTwo(true)
    }
    catch(e){
      console.error(e?.message)
    }
  }
  return (
    <form onSubmit={handleSubmit} className='md:shadow-md bg-[#FFFFFF] rounded-[10px] justify-evenly h-[50%] w-3/4 max-w-[620px] min-w-[500px] flex flex-col items-center '>
      <p className=' font-bold text-[1.5em]'> Reset Password</p>
      <p className='text-[1em]'>Reset your password by providing your email address</p>
      
      <div className="w-full flex flex-col items-center justify-center space-y-20">
          <Input 
            required 
            label="Email" 
            placeholder="johndoe@example.com" 
            width="w-[70%]" 
            type="email" 
            name="email"
            onChange={handleChange}
            value={data?.email}
          />
          <Button primary width="w-[50%]">Next</Button>
      </div>
    </form>
  )
}

export default Step1