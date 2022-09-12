import React from 'react';
import './Video.css';
import { useTranslation } from 'react-i18next';

const Photo = () => {

  const { t } = useTranslation();

  return (
    <div className='video-content'>
      <span className='video'/>
      {/* "" */}
      <a href="https://photos.google.com/share/AF1QipOmT-07WpgBqMve5gtzfyVH6p-kfUHYKVxDQLpzLSVPbZnJk_wCT3pWrWtIBINuMg/photo/AF1QipOM8BdO3ojszihsQL1T1aGnymLTAiY1OZW1XY6_?key=T21PVmFsR2FBM24zUkNNb0RBOGxtX2VPbWJiOUNR"> {t('video.info')}</a>
    </div> 
  )
};

export default Photo;