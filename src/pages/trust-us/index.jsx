import React from 'react'
//
import Container from '../../layout/Container'

//
import ContactForm from '../../components/contact-form'
import Trust from './components/Trust'
import ForPartners from './components/ForPartners'

const TrustUs = () => {
  return (
    <Container>
        <Trust/>
        <ForPartners/>
        <ContactForm/>
    </Container>
  )
}

export default TrustUs