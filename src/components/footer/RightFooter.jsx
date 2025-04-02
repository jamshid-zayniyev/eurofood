import React from 'react'
import OneRowFlexed from '../../layout/OneRowFlexed'
import { Link } from 'react-router-dom'

import halal_1 from "../../assets/images/footer/halal_1.png"
import halal_2 from "../../assets/images/footer/halal_2.png"
import halal_3 from "../../assets/images/footer/halal_3.png"
import halal_4 from "../../assets/images/footer/halal_4.png"
import halal_5 from "../../assets/images/footer/halal_5.png"
import Container from '../../layout/Container'

import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";
import Translate from '../../utils/Translate'
import { FooterNavFirst, FooterNavSecond, FooterNavThird } from '../../data/mockData'


const RightFooter = () => {
  return (
    <Container className={'w-full p-0 py-5 justify-between gap-[40px] 2xl:gap-[60px]'}>
      <OneRowFlexed  className={'w-full justify-between flex-col md:flex-row'} between={true} alignItems='flex-start'>
        
        <OneRowFlexed className={'mt-8 md:mt-0 flex-col gap-[8px] md:gap-[18px] 2xl:gap-[20px]'} alignItems='flex-start'>
          <h1 className='text-[16px] xl:text-[18px] 2xl:text-[20px] uppercase font-[900]'><Translate dictionary={{en:"About company",ru:"О компании",uz:"Kompaniya haqida"}}/></h1>
          {FooterNavFirst.map(item=>(
            <Link key={item.id} className='text-[14px] xl:text-[16px] text-darkgray hover:text-red'><Translate dictionary={item.text}/></Link>
          ))}         
        </OneRowFlexed>

        <OneRowFlexed className={'mt-8 md:mt-0 flex-col gap-[8px] md:gap-[18px] 2xl:gap-[20px]'} alignItems='flex-start'>
          <h1 className='text-[16px] xl:text-[18px] 2xl:text-[20px] uppercase font-[900]'><Translate dictionary={{en:"Production",ru:"Продукция",uz:"Mahsulotlar"}}/></h1>
          {FooterNavSecond.map(item=>(
            <Link key={item.id} className='text-[14px] xl:text-[16px] text-darkgray hover:text-red'><Translate dictionary={item.text}/></Link>
          ))}
        </OneRowFlexed>
        
        <OneRowFlexed className={'mt-5 lg:flex-col gap-[10px] 2xl:gap-[20px] hidden md:flex flex-col'} alignItems='flex-start'>
          {FooterNavThird.map((item,index)=>(
            <h1 key={index} className='font-bold text-[14px] xl:text-[16px]'><Link><Translate dictionary={item.text}/></Link></h1>
          ))}
        </OneRowFlexed>

      </OneRowFlexed>
      <OneRowFlexed between={true} className={'flex-col lg:flex-row'} alignItems='flex-start'>
        <OneRowFlexed className={'gap-[10px] 2xl:gap-[20px]'}>
          <div className='text-center'><img src={halal_1} alt="halal_1" className='w-[50px] 2xl:w-full'/><p className='text-[13px]'><Translate dictionary={{en:'Soon',ru:'Скоро',uz:'Tez orada'}}/></p></div>
          <div className='text-center'><img src={halal_2} alt="halal_2" className='w-[50px] 2xl:w-full'/><p className='text-[14px]'><Translate dictionary={{en:'Soon',ru:'Скоро',uz:'Tez orada'}}/></p></div>
          <div className='text-center'><img src={halal_3} alt="halal_3" className='w-[50px] 2xl:w-full'/><p className='text-[14px]'><Translate dictionary={{en:'Soon',ru:'Скоро',uz:'Tez orada'}}/></p></div>
          <div className='text-center'><img src={halal_4} alt="halal_4" className='w-[50px] 2xl:w-full'/><p className='text-[14px]'><Translate dictionary={{en:'Soon',ru:'Скоро',uz:'Tez orada'}}/></p></div>
          <div className='text-center'><img src={halal_5} alt="halal_5" className='w-[50px] 2xl:w-full'/><p className='text-[14px]'><Translate dictionary={{en:'Soon',ru:'Скоро',uz:'Tez orada'}}/></p></div>
        </OneRowFlexed>
        <OneRowFlexed className={'flex-col mt-2 md:mt-0'}>
          <h1 className='font-bold mb-2'><Translate dictionary={{ru:"Наши соц.сети ",uz:"Bizning tarmoqlar",en:"Our social.net"}}/></h1>
          <OneRowFlexed className={'gap-[12px] 2xl:gap-[16px]'}>
            <Link className='flex justify-center items-center w-[35px] h-[35px] bg-red hover:opacity-[1] rounded-full opacity-[0.5] text-[white]'><FaFacebookF/></Link>
            <Link className='flex justify-center items-center w-[35px] h-[35px] bg-red hover:opacity-[1] rounded-full opacity-[0.5] text-[white]'><FaInstagram/></Link>
            <Link className='flex justify-center items-center w-[35px] h-[35px] bg-red hover:opacity-[1] rounded-full opacity-[0.5] text-[white]'><FaTelegramPlane/></Link>
          </OneRowFlexed>
        </OneRowFlexed>
      </OneRowFlexed>
      <OneRowFlexed className={'w-full sm:flex-row flex-col mb-2'} between={true} alignItems='flex-start'>
        <OneRowFlexed className={'flex-col max-w-[220px] w-full'} alignItems='flex-start'>
          <h1 className='text-[18px] 2xl:text-[20px] uppercase font-bold'><Translate dictionary={{uz:"Manzil",ru:"Адрес",en:"Address"}}/></h1>
          <p className='text-[14px] text-darkgray mt-2'><Translate dictionary={{uz:'O‘zbekiston Res,Toshkent viloyati, Zangiota tumani, Eshonguzar, Obod MFY, 4a uy.',ru:'Узбекистан Рес, Ташкентская область, Зангиатинский район, Эшонгузар, Абад МФУ, дом 4а.',
en:'Uzbekistan Rep, Tashkent region, Zangiota district, Eshonguzar, Abad MFY, house 4a.'
}}/></p>
        </OneRowFlexed>
        <OneRowFlexed className={'max-w-[220px] w-full mt-2 sm:mt-0'}>
          <p className='text-[14px] text-darkgray'><Translate dictionary={{uz:`"OOO EURO FOOD TRADE" MChJ O'zbekistonda ishlab chiqarilgan. © 2001-2024.`,ru:'"OOO EURO FOOD TRADE" Произведено в Узбекистане. © 2001-2024.',en:'"OOO EURO FOOD TRADE" Produced in Uzbekistan. © 2001-2024.'}}/></p>
        </OneRowFlexed>
      </OneRowFlexed>
    </Container>
  )
}

export default RightFooter