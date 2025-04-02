import React from 'react'

//
import { Link } from 'react-router-dom'
// layout
import Container from "../../../layout/Container"
import OneRowFlexed from "../../../layout/OneRowFlexed"

//components
import { Description, HeaderTitle } from '../../../components/typography'
import { ButtonLight } from '../../../components/Button'

//assets
import truckcar from "../../../assets/images/header/car.png"
import phone_icon from "../../../assets/svg/phone.svg"


const DeliverMain = () => {

    const deliveredTitle = {uz:"Biz mahsulotlarni yuqori sifatli va o'z vaqtida yetkazib beramiz",ru:'Доставим продукцию качественно и в срок',en:'We will deliver products with high quality and on time'}
    const deliveredDescription = {uz:"Bizning vazifamiz yuqori sifatli va o'z vaqtida taqdim etishdir mahsulotlarni yetkazib berish, mijozlar ehtiyojini qondirishni ta'minlash va biznesni muvaffaqiyatli rivojlantirish.",ru:"Наша миссия - обеспечить качественную и своевременную доставку продукции, гарантируя удовлетворенность клиентов  и успешное развитие бизнеса.",en:'Our mission is to provide high-quality and timely delivery of products, ensuring customer satisfaction and successful business development.'}
    const deliveredBtn = {en:'ORDER DELIVERY',ru:'ЗАКАЗАТЬ ДОСТАВКУ',uz:"Yetkazib berish"}

  return (
    <Container className='py-[50px]'>
        <OneRowFlexed className={'grid grid-cols-1 md:grid-cols-2 gap-10'}>
        <div className={'flex flex-col gap-3 items-center md:items-start'}>
            <HeaderTitle title={deliveredTitle}/>
            <Description description={deliveredDescription} classname='mb-5 text-center md:text-left'/>
            <OneRowFlexed  className={"flex-col sm:flex-row gap-[10px] lg:gap-[15px]"} >
              <ButtonLight btnText={deliveredBtn}/>
              <p className='text-darkgray text-[12px] md:text-[14px]'>или звоните</p>
              <Link className='flex gap-[10px]'>
                <img src={phone_icon} alt="phone_icon" />
                <p className='font-[900] text-[18px] 2l:text-[20px] tracking-[-1px]'>+99 870 202 00 22  </p>
            </Link>
            </OneRowFlexed>
        </div> 
        <OneRowFlexed>
            <img src={truckcar} alt="truckcar" className='w-full' />
        </OneRowFlexed>
        </OneRowFlexed>

    </Container>
  )
}

export default DeliverMain