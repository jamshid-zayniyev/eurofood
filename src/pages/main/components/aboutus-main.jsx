import React from 'react'

// layout
import Container from '../../../layout/Container'
import OneRowFlexed from '../../../layout/OneRowFlexed';

// components
import { Description, HeaderTitle } from '../../../components/typography'
import { Button } from '../../../components/Button';

//icons
import { FaAngleRight } from "react-icons/fa6";

//
import Translate from '../../../utils/Translate';
import Animation from '../../../components/animation';

//DOM
import { useNavigate } from 'react-router-dom';

const AboutusMain = () => {
    const navigate = useNavigate()
    const AboutMainTitle = {en:'EURO FOOD TRADE ',ru:'EURO FOOD TRADE ',uz:'EURO FOOD TRADE '}
    const AboutMainDescription = {en:'Production of canned products. Our company “Euro food trade”, founded in 2001, is located in the most picturesque region rich in fruit and vegetable resources in the Republic of Uzbekistan. The main activity of the company is the production and sale of canned and other food products. The company owns several agricultural procurement bases, refrigeration and storage facilities. ', ru:'Производство консервированных изделий. Наша компания «Euro food trade» основанная 2001 году, расположена в самым живописным и богатым плодоовощными ресурсами регионе в Республике Узбекистан. Основным направлением деятельности компании является производство и реализация консервированных и других продуктов питания. Компании принадлежит несколько сельхоз заготовительные базы, холодильные и складские помещения.' ,uz:'Konserva mahsulotlarini ishlab chiqarish. 2001-yilda tashkil etilgan “Euro food trade” kompaniyamiz O‘zbekiston Respublikasining meva-sabzavot resurslariga boy eng go‘zal hududida joylashgan. Korxonaning asosiy faoliyati konserva va boshqa oziq-ovqat mahsulotlarini ishlab chiqarish va sotishdan iborat. Korxonada bir qancha qishloq xo‘jaligi mahsulotlarini xarid qilish bazalari, muzlatgich va omborxonalar mavjud.'}
    const AboutMainDescription2 = {en:"Our success in the market is the result of an integrated approach to company management, including a competent marketing policy in relation to the company's brands, consistently high quality of products, established distribution channels, innovative development of the company, improvement of production processes, development of new types of products, as well as the use of advanced technologies .", ru:'Наш успех на рынке - это результат комплексного подхода к управлению компанией, включающего грамотную маркетинговую политику в отношении брендов компании, стабильно высокое качество производимой продукции, налаженные каналы дистрибуции, инновационное развитие компании, совершенствование производственных процессов, разработку новых видов продуктов, а также использование передовых технологий.' ,uz:"Bozordagi muvaffaqiyatimiz kompaniyani boshqarishga kompleks yondashuv, shu jumladan kompaniya brendlariga nisbatan malakali marketing siyosati, mahsulotlarning izchil yuqori sifati, tashkil etilgan tarqatish kanallari, kompaniyaning innovatsion rivojlanishi, ishlab chiqarish jarayonlarini takomillashtirish, rivojlanish yangi turdagi mahsulotlarni ishlab chiqarish, shuningdek, ilg'or texnologiyalardan foydalanish."}
  return (
    <Container className={'w-full max-w-[1146px] mx-auto my-[20px] md:my-[100px]'}>
      <Animation dataAos={'fade-up'}>
        <HeaderTitle title={AboutMainTitle}/>
        <Description description={AboutMainDescription} classname='text-center my-[10px] md:my-[15px] xl:my-[18px] 2xl:my-[20px]'/>
        <Description description={AboutMainDescription2} classname='text-center mb-[10px] md:mb-[15px] xl:mb-[18px] 2xl:mb-[20px]'/>
        <OneRowFlexed className={'gap-[30px] justify-center flex-col md:flex-row'}>
          <Button onClick={()=>navigate(`/about`)} btnText={{ru:'О компании',en:'About us',uz:'Biz haqimizda'}}/>
          <button onClick={()=>navigate(`/about`)} className='flex items-center gap-[5px] text-[16px] text-darkgray font-[600] hover:text-red transition-[2s]'><Translate dictionary={{en:'Our history',ru:'Наша история',uz:'Bizning tariximiz'}}/><i className='text-red'><FaAngleRight /></i></button>
        </OneRowFlexed>
        </Animation>
    </Container>
  )
}

export default AboutusMain