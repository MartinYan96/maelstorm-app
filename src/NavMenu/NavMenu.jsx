import { useEffect, useRef, useState } from 'react';
import style from './NavMenu.module.css'



function NavMenu() {
    const [windowInnerHeight, setWindowInnerHeight] = useState(false)
    const windowScrollPos = useRef(0)

    useEffect(() => {
        function navMenuPosition() {
            windowScrollPos.current = window.pageYOffset
            windowScrollPos.current >= window.innerHeight ? setWindowInnerHeight(true) : setWindowInnerHeight(false)
        }
        document.addEventListener('scroll',navMenuPosition) 
    }, [windowInnerHeight])

 
    return <nav style={{top: windowInnerHeight ? '0px' : '-100px'}} className={style.navMenu}>
        <h2>MAELSTORM</h2>
        <ul>
            <li><a href="/#">HOME</a></li>
            <hr />
            <li><a href="/#">ABOUT</a></li>
            <hr />
            <li><a href="/#">SEVRICES</a></li>
            <hr />
            <li><a href="/#">PORTFOLIO</a></li>
            <hr />
            <li><a href="/#">PRACING</a></li>
            <hr />
            <li><a href="/#">TEAM</a></li>
            <hr />
            <li><a href="/#">BLOG</a></li>
            <hr />
            <li><a href="/#">FEATURES</a></li>
            <hr />
            <li><a href="/#">CONTACT</a></li>
        </ul>
    </nav>


}

export default NavMenu;
