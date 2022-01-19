import React from 'react';
import { useTranslation } from 'react-i18next';
import './Colors.css';

const Colors = () => {
  const { t } = useTranslation();
  return (
    <div className='colors-content'>
      <p>{t('colors.title')}</p>
      <span className='colors-circle colors-circle-1'/>
      <span className='colors-circle colors-circle-2'/>
      <span className='colors-circle colors-circle-3'/>
      <span className='colors-circle colors-circle-4'/>
    </div>
  )
};

export default Colors;