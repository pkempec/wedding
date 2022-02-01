import './App.css';
import Counter from './components/Counter/Counter';
import Intro from './components/Intro/Intro';
import Colors from './components/Colors/Colors';
import Info from './components/Info/Info';
import Language from './components/Language/Language';
import Location from './components/Location/Location';
import Program from './components/Program/Program';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {

  const [fontClass, setFontClass] = useState('svk-font');
  const { t } = useTranslation();

  const center = {lat: 48.705705, lng: 21.823010};
  const church = {
    label: "1",
    name: t('church.name'),
    link: "https://www.google.com/maps/dir//'48.623193,21.720706'/@48.6232267,21.6854272,13z/data=!4m7!4m6!1m0!1m3!2m2!1d21.720706!2d48.623193!3e0",
    position: { lat: 48.623193, lng: 21.720706 }
  }
  const celebration = {
    label: "2",
    name: t('celebration.name'),
    link: "https://www.google.com/maps/dir//48.795649,+22.006125/@48.7956608,21.9710789,13z/data=!4m7!4m6!1m0!1m3!2m2!1d22.006125!2d48.795649!3e0",
    position: { lat: 48.795649, lng: 22.006125 }
  };
  const zoom = 10;

  return (
    <div className={'app backround ' + fontClass}>
      <Language setFontClass={setFontClass} />
      <Intro />
      <Program />
      <Info />
      <Colors />
      <Counter />
      <Location center={center} church={church} celebration={celebration} zoom={zoom}/>
    </div>
  );
}

export default App;
