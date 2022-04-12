import React from 'react';
import { useTranslation } from 'react-i18next';
import './Intro.css';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className='intro-content'>
      <p className='intro-names'>{t('intro.name')}</p>
      <p className='intro-message'>{t('intro.message')}</p>
      <p className='intro-date'>{t('intro.date')}</p>
      <p className='intro-church'>{t('intro.church')}</p>
      <p className='intro-feast'>{t('intro.feast')}</p>
    </div>
  )
}

export default Intro;