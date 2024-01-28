import React from 'react';
import { useState,useEffect } from 'react'
import { useSwiper } from 'swiper/react';
import {ReactComponent as LeftArrow} from '../../../assets/LeftArrow.svg';
import styles from './CarouselLeftNavigation.module.css';

function CarouselLeftNavigation () {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsBeginning(swiper.isBeginning)
        })
    },[]);
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation;