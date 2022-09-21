import React from 'react'

const SectionThreeListItem = ({itemArrow, itemArrowAlt = 'list arrow bullet', item}) => {
  return (
    <div className=' flex flex-row space-x-2 mt-[1em]'>
        <img src={itemArrow} alt={itemArrowAlt}></img>
        <p>{item}</p>
    </div>
  )
}

export default SectionThreeListItem