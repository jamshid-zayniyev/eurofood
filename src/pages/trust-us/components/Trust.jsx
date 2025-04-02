import React from 'react'
import { HeaderTitle } from '../../../components/typography'
import CardBox from '../../../components/card-box'
import { Partners } from '../../../data/mockData'
import { Link } from 'react-router-dom'

const Trust = () => {
  return (
    <div>
            <HeaderTitle title={{en:'Trust',ru:'Доверяют',uz:'Ishonch'}} position='start'/>
            <CardBox className={'grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[20px] my-5'}>
            {Partners?.map((item,index)=>(
                <Link key={index} className='hover:shadow-lg rounded-[10px]'><img className='w-full' key={index} src={item.image} alt="partner-img"/></Link>
            ))}
            </CardBox>
        </div>
  )
}

export default Trust