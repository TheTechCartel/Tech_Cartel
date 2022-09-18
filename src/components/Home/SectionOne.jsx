import React from 'react'
import { Button } from '../shared'
import SectionOneImg from './Assets/learning-image.svg'

const SectionOne = () => {
  return (
    <div className=' flex flex-row space-x-[18em]'>
    <div className=' flex flex-col mt-[8.5em] '>
      <h3 className=' leading-[50px] tracking-[.15em] w-[500px] capitalize font-[600] text-[24px]'> Kickstart your tech career,</h3>
      <h3 className=' leading-[50px] tracking-[.15em] w-[450px] capitalize font-[600] text-[24px]'> the right way.</h3>
      <p className=' text-[12px] w-[400px]'>Acquire in-demand tech skills with a clear and concise roadmap.</p>
      <div className=' space-x-5 mt-[2.5em]'>
        <Button primary> <p className=' text-[12px] mx-[1em]'>Get started</p></Button>
        <Button > <p className='mx-[1em]'>Learn more</p></Button>
      </div>
    </div>
    <div>
      <img className=' w-[400px] h-[400px]' src={SectionOneImg} alt='pic of a girl studying in front of a computer'></img>
    </div>
    </div>
  )
}

export default SectionOne