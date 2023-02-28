import style from './Pracing.module.css'
function Pracing({ textColor }) {
    const levelsOfLearning = ['PERSONAL', 'PROFESSIONAL', 'BUSINESS']
    const price = ['9.95', '19.95', '29.95']

    return (
        <div className={style.pracing}>
            <h2 className={style.title} style={{ color: textColor }}>WE'VE GOT A PRICE FOR EVERYONE</h2>
            <h3 className={style.subtitle}>OUR PRICING PLANS ARE BUILT TO GROW WITH YOU</h3>
            <div className={style.dataSections}>
                {levelsOfLearning.map((level, index) => {
                    return (
                        <div key={index} className={style.data}>
                            <h4 id={style['level' + index]} className={style.level}>{level}</h4>
                            <h5 className={style.price}><span style={{ fontSize: 24, fontWeight: 500, paddingBottom: 10 }}>$</span>{price[index]}</h5>
                            <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, vel, veritatis
                                porro praesentium iste vero.</p>
                            <ul className={style.professions}>
                                <li className={style.profession}><span style={{ color: textColor }} className={style.colorText}>BRANDING</span> REVIEW</li>
                                <li className={style.profession}><span style={{ color: textColor }} className={style.colorText}>INTERFCE</span> DESIGN</li>
                                <li className={style.profession}><span style={{ color: textColor }} className={style.colorText}>STORY</span> BOARDS</li>
                                <li className={style.profession}><span style={{ color: textColor }} className={style.colorText}>SOCIAL</span> MARKETING</li>
                                <li className={style.profession} style={{ border: 'none' }}><span className={style.colorText}>HOSTING</span> PLANS</li>
                            </ul>
                            <button id={style['select' + index]} className={style.select}>SIGN UP NOW</button>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pracing