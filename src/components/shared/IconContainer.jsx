import React from 'react'

const IconContainer = ({children, contained}) => {
  const containedStyles = contained && "bg-secondary rounded-full w-[30px] h-[30px] flex justify-center text-primary items-center"
  return (
    <span className={`w-[1.8rem] h-[1.8rem] ${containedStyles}`}>
        {children}
    </span>
  )
}

export default IconContainer