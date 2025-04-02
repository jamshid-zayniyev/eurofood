import React from 'react'

//
import Container from '../../layout/Container'

//
import { HeaderTitle } from '../../components/typography'

//
import Translate from '../../utils/Translate'
//
import CardBox from '../../components/card-box'
import { NewsCard } from '../../components/card'

//
import { NewsData } from '../../data/mockData'



const News = () => {

    const NewsTitleText = {ru:'Новости',en:'News',uz:"Yangiliklar"}
    const NewsDescriptionText = {ru:'Здесь представлены последние новости о нашей компании и специальные предложения.',en:'Here you can find the latest news about our company and special offers.',uz:"Bu yerda siz kompaniyamiz haqidagi so'nggi yangiliklar va maxsus takliflarni topishingiz mumkin."}

  return (
    <Container>
        <HeaderTitle title={NewsTitleText} leafing={false} position='justify-start'/>
        <p className='my-[35px] 2xl:my-[50px] text-[14px] md:text-[16px] 2xl:text-[18px] font-bold'><Translate dictionary={NewsDescriptionText}/></p>

        {/*  */}
        <CardBox className={'gap-x-[20px] gap-y-[40px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'}>
              {NewsData?.map((item,index)=>(
                  <NewsCard key={index} data={item} lm={true}/>
              ))}
        </CardBox>

    </Container>
  )
}

export default News