import React, {  useState } from 'react'
import { Button, Input, Logo } from '../components/shared'
import Select from '../components/shared/Select'
import{ Auth} from "aws-amplify"
import countries from "countries-list"
import { Link, useNavigate} from 'react-router-dom'


const SignUp = () => {
  const freshData = {
    email:"",
    name:"",
    location:"",
    password:"",
    confirmPassword:""
  }
  const [inputData, setInputData] = useState({...freshData})

  const options = Object.values(countries?.countries)
  const data = options.map(option=>` ${option?.emoji} ${option?.name}`)

  const navigate = useNavigate();

  const handleChange = (e) =>{
    const { name, value} = e.target
    setInputData(prevState=>{
      const newArr = {...prevState, [name]: value}
      return {...newArr}
    })
  }
  const  handleSignIn = async (e)=>{
    e.preventDefault()
    if(inputData?.password !== inputData?.confirmPassword){
      alert("Passwords Must be the same")
    }
    try {
      const { user } = await Auth.signUp({
          username: inputData?.email,
          password: inputData?.password,
          attributes: {
              email:inputData?.email,
              address: inputData?.location
          } 
      });
      
      navigate(`/sign-in?email=${inputData?.email}`)
  } catch (error) {
      console.log('error signing up:', error);
  }

  }
  return (
    <>
      <title> Tech Cartel ~ Sign Up</title>

      
      <section className="w-screen h-screen bg-tcBG flex justify-center items-center flex-col">

        <span className="hidden lg:inline mb-10">
          <Logo/>
        </span>
        <form 
          className=" md:shadow-md w-3/4 max-w-[620px] h-screen lg:h-[700px] min-w-[500px] justify-evenly bg-white  rounded-[10px] flex flex-col items-center"
          onSubmit={handleSignIn}
        >
            <span className="lg:hidden">
              <Logo/>
            </span>
            <Input 
              label="Full Name"
              placeholder="Enter your First and Last name"
              width="w-[70%]"
              value={inputData?.name}
              onChange={handleChange}
              name="name"
              required
            />
            <Input 
              label="Email"
              type="email"
              placeholder="example@techcartel.com"
              width="w-[70%]"
              value={inputData?.email}
              onChange={handleChange}
              name="email"
              required
            />
            <Select
              width="w-[70%]"
              defaultOption="Enter Location"  
              options={data}
              label="Choose your Country"
              value={inputData?.location}
              onChange={handleChange}
              name="location"
              required
            />
            <Input 
              width="w-[70%]"
              placeholder="Enter your Password"
              type="password"
              label="Password"
              value={inputData?.password}
              onChange={handleChange}
              name="password"
              required
            />
            <Input 
              width="w-[70%]"
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
            <span>
              Already have an account?
              <Link to="/sign-in" className="text-primary underline">Log in</Link>
            </span>
        </form>

      </section>

    </>
  )
}

export default SignUp