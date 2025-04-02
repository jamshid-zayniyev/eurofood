import React from 'react'
import Container from '../../layout/Container'
import AboutHeader from './components/about-header'
import AboutTimeline from './components/about-timeline'
import ContactForm from '../../components/contact-form'

const About = () => {
  return (
    <Container>
      <AboutHeader/>
      <AboutTimeline/>
      <ContactForm/>
    </Container>
  )
}

export default About