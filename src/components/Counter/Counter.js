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
      let tDays = t('counter.days');
      let tHours = t('counter.hours');
      let tMinutes = t('counter.minutes');
      let tSeconds = t('counter.seconds');
      if (days === 1) {
        tDays = t('counter.dayss');
      }
      if (hours < 5 && hours > 1) {
        tHours = t('counter.hourss');
      } else if (hours === 1) {
        tHours = t('counter.hoursss');
      }
      if (minutes < 5 && minutes > 1) {
        tMinutes = t('counter.minutess');
      } else if (minutes === 1) {
        tMinutes = t('counter.minutesss');
      }
      if (seconds < 5 && seconds > 1) {
        tSeconds = t('counter.secondss');
      } else if (seconds === 1) {
        tSeconds = t('counter.secondsss');
      }
      return <span className='counter-timer'>{days} {tDays} {hours} {tHours} {minutes} {tMinutes} {seconds} {tSeconds}</span>;
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