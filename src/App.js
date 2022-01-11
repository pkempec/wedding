import './App.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Countdown from 'react-countdown';

const App = () => {

  const { t, i18n } = useTranslation();

  useEffect(()=> {
    let lang = 'sk';
    const value = navigator.language || navigator.userLanguage;
    if (value.includes('ru') || value.includes('uk')) {
      lang = 'ru';
    }
    i18n.changeLanguage(lang);
  }, [i18n]);


  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  }

  const counter = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div/>;
    } else {
      return <span>{days} {t('days')} {hours} {t('hours')} {minutes} {t('minutes')} {seconds} {t('seconds')}</span>;
    }
  };

  return (
    <div>
      <div className='lang'>
        <button onClick={changeLanguage} value='sk' className='link-button'>Slovensky</button>
        <button onClick={changeLanguage} value='ru'className='link-button'>Русский</button>
      </div>
      <div className='content'>
        <p>{t('wedding')}</p>
        {/* 27. marec zmena castu +1h, dovtedy sa zda ze cas ide zle o -1h */}
        <Countdown date={'2022-05-21T15:00:00'} renderer={counter} />
      </div>
    </div>
  );
}

export default App;
