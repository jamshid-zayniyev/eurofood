import React from 'react'
//
import CardBox from '../../../components/card-box'
import { HeaderTitle } from '../../../components/typography'
//
import { Partners } from '../../../data/mockData'

import Container from '../../../layout/Container'
import OneRowFlexed from '../../../layout/OneRowFlexed'
import { Link } from 'react-router-dom'
import Translate from '../../../utils/Translate'

const PartnersMain = () => {
  return (
    <Container className={'py-10'}>
      
        <OneRowFlexed className='relative justify-center  text-center my-5'>
            <p className='w-full max-w-[500px] h-[1px] bg-darkgray'></p>
            <h2 className='absolute text-center bg-[white] px-10 font-[600] text-[14px] md:text-[22px] italic text-red'><Translate dictionary={{en:'They trust us',ru:'Нам доверяют',uz:'Ular bizga ishonishadi'}}/></h2>
        </OneRowFlexed>

        <HeaderTitle leafing={false} title={{uz:'Bizning hamkorlarimiz',ru:'Наши партнеры',en:'Our partners'}}/>
        
        <CardBox className={'grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[20px] my-5'}>
        {Partners?.slice(0,15).map((item,index)=>(
            <Link key={index} className='hover:shadow-lg rounded-[10px]'><img className='w-full' key={index} src={item.image} alt="partner-img"/></Link>
        ))}
        </CardBox>

    </Container>
  )
}

export default PartnersMain