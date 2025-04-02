import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setLanguage } from "../context/slices/language.slice";

const LanguageControler = ({ children, route }) => {
  const { language } = useSelector((state) => state.language);
  const { lang: param_lang } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const languages = ["uz", "ru", "en"];

  useEffect(() => {
    if (!languages.includes(param_lang)) {
      navigate(`/ru/${route.path}`, { replace: true });
      return;
    }

    if (language === param_lang) return;
    dispatch(setLanguage(param_lang));

    //eslint-disable-next-line
  }, [param_lang]);

  return <div>{children}</div>;
};

export default LanguageControler;
