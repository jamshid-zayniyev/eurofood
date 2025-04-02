import React from 'react'

//assests
import BackShadow from "../../../assets/images/header/ProbackImg.png"

const ProductSide = ({productside}) => {
  const backImg = {
    backgroundImage:`url(${BackShadow})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:'center',
    backgroundSize:"cover"
  }
  return (
    <div style={backImg} className='md:w-[50%] rounded-[20px] h-full relative flex justify-center'>
        <img src={productside.image} alt="Boduelle"  className='w-[50%]'/>
    </div>
  )
}

export default ProductSide