import React, {  useState } from 'react'
import { Button, Input, Logo } from '../components/shared'
import Select from '../components/shared/Select'
import { Link } from 'react-router-dom'
import{ Auth} from "aws-amplify"
import countries from "countries-list"


const SignUp = () => {
  const freshData = {
    email:"",
    name:"",
    location:"",
    password:"",
    confirmPassword:""
  }
  const options = Object.values(countries?.countries)
  const data = options.map(option=>` ${option?.emoji} ${option?.name}`)
  const [inputData, setInputData] = useState({...freshData})

  const handleChange = (e) =>{
    const { name, value} = e.target
    setInputData(prevState=>{
      const newArr = {...prevState, [name]: value}
      return {...newArr}
    })
  }
  const  handleSignUp = async (e)=>{
    e.preventDefault()
    if(inputData?.password !== inputData?.confirmPassword) return false
    try {
      const { user } = await Auth.signUp({
          username: inputData?.email,
          password: inputData?.password,
          attributes: {
              email:inputData?.email,
              address: inputData?.location
          } 
         
      });
      console.log(user);
  } catch (error) {
      console.log('error signing up:', error);
  }

  }
  return (
    <>
      <title> Tech Cartel ~ Sign Up</title>

      
      <section className="w-screen h-screen bg-tcBG flex justify-center items-center flex-col">

        <div className="hidden lg:inline mb-10">
          <Link className=' no-underline' to='/'><Logo/></Link>
        </div>
        <form 
          className="w-3/4 max-w-[620px] pl-[-.5em] h-screen lg:h-[700px] min-w-[500px] justify-evenly bg-white  rounded-[10px] flex flex-col items-center"
          onSubmit={handleSignUp}
        >
            <span className="lg:hidden">
              <Link className=' no-underline' to='/'><Logo/></Link>
            </span>
            <Input              
              label="Full Name"
              placeholder="Enter your First and Last name"
              width="w-[426px]"
              value={inputData?.name}
              onChange={handleChange}
              name="name"
              required
            />
            <Input 
              label="Email"
              type="email"
              placeholder="example@techcartel.com"
              width="w-[426px]"
              value={inputData?.email}
              onChange={handleChange}
              name="email"
              required
            />
            <Select
              width="w-[426px]"
              defaultOption="Enter Location"  
              options={data}
              label="Choose your Country"
              value={inputData?.location}
              onChange={handleChange}
              name="location"
              required
            />
            <Input 
              width="w-[426px]"
              placeholder="Enter your Password"
              type="password"
              label="Password"
              value={inputData?.password}
              onChange={handleChange}
              name="password"
              required
            />
            <Input 
              width="w-[426px]"
              placeholder="Confirm your Password"
              type="password"
              label="Confirm Password"
              value={inputData?.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              required
            />
            <Button 
              primary
              width="w-[50%]"
            >
              Sign Up
            </Button>
            <p>
              Already have an account?
              <span className="text-primary underline"><Link to='/login'>Log in</Link></span>
            </p>
        </form>

      </section>

    </>
  )
}

export default SignUp