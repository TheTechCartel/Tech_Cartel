import React from 'react'

const Button = ({children, primary, ...rest}) => {
  const primaryStyles = primary? "bg-primary text-white " : "bg-white text-primary"
  return (
    <button
      className={`${primaryStyles} px-12  min-h-[48px] font-[600] font-clashGrotesk rounded-[10px] text-[18px] border-[1px] border-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-300`}
    >
        {children}
    </button>
  )
}

export default Button