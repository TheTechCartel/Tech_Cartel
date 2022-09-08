import React, { useState } from 'react'
import { Eye } from 'react-feather'

const Input = ({type, width, addedClasses,...rest }) => {
  const [newType, setNewType] = useState(type)
  const handleShow = () =>{
    setNewType(prevState=>{
      if(prevState.toLowerCase()==="text")return "password"
      return "text"
    })
  }
  return (
    <div className={` bg-red-500 ${width} relative h-[32px]`}>
      <input 
          className={`${width} ${addedClasses} relative border-[#6D6D6D] border-[1px] rounded-[5px] font-clashGrotesk  text-sm focus:outline-none h-full text-[#6D6D6D] px-4`} 
          type={newType} 
          {...rest}
      />
      {type=== "password" &&
        (<div 
          className=" flex items-center top-0 absolute -right-[20px] justify-center h-full cursor-pointer text-[#6D6D6D]"
          onClick={handleShow}
        >
          <Eye size={10}/>
        </div>)}
    </div>
  )
}

export default Input
