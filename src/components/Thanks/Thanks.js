import React from 'react';
import { useTranslation } from 'react-i18next';
import './Thanks.css';

const Thanks = () => {
  const { t } = useTranslation();

  return (
    <div className='thanks-content'>
      <p className='thanks-info'>{t('thanks.info')}</p>
    </div>
  )
}

export default Thanks;