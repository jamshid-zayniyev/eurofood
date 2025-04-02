import React from 'react';
import { ButtonWhite } from "../Button";
import Container from "../../layout/Container";
import footer from "../../assets/images/header/footer.png";
import footer_text from "../../assets/images/header/footer_text.png";
import OneRowFlexed from '../../layout/OneRowFlexed';
import RightFooter from './RightFooter';
import Translate from '../../utils/Translate';

const Footer = () => {
  const bgImg = {
    backgroundImage: `url(${footer})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <OneRowFlexed className="bg-gray mt-[100px] flex-col md:flex-row">
      <Container className="relative w-full md:w-[50%] bg-red lg:bg-[transparent]">
        <OneRowFlexed className="md:gap-[30px] 2xl:gap-[100px] text-[white]" alignItems="flex-start">
          <img src={footer} alt="Footer background" className="absolute top-0 left-0 h-full" />
          <div className="z-[10] items-start">
            <img className="md:block hidden" src={footer_text} alt="Footer text" />
          </div>
          <OneRowFlexed className="flex-col z-[10] py-10 max-w-[350px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[477px] w-full gap-[20px] md:gap-[30px]" alignItems="flex-start">
            <h1 className="text-[25px] md:text-[25px] xl:text-[30px] font-[600]">
              <Translate dictionary={{ ru: 'Остались вопросы ?', uz: 'Savollar qoldimi ?', en: 'Any questions left ?' }} />
            </h1>
            <p className="text-[16px]">
              <Translate dictionary={{
                ru: 'Заполните форму обратной связи, наш менеджер свяжется с вами в ближайшее время.',
                uz: "Fikr-mulohaza shaklini to'ldiring, menejerimiz tez orada siz bilan bog'lanadi.",
                en: "Fill out the feedback form, our manager will contact you shortly."
              }} />
            </p>
            <ButtonWhite btnText={{ en: 'Connect with us', ru: 'Связаться с нами', uz: "Biz bilan bog'lanish" }} />
            <br />
            <div className="mt-2 md:mt-10">
              <h2><Translate dictionary={{ ru: 'Телефоны для справок: ', uz: 'Murojaat uchun telefon raqamlari:', en: 'Phone numbers for inquiries:' }} /></h2>
              <h1 className="text-[18px] xl:text-[22px] font-bold">+99 870 202 00 22 </h1>
            </div>
            <div>
              <p><Translate dictionary={{ ru: 'Электронная почта: ', uz: 'Elektron pochta:', en: 'Email:' }} /></p>
              <h2 className="font-bold text-[16px]">info@efood.uz</h2>
            </div>
          </OneRowFlexed>
        </OneRowFlexed>
      </Container>
      <OneRowFlexed className="w-full md:w-[50%]">
        <RightFooter />
      </OneRowFlexed>
    </OneRowFlexed>
  );
};

export default Footer;
