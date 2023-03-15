import style from './Portfolio.module.css'
import { imageServices } from '../img/imgExport'
import { useEffect } from 'react';


function Portfolio({ textColor }) {
    const categoryNames = ['All', 'Illustration', 'Lettering', 'Logo', 'Web']

    useEffect(() => {
        const categoryAll = document.querySelectorAll(`.${style.category}`)[0];
        categoryAll.style.background = textColor;
        categoryAll.style.color = 'white';
    })

    const categorySelectionColor = (event) => {
        event.target.style.background = textColor
        event.target.style.color = 'white'
    }

    const allProjectElem = () => {
        const myProject = document.querySelectorAll(`.${style.project}`);
        myProject.forEach(item => item.classList.remove(style.activeProject));

    }

    const categorySelection = (event) => {
        const myProject = document.querySelectorAll(`.${style.project}`);
        const myCategory = document.querySelectorAll(`.${style.category}`);


        allProjectElem()

        for (let item of myProject) {
            for (let categ of myCategory) {
                if (event.target.id === 'categoryAll') {
                    allProjectElem()
                    categ.style.background = 'transparent'
                    categ.style.color = '#6c6c6c'
                    categorySelectionColor(event)
                }

                if (event.target.id === 'categoryIllustration') {
                    if (item.id === 'item-0' || item.id === 'item-2' || item.id === 'item-3' || item.id === 'item-7' || item.id === 'item-8' || item.id === 'item-11') {
                        continue;
                    }
                    item.classList.add(style.activeProject)
                    categ.style.background = 'transparent'
                    categ.style.color = '#6c6c6c'
                    categorySelectionColor(event)

                }

                if (event.target.id === 'categoryLettering') {
                    if (item.id === 'item-9' || item.id === 'item-10') {
                        continue;
                    }
                    item.classList.add(style.activeProject)
                    categ.style.background = 'transparent'
                    categ.style.color = '#6c6c6c'
                    categorySelectionColor(event)
                }

                if (event.target.id === 'categoryLogo') {
                    if (item.id === 'item-5' || item.id === 'item-6') {
                        continue;
                    }
                    item.classList.add(style.activeProject)
                    categ.style.background = 'transparent'
                    categ.style.color = '#6c6c6c'
                    categorySelectionColor(event)
                }

                if (event.target.id === 'categoryWeb') {
                    if (item.id === 'item-0' || item.id === 'item-1') {
                        continue;
                    }
                    item.classList.add(style.activeProject)
                    categ.style.background = 'transparent'
                    categ.style.color = '#6c6c6c'
                    categorySelectionColor(event)
                }
            }
        }
    }

    return (<div className={style.portfolio}>
        <h2 className={style.title} style={{ color: textColor }}>OUR RECENT WORK</h2>
        <h3 className={style.subtitle}>CHECK OUT SOME OF OUR MOST FAVORITE PROJECTS.</h3>
        <ul className={style.categorySelection}>
            {
                categoryNames.map((item, index) => {
                    return (
                        <li key={index} className={style.category} id={`category${item}`} onClick={categorySelection}> {item.toUpperCase()}</li>
                    )
                })
            }
        </ul>
        <div className={style.projects}>
            {imageServices.map((image, index) => {
                return (
                    <div className={style.project} id={`item-${index}`} key={index} style={{ backgroundImage: `url(${image})` }}>
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