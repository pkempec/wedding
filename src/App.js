import './App.css';
import Language from './components/Language/Language';
import React, { useState, useEffect } from 'react';
import Instagram from './components/Instagram/Instagram';
import Thanks from './components/Thanks/Thanks';
import Photo from './components/Photo/Photo';

const App = () => {

  const [fontClass, setFontClass] = useState('svk-font');
  const [backgroundImageClass, setBackgroundImageClass] = useState('background-image-1');

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      setBackgroundImageClass('background-image-' + Math.floor(Math.random() * 15))
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className={'app backround ' + fontClass + ' ' + backgroundImageClass}>
      <Language setFontClass={setFontClass} />
      <div className='message'>
        <Thanks />
        <div className='links'>
          <Photo />
          <Instagram />
        </div>
      </div>
    </div>
  );
}

export default App;
