import React, { useEffect, useState } from 'react';
import HeaderTitle from '../../components/typography/HeaderTitle';
import { Category } from '../../components/category';
import { ProductCategories } from '../../data/mockData';
import Container from '../../layout/Container';
import CardBox from '../../components/card-box';
import { ProductCard } from '../../components/card';
import { useSelector } from 'react-redux';
import mockDataProduct from '../../data/productData';
import Translate from '../../utils/Translate';
import { CircleLoader } from 'react-spinners';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const { product } = useSelector(state => state.product);
  const filterProduct = mockDataProduct.filter(x => x.type === product);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [product]); // Trigger this effect whenever 'product' changes

  return (
    <Container>
      <HeaderTitle title={{ uz: 'Bizning mahsulotlarimiz', ru: 'Наша продукция', en: 'Our production' }} position='justify-start' />
      <Category data={ProductCategories} />
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircleLoader color="#e30b0b" loading={loading} size={150} aria-label="Loading Spinner" />
        </div>
      ) : (
        <CardBox className={'gap-[20px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'}>
          {filterProduct.length !== 0 ? filterProduct.map((item, index) => (
            <ProductCard key={index} data={item} />
          )) : (
            <h1 className='absolute text-[20px] md:text-[30px] w-full text-red'>
              <Translate dictionary={{ uz: 'Bu mahsulotlar hozircha mavjud emas', ru: 'Эти продукты в настоящее время недоступны', en: 'These products are currently unavailable' }} />
            </h1>
          )}
        </CardBox>
      )}
    </Container>
  );
};

export default Products;