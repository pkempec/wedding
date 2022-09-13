import React from 'react';
import './Video.css';
import { useTranslation } from 'react-i18next';

const Photo = () => {

  const { t } = useTranslation();

  return (
    <div className='video-content'>
      <span className='video'/>
      {/* "" */}
      <a href="https://youtu.be/67RkwcOD9Vg"> {t('video.info')}</a>
    </div> 
  )
};

export default Photo;