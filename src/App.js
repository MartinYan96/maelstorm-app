import { useState } from 'react';
import { css } from '@emotion/css'
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
  const [textColor, settextColor] = useState('rgb(155, 89, 182)',);
  const [optionsStyleBool, setOptionsStyleBool] = useState(false)
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
  const textChangingColor = (event) => {
    settextColor(event.target.style.backgroundColor)
  }

  const hoverIconColors = css`
  &:hover {
    color: ${textColor};
  }
  `
  
  return (
    <div className="App" >
      <NavMenu />
      <Options textColors={textColors} themeColors={themeColors} textChangingColor={textChangingColor} optionsStyleBool={setOptionsStyleBool} />
      <Header textColor={textColor} hoverIconColors={hoverIconColors} />
      <AboutTheMaleStromTheme textColor={textColor} />
      <ReviewsOfCustumers textColor={textColor} hoverIconColors={hoverIconColors} />
      <WhatMaelstromProvides textColor={textColor} />
      <Services textColor={textColor} hoverIconColors={hoverIconColors} />
      <Portfolio textColor={textColor} optionsStyleBool={optionsStyleBool} />
      <Data textColor={textColor} hoverIconColors={hoverIconColors} />
      <Pracing textColor={textColor} />
      <Team textColor={textColor} />
      <Footer textColor={textColor} optionsStyleBool={optionsStyleBool} />
    </div>
  );
}

export default App;
