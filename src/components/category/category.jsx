import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../context/slices/productCategory.slice';
import Translate from '../../utils/Translate';

const Category = ({ data = [] }) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  // Change selected item in Redux store
  const changeItem = (slug) => {
    dispatch(setProduct(slug));
  };

  return (
    <div className="flex gap-[10px] md:gap-[15px] flex-wrap my-[40px]">
      {data.map((item) => (
        <div
          key={item.slug}  // Unique key based on item.slug
          onClick={() => changeItem(item.slug)}
          className={`cursor-pointer px-[10px] py-[8px] md:px-[14px] md:py-[10px] 
            ${product === item.slug ? "bg-red text-[white]" : "bg-white text-[#6a6b6d]"} 
            hover:bg-red hover:text-[white] border-[0.5px] border-solid border-darkgray rounded-[8px] font-[600]`}
        >
          <Translate dictionary={item?.category} />
        </div>
      ))}
    </div>
  );
};

export default Category;
