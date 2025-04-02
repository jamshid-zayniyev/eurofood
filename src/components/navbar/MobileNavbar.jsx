import React, { useEffect, useState } from 'react'

import Container from "../../layout/Container"
import OneRowFlexed from "../../layout/OneRowFlexed"

//assets
import world from "../../assets/svg/world.svg"
import logo from "../../assets/brands/logo.png"

// icons
import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

//
import { Link, useLocation } from 'react-router-dom';

//
import Translate from '../../utils/Translate';

//redux
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from "../../context/slices/language.slice";
import { NavbarMobile } from '../../data/mockData'

const MobileNavbar = () => {
    const [toggle,setToggle] = useState(false)

    // lang
    const { language } = useSelector((state) => state.language);
    const dispatch = useDispatch();
    const location = useLocation()
    const pathname = location.pathname.slice(4,location.pathname.length)
    const activeUrl ="/"+location.pathname.split('/')[2]
    const changeLanguage = (lang) =>{
        dispatch(setLanguage(lang))
    }


    // scrollHideNavbar
    const controlNavbar = () => {
        if (window.scrollY > 220 ) {
            setToggle(false)
        }
    }
  

    useEffect(() => {
        
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

  return (
    <div className='bg-[white] h-[100px]'>
        <Container className={'h-full'}>
            <OneRowFlexed between={true}>
                <Link to={'/'}><img src={logo} alt="logo" className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]'/></Link>
                <div className={`bg-red p-2 rounded-full text-[white] cursor-pointer text-[20px] ${toggle ? 'animate-spin-slow' : ""}`} onClick={()=>setToggle(!toggle)}>{toggle ? <IoClose /> : <FaBarsStaggered/>}</div>
            </OneRowFlexed> 
            <OneRowFlexed className={`h-[0] z-[1000] opacity-[0.4] duration-500  ${toggle ? "h-[100vh]  duration-500 opacity-[1]" : ""} w-full bg-[white] absolute top-[100px] left-0`} alignItems='flex-start'>
                <div className={`${toggle ? "block absolute top-0 duration-500" : "invisible top-40"}`}>
                <Container>
                <OneRowFlexed className={'flex-col gap-[20px] mt-8 '}  alignItems='flex-start'>
                    {NavbarMobile.map(item=>(
                        <Link key={item.id} to={item.slug} className={`${activeUrl === item.slug ? 'text-red' : ''} hover:text-red transition-[3s] font-bold text-[18px]`} onClick={()=>setToggle(false)}><Translate dictionary={item.title}/></Link>
                    ))}
                </OneRowFlexed>
                <OneRowFlexed className={'flex-col mt-10'} alignItems='flex-start'>
                <h1 className='font-bold mb-2 text-[20px]'>Наши соц.сети</h1>
                <OneRowFlexed className={'gap-[12px] 2xl:gap-[16px]'}>
                    <Link className='flex justify-center items-center w-[35px] h-[35px] bg-red hover:opacity-[1] rounded-full opacity-[0.8] text-[white]'><FaFacebookF/></Link>
                    <Link className='flex justify-center items-center w-[35px] h-[35px] bg-red hover:opacity-[1] rounded-full opacity-[0.8] text-[white]'><FaInstagram/></Link>
                    <Link className='flex justify-center items-center w-[35px] h-[35px] bg-red hover:opacity-[1] rounded-full opacity-[0.8] text-[white]'><FaTelegramPlane/></Link>
                </OneRowFlexed>
                </OneRowFlexed>
                <OneRowFlexed className='gap-[10px] mt-10'>
                    <img src={world} alt="world" className='w-[30px]'/>
                <OneRowFlexed  className={'text-darkgray font-[600] gap-[14px] text-[20px]'}>
                    <Link to={`/uz/${pathname}`} onClick={()=>changeLanguage('uz')} className={`cursor-pointer transition-[2s] hover:text-[red] ${language === 'uz' ? 'text-red' : ''}`}>O’zb</Link>
                    <Link to={`/ru/${pathname}`} onClick={()=>changeLanguage('ru')} className={`cursor-pointer transition-[2s] hover:text-[red]   px-2 border-l-[1.5px] border-r-[1.5px] border-solid border-darkgray ${language === 'ru' ? 'text-red' : ''}`}>Рус</Link>
                    <Link to={`/en/${pathname}`} onClick={()=>changeLanguage('en')} className={`cursor-pointer transition-[2s] hover:text-[red]  ${language === 'en' ? 'text-red' : ''}`}>Eng</Link>
                </OneRowFlexed>
                </OneRowFlexed>
                </Container>
                </div>
            </OneRowFlexed>
        </Container>
    </div>
  )
}

export default MobileNavbar