import React from 'react'
import Container from '../../layout/Container'
import VacancyType from './components/VacancyType'
import VacancyApply from './components/VacancyApply'

const Vacancy = () => {
  return (
    <Container>
        <VacancyType/>
        <VacancyApply/>
    </Container>
  )
}

export default Vacancy