import React, { useState } from 'react';
import InputMask from 'react-input-mask';

//
import Translate from '../../utils/Translate';
//
import { useSelector } from 'react-redux';

const TextArea = ({value,onChange,label='',type='text', mask='',errors,icon,placeholder={en:"Your name",ru:"Ваше имя",uz:"Sizning ismingiz"}}) => {
  const [inputValue, setInputValue] = useState('');
  const { language } = useSelector((state) => state.language);
  return (
      <div className="mb-4">
        <label htmlFor="masked-input" className="block text-gray-700 text-sm font-bold mb-2">
          <Translate dictionary={label}/>
        </label>
        <div className="relative">
           <textarea value={value} onChange={onChange} className='block  w-full pl-5 pr-4 py-2 border border-grayline rounded-[15px] shadow-sm focus:outline-none focus:ring focus:border-blue-300' placeholder={placeholder[language]}></textarea>
        </div>
        {errors && <p className="text-[red] text-xs italic mt-2">{errors}</p>}
      </div>
  );
};

export default TextArea;


// placeholder={placeholder[language]}

// className='block  w-full pl-12 pr-4 py-2 border border-grayline rounded-[15px] shadow-sm focus:outline-none focus:ring focus:border-blue-300' 