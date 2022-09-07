import React from 'react'

const Input = ({type, width, addedClasses,...rest }) => {
  const addeStyles ={
    width: `w-${width}`,
    others: addedClasses
  }
  return (
    <input 
        className={`min-w-[100px] ${addeStyles.width} ${addeStyles.addedClasses} border-[#6D6D6D] border-[1px] rounded-[5px] font-clashGrotesk h-[32px] text-sm px-4 focus:outline-none`} 
        type={type} 
        {...rest}
    />
  )
}

export default Input
