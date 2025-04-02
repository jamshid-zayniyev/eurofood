import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Inputs, InputPhone } from '../input-box';
import TextArea from '../input-box/textarea';
import { Button } from "../Button";
import OneRowFlexed from '../../layout/OneRowFlexed';
import HeaderTitle from '../typography/HeaderTitle';
import { IoMdClose } from "react-icons/io";

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'react-redux';

const ContactForm = ({
  closeBtn = false,
  title = { en: "Connect with us", ru: "Связаться с нами", uz: "Biz bilan bog'lanish" },
  onClick,
  btnText = { en: "Send a message", ru: "Отправить сообщение", uz: "Xabar yubormoq" }
}) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const { language } = useSelector((state) => state.language);

  const handleChange = (setter) => (e) => setter(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};
    if (name.trim() === '') newErrors.name = 'Name is required';
    if (phone.trim() === '') newErrors.phone = 'Phone is required';
    if (email.trim() === '') newErrors.email = 'Email is required';
    if (purpose.trim() === '') newErrors.purpose = 'Purpose is required';
    if (message.trim() === '') newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit form logic
      const messageText = ` %0A👤 Name: ${name} %0A📧 Email: ${email} %0A📞 Phone: ${phone} %0A🎯 Purpose: ${purpose} %0A✍🏻 Message: ${message} `;
      const chat_id = 'YOUR_CHAT_ID';
      const token = "YOUR_TELEGRAM_ID";
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${messageText}&parse_mode=html`;

      try {
        await fetch(url);  // Using fetch instead of XMLHttpRequest
        toast.success({ en: 'The message was sent successfully', ru: 'Сообщение отправлено !', uz: 'Xabar yuborildi !' }[language], { theme: 'dark' });
        
        // Reset form
        setName('');
        setPhone('');
        setEmail('');
        setPurpose('');
        setMessage('');
      } catch (error) {
        toast.error('There was an error sending the message. Please try again later.', { theme: 'dark' });
      }
    }
  };

  return (
    <form className={`${closeBtn ? "" : "my-[40px] md:my-[50px] xl:my-[60px] 2xl:my-[100px]"}`} onSubmit={handleSubmit}>
      <ToastContainer />
      <OneRowFlexed between={true}>
        <HeaderTitle title={title} leafing={false} position={'start'} />
        {closeBtn && <span onClick={onClick} className='text-[30px] text-darkgray cursor-pointer hover:text-red'><IoMdClose /></span>}
      </OneRowFlexed>

      <div className='grid md:grid-cols-2 gap-[10px] xl:gap-[20px] 2xl:gap-[24px] mt-[15px] md:mt-[30px]'>
        <Inputs type='text' errors={errors.name} icon={'fa-user'} value={name} onChange={handleChange(setName)} label={{ en: "Your name", ru: "Ваше имя", uz: "Sizning ismingiz" }} placeholder={{ en: "Enter your name", ru: "Укажите имя", uz: "Ismingizni kiriting" }} />
        <InputPhone type='tel' errors={errors.phone} icon={'fa-phone'} value={phone} onChange={handleChange(setPhone)} label={{ en: "Phone number", ru: "Номер телефона", uz: "Telefon raqami" }} mask='+999-99-999-99-99' placeholder={{ en: "+998 -- --- -- --", ru: "+998 -- --- -- --", uz: "+998 -- --- -- --" }} />
        <Inputs type='email' errors={errors.email} icon={'fa-envelope'} value={email} onChange={handleChange(setEmail)} label={{ en: "Email", ru: "Электронная почта", uz: "Elektron pochta" }} placeholder={{ en: "Email", ru: "Электронная почта", uz: "Elektron pochta" }} />
        <Inputs type='text' errors={errors.purpose} icon={'fa-file'} value={purpose} onChange={handleChange(setPurpose)} label={{ en: "Message subject", ru: "Тема сообщения", uz: "Xabar mavzusi" }} placeholder={{ en: "Specify a topic", ru: "Укажите тему", uz: "Mavzuni kiriting" }} />
      </div>

      <div className='mt-2 md:mt-4'>
        <TextArea errors={errors.message} value={message} label={{ en: "Message", ru: "Сообщение", uz: "Xabar" }} onChange={handleChange(setMessage)} placeholder={{ en: "Message", ru: "Сообщение", uz: "Xabar" }} />
      </div>

      <OneRowFlexed between={true} className={'lg:flex-row flex-col md:mt-8 gap-4'} alignItems='flex-start'>
        <Button btnText={btnText} type='submit' />
        <p className='font-bold text-[14px] xl:text-[16px]'>By submitting, I agree to the processing of <span className='text-red'>personal data</span></p>
      </OneRowFlexed>
    </form>
  );
};

export default ContactForm;
