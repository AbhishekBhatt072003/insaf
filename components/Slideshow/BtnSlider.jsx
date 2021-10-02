
import styles from '../../styles/components/BtnSlider.module.css'
import '../../public/icons/leftArrow.svg'
import '../../public/icons/rightArrow.svg'
export default function BtnSlider({ direction, moveSlide }) {
    return (
        <button onClick={moveSlide} className={direction === "next" ? `${styles.btnSlide} ${styles.next}` : `${styles.btnSlide} ${styles.prev}`}>
            <img className={`${styles.slideImage}`} src={`/icons/${direction === "next" ? "rightArrow" : "leftArrow"}.svg `} />
        </button>
    )
}


