"use client"
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import s1 from "../../_assets/s1.webp"
import s2 from "../../_assets/s2.webp"
import s3 from "../../_assets/s3.webp"

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 25000,
              disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation,Autoplay,Pagination]} className="main-slider">
                
        <SwiperSlide>
            <Image 
            src={s1}
            // width={1920}
            // height={700}
            objectFit="cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:..."
        //   fill
            alt="pal-brothers-group"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image 
            src={s2}
            width={1920}
            height={900}
            alt="pal-brothers-group"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image 
            src={s3}
            width={1920}
            height={900}
            alt="pal-brothers-group"
            />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
