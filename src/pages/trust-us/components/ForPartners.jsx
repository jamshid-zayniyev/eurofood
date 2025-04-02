import React from 'react'

import { HeaderTitle } from '../../../components/typography'
import Translate from '../../../utils/Translate'

const ForPartners = () => {
  const PartnerTextLine1 = {
    en:'We are excited to collaborate with you in bringing the finest food products to our customers. At EURO FOOD TRADE, we are committed to quality, innovation, and sustainability. Together, we can achieve great success in the food industry.',
    ru:'Мы рады сотрудничать с вами, предлагая нашим клиентам лучшие продукты питания. В EURO FOOD TRADE мы стремимся к качеству, инновациям и устойчивому развитию. Вместе мы можем добиться больших успехов в пищевой индустрии.',
    uz:'Biz siz bilan eng yaxshi oziq-ovqat mahsulotlarini mijozlarimizga yetkazishda hamkorlik qilishdan xursandmiz. EURO FOOD TRADE’da biz sifat, innovatsiya va barqarorlikka sodiqmiz. Birgalikda oziq-ovqat sanoatida katta muvaffaqiyatlarga erishishimiz mumkin.'
  }
  const PartnerTextLine2 = {
    en:'Our extensive range of products includes fresh produce, frozen goods, and specialty items that cater to diverse tastes and preferences. We believe in fostering strong relationships with our partners, ensuring mutual growth and success.',
    ru:'Наш широкий ассортимент продукции включает свежие овощи, замороженные товары и специализированные изделия, которые удовлетворяют разнообразные вкусы и предпочтения. Мы верим в развитие крепких отношений с нашими партнерами, обеспечивая взаимный рост и успех.',
    uz:"Mahsulotlarimiz keng assortimenti yangilangan meva-sabzavotlar, muzlatilgan mahsulotlar va turli ta'mga mos keladigan maxsus mahsulotlarni o'z ichiga oladi. Biz hamkorlarimiz bilan kuchli aloqalarni rivojlantirishni, o'zaro o'sish va muvaffaqiyatni ta'minlashni o'ylaymiz."
  }
  const PartnerTextLine3 = {
    en:'As we look to the future, we invite you to join us in exploring new opportunities and expanding our market reach. Together, we can make a significant impact in the food sector.',
    ru:'Смотря в будущее, мы приглашаем вас присоединиться к нам в исследовании новых возможностей и расширении наших рыночных позиций. Вместе мы можем оказать значительное влияние на пищевой сектор.',
    uz:"Kelajakni ko'zlab, yangi imkoniyatlarni o'rganishga va bozorimizni kengaytirishga sizni taklif qilamiz. Birgalikda oziq-ovqat sohasida muhim ta'sir ko'rsatishimiz mumkin."
  }
  const PartnerTextLine4 = {
    en:'Best regards,The EURO FOOD TRADE Team',ru:'С наилучшими пожеланиями, Команда EURO FOOD TRADE',uz:'Eng yaxshi tilaklar bilan, EURO FOOD TRADE Jamoasi'
  }
  return (
    <div className='mt-[40px] md:mt-[50px] xl:mt-[60px] 2xl:mt-[100px]'>
        <HeaderTitle title={{en:'For partners',ru:'Партнерам',uz:'Hamkorlar uchun'}} position='start'/>
        <p className='text-[14px] font-[400] md:text-[16px] mt-[10px] md:mt-[20px]'>

            <Translate dictionary={PartnerTextLine1}/>
            <br /><br />
            <Translate dictionary={PartnerTextLine2}/>
            <br /><br />
            <Translate dictionary={PartnerTextLine3}/>
            <br /><br />
            <Translate dictionary={PartnerTextLine4}/>
            <br /><br />
            
        </p>
    </div>
  )
}

export default ForPartners