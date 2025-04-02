import React, { useState } from 'react';

const faqData = [
  {
    question: "Почему томатный сок не соленый?",
    answer: "Считаем, что соль очень индивидуальный компонент. Каждый покупатель вправе сам решить, сколько соли ему с соком употреблять и как ему вкуснее. Соль всегда можно добавить по вкусу. А вот извлечь соль из сока уже не получится."
  },
  {
    question: "Можно ли определить почему образовалась плесень?",
    answer: "Ответ на этот вопрос отсутствует."
  },
  {
    question: "Почему томатный сок не соленый?",
    answer: "Ответ на этот вопрос отсутствует."
  },
  {
    question: "Без добавления консервантов, как может сок не портиться так долго?",
    answer: "Ответ на этот вопрос отсутствует."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:mt-8">
      {faqData.map((faq, index) => (
        <div key={index} className="border border-darkgray my-2 border-solid rounded-[10px]">
          <button
            className="w-full text-left p-4 focus:outline-none"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex justify-between items-center">
              <span className='font-bold text-[16px] md:text-[20px] 2xl:text-[22px]'>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform text-red transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden  transition-all text-[14px] md:text-[16px] lg:text-[18px] text-darkgray duration-300 ${
              activeIndex === index ? 'max-h-screen p-4' : 'max-h-0 px-4'
            } text-gray-600`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
