import React from 'react'

const Select = ({label, defaultOption, options, width, addedClasses, ...rest}) => {
  return (
    <div className={`${width}  relative h-[36px] text-[#6D6D6D] space-y-2`}>
        {label && (
            <div>
            {label}
            </div>
        )}
        
        <select
            className={`${addedClasses} w-full relative border-[#6D6D6D] border-[1px] rounded-[5px] font-clashGrotesk  text-lg font-extralight focus:outline-none h-[36px] text-[#6D6D6D] px-4`}
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