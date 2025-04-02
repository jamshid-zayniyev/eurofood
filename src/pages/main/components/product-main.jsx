import React, { useEffect, useState } from 'react';

// Layout
import Container from '../../../layout/Container';

// Assets
import aboutUswavy from "../../../assets/images/header/aboutUswavy.png";

// Data
import { ProductCategories } from '../../../data/mockData';
import mockDataProduct from "../../../data/productData";

// Components
import { ProductCard } from '../../../components/card';
import { Category } from '../../../components/category';
import { HeaderTitle } from '../../../components/typography';
import CardBox from '../../../components/card-box';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Translate from '../../../utils/Translate';
import { CircleLoader } from 'react-spinners';

const ProductMain = () => {
  const [loading, setLoading] = useState(true);
  const [color] = useState("#e30b0b"); // No need to set color in state if it doesn't change
  const navigate = useNavigate();
  const { product } = useSelector(state => state.product);
  const filterProduct = mockDataProduct.filter(x => x.type === product);

  useEffect(() => {
    // Reset loading state and simulate loading
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [product]); // Trigger this effect whenever 'product' changes

  const bgImg = {
    backgroundImage: `url(${aboutUswavy})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div style={bgImg} className='relative'>
      <Container className={'py-[100px]'}>
        <HeaderTitle title={{ uz: 'Bizning mahsulotlarimiz', ru: 'Наша продукция', en: 'Our production' }} position='justify-start' />
        <Category data={ProductCategories} />
        
        {loading ? (
          <CircleLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader" 
          />
        ) : (
          <CardBox className={'relative gap-[20px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'}>
            {filterProduct.length !== 0 ? (
              filterProduct.map((item, index) => (
                <ProductCard key={index} data={item} />
              ))
            ) : (
              <h1 className='absolute text-[20px] md:text-[30px] w-full text-red'>
                <Translate dictionary={{ uz: 'Bu mahsulotlar hozircha mavjud emas', ru: 'Эти продукты в настоящее время недоступны', en: 'These products are currently unavailable' }} />
              </h1>
            )}
          </CardBox>
        )}
        
        <Button onClick={() => navigate(`/products`)} className='mx-auto mt-[60px]' btnText={{ ru: 'Перейти в каталог', en: 'Go to catalog', uz: "Katalogga o'ting" }} />
      </Container>
    </div>
  );
};

export default ProductMain;