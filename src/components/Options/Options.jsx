import { useState } from 'react';
import style from './Options.module.css';

function Options({ textColors, themeColors, textChangingColor }) {
    const [isOpenMenu, setIsOpenMenu] = useState(true);


    function onToggle() {
        setIsOpenMenu((prev)=> !prev)
    }
    return <div className={style.options} style={{ left: `${isOpenMenu ? -250 : 0}px` }}>
        <div className={style.optionMenu}>
            <div className={style.colorsMenu}>
                <h3 className={style.colorOptionTitle}>COLOR OPTIONS</h3>
                {textColors.map(color => {
                    return <div className={style.textColors} key={color} style={{ backgroundColor: color }} onClick={textChangingColor}></div>
                })}
                <h3 className={style.themeOptionTitle}>THEME OPTION</h3>
                {themeColors.map(color => {
                    return <div className={style.themeColors} key={color} style={{ backgroundColor: color }}></div>
                })}
            </div>

        </div>
        <button className={style.optionButton} onClick={onToggle}>OPTIONS</button>
    </div >
}

export default Options