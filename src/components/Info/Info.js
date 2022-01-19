import React from 'react';
import { useTranslation } from 'react-i18next';
import './Info.css';

const Info = () => {
  const { t } = useTranslation();
  return (
    <div className='info-content'>
      <p>{t('info.message')}</p>
    </div>
  )
};

export default Info;