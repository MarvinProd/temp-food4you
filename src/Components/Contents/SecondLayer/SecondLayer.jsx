import React from 'react'
import './SecondLayer.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination, Navigation} from 'swiper'


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image_2 from '../../../assets/tri.png';
import slide_image_3 from '../../../assets/tri.png';
import slide_image_1 from '../../../assets/tri.png';


function SecondLayer() {
  return (
    <div className='body'>

      <div className='top_title'>

          <h1 className='tit1'> DISCOVER</h1>
          <h1 className='tit2'>
            UPCOMING EVENTS
          </h1>

            <p className='tit3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, tempora minus et nostrum, assumenda excepturi cumque officia, quaerat dolore fugiat maiores rem quisquam beatae ratione aspernatur. Voluptatem ea ad consequatur.
            </p>

      </div>
          <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 50,
          modifier: 6,
        
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className='swiper_slide'>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide >
        <SwiperSlide className='swiper_slide'>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiper_slide'>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>


        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
      
    </div>

  );
}


export default SecondLayer  