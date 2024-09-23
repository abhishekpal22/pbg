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
import { Card, CardContent, CardMedia, Typography, } from "@mui/material";


export default function ProductSlider({ products,slidesPerView }) {
    console.log("products", products);

    return (
        <>
            <Swiper navigation={true}
                spaceBetween={30}
                slidesPerView={slidesPerView? slidesPerView : 3}
                autoplay={{
                    delay: 25000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay, Pagination]} className="product-slider">
                {
                    products &&
                    products?.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Card >
                                <CardMedia
                                    sx={{ height: 250 }}
                                    image={product.image}
                                    title={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
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
