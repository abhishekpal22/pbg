"use client"
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, FreeMode } from 'swiper/modules';
import { Box, Card, CardContent, CardMedia, Typography, } from "@mui/material";
import "./productSlider.css"


export default function ProductSlider({ products, slidesPerView }) {
    const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;
    const getSubstringOnBreakpoint = (str) => {
        const width = window.innerWidth;
    
        if (width < 600) { 
            return str.substring(0, 20); 
        } else {
            return str; // Full string for larger screens
        }
    };
    return (
        <>
            <Swiper navigation={true}
                spaceBetween={20}
                slidesPerView={slidesPerView ? slidesPerView : 4}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: slidesPerView ? slidesPerView : 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation, Autoplay, Pagination, FreeMode]} className="product-slider">
                {
                    products &&
                    products?.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Card elevation={0} className="card">
                                {product.image &&
                                    <Box className="card-img">
                                        <CardMedia
                                            image={product.image.url}
                                            // title={product.title}
                                            component="img"
                                            sx={{
                                                height: { xs: 200, md: 200, lg: 350 }, // Responsive height
                                                objectFit: 'cover', // Maintain aspect ratio
                                            }}
                                        />
                                    </Box>

                                }
                                {
                                    product.title &&
                                    <CardContent className="card-body">
                                        <Typography className="card-title" variant="h5" >
                                            {getSubstringOnBreakpoint(product.title)}
                                        </Typography>
                                    </CardContent>
                                }

                            </Card>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
