import React from 'react'
import CircularText from './components/CircularText'
import OneRowFlexed from '../../layout/OneRowFlexed'
import ContactText from './components/ContactText'
import Container from '../../layout/Container'
import ContactForm from '../../components/contact-form'

const ContactUs = () => {
  return (
    <Container>
      <OneRowFlexed between={true}  className={'gap-[20px] flex-col md:flex-row'}>
        <ContactText/>
        <CircularText/>
      </OneRowFlexed>
      <ContactForm/>
    </Container>
  )
}

export default ContactUs