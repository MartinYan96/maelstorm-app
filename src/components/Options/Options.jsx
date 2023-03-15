import style from './Options.module.css';

function Options({ textColors, themeColors, textChangingColor, optionsStyleBool }) {

    const onToggle = () => {
        const options = document.querySelector(`.${style.options}`)
        options.classList.toggle(`${style.active}`)
    }
    const toogleTheme = (event) => {
        if (event.target.id === 'themeButton0') {
            document.documentElement.style.setProperty("--themeColorWhite", "black");
            document.documentElement.style.setProperty("--themeColorBlack", "white");
            document.documentElement.style.setProperty("--aboutTextColor", "white")
            document.documentElement.style.setProperty("--subtitleColor", "white")
            document.documentElement.style.setProperty("--aboutIconsColor", 'white')
            document.documentElement.style.setProperty("--portfolioCategoryButtonColor", "black")
            document.documentElement.style.setProperty("--navmenu", "black")
            document.documentElement.style.setProperty("--footerBackgrondColor", "black")
            optionsStyleBool(false)


        }

        if (event.target.id === 'themeButton1') {
            document.documentElement.style.setProperty("--themeColorWhite", "white");
            document.documentElement.style.setProperty("--themeColorBlack", "black");
            document.documentElement.style.setProperty("--aboutTextColor", "rgb(47,47,47)")
            document.documentElement.style.setProperty("--subtitleColor", "rgb(108,108,108)")
            document.documentElement.style.setProperty("--aboutIconsColor", "rgba(0, 0, 0, 0.4)")
            document.documentElement.style.setProperty("--portfolioCategoryButtonColor", "rgb(108,108,108)")
            document.documentElement.style.setProperty("--navmenu", "rgb(236,240,241)")
            document.documentElement.style.setProperty("--footerBackgrondColor", "rgb(84,89,95)")
            optionsStyleBool(true)

        }
    }
    return <div className={style.options}>
        <div className={style.optionMenu}>
            <div className={style.colorsMenu}>
                <h3 className={style.colorOptionTitle}>COLOR OPTIONS</h3>
                {textColors.map(color => {
                    return <div className={style.textColors} key={color} style={{ backgroundColor: color }} onClick={textChangingColor}></div>
                })}
                <h3 className={style.themeOptionTitle}>THEME OPTION</h3>
                {themeColors.map((color, index) => {
                    return <button className={style.themeColors} key={color} style={{ backgroundColor: color }} id={`themeButton${index}`} onClick={toogleTheme}></button>
                })}
            </div>

        </div>
        <button className={style.optionButton} onClick={onToggle}>OPTIONS</button>
    </div >
}

export default Options