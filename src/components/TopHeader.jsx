import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// assets
import marker from "../assets/svg/marker.svg"
import world from "../assets/svg/world.svg"

// components
import Container from '../layout/Container'
import OneRowFlexed from '../layout/OneRowFlexed'

// lang
import Translate from "../utils/Translate"

//redux
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from "../context/slices/language.slice";






// top header text
const TopHeaderText = {
  uz:'O‘zbekiston Res,Toshkent viloyati, Zangiota tumani, Eshonguzar, Obod MFY, 4a uy.',
  ru:'Узбекистан Рес, Ташкентская область, Зангиатинский район, Эшонгузар, Абад МФУ, дом 4а.',
  en:'Uzbekistan Rep, Tashkent region, Zangiota district, Eshonguzar, Abad MFY, house 4a.'
}

// <Translate dictionary={TopHeaderText} />

const Topheader = () => {

  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const location = useLocation()
  const pathname = location.pathname.slice(4,location.pathname.length)

  const changeLanguage = (lang) =>{
      dispatch(setLanguage(lang))
  }
  return (
    <div className='bg-gray'>

      <Container>
        <OneRowFlexed between={true} className={'h-[50px]'}>

        <OneRowFlexed className={'gap-[10px]'}>
          <img src={marker} alt="marker" />
          <p className='text-[12px] md:text-[14px] xl:text-[16px] text-darkgray'><Translate dictionary={TopHeaderText} /></p>
        </OneRowFlexed>

        <OneRowFlexed className='gap-[10px]'>
          <img src={world} alt="world" />
          <OneRowFlexed  className={'text-darkgray font-[600] gap-[14px] text-[12px] md:text-[14px] xl:text-[16px]'}>
            <Link to={`/uz/${pathname}`} onClick={()=>changeLanguage('uz')} className={`cursor-pointer transition-[2s] hover:text-[red] ${language === 'uz' ? 'text-red' : ''}`}>O’zb</Link>
            <Link to={`/ru/${pathname}`} onClick={()=>changeLanguage('ru')} className={`cursor-pointer transition-[2s] hover:text-[red]   px-2 border-l-[1.5px] border-r-[1.5px] border-solid border-darkgray ${language === 'ru' ? 'text-red' : ''}`}>Рус</Link>
            <Link to={`/en/${pathname}`} onClick={()=>changeLanguage('en')} className={`cursor-pointer transition-[2s] hover:text-[red]  ${language === 'en' ? 'text-red' : ''}`}>Eng</Link>
          </OneRowFlexed>
        </OneRowFlexed>

        </OneRowFlexed>
        </Container>
    </div>
  )
}

export default Topheader