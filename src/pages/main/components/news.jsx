import React from 'react'
// layout
import Container from '../../../layout/Container'
import OneRowFlexed from '../../../layout/OneRowFlexed'

//components
import { HeaderTitle } from '../../../components/typography'
import { Button } from '../../../components/Button'
import Carousel from '../../../components/carousel'

// mockData
import { NewsData } from '../../../data/mockData'

//
import { useNavigate } from 'react-router-dom'

const NewsMain = () => {
  const navigate = useNavigate()
  return (
    <Container>
        <OneRowFlexed className={'flex-col'} alignItems='start'>
            <HeaderTitle title={{en:"Company's news",ru:'Новости компании',uz:'Kompaniya yangiliklari'}}  leafing={true}/>
            <Carousel data={NewsData}/>
            <Button onClick={()=>navigate(`/news`)} btnText={{en:'All news',ru:'Все новости',uz:'Barcha yangiliklar'}}/>
        </OneRowFlexed>
    </Container>
  )
}

export default NewsMain