import React,{ useState } from 'react'

import Container from "../../../layout/Container"

// components
import { Button } from '../../../components/Button'

//assets
import header_img from "../../../assets/images/header/header.png"
import boduelle2 from "../../../assets/images/header/header2.png"

//layout
import OneRowFlexed from '../../../layout/OneRowFlexed'

//utils
import Translate from '../../../utils/Translate'
import Modal from '../../../components/modal'
import { useNavigate } from 'react-router-dom'
import Animation from '../../../components/animation'

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const bgImg = {
    backgroundImage:`url(${header_img})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center'
  }



  const navigate = useNavigate()
  const header_text = {ru:'Разнообразие вкусов для вашего магазина!',uz:"SIZNING DO‘KONINGIZ UCHUN TURLI TA'MLAR!",en:'A VARIETY OF FLAVORS FOR YOUR STORE!'}
  const header_discription = {ru:'Разнообразие, качество и непререкаемая свежесть - это то, что мы гарантируем каждому партнеру. Наши маринованные продукты станут хитом продаж в вашем магазине, привлекая новых клиентов и удовлетворяя вкусовые предпочтения существующих. Разблокируйте потенциал вашего бизнеса с нами уже сегодня!',uz:"Xilma-xillik, sifat va shubhasiz soflik - biz har bir sherikga kafolat beramiz. Bizning tuzlangan mahsulotlarimiz do'koningizda mashhur bo'lib, yangi mijozlarni jalb qiladi va mijozlarning ta'mga bo'lgan afzalliklarini qondiradi. Bugun biz bilan biznes salohiyatingizni oching!",en:'Variety, quality and undeniable freshness are what we guarantee to every partner. Our pickled products will be a hit in your store, attracting new customers and satisfying the taste preferences of existing ones. Unlock your business potential with us today!'}
  const btn_one = {ru:'Консультация',en:'Consultation',uz:'Maslahat olish'}
  const btn_two = {ru:'Продукция',en:'Products',uz:'Mahsulotlar'}
  return (
    <div style={bgImg} className='py-14 sm:py-0'>
      <Container>
      <Animation dataAos={'fade-up'}>
        <div className={'grid md:grid-cols-2 h-[100vh] justify-center items-center'}>
          <OneRowFlexed className={'flex-col'}>
            <h1 className='uppercase font-[900] md:text-[30px] xl:text-[40px] 2xl:text-[50px] text-[white]'><Translate dictionary={header_text}/></h1>
            <h2 className='my-[10px] xl:text-[14px] 2xl:text-[16px] text-gray'><Translate dictionary={header_discription}/> </h2>
            <OneRowFlexed className={'flex-col md:flex-row w-full gap-6 mt-[30px]'}>
              <Button  btnText={btn_one} className='w-full sm:w-auto' onClick={() => setShowModal(true)}/>
              <button onClick={()=>navigate(`/products`)} className='uppercase  border-[1.5px] border-solid border-[white] px-10 h-[45px] 2xl:h-[60px] w-full sm:w-auto rounded-[30px] text-[white] font-[400] hover:bg-[white] hover:text-[black] transition-[2s]'><Translate dictionary={btn_two}/></button>
            </OneRowFlexed>
          </OneRowFlexed>
          
            <OneRowFlexed>
              <img className='' src={boduelle2} alt="boduelle2" />
            </OneRowFlexed>
        </div>
        </Animation>
      </Container>  
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default Header