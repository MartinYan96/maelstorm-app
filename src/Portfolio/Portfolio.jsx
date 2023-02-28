import style from './Portfolio.module.css'
import { imageServices } from '../img/imgExport'

function Portfolio({textColor}) {
    return (<div className={style.portfolio}>
        <h2 className={style.title} style={{color:textColor}}>OUR RECENT WORK</h2>
        <h3 className={style.subtitle}>CHECK OUT SOME OF OUR MOST FAVORITE PROJECTS.</h3>
        <ul className={style.categorySelection}>
            <li className={style.category}>ALL</li>
            <li className={style.category}>ILLUSTRATION</li>
            <li className={style.category}>LETTERING</li>
            <li className={style.category}>LOGO</li>
            <li className={style.category}>WEB</li>
        </ul>
        <div className={style.projects}>
            {imageServices.map((image, index) => {
                return (
                    <div className={style.project} key={index} style={{ backgroundImage: `url(${image})` }}>
                        <div className={style.heroHeader}>+
                            <p className={style.posterDesign}> POSTER DESIGN</p>
                        </div>
                    </div>
                )
            })}

        </div>
    </div>)
}

export default Portfolio