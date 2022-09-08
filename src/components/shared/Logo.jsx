import React from 'react'

const Logo = ({showSmall}) => {
  const smScreen = showSmall ? "lg:inline" : "lg:hidden"
  const lgScreen = showSmall ? "hidden" : "lg:block hidden"

  return (
    <>
        <span className={`${lgScreen} text-[24px] text-primary font-[300]`}>
            the
            <span className="font-extrabold">TechCartel</span>
        </span>
        <span className={`${smScreen} relative text-[24px] text-primary font-extrabold`}>
            <span>T</span>
            <span className="absolute left-[40%]">C</span>
        </span>
        
    </>
  )
}

export default Logo