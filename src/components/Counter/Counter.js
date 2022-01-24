import React from 'react';
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';
import './Counter.css';

const Counter = () => {

  const { t } = useTranslation();

  const counter = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div/>;
    } else {
      return <span className='counter-timer'>{days} {t('counter.days')} {hours} {t('counter.hours')} {minutes} {t('counter.minutes')} {seconds} {t('counter.seconds')}</span>;
    }
  };

  return (
    <div className='counter-content'>
      <p className='counter-message'>{t('counter.message')}</p>
      {/* 27. marec zmena castu +1h, dovtedy sa zda ze cas ide zle o -1h */}
      <Countdown date={'2022-05-21T15:00:00'} renderer={counter}/>
    </div>
  );
}

export default Counter;