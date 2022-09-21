import React from 'react'
import trackWd from './Assets/trackWd.png'
import trackPd from './Assets/trackPd.png'
import SectionTwoTracks from './Reuseables/SectionTwoTracks'

const SectionTwo = () => {
    const trackArr = [
        {trackImg: trackWd, imgAlt: 'An image with codes init', trackName: 'Web Development', trackDesc: "Master how to develop meaningful and interactive websites and web applications that live on the WWW (World Wide Web). Choose either frontend, backend or fullstack." },
        {trackImg: trackPd, imgAlt: 'A design type image', trackName: 'Product Design (UI/UX)', trackDesc: "Master the process of imagining, creating, and iterating digital products that solve users' problems or address specific needs in a given market." }
    ]
  return (
    <div className=' flex flex-col'>
        <h4 className=' text-primary font-semibold text-[20px]'>Tracks</h4>
        <div className=' flex flex-row space-x-[30px] mt-[2em]'>
        {
            trackArr && trackArr?.map((item, index) => (
                <SectionTwoTracks key={index} trackImg ={item.trackImg} trackImgAlt={item.imgAlt} trackTitle={item.trackName} trackDescription ={item.trackDesc}/>
            ))
        }
        </div>
    </div>
  )
}

export default SectionTwo