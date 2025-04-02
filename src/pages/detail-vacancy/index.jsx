import React from 'react'

// Requirements
import Requirements from './components/Requirements'
// layout
import Container from '../../layout/Container'
import VacancyForm from '../../components/vacancy-form'


const VacancyDetail = () => {
  return (
    <Container>
        <Requirements/>
        <VacancyForm/>
    </Container>
  )
}

export default VacancyDetail