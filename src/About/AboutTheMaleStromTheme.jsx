import style from './AboutTheMaleStromTheme.module.css'
import { FaRegEye, FaMobileAlt, FaHeart } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';


function AboutTheMaleStromTheme({ textColor }) {
    const text = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nihil, libero, tenetur perspiciatis
    eos provident laborum eum dignissimos est consectetur cupiditate tempore culpa adipisci nostrum
    incidunt obcaecati voluptatem architecto fuga..`

  
    const [windowInnerHeight, setWindowInnerHeight] = useState(false)
    const [aboutIcon, setAboutIcon] = useState(true)
    const [aboutIcon1, setAboutIcon1] = useState(true)
    const [aboutIcon2, setAboutIcon2] = useState(true)
    const sectionPosition = useRef(0)



    useEffect(() => {
        document.addEventListener("scroll", () => {
            sectionPosition.current = window.pageYOffset + 300;
            sectionPosition.current >= window.innerHeight ?
            setWindowInnerHeight(true) :
            setWindowInnerHeight(false)
        })
    },[])

    const stylesSection = {
        left: {
            left: windowInnerHeight ? '0' : '-200px',
            opacity: windowInnerHeight ? '1' : '0'
        },
        bottom: {
            bottom: windowInnerHeight ? '0' : '-200px',
            opacity: windowInnerHeight ? '1' : '0'
        },
        right: {
            right: windowInnerHeight ? '0' : '-200px',
            opacity: windowInnerHeight ? '1' : '0'
        }
    }
    function iconeHocverEffect() {
        setAboutIcon(!aboutIcon)
    }
    function iconeHocverEffect1() {
        setAboutIcon1(!aboutIcon1)
    }
    function iconeHocverEffect2() {
        setAboutIcon2(!aboutIcon2)
    }



    return (
        <div className={style.aboutTheMaleStromTheme}>
            <h2 className={style.title} style={{ color: textColor }}>ABOUT THE MAELSTROM THEME</h2>
            <h3 className={style.subtitle}>EVERYTHING YOU NEED TO BE STYLISH IN ONE CONVENIENT PLACE.</h3>
            <div className={style.info}>
                <div className={style.section} style={stylesSection.left} >
                    <div className={aboutIcon ?
                        style.aboutIcons :
                        style.aboutIconsActive}
                        onClick={iconeHocverEffect}>
                        <FaRegEye />
                    </div>
                    <h4>RETINA READY DESIGN</h4>
                    <p style={aboutIcon ?
                        { backgroundColor: "transparent", color: "black" } :
                        { backgroundColor: "black", color: "white", borderRadius: "5px" }}>
                        {text}
                    </p>
                </div>
                <div className={style.section} style={stylesSection.bottom}>
                    <div className={aboutIcon1 ?
                        style.aboutIcons :
                        style.aboutIconsActive}
                        onClick={iconeHocverEffect1}>
                        <FaMobileAlt />
                    </div>
                    <h4>RESPONSIVE, MOBILE FRIENDLY LAYOUT</h4>
                    <p style={aboutIcon1 ?
                        { backgroundColor: "transparent", color: "black" } :
                        { backgroundColor: "black", color: "white", borderRadius: "5px" }}>
                        {text}
                    </p>
                </div>
                <div className={style.section} style={stylesSection.right}>
                    <div className={aboutIcon2 ?
                        style.aboutIcons :
                        style.aboutIconsActive}
                        onClick={iconeHocverEffect2}>
                        <FaHeart />
                    </div>
                    <h4>MAKE IT YOUR OWN</h4>
                    <p style={aboutIcon2 ?
                        { backgroundColor: "transparent", color: "black" } :
                        { backgroundColor: "black", color: "white", borderRadius: "5px" }}>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutTheMaleStromTheme;