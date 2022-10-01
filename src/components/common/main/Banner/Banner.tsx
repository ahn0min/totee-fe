import React from 'react';
import Banner1Img from '@assets/main_banner.png';
import Banner2Img from '@assets/study_banner.png'
import Banner3Img from '@assets/mentor_mentee_banner.png'
import Banner1Icon from '@assets/banner_icon_1.png';
import classes from './banner.module.scss';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export function Banner() {
  return (
    
    <div>
      <Swiper
        className="banner"
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}	// 추가
        observer = {true}
        observeParents = {true}
      >
        <SwiperSlide>
          <section className={classes.banner_wrapper}>
              <img src={Banner1Img} alt="배경화면" className={classes.img}/>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={classes.banner_wrapper}>
              <img src={Banner2Img} alt="배경화면" className={classes.img}/>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={classes.banner_wrapper}>
              <img src={Banner3Img} alt="배경화면" className={classes.img}/>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}


{/* <SwiperSlide>
  <section className={classes.banner_wrapper}>
    <div className={classes.banner_inner_wrapper}>
        <div className={classes.banner_item}>
          <div className={classes.banner_description}>
            <h1 className={classes.title}>스터디와 <span className={classes.highlight}>멘토·멘티</span>를 찾는<br></br>가장 쉬운 방법</h1>
            <span className={classes.subtitle}>간단하게 내 주변의 실력있는 멘토를 찾아<br></br> 함께 배우고, 성장하며 나의 실력을 쌓아보세요</span>
          </div>
        </div>
        <div className={classes.banner_item}>
          <img src={Banner1Icon} alt="배너 아이콘" className={classes.banner_icon}/>
        </div>
      {/* <img src={BackgroundImg} alt="" className={classes.backgroundImg}/> */}
//       </div>
//       <img src={Banner1Img} alt="배경화면" className={classes.img}/>
//   </section>
// </SwiperSlide> */}