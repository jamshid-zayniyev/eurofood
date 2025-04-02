import React from 'react'

//layout
import Container from '../../layout/Container'
import OneRowFlexed from '../../layout/OneRowFlexed'

// components
import { Description, HeaderTitle } from '../../components/typography'
import { Button } from '../../components/Button'

import { useNavigate, useParams } from 'react-router-dom'

//
import { NewsData } from '../../data/mockData'

const NewsDetail = ({data}) => {
    const navigate = useNavigate()
    const {slug} = useParams()
    const newsFullData = NewsData.find(x=>x.slug === slug)

  return (
    <Container className={'mt-4 md:mt-8'}>
        <OneRowFlexed className={'flex-col lg:flex-row'} between={true} alignItems='flex-start'>
            <div className='w-full block lg:hidden mb-5'>
                <img src={newsFullData?.image} alt="newsImg" className='w-full rounded-[15px] md:rounded-[20px]'/>
            </div>
            <div className='lg:w-[60%] w-full flex flex-col gap-y-[20px]'>
                <HeaderTitle title={newsFullData?.title} leafing={false} color='text-[black]'/>
                <Description description={newsFullData?.description}/>
                <br />
                <OneRowFlexed between={true}>
                    <Button onClick={()=>navigate('/news')} rarrow={false} btnText={{en:'All news',ru:'Все новости',uz:'Barcha yangiliklar'}}/>
                    <p className='text-darkgray  text-[16px]'>{newsFullData?.date}</p>
                </OneRowFlexed>
            </div>
            <div className='w-[35%] hidden lg:block'>
                <img src={newsFullData?.image} alt="newsImg" className='w-full rounded-[15px] md:rounded-[20px]'/>
            </div>
        </OneRowFlexed>
    </Container>
  )
}

export default NewsDetail