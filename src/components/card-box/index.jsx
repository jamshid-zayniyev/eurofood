import React from 'react'
import OneRowFlexed from '../../layout/OneRowFlexed'

const CardBox = ({children,className}) => {
  return (
    <OneRowFlexed between={true} className={`grid ${className}`}>
        {children}
    </OneRowFlexed>
  )
}

export default CardBox