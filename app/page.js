"use client"
import React, { useState } from 'react'
import Slider from './_components/slider/Slider'
import { Box, CardMedia, Container, Divider, Grid2, Typography } from '@mui/material'
import ProductSlider from './_components/productslider/ProductSlider'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
let products = [
  {
    id: 1,
    image: "https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873",
    title: "Saree"
  },
  {
    id: 2,
    image: "https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873",
    title: "Saree 2"
  },
  {
    id: 3,
    image: "https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873",
    title: "Saree 3"
  },
  {
    id: 4,
    image: "https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873",
    title: "Saree 4"
  },
  {
    id: 5,
    image: "https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873",
    title: "Saree 5"
  },
  {
    id: 6,
    image: "https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873",
    title: "Saree 6"
  },
]
const actions = [
  { icon: <WhatsAppIcon />, name: 'WhatsApp' },
];
const Home = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Slider />
      <Container>

        <Box>
          <Typography variant='h4'>Top Saree's</Typography>
          <ProductSlider products={products} />

          <Typography variant='h4'>Top Lengha and Gaun</Typography>
          <ProductSlider products={products} />

          <Typography variant='h4'>Kurti & Frok</Typography>
          <ProductSlider products={products} />

          <Typography variant='h4'>Ladies Jeans & Top</Typography>
          <ProductSlider products={products} />
          <Divider className='mt-40' />

          <Box className="mt-40">
            <Typography variant='h4'>Girl Kids's</Typography>
            <ProductSlider products={products} slidesPerView={4} />
          </Box>
          <Box className="mt-40">
            <Typography variant='h4'>Pant & Shirt's</Typography>
            <ProductSlider products={products} slidesPerView={4} />
          </Box>

          <Typography variant='h4'>Jeans & Tshirt's</Typography>
          <ProductSlider products={products} slidesPerView={4} />

          <Box className="mt-40">
            <Typography variant='h4'>Boy's Kid's</Typography>
            <ProductSlider products={products} slidesPerView={4} />
          </Box>
        </Box>
      </Container>
      <Box className="tent-main-banner mt-40">
        <CardMedia
          sx={{ height: 250 }}
          image="/images/tent-bg.jpg"
          title="tent main banner"
        />
      </Box>

      <Container>
        <Box className="mt-40">
          <Typography variant='h4'>Our Events</Typography>
          <ProductSlider products={products} slidesPerView={2} />
        </Box>
        <Box className="mt-40">
          <Typography variant='h4'>Our Tent Producs</Typography>
          <ProductSlider products={products} slidesPerView={4} />

        </Box>
        <Box className="mt-40">
          <Typography variant='h4'>Our Decorations</Typography>
          <ProductSlider products={products} slidesPerView={3} />

        </Box>

        <Box className="mt-40">
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Typography variant='h4'>What Customer Says</Typography>
              <ProductSlider products={products} slidesPerView={1} />
            </Grid2>
            <Grid2 size={6}>
              <Typography variant='h4'>Social Media Handle</Typography>

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
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Container>
    </div>
  )
}

export default Home