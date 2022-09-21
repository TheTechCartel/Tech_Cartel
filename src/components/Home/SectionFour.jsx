import React from 'react'
import { Button } from '../shared'
import buttonArrow from './Assets/buttonArrow.svg'

const SectionFour = () => {
  return (
    <div className=' flex flex-col items-center content-center my-[3em] bg-[#D7E2E9]'>
        <h1 className=' font-medium tracking-wider my-[1em] text-[3em]'>Would you like to volunteer?</h1>
        <p>Work with us</p>
        <div className=' my-[2.5em]'>
            <Button width=' w-[12em] h-[3em]'>
                <div className=' flex flex-row space-x-[3em] px-[1.7em]'>
                    <p className=' text-[12px]'>Apply to join</p>
                    <img src={buttonArrow} alt='arrow for button'></img>
                </div>
            </Button>
        </div>
    </div>
  )
}

export default SectionFour