import React from 'react'

//layout
import OneRowFlexed from "../../../layout/OneRowFlexed"

//components
import HeaderTitle from '../../../components/typography/HeaderTitle'

//assets
import about_header from "../../../assets/images/about/about_1.png"
import { Description } from '../../../components/typography'

const AboutHeader = () => {
    const AboutHeaderTitle = {en:'EURO FOOD TRADE ',ru:'EURO FOOD TRADE ',uz:'EURO FOOD TRADE '}
    const AboutHeaderDescription = {en:'Production of canned products. Our company "Euro food trade" was founded 2001, is located in the most picturesque and rich in fruit and vegetable resources region in the Republic of Uzbekistan. The main activity of the company is the production and sale of canned and other food products. The company owns several agricultural procurement bases, refrigeration and storage facilities. ',ru:'Производство консервированных изделий. Наша компания «Euro food trade» основанная 2001 году, расположена в самым живописным и богатым плодоовощными ресурсами регионе в Республике Узбекистан. Основным направлением деятельности компании является производство и реализация консервированных и других продуктов питания. Компании принадлежит несколько сельхоз заготовительные базы, холодильные и складские помещения.',uz:'Konserva mahsulotlarini ishlab chiqarish. Bizning "Euro food trade" kompaniyamiz tashkil etilgan 2001 yil, Oʻzbekiston Respublikasidagi eng goʻzal va meva-sabzavot resurslariga boy hududda joylashgan. Korxonaning asosiy faoliyati konserva va boshqa oziq-ovqat mahsulotlarini ishlab chiqarish va sotishdan iborat. Korxonada bir qancha qishloq xo‘jaligi mahsulotlarini xarid qilish bazalari, muzlatgich va omborxonalar mavjud.'}
    const AboutHeaderDescription2 = {en:"Our success in the market is the result of an integrated approach to company management, including a competent marketing policy in relation to the company's brands, consistently high quality of products, established distribution channels, innovative development of the company, improvement of production processes, development of new types of products, as well as the use of advanced technologies .",ru:'Наш успех на рынке - это результат комплексного подхода к управлению компанией, включающего грамотную маркетинговую политику в отношении брендов компании, стабильно высокое качество производимой продукции, налаженные каналы дистрибуции, инновационное развитие компании, совершенствование производственных процессов, разработку новых видов продуктов, а также использование передовых технологий.',uz:"Bozordagi muvaffaqiyatimiz kompaniyani boshqarishga kompleks yondashuv, shu jumladan kompaniya brendlariga nisbatan malakali marketing siyosati, mahsulotlarning izchil yuqori sifati, tashkil etilgan tarqatish kanallari, kompaniyaning innovatsion rivojlanishi, ishlab chiqarish jarayonlarini takomillashtirish, rivojlanish yangi turdagi mahsulotlarni ishlab chiqarish, shuningdek, ilg'or texnologiyalardan foydalanish."}
    
    return (
    <OneRowFlexed className={'gap-5 mt-4 md:mt-8'} alignItems='flex-start'>

        <div className='lg:w-[50%]'>
            <HeaderTitle title={AboutHeaderTitle} position='justify-start'/>
            <br />
            <Description description={AboutHeaderDescription}/>
            <br />
            <Description description={AboutHeaderDescription2}/>
        </div>

        <div className='lg:w-[50%] lg:block hidden'>
            <img src={about_header} alt="about_header" className='w-full' />
        </div>
        
    </OneRowFlexed>
  )
}

export default AboutHeader