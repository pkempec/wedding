import './App.css';
import Counter from './components/Counter/Counter';
import Intro from './components/Intro/Intro';
import Colors from './components/Colors/Colors';
import Info from './components/Info/Info';
import Language from './components/Language/Language';
import Location from './components/Location/Location';
import React, { useState } from 'react';

const App = () => {

  const [fontClass, setFontClass] = useState('svk-font');

  const center = {lat: 48.705705, lng: 21.823010};
  const church = { lat: 48.623193, lng: 21.720706 };
  const celebration = { lat: 48.795649, lng: 22.006125 };
  const zoom = 10;

  return (
    <div className={'app backround ' + fontClass}>
      <Language setFontClass={setFontClass} />
      <Intro />
      <Colors />
      <Info />
      <Counter />
      <Location center={center} church={church} celebration={celebration} zoom={zoom}/>
    </div>
  );
}

export default App;
