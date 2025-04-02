import { useSelector } from "react-redux";

const Translate = ({
  dictionary = {},
  errorText = {
    ru: "Содержание не найдено",
    uz: "Mazmun topilmadi",
    en: "Mazmun topilmadi",
  },
}) => {
  const { language } = useSelector((state) => state.language);

  return dictionary
    ? dictionary[language.toLowerCase()]
    : errorText[language.toLowerCase()];
};

export default Translate;
