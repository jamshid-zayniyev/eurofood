import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Icons
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

// Utilities
import Translate from "../../utils/Translate";

const VacancyCard = ({ data }) => {
  const language = useSelector((state) => state.language.language); // Extract language directly

  return (
    <div className="sm:max-w-[421px] p-4 bg-gray border border-solid border-darkgray rounded-[20px]">
      {/* Vacancy Title */}
      <h2 className="text-[18px] md:text-[20px] font-semibold text-red mb-4">
        <Translate dictionary={data?.title} />
      </h2>

      {/* Vacancy Details */}
      <ul className="space-y-2">
        {/* Work Schedule */}
        <li className="flex items-center font-semibold">
          <IoMdCheckmarkCircleOutline className="text-green text-[20px] mr-2" />
          <span className="text-[14px] 2xl:text-[16px]">
            <Translate dictionary={{ en: "Schedule:", uz: "Ish grafigi:", ru: "График работы:" }} />{" "}
            <Translate dictionary={data?.time} />
          </span>
        </li>

        {/* Salary */}
        <li className="flex items-center font-semibold">
          <IoMdCheckmarkCircleOutline className="text-green text-[20px] mr-2" />
          <span className="text-[14px] 2xl:text-[16px]">
            <Translate dictionary={{ en: "Salary", ru: "Зарплата", uz: "Ish haqi" }} />{" "}
            <Translate dictionary={data?.salary} />
          </span>
        </li>

        {/* Employment Status */}
        <li className="flex items-center font-semibold">
          <IoMdCheckmarkCircleOutline className="text-green text-[20px] mr-2" />
          <span className="text-[14px] 2xl:text-[16px]">
            <Translate dictionary={data?.status} />
          </span>
        </li>

        {/* Working Days */}
        <li className="flex items-center font-semibold">
          <IoMdCheckmarkCircleOutline className="text-green text-[20px] mr-2" />
          <span className="text-[14px] 2xl:text-[16px]">
            <Translate dictionary={data?.day} />
          </span>
        </li>
      </ul>

      {/* More Details Link */}
      <Link
        to={`/${language}/vacancy-detail/${data?.slug}`}
        className="flex items-center uppercase text-darkgray font-semibold hover:underline mt-4"
      >
        <Translate dictionary={{ en: "MORE DETAILS", uz: "Batafsil", ru: "ПОДРОБНЕЕ" }} />
        <FaAngleRight className="text-red ml-1 text-[16px]" />
      </Link>
    </div>
  );
};

export default VacancyCard;
