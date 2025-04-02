import React from 'react'

// Layout component
import OneRowFlexed from '../../layout/OneRowFlexed'

const CertificateCard = ({ data }) => {
  return (
    <OneRowFlexed className="flex-col">
      {/* Certificate image */}
      <img 
        src={data?.img} 
        alt={data?.title || "Certificate image"} // Improves accessibility
        className="w-full h-auto" // Ensures responsive image scaling
      />
      
      {/* Certificate title */}
      <h1 className="mt-3 md:mt-5 text-[14px] 2xl:text-[16px] font-[600]">
        {data?.title}
      </h1>
    </OneRowFlexed>
  )
}

export default CertificateCard
