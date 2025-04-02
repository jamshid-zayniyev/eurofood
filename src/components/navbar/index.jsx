import React from 'react'

//
import DefaultNavbar from './DefaultNavbar'
import Topheader from '../TopHeader'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <div>
        <div className='lg:block hidden'>
          <Topheader/>
          <DefaultNavbar/>
        </div>
        <div className='lg:hidden block'>
          <MobileNavbar/>
        </div>
    </div>
  )
}

export default Navbar