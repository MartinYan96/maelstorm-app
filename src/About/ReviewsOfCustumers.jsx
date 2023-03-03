import { useEffect, useState } from 'react'
import style from './ReviewsOfCustumers.module.css'

let interval = null
function ReviewsOfCustumers({ textColor }) {
    const [current, setCurrent] = useState(0)
    const [opacity, setOpacity] = useState(1)
 


    let reviewText = ["❝GRAPHIC DESIGN IS THE", "❝DESIGN IS A CONSTANT CHALLENGE TO", "The"]
    let reviewColorText = ["PARADISE OF INDIVIDUALITY", "BALANCE COMFORT WITH LUXE", "PRINCIPLE OF THE DESIGN"]
    let reviewTextContinue = [", ECCENTRICITY, HERESY, ABNORMALITY, HOBBIES AND HUMORS.❞", ", THE PRACTICAL WITH THE DESIRABLE.❞", " - THE HARMONY, RHYTHM AND BALANCE ARE ALL THE SAME WITH INTERIOR AND FASHION DESIGN.❞"]
    let custumersNames = ["- George Santayana", "- Donna Karan", "- Venus Williams"]

    function nextIcon() {

        setOpacity(0)
        setTimeout(() => {
            setOpacity(1)
            setCurrent(current + 1)
            if (current === 2) {
                setCurrent(0)
            }
        }, 500)
    }
    function prevIcon() {
        setOpacity(0)
        setTimeout(() => {
            setOpacity(1)
            setCurrent(current - 1)
            if (current === 0) {
                setCurrent(2)
            }
        }, 700)
    }
    useEffect(() => {
        interval = setInterval(() => { nextIcon() }, 2000)
        return () => clearInterval(interval);
    })

    return (
        <div className={style.reviewsOfCustumers}>
            <div className={style.tiileFrame}>
                <h2 className={style.title} >HERE'S WHAT OUR <span className={style.titleTextColor} style={{ color: textColor }}>CUSTOMERS</span> ARE SAYING!</h2>
            </div>
            <div className={style.reviews}>
                <h3 className={style.review} style={{ opacity: `${opacity}` }}>{reviewText[current]} <span style={{ color: textColor }} className={style.reviewTextColor}>{reviewColorText[current]}</span>{reviewTextContinue[current]}</h3>
                <hr style={{ width: "14%", border: "none", borderTop: "1px solid #6c6c6c" }} />
                <p className={style.custumersName} style={{ opacity: `${opacity}` }}>{custumersNames[current]}</p>
                <div className={style.sliderButtonFrame}>
                    <button className={style.prev} onClick={() => {
                        prevIcon()
                        clearInterval(interval)
                    }}>{"<<"}</button>
                    <button className={style.next} onClick={() => {
                        nextIcon()
                        clearInterval(interval)
                    }}>{">>"}</button>
                </div>
            </div>
        </div>
    )
}
export default ReviewsOfCustumers