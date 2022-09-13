import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Button, Input, Logo } from '../components/shared'

const ConfirmUser = () => {
  // eslint-disable-next-line no-unused-vars
  const [urlParam, setUrlParam] = useSearchParams()
  const navigate = useNavigate()
  const urlEmail = urlParam.get("email")
  const startData = {
    email:urlEmail,
    code:""
  }
  const [data, setData] = useState(startData)
  const [timer, setTimer] = useState(urlEmail?30:0)

  useEffect(() => {
    const count = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(count);
  }, [timer]);

  // function to handle change of input
  const handleChange = (e) =>{
    const { name, value} = e.target

    setData(prevState=>{
        return {...prevState, [name]:value}
    })
  }

  // function to handle submit
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
        Auth.confirmSignUp(data?.email?.toLowerCase(), data?.code)
        navigate("/sign-in")
    }catch(e){
        console.error(e.message)
    }
  }

  // function to resend code 
  const resendCode = async () =>{
    if(!data.email) return
    try{
      await Auth.resendSignUp(data?.email?.toLowerCase())
      setTimer(30)
    }catch(e){
      console.error(e.message)
    }
  }
  return (
    <>
      <title> Tech Cartel ~ Sign Up</title>
        
      <section className="w-screen h-screen bg-tcBG flex justify-center items-center flex-col">

        <span className="hidden lg:inline mb-10">
          <Logo/>
        </span>
        <form onSubmit={handleSubmit} className=" md:shadow-md w-3/4 max-w-[620px] h-[60%] min-h-[400px] min-w-[500px] justify-evenly bg-white  rounded-[10px] flex flex-col items-center">
          <p className=' font-bold text-[1.5em]'>Confirm Email</p>
          <Input 
            placeholder='johndoe@example.com' 
            width="w-[70%]" 
            type='email'
            label="Email"
            value={data?.email}
            onChange={handleChange}
            name="email"
            required
          />
          <Input 
            placeholder='123456'
            width="w-[70%]"
            type='number' 
            label="Code"
            value={data.code}
            onChange={handleChange}
            max="999999"
            name="code"
            required
            addedClasses="mt-[1em]"
          />
          <div className='flex w-full justify-center mt-[3em] text-[.7em] font-semibold'>
            <div className="w-[70%] flex justify-end">
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
          <Button primary width="w-[50%]">Login</Button>
          <div className=' flex flex-row'>
            <p className="mr-[1px]">New here?</p>
            <Link className=' underline text-primary' to='/sign-up'>Sign Up</Link>
          </div>
      </form>
      </section>
    </>
  )
}

export default ConfirmUser