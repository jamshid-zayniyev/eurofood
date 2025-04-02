import React from 'react'
import {Description, HeaderTitle} from '../../../components/typography'
import Translate from '../../../utils/Translate'
import { Button } from '../../../components/Button'

const ProductText = ({producttext}) => {
  return (
    <div className='md:w-[50%] md:mt-[100px]'>
        <HeaderTitle title={producttext.title} position='flex-start' leafing={false}/>
        <Description classname='mt-2 text-darkgray mb-[10px]' description={producttext.storage_conditions}/>
        <div>
        <p className='text-green font-bold text-[18px] my-[8px]'><Translate dictionary={{en:'Composition:',ru:'Состав:',uz:'Tarkibi:'}}/></p>
        {
          producttext?.composition?.map(item=>(
            <p className='flex items-center'><b className='text-darkgray text-[20px] mr-2'>•</b><Translate dictionary={item}/></p>
          ))
        }
        </div>
        <div>
        <p className='text-green font-bold text-[18px] my-[8px]'><Translate dictionary={{en:'In product:',ru:'Продукта содержит:',uz:"Mahsulotda:"}}/></p>
        {
          producttext?.inproduct?.map(item=>(
            <p className='flex items-center'><b className='text-darkgray text-[20px] mr-2'>•</b><Translate dictionary={item}/></p>
          ))
        }
        </div>
        <div>
        <p className='text-green font-bold text-[18px] my-[8px]'><Translate dictionary={{en:'Energy value:',ru:'Энергетическая ценность:',uz:"Energiya qiymati:"}}/></p>
            <p className='flex items-center'><b className='text-darkgray text-[20px] mr-2'>•</b><Translate dictionary={producttext?.energy_value}/></p>
        </div>
        <div>
        <p className='text-green font-bold text-[18px] my-[8px]'><Translate dictionary={{en:'Size:',ru:'Объем:',uz:"Hajmi:"}}/></p>
            <p className='flex items-center'><b className='text-darkgray text-[20px] mr-2'>•</b>{producttext?.Weight === '' ? '----' : producttext?.Weight}</p>
        </div>
        <div>
        <p className='text-green font-bold text-[18px] my-[8px]'><Translate dictionary={{en:'Shelf life:',ru:'Срок годности:',uz:"Yaroqlilik muddati:"}}/></p>
            <p className='flex items-center'><b className='text-darkgray text-[20px] mr-2'>•</b><Translate dictionary={producttext?.expiration_date}/></p>
        </div>
        <Button className='mt-4' btnText={{en:'Submit an application',ru:'Оставить заявку',uz:'Ariza qoldirish',}}/>
    </div>
  )
}

export default ProductText