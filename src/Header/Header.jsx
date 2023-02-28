import { useEffect, useState } from 'react';
import { FaFacebookF, FaVimeoV, FaPinterestP, FaAngleDown } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineGooglePlus } from 'react-icons/ai';
import style from './Header.module.css'

function Header({ textColor }) {
    let headerHeight = window.innerHeight;
    const [headerSliderCurrent, setheaderSliderCurrent] = useState(0);
    const [headerSliderTransitions, setheaderSliderTransitions] = useState(0.5);
    const scrollPage = () => {
        window.scrollBy(0, window.innerHeight)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setheaderSliderCurrent(headerSliderCurrent => headerSliderCurrent - 100);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    
    
    useEffect(() => {
        if (headerSliderCurrent === -400) {
            setheaderSliderCurrent(0)
            setheaderSliderTransitions(0)
        }
        if (headerSliderTransitions === 0 && headerSliderCurrent === -100) {
            setheaderSliderTransitions(.5)
        }
        
    },[headerSliderCurrent,headerSliderTransitions])

    return (
        <header className={style.header} style={{height:headerHeight}}>
            <div className={style.heroHeader}>
                <h1 className={style.headerName}>MAELSTORM</h1>
                <div className={style.headerPageInfo}>
                    <div className={style.headerPageInfoFon}>
                        <div className={style.headerPageInfoSlidersFrame}>
                            <div className={style.headerPageInfoSliders} style={{ top: `${headerSliderCurrent}%`, transition: `${headerSliderTransitions}s` }}>
                                <p className={style.headerPageInfoslide}>We Believe in  <span className={style.headerPageInfoSlideColorText} style={{ color: textColor }}>Great Design</span></p>
                                <p className={style.headerPageInfoslide}>We Are <span className={style.headerPageInfoSlideColorText} style={{ color: textColor }}>Great Designers</span> </p>
                                <p className={style.headerPageInfoslide}>We Do <span className={style.headerPageInfoSlideColorText} style={{ color: textColor }}>Incredible Designs</span></p>
                                <p className={style.headerPageInfoslide}>Great Design <span className={style.headerPageInfoSlideColorText} style={{ color: textColor }}>We Believe in</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={style.spreadTheWord}>SPREAD THE WORD</p>
                <div className={style.headerSocialLinks}>
                    <a href="https://ru-ru.facebook.com/" className={style.headerSocialLinksFrame}><FaFacebookF /></a>
                    <a href="https://twitter.com/?lang=ru" className={style.headerSocialLinksFrame}><AiOutlineTwitter /></a>
                    <a href="https://vimeo.com/" className={style.headerSocialLinksFrame}><FaVimeoV /></a>
                    <a href="https://www.google.com/" className={style.headerSocialLinksFrame}><AiOutlineGooglePlus /></a>
                    <a href="https://www.pinterest.com/" className={style.headerSocialLinksFrame}><FaPinterestP /></a>
                </div>
                <FaAngleDown className={style.headerAngleDown} onClick={scrollPage} />
            </div>
        </header>
    )
}

export default Header;