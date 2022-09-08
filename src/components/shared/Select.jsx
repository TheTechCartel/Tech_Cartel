import React, { useState } from 'react'

const Select = ({onChange, label, defaultOption, options, width, addedClasses, ...rest}) => {
  const [error, setError] = useState()
  const handleChange = (e) =>{
    setError()
    onChange(e)
  }
  const handleError = () =>{
    setError("Required!")
  }
  return (
    <div className={`${width}  relative h-[36px] text-[#6D6D6D] space-y-2`}>
        <div>
            {label && (
                <div>
                {label}
                </div>
            )}
            <span className="absolute right-0 top-0 text-error">{error}</span>
        </div>
        
        <select
            className={`${addedClasses} w-full relative ${error? "border-error" : "border-[#6D6D6D]"} border-[1px] rounded-[5px] font-clashGrotesk  text-lg font-extralight focus:outline-none h-[36px] text-[#6D6D6D] px-4`}
            onChange={handleChange}
            onInvalid={handleError}
            {...rest}
        >
            <option selected disabled value="">{defaultOption}</option>
            {
                options?.map((item, index)=> {
                    return <option key={index}>{item}</option>
                })
            }
        </select>
    </div>
  )
}

export default Select