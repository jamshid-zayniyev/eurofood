import React, { useEffect, useState } from 'react';
import Translate from '../../utils/Translate';
import { useDispatch, useSelector } from 'react-redux';
import { setVacancy } from '../../context/slices/vacancy.slice';

const people = [
  {
    id:1,
    title:{en:'Call Center Operator',uz:'Call markaz operatori',ru:'Оператора колл-центра'},
    value:'call-operator'
  }
];

const CustomSelect = ({value,onChange,label='',errors='',placeholder={en:"Your name",ru:"Ваше имя",uz:"Sizning ismingiz"}}) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [isOpen, setIsOpen] = useState(false);
  const {language} = useSelector(state=>state.language)
  const dispatch = useDispatch()

  
  const handleSelect = (person) => {
    setSelectedPerson(person);
    dispatch(setVacancy(person))
    setIsOpen(false);
  };
  useEffect(()=>{
    dispatch(setVacancy(people[0]))
  },[])

  return (
    <div className="relative w-full mb-4">
        <label htmlFor="masked-input" className="block text-gray-700 text-sm font-bold mb-2">
          <Translate dictionary={label}/>
        </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full py-2 pl-3 pr-10 shadow-sm border border-grayline text-left bg-[white] rounded-[8px] md:rounded-[15px] h-[48px]  cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 sm:text-sm"
      >
        <span className="block truncate"><i className='fas fa-tasks text-grayline pr-5'></i> {selectedPerson.title[language]}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute z-[100] w-full py-1 mt-1 overflow-auto text-base bg-[white] rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {people.map((person, index) => (
            <li
              key={index}
              onClick={() => handleSelect(person)}
              className={`${
                selectedPerson.title[language] === person.title[language] ? 'text-[white] bg-indigo-600' : 'text-gray-900'
              } cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-grayline`}
            >
              <span className={`${selectedPerson.title[language] === person.title[language] ? 'font-medium' : 'font-normal'} block truncate`}>
                <Translate dictionary={person.title}/>
              </span>
              {selectedPerson.title[language] === person.title[language] && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
