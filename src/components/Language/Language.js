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


  const changeLanguage = (e) => {
    if (e.target.value.includes('ru')) {
      setFontClass('ru-font');
    } else {
      setFontClass('sk-font');
    }
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className='lang'>
      <button onClick={changeLanguage} value='sk' className='lang-link-button'>Slovensky</button>
      <button onClick={changeLanguage} value='ru'className='lang-link-button'>Русский</button>
    </div>
  );
};

export default Language;