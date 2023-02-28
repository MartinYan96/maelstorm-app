import { FaTabletAlt, FaTable, FaWrench, FaHtml5, FaTint, FaFileAlt, FaCode, FaRocket } from 'react-icons/fa';
import style from './Services.module.css'



function Services() {
    const sectionIcons = [
        FaWrench,
        FaTabletAlt,
        FaTable,
        FaHtml5,
        FaTint,
        FaFileAlt,
        FaCode,
        FaRocket
    ]
    const sectionsTitle = [
        {
            title: 'EASY TO CUSTOMIZE',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, praesentium iure tenetur officiaquisquam architecto ullam facere optio inventore rem.`
        },
        {
            title: 'FULLY RESPONSIVE',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa magnam provident delectus perspiciatis ut
            cumque quos maiores quae officiis magni.`
        },
        {
            title: 'GRID BASED DESIGN',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, nam quaerat sit! Quasi magni esse fuga
            modi ex libero deserunt.`
        },
        {
            title: 'HTML5 & CSS3',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ex nam dolorem nesciunt corporis
            quisquam saepe omnis sunt natus nostrum!`
        },
        {
            title: 'EASY COLOR CHANGE',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, praesentium iure tenetur officia
            quisquam architecto ullam facere optio inventore rem.`
        },
        {
            title: 'ONE PAGE LAYOUT',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa magnam provident delectus perspiciatis ut
            cumque quos maiores quae officiis magni.`
        },
        {
            title:'COMMENTED CODE',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, nam quaerat sit! Quasi magni esse fuga
            modi ex libero deserunt.`
        },
        {
            title: 'WILL MAKE YOU AWESOME',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ex nam dolorem nesciunt corporis
            quisquam saepe omnis sunt natus nostrum!`
        }
        
        
        
        
        
        
        
    ]

    return (
        <div className={style.services}>
            {sectionIcons.map((Icon, index) => {
                return (
                    <div key={index} className={style.sections} >
                        <Icon className={style.icon} style={{ fontSize: '45px' }} />
                        <h3 className={style.title}>{sectionsTitle[index].title}</h3>
                        <p className={style.description}>{sectionsTitle[index].description}</p>
                        <span className={style.tooltip}>An Awesome Tooltip</span>
                    </div>
                )
            })}
        </div>
    )

}

export default Services;