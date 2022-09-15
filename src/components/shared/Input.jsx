import React, { useState } from 'react'
import { Eye } from 'react-feather'

const Input = ({onChange, type, width, addedClasses, label,...rest }) => {

  const [newType, setNewType] = useState(type)
  const [error, setError] = useState()
  const handleShow = () =>{
    setNewType(prevState=>{
      if(prevState.toLowerCase()==="text")return "password"
      else return "text"
    })
  }
  const handleError = () =>{
    setError("Required!")
  }
  const handleChange = (e) =>{
    setError(null)
    onChange(e)
  }
  return (
    <div 
      className={`${width} relative h-[36px] text-[#6D6D6D] space-y-2`}>
      {(error || label  ) && <div>
        {label && (
          <div>
            {label}

          </div>
        )}
        {error &&<span className="absolute top-0 right-0 text-error">{error}</span>}
      </div>}
      <input 
          className={`${addedClasses} w-full ${error ? "border-error":"border-[#6D6D6D]"} border-[1px] rounded-[5px]  text-lg font-extralight focus:outline-none h-full text-[#6D6D6D] px-4`} 
          type={newType} 
          onInvalid={handleError}
          onChange={handleChange}
          {...rest}
      />
      {type=== "password" &&
        (<div 
          className=" flex absolute top-[36px] right-[10px] h-fit cursor-pointer"
          onClick={handleShow}
        >
          <Eye size={10}/>
        </div>)}
    </div>
  )
}

export default Input