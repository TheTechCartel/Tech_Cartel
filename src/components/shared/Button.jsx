import React from 'react'

const Button = ({width, children, primary, ...rest}) => {
  const primaryStyles = primary? "bg-primary text-white " : "bg-white text-primary"
  return (
    <button
      className={`${primaryStyles} ${width}  min-h-[40px] font-[400] font-clashGrotesk rounded-[10px] text-[18px] border-[1px] border-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-300`}
    >
        {children}
    </button>
  )
}

export default Button