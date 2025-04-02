import React from 'react'

//layout
import OneRowFlexed from '../../../layout/OneRowFlexed'
import Container from '../../../layout/Container'

//components
import { Description, HeaderTitle } from '../../../components/typography'
import {  ButtonLight } from '../../../components/Button'

//assets
import certificate_1 from "../../../assets/images/certificate-img/sertifikat_1.png"
import certificate_2 from "../../../assets/images/certificate-img/sertifikat_2.png"
import { useNavigate } from 'react-router-dom'
import Animation from '../../../components/animation'

const Certificate = () => {

    const certificateTitle = {uz:'Siz uchun sertifikatlanmagan mahsulot xavflari',ru:'Несертифицированный товар для вас',en:'Uncertified product for you'}
    const certificateDescription = {uz:'Sertifikatsiz mahsulotni xarid qilish sizni xavf-xatarlarga duchor qilishi mumkin. Bizning sertifikatlarimiz mahsulot sifati va xavfsizligini tasdiqlaydi.',ru:'Приобретение несертифицированного товара может подвергнуть вас опасностям. Наши сертификаты доказывающих качество и безопасность нашей продукции.',en:'Purchasing an uncertified product may expose you to dangers. Our certificates prove the quality and safety of our products.'}
    const certificateBtn = {en:'See for yourself',ru:'Убедитесь сами',uz:"O'zingiz ko'ring"}
    const navigate = useNavigate()
  
  return (
    <div className='bg-lightyellow py-[50px]'>
    <Container>
    <Animation dataAos={'fade-up'}>
        <OneRowFlexed className={'grid  md:grid-cols-2 gap-10'}>
        <OneRowFlexed className={'flex-col gap-3'}>
            <HeaderTitle title={certificateTitle}/>
            <div className='flex flex-col md:items-start items-center'>
              <Description description={certificateDescription} classname='mb-5 md:text-left text-center'/>
              <ButtonLight onClick={()=>navigate(`/to-consumers`)} btnText={certificateBtn} className='mt-4'/>
            </div>
        </OneRowFlexed>
        <OneRowFlexed className={'mx-auto gap-[20px] 2xl:gap-[30px] text-center'}>
            <OneRowFlexed className={'flex-col'}>
                <img src={certificate_1} alt="certificate-img" />
                <h1 className='mt-3 md:mt-5 text-[14px] 2xl:text-[16px] font-[600]'>Название сертификата</h1>
            </OneRowFlexed>
            <OneRowFlexed className={'flex-col'}>
                <img src={certificate_2} alt="certificate-img" />
                <h1 className='mt-3 md:mt-5 text-[14px] 2xl:text-[16px] font-[600]'>Название сертификата</h1>
            </OneRowFlexed>
            <OneRowFlexed className={'flex-col'}>
                <img src={certificate_2} alt="certificate-img" />
                <h1 className='mt-3 md:mt-5 text-[14px] 2xl:text-[16px] font-[600]'>Название сертификата</h1>
            </OneRowFlexed>
        </OneRowFlexed>
      </OneRowFlexed>
      </Animation>
    </Container>
    </div>
  )
}

export default Certificate