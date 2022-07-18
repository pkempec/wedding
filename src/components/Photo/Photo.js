import React from 'react';
import './Photo.css';
import { useTranslation } from 'react-i18next';

const Photo = () => {

  const { t } = useTranslation();

  return (
    <div className='photo-content'>
      <span className='photo'/>
      {/* "" */}
      <a href="https://photos.app.goo.gl/ms4qRsew3UtncfTy7">{t('photo.info')}</a>
    </div>
  )
};

export default Photo;