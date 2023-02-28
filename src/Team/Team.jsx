import style from './Team.module.css'
import { imageTeam } from '../img/imgExport'

function Team({textColor}) {
    return (
        <div className={style.team}>
            <h2 className={style.title} style={{color:textColor}}>TEAM BEHIND MAELSTORM</h2>
            <h3 className={style.subtitle}>DESIGN OUR PASSION AND OBSESSION</h3>
            <div className={style.teamMembers}>
                {imageTeam.map((image, index) => {
                    return (
                        <div key={index} className={style.teamMemberInfo}>
                            <div className={style.teamMember} style={{ backgroundImage: `url(${image})` }}> <div className={style.heroHeader}>+
                                <p className={style.posterDesign}></p>
                            </div></div>
                            <h4 className={style.name}>JANE SUMMERS</h4>
                            <h5 className={style.profession}>UI DEVELOPER</h5>
                            <p className={style.aboutATeamMember}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, adipisci quasi quod fugiat
                                obcaecati! Mollitia amet ducimus ipsa consequuntur similique.</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Team