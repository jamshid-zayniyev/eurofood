import React from 'react'

// typography
import { HeaderTitle } from '../../../components/typography'

// mockData
import { AbouttimelineData } from '../../../data/mockData'
import DefaultTimeline from './DefaultTimeline'
import MobileTimeline from './MobileTimeline'

const AboutTimeline = () => {
  
  return (
    <div>
        <HeaderTitle title={{ru:'История',en:'Story',uz:'Tarix'}} leafing={false} position='justify-start mt-8 xl:my-16 2xl:my-24'/>
        <div className="py-4">
        <div className="relative">
        <div className="hidden md:block absolute w-1 bg-[red] h-full left-1/2 transform  -translate-x-1/2"></div>
        {AbouttimelineData.map((event, index) => (
          <DefaultTimeline key={index} event={event} index={index}/>
        ))}
        {AbouttimelineData.map((event, index) => (
          <MobileTimeline key={index} event={event} index={index}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default AboutTimeline