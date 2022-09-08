import React from 'react'
import { ImageSection } from '../components/ComingSoon/ImageSection'
import { TextSection } from '../components/ComingSoon/TextSection'

export const ComingSoon = () => {
  return (
    <div className='flex flex-row space-x-[26.8em] [3me] pt-32 mx-20 mb-[10em]'>
        <TextSection />
        <ImageSection />
    </div>
  )
}

