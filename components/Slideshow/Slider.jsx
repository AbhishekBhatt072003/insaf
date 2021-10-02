import React, { useState } from 'react'
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import styles from '../../styles/components/Slider.module.css'


export default function Slider() {


    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className={`${styles.containerSlider}`}>
            {
                dataSlider.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={slideIndex === index + 1 ? `${styles.slide} ${styles.activeAnim}` : `${styles.slide}`}>
                            <img className={`${styles.sliderImage}`} src={`/images/img${index + 1}.jpg`} />
                        </div>
                    )
                })
            }
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className={`${styles.containerDots}`}>
                {
                    Array.from({ length: 5 }).map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? `${styles.dot} ${styles.active}` : `${styles.dot}`}></div>
                    ))
                }
            </div>
        </div >
    )
}