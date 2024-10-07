"use client"
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination,FreeMode } from 'swiper/modules';
import { Card, CardContent, CardMedia, Typography, } from "@mui/material";
import "./productSlider.css"


export default function ProductSlider({ products,slidesPerView }) {
    const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;

    return (
        <>
            <Swiper navigation={true}
                spaceBetween={30}
                slidesPerView={slidesPerView? slidesPerView : 3}
                autoplay={{
                    delay: 25000,
                    disableOnInteraction: false,
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay, Pagination,FreeMode]} className="product-slider">
                {
                    products &&
                    products?.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Card >
                                <CardMedia
                                    sx={{ height: 350 }}
                                    image={baseURL+product.image.url}
                                    title={product.title}
                                    component="img"
                                />
                                <CardContent>
                                    <Typography className="card-title" variant="h5" >
                                        {product.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
