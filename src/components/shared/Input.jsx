import React from 'react'

const Input = ({type, ...rest}) => {
  return (
    <input className="min-w-[80%] border-[#6D6D6D] border-[1px] rounded-[5px] font-clashGrotesk h-[32px] text-sm px-4" type={type} {...rest}/>
  )
}

export default Input
