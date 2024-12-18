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
import useGetData from "@/app/utlis/customHooks/useGetData";
import { mainSlider } from "@/app/utlis/apiUrls";

export default function Slider() {
  const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;

  const { getData } = useGetData(mainSlider)
  const images = getData?.data.flatMap(items => items.image)
  console.log("medium", images);

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
        modules={[Navigation, Autoplay, Pagination]} className="main-slider">
        {
          getData?.data &&
          images?.map(data =>
            <SwiperSlide key={data?.id}>
              <Image
                key={data?.id}
                // Default image source (low resolution for small screens or a fallback image)
                src={data?.url}
                alt={data?.name}
                objectFit="cover"
                objectPosition="center"
                width={0}
                height={0}
                layout="responsive"
                sizes="(max-width: 600px) 100vw, (min-width: 601px) 100vw" // Set sizes based on viewport width
                srcSet={` 
                  ${data?.url} 1x, 
                  ${data?.formats.medium.url} 1.5x`} // srcSet for different resolutions
                placeholder="blur"
                blurDataURL="data:..." // Optional: base64 image for placeholder
                style={{ width: '100%', height: '100vh', objectFit: 'cover', objectPosition: 'center' }}
              />
            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
