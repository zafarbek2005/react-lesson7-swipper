import React from 'react'
import './home.scss'
import Hero_img  from '../../Components/Home/img/4.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation ,Autoplay} from 'swiper/modules';
const Home = () => {
  return (
    <>
          <Swiper loop={true}
           navigation={true}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
            modules={[Navigation,Autoplay]} className="mySwiper">
        <SwiperSlide><img src= {Hero_img} alt="" /></SwiperSlide>
        <SwiperSlide><img src= {Hero_img} alt="" /></SwiperSlide>
        <SwiperSlide><img src= {Hero_img} alt="" /></SwiperSlide>
        <SwiperSlide><img src= {Hero_img} alt="" /></SwiperSlide>
 
      </Swiper>
    
    </>
  )
}

export default Home