import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({showSmall, secondary}) => {
  const smScreen = showSmall ? "" : "lg:hidden"
  const lgScreen = showSmall ? "hidden" : "lg:block hidden"
  // Location could be either navbar or footer
  const logoTextColor = !secondary ? 'text-primary':'text-secondary'

  return (
    <Link to="/" className="no-underline">
        <h1 className={`${lgScreen} text-[24px] ${logoTextColor} font-[300]`}>
            the
            <span className="font-extrabold">TechCartel</span>
        </h1>
        <h1 className={`${smScreen} relative text-[24px] ${logoTextColor} font-extrabold`}>
            <span>T</span>
            <span className="absolute left-[40%]">C</span>
        </h1>
    </Link>
  )
}

export default Logo