import { useRef, useState } from 'react'
import style from './WhatMaelstromProvides.module.css'
import { macMonitorSlider } from '../img/imgExport'


function WhatMaelstromProvides({textColor}) {
    const [monitorDispSliderPos, setMonitorDispSliderPos] = useState(0)
    const sliderImg = useRef()
    const current = useRef(0)

    function e() {
        current.current = current.current + 1
        if (current.current === 5) {
            current.current = 0
            setMonitorDispSliderPos(0)
        }
        else {
            setMonitorDispSliderPos(monitorDispSliderPos - sliderImg.current.clientWidth)
        }

    }

    return (
        <div className={style.whatMaelstromProvides}>
            <h2 className={style.title} style={{color:textColor}}>WHAT MAELSTROM PROVIDES</h2>
            <h3 className={style.subtitle}>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. VERO, ENIM.</h3>
            <div className={style.monitor}>
                <div className={style.monitorDisplay}>
                    <div className={style.monitorDisplaySlider} style={{ left: monitorDispSliderPos }}>
                        {macMonitorSlider.map((slider, index) => {
                            return (
                                <div ref={sliderImg} key={index} className={style.sliderImg} style={{ backgroundImage: `url(${slider})` }} onClick={e}></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatMaelstromProvides