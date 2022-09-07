import React from 'react'

const Button = ({children, primary, ...rest}) => {
  const primaryStyles = primary? "bg-[#415A80] text-white " : "bg-white text-[#415A80]"
  return (
    <button
      className={`${primaryStyles} px-12  min-h-[48px] font-[600] font-clashGrotesk rounded-[10px] text-[18px] border-[1px] border-[#415A80] cursor-pointer hover:bg-[#415A80] hover:text-white transition-all duration-300`}
    >
        {children}
    </button>
  )
}

export default Button