"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

import onephoto from "../../assets/images/icon/onephoto.png";
import twophoto from "../../assets/images/icon/twophoto.png";
import treephoto from "../../assets/images/icon/treephoto.png";
import fourphoto from "../../assets/images/icon/fourphoto.png";
const images = [onephoto, twophoto, treephoto, fourphoto];

function Slider() {
  return (
    <div className="w-[389px] h-[479px] mt-[94 px]  lg:ml-[286px] lg:mr-[96px] lg:mb-[79px]   ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 1000 }}
        loop
        className="rounded-2xl overflow-hidden "
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="     ">
              <Image
                src={src}
                alt="slidee"
                className="object-cover   "
                priority={index === 0}
          
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
