"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Box, CardMedia, Typography } from '@mui/material'
import "./review.css"
import useGetData from "@/app/utlis/customHooks/useGetData";
import { customerSay } from "@/app/utlis/apiUrls";


const Review = () => {
    const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;

    const { getData } = useGetData(customerSay)

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
                modules={[Navigation, Autoplay, Pagination]} className="review-slider">
                {getData?.data &&

                    getData?.data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Box className="review-wrapper">
                                <Box className="review-img">
                                    <CardMedia
                                        image={item.image.url}
                                        component="img"
                                        sx={{
                                            height: { xs: 100, md: 100, lg: 150 }, // Responsive height
                                            objectFit: 'cover', // Maintain aspect ratio
                                        }}
                                    />
                                </Box>
                                <Box className="review-body">
                                    <Typography variant='body1'>{item.description}</Typography>
                                    <Typography variant='h6' className="reviewer-title">{item.name}</Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>

    )
}

export default Review
