import React, { useState } from 'react';
import InputMask from 'react-input-mask';

//
import Translate from '../../utils/Translate';
//
import { useSelector } from 'react-redux';

const InputPhone = ({value,onChange,label='',type='text', mask=false,errors='',icon,placeholder={en:"Your name",ru:"Ваше имя",uz:"Sizning ismingiz"}}) => {
  const [inputValue, setInputValue] = useState('');
  const { language } = useSelector((state) => state.language);


  return (
      <div className="mb-4">
        <label htmlFor="masked-input" className="block text-gray-700 text-sm font-bold mb-2">
          <Translate dictionary={label}/>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <i className={`fas ${icon} text-grayline`}></i>
          </div>
          <InputMask
            mask={mask}
            value={value}
            onChange={onChange}
          >
            {(props) => <input  {...props} type={type} className='block text-[14px] h-[48px] md:text-[16px] w-full pl-12 pr-4 py-2 border border-grayline rounded-[8px] md:rounded-[15px] shadow-sm focus:outline-none focus:ring focus:border-blue-300' placeholder={placeholder[language]}/>}
          </InputMask>
        </div>
        {errors && <p className="text-[red] text-xs italic mt-2">{errors}</p>}
      </div>
  );
};

const Inputs = ({value,onChange,label='',type='text', mask=false,errors='',icon,placeholder={en:"Your name",ru:"Ваше имя",uz:"Sizning ismingiz"}}) => {
  const [inputValue, setInputValue] = useState('');
  const { language } = useSelector((state) => state.language);


  return (
      <div className="mb-4">
        <label htmlFor="masked-input" className="block text-gray-700 text-sm font-bold mb-2">
          <Translate dictionary={label}/>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <i className={`fas ${icon} text-grayline`}></i>
          </div>
            <input  value={value} onChange={onChange} type={type} className='block text-[14px] md:text-[16px] w-full pl-12 pr-4 py-2 h-[45px] border border-grayline rounded-[8px] md:rounded-[15px] shadow-sm focus:outline-none focus:ring focus:border-blue-300' placeholder={placeholder[language]}/>
        </div>
        {errors && <p className="text-[red] text-xs italic mt-2">{errors}</p>}
      </div>
  );
};

export  {Inputs,InputPhone};


