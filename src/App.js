import { useState } from 'react';
import './App.css';
import Header from './Header/Header.jsx'
import Options from './components/Options/Options.jsx'
import AboutTheMaleStromTheme from './About/AboutTheMaleStromTheme';
import ReviewsOfCustumers from './About/ReviewsOfCustumers.jsx';
import NavMenu from './NavMenu/NavMenu';
import WhatMaelstromProvides from './About/WhatMaelstromProvides';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Data from './Portfolio/Data';
import Pracing from './Pracing/Pracing';
import Team from './Team/Team';
import Footer from './Footer/Footer';


function App() {
  const [textColor, settextColor] = useState('');
  const textColors = [
    'rgb(41, 128, 185)',
    'rgb(95, 116, 136)',
    'rgb(230, 126, 34)',
    'rgb(155, 89, 182)',
    'rgb(46, 204, 113)',
    'rgb(241, 196, 15)',
    'rgb(231, 76, 60)',
    'rgb(172, 211, 35)',
    'rgb(76, 114, 152)',
    'rgb(149, 165, 166)'
  ]
  const themeColors = [
    'rgb(50, 51, 51)',
    'rgb(236, 240, 241)'
  ]
  function textChangingColor(event) {
    settextColor(event.target.style.backgroundColor)
  }
  return (
    <div className="App" >
      <NavMenu />
      <Options textColors={textColors} themeColors={themeColors} textChangingColor={textChangingColor} />
      <Header textColor={textColor} />
      <AboutTheMaleStromTheme textColor={textColor} />
      <ReviewsOfCustumers textColor={textColor} />
      <WhatMaelstromProvides textColor={textColor} />
      <Services textColor={textColor} />
      <Portfolio textColor={textColor} />
      <Data textColor={textColor} />
      <Pracing textColor={textColor} />
      <Team textColor={textColor} />
      <Footer textColor={textColor} />
    </div>
  );
}

export default App;
