import React from 'react'
//
import { Description, HeaderTitle } from '../../../components/typography'

const DefaultTimeline = ({event,index}) => {
  return (
    <div key={index} className={`hidden mb-8 md:flex justify-between items-center w-full ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
            <div className="w-5/12">
              <img src={event.image} alt={`Event ${index}`} className="w-full h-auto  rounded-lg" />
            </div>
            <div className="w-5/12 p-4 relative">
              <HeaderTitle title={event.year} position={`mb-[10px] xl:mb-[20px] 2xl:mb-[30px] ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}/>
              <Description description={event.description} classname={`md:line-clamp-[8] ${index % 2 === 0 ? 'text-left' : 'text-right'}`}/>
            </div>
            
            {/* Circle on the vertical line */}
            <div className="absolute w-4 h-4 bg-[red] rounded-full left-1/2 transform -translate-x-1/2"></div>
          </div>
  )
}

export default DefaultTimeline