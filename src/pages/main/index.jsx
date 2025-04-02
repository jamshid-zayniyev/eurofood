import React from 'react'
import Header from './components/header'
import AboutusMain from './components/aboutus-main'
import ProductMain from './components/product-main'
import PartnersMain from './components/partners-main'
import Certificate from './components/certificate'
import DeliverMain from './components/deliver'
import NewsMain from './components/news'

const Main = () => {
  return (
    <div>
        <Header/>
        <AboutusMain/>
        <ProductMain/>
        <PartnersMain/>
        <Certificate/>
        <DeliverMain/>
        <NewsMain/>
    </div>
  )
}

export default Main