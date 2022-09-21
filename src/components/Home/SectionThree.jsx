import React from 'react'
import { Button } from '../shared'
import arrow from './Assets/arrowBullet.svg'
import sectionImg from './Assets/section3img.svg'
import SectionThreeListItem from './Reuseables/SectionThreeListItem'

const SectionThree = () => {
const listItems = [
    {arrowImg: arrow, itemText: 'Get access to valuable resources.'},
    {arrowImg: arrow, itemText: 'Choose a track and up-skill in seconds.'},
    {arrowImg: arrow, itemText: 'Learn at your own pace.'}
]
  return (
    <div className=' relative flex flex-row mt-[3em] px-20 py-[2em] bg-[#A5D4DC] text-primary'>
        <div>
            <h3 className=' font-bold'>Why <br/>Tech Cartel ?</h3>
            <p className=' mt-[2em] w-[580px] '>
            Transitioning into tech can be daunting for newbies, many are discouraged 
            due to lack of a clear and structured learning path, we are fixing this. 
            Tech Cartel is on a mission to help aspiring techies acquire <br></br> in-demand tech 
            skills they need to compete in today's labour market.
            </p>
            <h3 className=' mt-[4em] mb-[1.3em] font-bold'>How we help you ?</h3>
            <div className=' flex flex-col'>
                {
                    listItems && listItems?.map((item, index) => (
                        <SectionThreeListItem key={index} itemArrow={item.arrowImg} item={item.itemText} />
                    ))
                }
            </div>
            <div className=' mt-[2em]'><Button primary><p className=' my-[.5em] mx-[1.65em]'>Get started</p></Button></div>
        </div>
        <img className=' absolute h-[500px] w-[450px] ml-[35em]' src={sectionImg} alt='An img with two people seated in front of a computer' ></img>

    </div>
  )
}

export default SectionThree