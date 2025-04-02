import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import phone_icon from "../../assets/svg/phone.svg"
import logo from "../../assets/brands/logo.png"
import OneRowFlexed from '../../layout/OneRowFlexed'
import Container from '../../layout/Container'
import Translate from '../../utils/Translate'

const DefaultNavbar = () => {

  const location = useLocation()
  const activeUrl = location.pathname.split('/')[2]

  return (
  <div>
  <Container>
    <div className='grid grid-cols-9 gap-2 items-center h-[100px] 2xl:h-[200px] font-[600] uppercase text-[12px] xl:text-[14px]'>

      <OneRowFlexed className='col-start-1 col-end-5  gap-[10px] justify-between'>
        <Link to={'/about'} className={`${activeUrl === 'about' ? 'text-red' : ''} hover:text-red transition-[3s]`}><Translate dictionary={{ru:'О компании',en:'About us',uz:'Biz haqimizda'}}/></Link>
        <Link to={'/products'} className={`${activeUrl === 'products' ? 'text-red' : ''} hover:text-red transition-[3s]`}><Translate dictionary={{ru:'Продукция',en:'Products',uz:'Mahsulotlar'}}/></Link>
        <Link to={'/to-consumers'} className={`${activeUrl === 'to-consumers' ? 'text-red' : ''} hover:text-red transition-[3s]`}><Translate dictionary={{ru:'Потребителям',en:'To consumers',uz:"Iste'molchilar"}}/></Link>
        <Link to={'/trust-us'} className={`${activeUrl === 'trust-us' ? 'text-red' : ''} hover:text-red transition-[3s]`}><Translate dictionary={{ru:'Доверяют',en:'Trust Us',uz:"Ishonchnoma"}}/></Link>
      </OneRowFlexed>

      <OneRowFlexed className='col-start-5 col-end-6 justify-center '>
        <Link to={'/'}><img src={logo} alt="logo" className='w-[80px] xl:w-[80px] 2xl:w-[120px]'/></Link>
      </OneRowFlexed>

      <OneRowFlexed className='col-start-6 col-end-10 gap-[10px] justify-between'>
        <Link to={'/vacancy'} className={`${activeUrl === 'vacancy' ? 'text-red' : ''} hover:text-red transition-[3s]`}><Translate dictionary={{ru:'Вакансии',en:'Vacancies',uz:"Ish o'rinlari"}}/></Link>
        <Link to={'/news'} className={`${activeUrl === 'news' ? 'text-red' : ''} hover:text-red transition-[3s]`}><Translate dictionary={{ru:'Новости',en:'News',uz:"Yangiliklar"}}/></Link>
        <Link to={'/contact'} className={`${activeUrl === 'contact' ? 'text-red' : ''} hover:text-red transition-[3s]`}><Translate dictionary={{ru:'Контакты',en:'Contact',uz:"Bog'lanish"}}/></Link>
        <Link to={'tel:+998994344444'} className='flex gap-[10px]'>
            <img src={phone_icon} alt="phone_icon" />
            <p className='font-[900] text-[18px] 2l:text-[20px] tracking-[-1px]'>+99 870 202 00 22  </p>
        </Link>
      </OneRowFlexed>

    </div>
    
  </Container>
  </div>
  )
}

export default DefaultNavbar