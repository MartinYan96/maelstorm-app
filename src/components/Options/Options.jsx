import style from './Options.module.css';

function Options({ textColors, themeColors, textChangingColor }) {

    function onToggle() {
        const options = document.querySelector(`.${style.options}`)
        options.classList.toggle(`${style.active}`)
    }
    return <div className={style.options}>
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