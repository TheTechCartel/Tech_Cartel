import React from 'react'

const Logo = ({showSmall, location}) => {
  const smScreen = showSmall ? "" : "lg:hidden"
  const lgScreen = showSmall ? "hidden" : "lg:block hidden"
  // Location could be either navbar or footer
  const logoTextColor = location !== 'footer' ? 'text-primary':'text-secondary'

  return (
    <>
        <span className={`${lgScreen} text-[24px] ${logoTextColor} font-[300]`}>
            the
            <span className="font-extrabold">TechCartel</span>
        </span>
        <span className={`${smScreen} relative text-[24px] ${logoTextColor} font-extrabold`}>
            <span>T</span>
            <span className="absolute left-[40%]">C</span>
        </span>
    </>
  )
}

export default Logo