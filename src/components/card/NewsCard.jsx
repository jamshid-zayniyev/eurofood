import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Utility for translations
import Translate from "../../utils/Translate";

// Layout & UI components
import OneRowFlexed from "../../layout/OneRowFlexed";
import { ButtonWhite } from "../Button";

const NewsCard = ({ data, lm = false }) => {
  const language = useSelector((state) => state.language.language); // Extract language
  const navigate = useNavigate();

  return (
    <OneRowFlexed className="w-full flex-col gap-[10px] 2xl:gap-[20px]" alignItems="flex-start">
      
      {/* News image with overlay */}
      <div className="relative group">
        <img
          className="news__img w-full rounded-[15px] md:rounded-[20px]"
          src={data.image}
          alt={data?.title?.[language] || "News image"} // Dynamic alt for accessibility
        />
        {/* Overlay effect on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-[15px] md:rounded-[20px]">
          <ButtonWhite
            btnText={{ uz: "Batafsil", en: "More Info", ru: "Подробнее" }}
            onClick={() => navigate(`/${language}/news-detail/${data?.slug}`)}
          />
        </div>
      </div>

      {/* News date */}
      <p className="text-darkgray text-[16px]">{data.date}</p>

      {/* News title */}
      <h1 className="text-left text-[13px] md:text-[14px] 2xl:text-[16px] font-bold line-clamp-3 uppercase">
        <Translate dictionary={data.title} />
      </h1>
      
    </OneRowFlexed>
  );
};

export default NewsCard;
