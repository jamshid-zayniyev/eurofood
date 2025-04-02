import React from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import OneRowFlexed from '../layout/OneRowFlexed';
import Translate from '../utils/Translate';
import { twMerge } from 'tailwind-merge';
const Button = ({
    onClick,
    type='button',
    className='',
    rarrow=true,
    btnText={ru:'Консультация',en:'Консультация',uz:'Консультация'}}) => {
  return (
    <button type={type} className={twMerge('btn__one', className)} onClick={onClick}>
       {rarrow ? '' : <OneRowFlexed className={'btn__one__icon'}><FaArrowLeft/></OneRowFlexed>} 
        <p className={`text-[white] px-2 font-[400]`}><Translate dictionary={btnText}/></p>
        {rarrow ? <OneRowFlexed className={'btn__one__icon'}><FaArrowRight/></OneRowFlexed> : ''}
    </button>
  )
}

const ButtonLight = ({
  onClick,
  className='',
  rarrow=true,
  btnText={ru:'Консультация',en:'Консультация',uz:'Консультация'}}) => {
return (
  <button className={twMerge('btn__light', className)} onClick={onClick}>
     {rarrow ? '' : <OneRowFlexed className={'btn__light__icon'}><FaArrowLeft/></OneRowFlexed>} 
      <p className={`text-[14px] lg:text-[16px] text-red px-2 font-[400]`}><Translate dictionary={btnText}/></p>
      {rarrow ? <OneRowFlexed className={'btn__light__icon'}><FaArrowRight/></OneRowFlexed> : ''}
  </button>
)
}

const ButtonWhite = ({
  onClick,
  className='',
  rarrow=true,
  btnText={ru:'Консультация',en:'Консультация',uz:'Консультация'}}) => {
return (
  <button className={twMerge('btn__white', className)} onClick={onClick}>
     {rarrow ? '' : <OneRowFlexed className={'btn__light__icon'}><FaArrowLeft/></OneRowFlexed>} 
      <p className={`text-[14px] lg:text-[16px] text-red px-2 font-[400]`}><Translate dictionary={btnText}/></p>
      {rarrow ? <OneRowFlexed className={'btn__light__icon'}><FaArrowRight/></OneRowFlexed> : ''}
  </button>
)
}

export  {Button,ButtonLight,ButtonWhite}