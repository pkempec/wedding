import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Language.css';

const Language = ({setFontClass}) => {

  const { i18n } = useTranslation();

  useEffect(()=> {
    let lang = 'sk';
    setFontClass('sk-font');
    const value = navigator.language || navigator.userLanguage;
    if (value.includes('ru') || value.includes('uk')) {
      lang = 'ru';
      setFontClass('ru-font');
    }
    i18n.changeLanguage(lang);
  }, [i18n, setFontClass]);

  return (
    <div className='hide'/>
  );
};

export default Language;