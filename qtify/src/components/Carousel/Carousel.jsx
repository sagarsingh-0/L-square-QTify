import React, { useEffect } from 'react'
import 'swiper/css'
import {Navigation} from 'swiper'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import styles from './Carousel.module.css'
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation'
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation'


const Controls = ({data}) => {
    let swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0)
    },[data]);

    return <></>;
}

function Carousel ({data,renderComponent}) {
  return (
    <div className={styles.wrapper}>
        <Swiper initialSlide = {0} 
        style={{padding: "0px 20px"}}
        modules={{Navigation}} 
        slidesPerView={'auto'} 
        spaceBetween={40} 
        allowTouchMove >
            <Controls data={data} />
            <CarouselLeftNavigation />
            <CarouselRightNavigation />
            {data.map((ele) => (
                <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carousel;