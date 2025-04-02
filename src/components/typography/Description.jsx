import React from 'react'
import Translate from '../../utils/Translate'

const Description = ({classname='',description}) => {
  return (
    <div className={`text-[12px] md:text-[14px] 2xl:text-[16px] ${classname}`}>
        <Translate dictionary={description}/>
    </div>
  )
}

export default Description