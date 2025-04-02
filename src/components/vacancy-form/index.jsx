import React, { useState } from 'react';
import { Inputs, InputPhone, CustomSelect } from '../input-box';
import { Button } from "../Button";
import OneRowFlexed from '../../layout/OneRowFlexed';
import HeaderTitle from '../typography/HeaderTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const VacancyForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const { language } = useSelector((state) => state.language);
  const { vacancy } = useSelector((state) => state.vacancy);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim() === '') newErrors.name = 'Name is required';
    if (phone.trim() === '') newErrors.phone = 'Phone is required';
    if (!file) newErrors.file = 'File is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const my_text = ` %0A👤Имя: ${name}  %0A📞Телефон: ${phone} %0A💼Вакансия: ${vacancy?.title[language]}`;
      const chat_id = -1002409556473;
      const token = "7497821730:AAGTEt5FeGfhz954okwU93n56iK0pJm1fbw"; // Replace with your bot token
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

      // Prepare FormData
      const formData = new FormData();
      formData.append('chat_id', chat_id);
      formData.append('text', my_text);
      formData.append('parse_mode', 'html');
      formData.append('document', file); // Append the file

      try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          toast.success({ en: 'The message was sent successfully', ru: 'Сообщение отправлено !', uz: 'Xabar yuborildi !' }[language], { theme: 'dark' });
          setName('');
          setPhone('');
          setFile(null); // Reset file input
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        toast.error('Error sending message');
      }
    }
  };

  return (
    <form className='my-[40px] md:my-[50px] xl:my-[60px] 2xl:my-[100px]' onSubmit={handleSubmit}>
      <ToastContainer/>
      <HeaderTitle title={{ en: 'Apply for a vacancy', uz: 'Vakansiya uchun ariza bering', ru: 'Оставьте заявку на вакансию' }} position='start' leafing={false} />
      <div className='grid md:grid-cols-2 gap-[10px] xl:gap-[20px] 2xl:gap-[24px] mt-[15px] md:mt-[30px]'>
        <Inputs errors={errors.name} icon={'fa-user'} value={name} onChange={handleNameChange} label={{ en: "Your name", ru: "Ваше имя", uz: "Sizning ismingiz" }} placeholder={{ en: "Enter your name", ru: "Укажите имя", uz: "Ismingizni kiriting" }} />
        <InputPhone errors={errors.phone} icon={'fa-phone'} value={phone} onChange={handlePhoneChange} label={{ en: "Phone number", ru: "Номер телефона", uz: "Telefon raqami" }} mask='+999-99-999-99-99' placeholder={{ en: "+998 -- --- -- --", ru: "+998 -- --- -- --", uz: "+998 -- --- -- --" }} />
        <Inputs type='file' errors={errors.file} onChange={handleFileChange} label={{ en: "Upload File", ru: "Загрузить файл", uz: "Fayl yuklash" }} />
        <CustomSelect label={{ ru: 'На должность', uz: 'Lavozim uchun', en: 'For the position' }} />
      </div>
      <OneRowFlexed between={true} className={'lg:flex-row flex-col md:mt-8 gap-4'} alignItems='flex-start'>
        <Button btnText={{ en: "Send a message", ru: "Отправить сообщение", uz: "Xabar yubormoq" }} type='submit' />
        <p className='font-bold text-[14px] xl:text-[16px]'></p>
      </OneRowFlexed>
    </form>
  );
};

export default VacancyForm;