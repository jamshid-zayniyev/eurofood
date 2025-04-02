import React from 'react'

//
import Container from '../../layout/Container'
import OneRowFlexed from '../../layout/OneRowFlexed'

//
import ProductSide from './components/ProductSide'
import ProductText from './components/ProductText'
import Carousel from '../../components/carousel'
import { Button } from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import mockDataProduct from '../../data/productData'

//


const ProductDetail = () => {
  // const ProductData = [
  //   {id:1,title:''},
  //   {id:2,title:''},
  //   {id:3,title:''},
  //   {id:4,title:''},
  //   {id:5,title:''},
  //   {id:6,title:''},
  //   {id:7,title:''},
  // ]
  const {slug,slug2} = useParams()
  const filterProductItems = mockDataProduct.filter(x=>(x.type === slug && x.slug !== slug2 ))
  const AlonefilterProduct = mockDataProduct.find(y=>y.slug === slug2)
  const navigate = useNavigate()
  return (
    <Container>
        <OneRowFlexed className={'flex-col md:flex-row gap-[80px]'} alignItems='center' >
            <ProductSide productside={AlonefilterProduct}/>
            <ProductText producttext={AlonefilterProduct}/>
        </OneRowFlexed>
        <div>
        <Carousel page='product' data={filterProductItems}/>
        <Button onClick={()=>navigate('/products')} rarrow={false} btnText={{en:'All products',ru:'Вся продукция',uz:'Barcha mahsulotlar'}}/>
        </div>
    </Container>
  )
}

export default ProductDetail