import { FaRegFlag, FaRegSmile, FaRegComments, FaRegEnvelope } from 'react-icons/fa'
import style from './Data.module.css'

function Data({textColor}) {
    return (
        <div className={style.data}>
            <div className={style.tiileFrame}>
                <h2 className={style.title}>SOME COOL <span style={{color:textColor}} className={style.titleTextColor}>NUMBERS </span>ABOUT MAELSTORM</h2>
            </div>
            <div className={style.dataFrame}>
                <div className={style.section}>
                    <div className={style.iconFrame}><FaRegFlag className={style.icon}  /></div>
                    <p >23</p>
                    <h4 >PROJECTS <span style={{color:textColor}} className={style.colorText}>COMPLETED</span></h4>
                </div>
                <div className={style.section}>
                    <div className={style.iconFrame}><FaRegSmile className={style.icon}  /></div>
                    <p >29</p>
                    <h4 >HAPPY <span style={{color:textColor}} className={style.colorText}>CLIENTS</span></h4>
                </div>
                <div className={style.section}>
                    <div className={style.iconFrame}><FaRegComments className={style.icon} /></div>
                    <p >67</p>
                    <h4>BRAINSTORM <span style={{color:textColor}} className={style.colorText}>SESSIONS</span></h4>
                </div>
                <div className={style.section}>
                    <div className={style.iconFrame}><FaRegEnvelope className={style.icon} /></div>
                    <p>138</p>
                    <h4 >EMAILS <span style={{color:textColor}} className={style.colorText}>EXCHANGED</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Data;