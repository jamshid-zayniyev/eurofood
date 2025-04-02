import React from 'react'
import { HeaderTitle } from '../../../components/typography'
import VacancyCard from '../../../components/card/VacancyCard'
import CardBox from '../../../components/card-box'
import { VacancyData } from '../../../data/mockData'

const VacancyType = () => {
  return (
    <div>
        <HeaderTitle title={{ru:'Вакансии',en:'Vacancies',uz:"Ish o'rinlari"}} position='start'/>
        <CardBox className={'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-[20px] mt-[20px] xl:mt-[30px] 2xl:mt-[40px]'}>
            {
                VacancyData.map((vacancy,index)=>(
                    <VacancyCard data={vacancy} key={index}/>
                ))
            }
        </CardBox>
    </div>
  )
}

export default VacancyType