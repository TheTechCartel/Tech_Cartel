import React from 'react'
import { LoginForm } from '../components/Login/LoginForm'
import Meta from '../components/shared/Meta'
import { Link } from 'react-router-dom'
import { Logo } from '../components/shared'

const Login = () => {  
  return (
    <div className=' flex flex-col content-center items-center h-[100vh]'>
    <Meta
      title="Tech Cartel ~ Sign In"
      description = "Tech Cartel is a community for new developers, designers and people interested in tech. Learn, build and Connect"
    />
    <Link to='/' className=' pt-4 no-underline' ><Logo/></Link>
    <LoginForm />
    </div>
  )
}

export default Login