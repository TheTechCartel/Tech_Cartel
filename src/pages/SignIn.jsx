import React from 'react'
import { Button, Input, Logo } from '../components/shared'
import Select from '../components/shared/Select'

const SignIn = () => {
  const options = ["Abuja", "Lagos", "New York"]
  return (
    <>
      <title> Tech Cartel ~ Sign Up</title>

      
      <section className="w-screen h-screen bg-tcBG flex justify-center items-center flex-col">

        <span className="hidden lg:inline mb-10">
          <Logo showLarge/>
        </span>
        <div 
          className="w-3/4 max-w-[620px] h-screen lg:h-[700px] min-w-[500px] justify-evenly bg-white  rounded-[10px] flex flex-col items-center">
            <span><Logo/></span>
            <Input 
              label="Full Name"
              placeholder="Enter your First and Last name"
              width="w-[70%]"
            />
            <Input 
              label="Email"
              placeholder="example@techcartel.com"
              width="w-[70%]"
            />
            <Select
              width="w-[70%]"
              defaultOption="Enter Location"  
              options={options}
              label="Choose your Country"
            />
            <Input 
              width="w-[70%]"
              placeholder="Enter your Password"
              type="password"
              label="Password"
            />

            <Input 
              width="w-[70%]"
              placeholder="Confirm your Password"
              type="password"
              label="Confirm Password"
            />
            <Button 
              primary
              width="w-[50%]"
            >
              Sign Up
            </Button>
            <span>
              Already have an account?
              <span className="text-primary underline"> Log in</span>
            </span>
        </div>

      </section>

    </>
  )
}

export default SignIn