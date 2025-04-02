import React from 'react'

//assest
import leaf from "../../assets/svg/leaf.svg"

// language
import Translate from '../../utils/Translate'

// layout
import OneRowFlexed from '../../layout/OneRowFlexed';

const HeaderTitle = ({title={uz:'titleUz',ru:'titleRu',en:'titleEn'}, color='text-green', leafClass='w-[40px] md:w-auto', position='justify-center',leafing=true}) => {
  return (
      <OneRowFlexed className={`${position} gap-[18px] xl:gap-[20px] 2xl:gap-[30px] z-[3]`}>
        {leafing ?
        <div>
           <img src={leaf} alt="leaf" className={`${leafClass}`} /> 
        </div>
        : ""} 
        
        <h1 className={`${color} font-[900] text-[20px] sm:text-[22px] md:text-[32px] xl:text-[38px] 2xl:text-[48px]`}>
          <Translate dictionary={title}/>
        </h1>
      </OneRowFlexed>
  )
}

export default HeaderTitle