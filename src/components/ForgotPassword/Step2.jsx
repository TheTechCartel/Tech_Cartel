import { Auth } from 'aws-amplify'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../shared'

const Step2 = ({data, handleChange, setShowStepTwo}) => {
    const navigate = useNavigate()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(data?.password !== data?.confirmPassword) return
        try{
          await Auth.forgotPasswordSubmit(data?.email?.toLowerCase(), data?.code, data?.password)
          navigate("/sign-in")
        }
        catch(e){
          console.error(e.message)
        }
      }
      return (
        <form onSubmit={handleSubmit} className='md:shadow-md bg-[#FFFFFF] rounded-[10px] justify-evenly h-[80%] w-3/4 max-w-[620px] min-w-[500px] flex flex-col items-center '>
          <p className=' font-bold text-[1.5em]'> Reset Password</p>
          <p className='text-[1em]'>Enter the Code sent to your mail</p>
          
          <div className="w-full flex flex-col items-center justify-center space-y-20">
              <Input 
                required 
                label="Code" 
                placeholder='123456' 
                width='w-[70%]'
                value={data?.code}
                name="code"
                onChange={handleChange}
                type='Number' 
              />
              <Input 
                required 
                label="Password" 
                placeholder='Cartoon-Duck-14-Coffee-Glvs' 
                width='w-[70%]'
                value={data?.password}
                name="password"
                onChange={handleChange}
                type='password' 
              />
              <Input 
                required 
                label="Confirm Password" 
                placeholder='Cartoon-Duck-14-Coffee-Glvs' 
                width='w-[70%]'
                value={data?.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                type='password' 
              />
              <div className="flex flex-col items-center space-y-5 w-full justify-center">
                <div className='flex w-full justify-center text-[.7em] font-semibold'>
                  <div onClick={()=>setShowStepTwo(false)} className="w-[70%] flex justify-end cursor-pointer">Go Back</div>
                </div>
                <Button primary width="w-[50%]">Reset</Button>
              </div>
          </div>
        </form>
      )
}

export default Step2