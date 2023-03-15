import style from './AboutTheMaleStromTheme.module.css'
import { FaRegEye, FaMobileAlt, FaHeart } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';


function AboutTheMaleStromTheme({ textColor }) {
    const info = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nihil, libero, tenetur perspiciatis
    eos provident laborum eum dignissimos est consectetur cupiditate tempore culpa adipisci nostrum
    incidunt obcaecati voluptatem architecto fuga..`


    const [windowInnerHeight, setWindowInnerHeight] = useState(false)
    const sectionPosition = useRef(0)
    const infoTitle = ['RETINA READY DESIGN', 'RESPONSIVE, MOBILE FRIENDLY LAYOUT', 'MAKE IT YOUR OWN']

    useEffect(() => {
        document.addEventListener("scroll", () => {
            sectionPosition.current = window.pageYOffset + 300;
            sectionPosition.current >= window.innerHeight ?
                setWindowInnerHeight(true) :
                setWindowInnerHeight(false)
        })
    }, [])

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
    const iconeHocverEffect = (event) => {

        const aboutIcons = document.querySelectorAll(`.${style.aboutIcons}`)
        const description = document.querySelectorAll(`.${style.description}`)

        aboutIcons.forEach((elem, ind, aboutIcons) => {
            if (event.target === aboutIcons[ind] || aboutIcons[ind].contains(event.target)) {
                aboutIcons[ind].classList.toggle(style.aboutIconsActive)
                description[ind].classList.toggle(style.descriptionActive)
            }
        })
    }

    const sectionPos = [stylesSection.left, stylesSection.bottom, stylesSection.right]
    const icon = [<FaRegEye className='icon' />, <FaMobileAlt className='icon' />, <FaHeart className='icon' />]


    return (
        <div className={style.aboutTheMaleStromTheme}>
            <h2 className={style.title} style={{ color: textColor }}>ABOUT THE MAELSTROM THEME</h2>
            <h3 className={style.subtitle}>EVERYTHING YOU NEED TO BE STYLISH IN ONE CONVENIENT PLACE.</h3>
            <div className={style.info}>
                {
                    infoTitle.map((item, index) => {
                        return (
                            <div key={index} className={style.section} style={sectionPos[index]}>
                                <div className={style.aboutIcons} id={`aboutIcon${index}`} onClick={iconeHocverEffect}>
                                    {icon[index]}
                                </div>
                                <h4>{item}</h4>
                                <p className={style.description}>
                                    {info}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default AboutTheMaleStromTheme;