import React from 'react';
import { useTranslation } from 'react-i18next';
import './Program.css';

const Program = () => {
  const { t } = useTranslation();

  return(
    <div>
      <p className='program-title'>{t('program.title')}</p>
      <p className='program-content'>{t('program.transport-there')}</p> 
      <p className='program-content'>{t('program.church')}</p> 
      <p className='program-content'>{t('program.congratulations')}</p>
      <p className='program-content'>{t('program.transport-back')}</p>
      <p className='program-content'>{t('program.welcome')}</p>
      <p className='program-content'>{t('program.first-dance')}</p>
      <p className='program-content'>{t('program.cepcenie')}</p>
    </div>
  );
};

export default Program;