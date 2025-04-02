import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components & Utilities
import { ButtonLight } from "../Button";
import OneRowFlexed from "../../layout/OneRowFlexed";
import Translate from "../../utils/Translate";
import { setProductActive } from "../../context/slices/productCategory.slice";

// Assets
import BackShadow from "../../assets/images/header/backimg.png";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language); // Extracted directly

  // Background image styling
  const backImg = {
    backgroundImage: `url(${BackShadow})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  // Navigation function
  const navigateToItem = () => {
    navigate(`/${language}/${data.type}/${data.slug}`);
    dispatch(setProductActive(data)); // Fixed typo if needed
  };

  return (
    <div
      style={backImg}
      className="mt-10 relative h-[530px] rounded-[20px] p-5 
      before:content-[''] before:opacity-[0.9] before:absolute before:inset-0 
      before:bg-[#FFF9D2] before:rounded-[20px] before:z-[1]"
    >
      {/* Product image */}
      <img
        src={data?.image}
        alt={data?.title?.[language] || "Product image"} // Improved accessibility
        className="mx-auto h-[300px] relative z-[2] filter drop-shadow-[0_20px_10px_rgba(0,0,0,0.8)]"
      />

      {/* Product details */}
      <OneRowFlexed between className="w-full flex-col gap-[10px] px-2 left-0 bottom-10 absolute z-[2]">
        <h1 className="text-[16px] md:text-[20px] 2xl:text-[24px] font-[600] text-center">
          <Translate dictionary={data?.title} />
        </h1>
        <h2 className="text-[12px] md:text-[14px] 2xl:text-[16px] font-[600]">
          {data?.Weight}
        </h2>

        {/* Action button */}
        <ButtonLight
          onClick={navigateToItem}
          btnText={{ ru: "Подробнее", en: "More details", uz: "Batafsil ma'lumot" }}
        />
      </OneRowFlexed>
    </div>
  );
};

export default ProductCard;
