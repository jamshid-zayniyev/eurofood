import React from 'react'
import { Description, HeaderTitle } from '../../../components/typography'
import { useParams } from 'react-router-dom'
import { VacancyData } from '../../../data/mockData'
import Translate from '../../../utils/Translate'

const Requirements = ({data}) => {

  const {slug} = useParams()

  const vacancyData = VacancyData.find(x=>x.slug === slug)

  return (
    <div>
      <HeaderTitle title={vacancyData?.title} leafing={false} position='start'/>
      <Description classname='text-[20px] md:text-[24px] text-red' description={{ru:'З/п и дополнительные условия обсуждаются на собеседовании.',en:'Salary and additional conditions are discussed at the interview.',uz:"Suhbatda ish haqi va qo'shimcha shartlar muhokama qilinadi."}}/>
      {/* <div className='mt-[20px] md:mt-[40px]'>
        <Description classname='text-[20px] mb-[10px] md:mb-[15px] md:text-[24px] text-darkgray' description={{ru:'Должностные обязанности:',en:'Job responsibilities:',uz:"Lavozim vazifalari:"}}/>
        {
          VacancyData[0]?.comoffer.map(item=>(
            <p>• <Translate dictionary={item}/></p>
          ))
        }
      </div> */}
      <div className='mt-[20px] md:mt-[40px]'>
        <Description classname='text-[20px] mb-[10px] md:mb-[15px] md:text-[24px] text-darkgray' description={{ru:'Требования:',en:'Requirements:',uz:"Talablar:"}}/>
        {
          VacancyData[0]?.requirements.map(item=>(
            <p className='my-2'>• <Translate dictionary={item}/></p>
          ))
        }
      </div>
      {/* <div className='mt-[20px] md:mt-[40px]'>
        <Description classname='text-[20px] mb-[10px] md:mb-[15px] md:text-[24px] text-darkgray' description={{ru:'Персональные требования:',en:'Personal requirements:',uz:"Shaxsiy talablar:"}}/>
        {
          VacancyData[0]?.comoffer.map(item=>(
            <p>• <Translate dictionary={item}/></p>
          ))
        }
      </div> */}
      <div className='mt-[20px] md:mt-[40px]'>
        <Description classname='text-[20px] mb-[10px] md:mb-[15px] md:text-[24px] text-darkgray' description={{ru:'Условия работы:',en:'Working conditions:',uz:"Ish sharoitlari:"}}/>
        {
          VacancyData[0]?.comoffer.map(item=>(
            <p className='my-2'>• <Translate dictionary={item}/></p>
          ))
        }
      </div>
    </div>
  )
}

export default Requirements