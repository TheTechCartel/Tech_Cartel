import { Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Input } from '../shared'

const Step2 = ({data, handleChange, setShowStepTwo}) => {
  const navigate = useNavigate()
  const [timer, setTimer] = useState(30)
  
  // function to reset the password 
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(data?.password !== data?.confirmPassword) return
    try{
      await Auth.forgotPasswordSubmit(data?.email?.toLowerCase(), data?.code, data?.password)
      toast.success("Password Changed")
      setTimeout(()=>navigate("/sign-in"),2000)
    }
    catch(e){
      toast.error(e.message)
    }
  }

  // function to resend code
  const resendCode = async () =>{
    try{
      await Auth.forgotPassword(data?.email?.toLowerCase())
      toast.success("Confirmation Code sent")
      setTimer(30)
    }catch(e){
      toast.error(e.message)
    }
  }

  // useEffect for countdown
  useEffect(() => {
    const count = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(count);
  }, [timer]);

  
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
      </div>
        <div className="w-full flex flex-col mt-10">
          <div className="flex flex-col items-center space-y-5 w-full justify-center">
            <div className='flex w-full justify-center text-[.7em] font-semibold'>
              <div className="w-[70%] flex justify-between ">
                <p className="cursor-pointer" onClick={()=>setShowStepTwo(false)}>Go Back</p>
                {
                timer<1 ? 
                  <p 
                    onClick={resendCode}
                    className="cursor-pointer hover:scale-105 active:scale-90 transition-all duration-300"
                  >
                    Resend Code
                  </p>
                :
                  <p>{timer}</p>
              }
              </div>
            </div>
            <Button primary width="w-[50%]">Reset</Button>
          </div>
      </div>
    </form>
  )
}

export default Step2