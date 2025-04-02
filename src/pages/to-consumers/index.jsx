import React from 'react'

//
import Carousel from '../../components/carousel'

//
import { CertificateDiplom } from '../../data/mockData'
import Container from '../../layout/Container'
import {HeaderTitle} from "../../components/typography"
import ContactForm from "../../components/contact-form"
import Faq from './components/faq'
const ToConsumer = () => {
  return (
    <Container>
      <HeaderTitle title={{en:'Certificates and diplomas',ru:'Сертификаты и дипломы',uz:'Sertifikatlar va diplomlar'}} position='start'/>
        <Container className='relative'>
            <Carousel data={CertificateDiplom} page='toconsumer' navigation={true}/>
        </Container>
      <div className='mt-[40px] md:mt-[50px] xl:mt-[60px] 2xl:mt-[100px]'>
        <HeaderTitle title={{en:'Questions and answers',ru:'Вопросы и ответы',uz:'Savollar va javoblar'}} position='start'/>
        <Faq/>
      </div>  
      <ContactForm/>
    </Container>
  )
}

export default ToConsumer