import React from 'react'

const SectionTwoTracks = ({trackImg, trackImgAlt, trackTitle, trackDescription}) => {
  return (
    <div className='w-[580px]'>
        <img className=' w-[580px] h-[150px]' src={trackImg} alt={trackImgAlt}></img>
        <div className=' px-2 border pt-[.5em] rounded'>
            <p className=' font-medium'>{trackTitle}</p>
            <p className=' font-normal text-sm w-[580px]'>{trackDescription}</p>
        </div>
    </div>
  )
}

export default SectionTwoTracks