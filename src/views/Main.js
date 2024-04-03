import React from "react";

import main_01 from "../assets/img/gun_01.png";
import main_02 from "../assets/img/gun_02.png";
import main_03 from "../assets/img/gun_03.png";
import main_04 from "../assets/img/gun_04.png";
import main_05 from "../assets/img/gun_05.png";
import main_06 from "../assets/img/gun_06.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function Main() {
  return (
    <div id="main">
      <div className="main_bg">
        <div className="main_body">
          <div className="con_img">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 100,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={main_01} alt="이미지" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={main_02} alt="이미지" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={main_03} alt="이미지" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={main_04} alt="이미지" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={main_05} alt="이미지" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={main_06} alt="이미지" />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div class="con_img">
            <div></div>
            <div>
              <img src={main_02} alt="이미지" />
            </div>
            <div>
              <img src={main_03} alt="이미지" />
            </div>
            <div>
              <img src={main_04} alt="이미지" />
            </div>
            <div>
              <img src={main_05} alt="이미지" />
            </div>
            <div>
              <img src={main_06} alt="이미지" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
