import React from 'react'
import { Button, Input } from '../shared'

const Step2 = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
      }
      return (
        <form onSubmit={handleSubmit} className='md:shadow-md bg-[#FFFFFF] rounded-[10px] justify-evenly h-[80%] w-3/4 max-w-[620px] min-w-[500px] flex flex-col items-center '>
          <p className=' font-bold text-[1.5em]'> Reset Password</p>
          <p className='text-[1em]'>Enter the Code sent to your mail</p>
          
          <div className="w-full flex flex-col items-center justify-center space-y-20">
              <Input required label="Code" placeholder='123456' width='w-[70%]' type='Number' />
              <Input required label="Password" placeholder='Cartoon-Duck-14-Coffee-Glvs' width='w-[70%]' type='Number' />
              <Input required label="Confirm Password" placeholder='Cartoon-Duck-14-Coffee-Glvs' width='w-[70%]' type='Number' />
              <Button primary width="w-[50%]">Reset</Button>
          </div>
        </form>
      )
}

export default Step2