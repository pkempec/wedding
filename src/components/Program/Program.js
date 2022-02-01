import React from 'react';
import { useTranslation } from 'react-i18next';
import './Program.css';

const Program = () => {
  const { t } = useTranslation();

  return(
    <div>
      <p className='program-title'>{t('program.title')}</p>
      <div className='program-content'>
        <div className='program-row'>
          <div className='program-cell'>14:00</div>
          <div className='program-cell'>{t('program.transport-there')}</div>
        </div>
        <div className='program-row'>
          <div className='program-cell'>15:00</div>
          <div className='program-cell'>{t('program.church')}</div>
        </div>
        <div className='program-row'>
          <div className='program-cell'>15:50~</div>
          <div className='program-cell'>{t('program.congratulations')}</div>
        </div>
        <div className='program-row'>
          <div className='program-cell'>16:20</div>
          <div className='program-cell'>{t('program.transport-back')}</div>
        </div>
        <div className='program-row'>
          <div className='program-cell'>17:10~</div>
          <div className='program-cell'>{t('program.welcome')}</div>
        </div>
        <div className='program-row'>
          <div className='program-cell'>18:00~</div>
          <div className='program-cell'>{t('program.first-dance')}</div>
        </div>
        <div className='program-row'>
          <div className='program-cell'>00:00~</div>
          <div className='program-cell'>{t('program.cepcenie')}</div>
        </div>
        <div className='program-row'>
          <div className='program-cell'>01:00+</div>
          <div className='program-cell'>{t('program.party')}</div>
        </div>
      </div>
    </div>
  );
};

export default Program;