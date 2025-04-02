import React from 'react'
import {Description, HeaderTitle} from '../../../components/typography'
import phoneIcon from "../../../assets/svg/phone.svg"
import message from "../../../assets/svg/message.svg"
import marker from "../../../assets/svg/marker.svg"
import like from "../../../assets/svg/like.svg"
import time from "../../../assets/svg/time.svg"
import OneRowFlexed from '../../../layout/OneRowFlexed'
import Translate from '../../../utils/Translate'
import { Link } from 'react-router-dom'

import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";
const ContactText = () => {
  return (
    <div>
        <HeaderTitle title={{en:'Contacts',ru:'Контакты',uz:'Kontaktlar'}} leafing={false} position='flex-start'/>
        <Description classname='text-[18px] font-bold' description={{en:'Contact us in any way convenient for you',uz:"Sizga qulay bo'lgan har qanday usulda biz bilan bog'laning",ru:'Свяжитесь с нами любым удобным вам способом'}}/>
        <div className="flex flex-col gap-y-[4px] py-4 mt-[40px] 2xl:mt-[70px]">
      <div className="flex items-start mb-4">
        <img src={phoneIcon} alt="Phone Icon" className="w-6 h-6 mr-2" />
        <div>
          <p className="text-darkgray"><Translate dictionary={{en:'Phone:',ru:'Телефон:',uz:'Telefon:'}}/></p>
          <a href='tel:+998994344444' className='font-bold'>+99 870 202 00 22  </a>
        </div>
      </div>
      <div className="flex items-start mb-4">
        <img src={message} alt="Email Icon" className="w-6 h-6 mr-2" />
        <div>
          <p className="text-darkgray"><Translate dictionary={{en:'Email:',ru:'Почта:',uz:'Pochta:'}}/></p>
          <a href='mailto: efood@enginiiring.com' className='font-bold'>info@efood.uz</a>
        </div>
      </div>
      <div className="flex items-start mb-4">
        <img src={marker} alt="Address Icon" className="w-6 h-6 mr-2" />
        <div>
          <p className="text-darkgray"><Translate dictionary={{en:'Address:',ru:'Адрес:',uz:'Manzil:'}}/></p>
          <a href='https://maps.app.goo.gl/8PHtWQgvwQmCstSw7' className='font-bold'><Translate dictionary={{uz:'O‘zbekiston Res,Toshkent viloyati, Zangiota tumani, Eshonguzar, Obod MFY, 4a uy.',ru:'Узбекистан Рес, Ташкентская область, Зангиатинский район, Эшонгузар, Абад МФУ, дом 4а.',
en:'Uzbekistan Rep, Tashkent region, Zangiota district, Eshonguzar, Abad MFY, house 4a.'
}}/></a>
        </div>
      </div>
      <div className="flex items-start mb-4">
        <img src={time} alt="Hours Icon" className="w-6 h-6 mr-2" />
        <div>
          <p className="text-darkgray"><Translate dictionary={{en:'Opening hours:',ru:'Часы работы:',uz:'Ish vaqti:'}}/></p>
          <p className='font-bold'>
            <Translate dictionary={{en:'Monday - Saturday, 8:30 - 17:00',ru:'Понедельник-Суббота, 8:30 - 17:00',uz:'Dushanba-shanba, 8:30 - 17:00'}}/>
          </p>
        </div>
      </div>
      <div className="flex items-start mb-4">
        <img src={like} alt="Hours Icon" className="w-6 h-6 mr-2" />
        <div>
        <p className='text-darkgray'><Translate dictionary={{ru:"Наши соц.сети ",uz:"Bizning tarmoqlar",en:"Our social.net"}}/></p>
        <OneRowFlexed className={'gap-[12px] 2xl:gap-[16px]'}>
            <Link className='flex justify-center items-center w-[35px] h-[35px] bg-red hover:opacity-[1] rounded-full opacity-[0.5] text-[white]'><FaFacebookF/></Link>
            <Link className='flex justify-center items-center w-[35px] h-[35px] bg-red hover:opacity-[1] rounded-full opacity-[0.5] text-[white]'><FaInstagram/></Link>
            <Link className='flex justify-center items-center w-[35px] h-[35px] bg-red hover:opacity-[1] rounded-full opacity-[0.5] text-[white]'><FaTelegramPlane/></Link>
          </OneRowFlexed>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactText