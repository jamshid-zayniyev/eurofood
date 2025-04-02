import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

const ReactHelmet = ({title = {en:"",ru:'',uz:''},description={en:"",ru:'',uz:''}}) => {
  const {language} = useSelector(state=>state.language)
  return (
    <Helmet>
        <title>{title[language]}</title>
        <meta name='description' content={description[language]} />
    </Helmet>
  )
}

export default ReactHelmet