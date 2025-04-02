import React, { useEffect } from 'react';
import ContactMap from './ContactMap';

const CircularText = () => {
  useEffect(() => {
    const text = document.getElementById('text');
    text.innerHTML = text.textContent.replace(/\S/g, "<span id='rotspan'>$&</span>");
    const elements = document.querySelectorAll('#rotspan');
    elements.forEach((el, i) => {
      el.style.transform = `rotate(${i * 5}deg)`;
      el.style.position='absolute'
    });
  }, []);

  return (
    <div className="w-[50%] relative flex items-center justify-center ">
      <h1 id="text" className="relative text-lg h-[350px] md:h-[250px] lg:h-[400px] xl:h-[440px] 2xl:h-[520px] animate-spin-veryslow">
        CONTACTS ▲ BOG'LANISH ▼ КОНТАКТЫ ▲ CONTACTS ▼ BOG'LANISH ▲ КОНТАКТЫ ▼ CONTACTS 
      </h1>
      <ContactMap/>
    </div>
  );
};

export default CircularText;



