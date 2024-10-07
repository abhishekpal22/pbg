"use client"
import React, { useState } from 'react'
import Slider from './_components/slider/Slider'
import { Box, CardMedia, Container, Divider, Grid2, Typography } from '@mui/material'
import ProductSlider from './_components/productslider/ProductSlider'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useGetData from './utlis/customHooks/useGetData'
import { event, girl_kids, jeans_top, kurti_frock, lehenga, saree, tentBanner } from './utlis/apiUrls'
let products = [
  {
    id: 1,
    image: {
      url: "https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873"
    },
    title: "Saree"
  },
  {
    id: 2,
    image: {
      url: "https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873"
    },
    title: "Saree 2"
  },
  {
    id: 3,
    image: {
      url:"https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873"
    },
    title: "Saree 3"
  },
  {
    id: 4,
    image: {
      url:"https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873"
    },
    title: "Saree 4"
  },
  {
    id: 5,
    image: {
      url: "https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873"
    },
    title: "Saree 5"
  },
  {
    id: 6,
    image: {
      url: "https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873"
    },
    title: "Saree 6"
  },
]
const actions = [
  { icon: <WhatsAppIcon />, name: 'WhatsApp' },
];
const Home = () => {
  const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const wahts = () => {
    if (window.confirm("Are you want to caht with WahtsApp:")) {
      window.open("https://wa.me/8317068171", "_blank")
    }
  }

  const { getData} = useGetData(saree)
  const { getData:lehengaData} = useGetData(lehenga)
  const { getData:kurtiData} = useGetData(kurti_frock)
  const { getData:jeansData} = useGetData(jeans_top)
  const { getData:girlKData} = useGetData(girl_kids)
  const { getData:eventsData} = useGetData(event)
  const { getData:tentBannerData} = useGetData(tentBanner)
  const sarees =  getData?.data
  const lehengas =  lehengaData?.data
  const kurties =  kurtiData?.data
  const jeans =  jeansData?.data
  const gKids =  girlKData?.data
  const events =  eventsData?.data
  const tentBanners =  tentBannerData?.data[0].image.url
  // console.log("tentBanners", tentBanners[0].image.url);
  
  
  return (
    <div>
      <Slider />
      <Container>

        <Box className="mt-40">
          <Box >
            <Typography variant='h4' className="main-heading">Top Saree's</Typography>
            <ProductSlider products={sarees} />
          </Box>

          <Box className="mt-40">
            <Typography variant='h4' className="main-heading ">Top Lengha and Gaun</Typography>
            <ProductSlider products={lehengas} />
          </Box>

          <Box className="mt-40">
            <Typography variant='h4' className="main-heading ">Kurti & Frok</Typography>
            <ProductSlider products={kurties} />
          </Box>

          <Box className="mt-40">
            <Typography variant='h4' className="main-heading ">Ladies Jeans & Top</Typography>
            <ProductSlider products={jeans} />
          </Box>

          {/* <Divider className='mt-40' /> */}

          <Box className="mt-40">
            <Typography variant='h4' className="main-heading">Girl Kid's</Typography>
            <ProductSlider products={gKids} slidesPerView={4} />
          </Box>
          <Box className="mt-40">
            <Typography variant='h4' className="main-heading">Pant & Shirt's</Typography>
            <ProductSlider products={products} slidesPerView={4} />
          </Box>

          <Box className="mt-40">
            <Typography variant='h4' className="main-heading">Jeans & Tshirt's</Typography>
            <ProductSlider products={products} slidesPerView={4} />
          </Box>

          <Box className="mt-40">
            <Typography variant='h4' className="main-heading">Boy's Kid's</Typography>
            <ProductSlider products={products} slidesPerView={4} />
          </Box>
        </Box>
      </Container>
      <Box className="tent-main-banner mt-40">
        <CardMedia
          sx={{ height: 300 }}
          image={baseURL + tentBanners}
          title="tent main banner"
        />
      </Box>

      <Container>
        <Box className="mt-40">
          <Typography variant='h4' className="main-heading">Our Events</Typography>
          <ProductSlider products={events} slidesPerView={2} />
        </Box>

        <Box className="mt-40">
          <Typography variant='h4' className="main-heading">Our Tent Producs</Typography>
          <ProductSlider products={products} slidesPerView={4} />
        </Box>

        <Box className="mt-40">
          <Typography variant='h4' className="main-heading">Our Decorations</Typography>
          <ProductSlider products={products} slidesPerView={3} />
        </Box>

        <Box className="mt-40">
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Typography variant='h4' className="main-heading">What Customer Says</Typography>
              <ProductSlider products={products} slidesPerView={1} />
            </Grid2>
            <Grid2 size={6}>
              <Typography variant='h4' className="main-heading">Find our location on Map</Typography>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.3445603349396!2d82.91964057450785!3d26.987648156867905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39912bf6a3247c4b%3A0x33fb8e61f02a7852!2zUGFsIEJyb3RoZXJzIFZhc3RyYWxheWEg4KSq4KS-4KSyIOCkrOCljeCksOCkpuCksOCljeCkuCDgpLXgpLjgpY3gpKTgpY3gpLDgpL7gpLLgpK8!5e0!3m2!1sen!2sin!4v1727117614009!5m2!1sen!2sin" height="250" style={{ width: "100%", border: "none" }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" sx={{ border: 0 }}></iframe>

            </Grid2>
          </Grid2>
        </Box>

        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<CallIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={wahts}
            />
          ))}
        </SpeedDial>
      </Container>
    </div>
  )
}

export default Home