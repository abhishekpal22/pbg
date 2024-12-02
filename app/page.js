"use client"
import React, { useState } from 'react'
import Slider from './_components/slider/Slider'
import { Box, Card, CardContent, CardMedia, Container, Grid2, Typography } from '@mui/material'
import ProductSlider from './_components/productslider/ProductSlider'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useGetData from './utlis/customHooks/useGetData'
import { boyKid, customerSay, decoration, event, girl_kids, jeans_top, jeansTshirt, kurti_frock, lehenga, pantShirt, saree, tentBanner, tentProduct } from './utlis/apiUrls'
import Review from './_components/customerReview/Review'

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
      window.open("https://wa.me/+91-8317068171", "_blank")
    }
  }

  const { getData } = useGetData(saree)
  const { getData: lehengaData } = useGetData(lehenga)
  const { getData: kurtiData } = useGetData(kurti_frock)
  const { getData: jeansData } = useGetData(jeans_top)
  const { getData: girlKData } = useGetData(girl_kids)
  const { getData: eventsData } = useGetData(event)
  const { getData: tentBannerData } = useGetData(tentBanner)
  const { getData: pantShirtData } = useGetData(pantShirt)
  const { getData: jeansTshirtData } = useGetData(jeansTshirt)
  const { getData: boyKidData } = useGetData(boyKid)
  const { getData: decorationData } = useGetData(decoration)
  const { getData: tentProductData } = useGetData(tentProduct)
  const { getData: customerSayData } = useGetData(customerSay)
  const sarees = getData?.data
  const lehengas = lehengaData?.data
  const kurties = kurtiData?.data
  const jeans = jeansData?.data
  const gKids = girlKData?.data
  const events = eventsData?.data
  const tentBanners = tentBannerData?.data[0]?.image?.url
  const pantShirts = pantShirtData?.data
  const jeansTshirts = jeansTshirtData?.data
  const boykids = boyKidData?.data
  const decorations = decorationData?.data
  const tentProducts = tentProductData?.data
  const customerSays = customerSayData?.data


  return (
    <div>
      <Slider />
      <Container>

        <Box className="mt-40">
          <Box >
            <Typography variant='h4' className="main-heading">Top Saree</Typography>
            <ProductSlider products={sarees} />
          </Box>

          <Box className="mt-40" id="women">
            <Typography variant='h4' className="main-heading ">Top Lengha and Gaun</Typography>
            <ProductSlider products={lehengas} />
          </Box>

          <Box className="mt-40">
            <Typography variant='h4' className="main-heading ">Kurti & Frok</Typography>
            <ProductSlider products={kurties} />
          </Box>

          <Box className="mt-40">
            <Typography variant='h4' className="main-heading ">Ladies Jeans & Top</Typography>
            <ProductSlider products={jeans} slidesPerView={4} />
          </Box>

          <Box className="mt-40" id="kids">
            <Typography variant='h4' className="main-heading">Girl Kids</Typography>
            <ProductSlider products={gKids} slidesPerView={4} />
          </Box>
          <Box className="mt-40" id="men">
            <Typography variant='h4' className="main-heading">Pant & Shirt</Typography>
            <ProductSlider products={pantShirts} slidesPerView={4} />
          </Box>

          <Box className="mt-40">
            <Typography variant='h4' className="main-heading">Jeans & Tshirt</Typography>
            <ProductSlider products={jeansTshirts} slidesPerView={4} />
          </Box>

          <Box className="mt-40">
            <Typography variant='h4' className="main-heading">Boy Kids</Typography>
            <ProductSlider products={boykids} slidesPerView={4} />
          </Box>
        </Box>
      </Container>
      <Box className="tent-main-banner mt-40" id="tent">
        <CardMedia
          sx={{ height: 300 }}
          image={tentBanners}
          title="tent main banner"
        />
      </Box>

      <Container>
        <Box className="mt-40" id="light">
          <Typography variant='h4' className="main-heading">Our Events</Typography>
          <ProductSlider products={events} slidesPerView={2} />
        </Box>

        <Box className="mt-40">
          <Typography variant='h4' className="main-heading">Our Tent Products</Typography>
          <ProductSlider products={tentProducts} slidesPerView={4} />
        </Box>

        <Box className="mt-40" id="decoration">
          <Typography variant='h4' className="main-heading">Our Decorations</Typography>
          <ProductSlider products={decorations} slidesPerView={3} />
        </Box>

        <Box className="mt-40">
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
              <Typography variant='h4' className="main-heading">What Customer Says</Typography>
              <Review/>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
              <Typography variant='h4' className="main-heading">Find our location on Map</Typography>
              <Card elevation={1}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.3445603349396!2d82.91964057450785!3d26.987648156867905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39912bf6a3247c4b%3A0x33fb8e61f02a7852!2zUGFsIEJyb3RoZXJzIFZhc3RyYWxheWEg4KSq4KS-4KSyIOCkrOCljeCksOCkpuCksOCljeCkuCDgpLXgpLjgpY3gpKTgpY3gpLDgpL7gpLLgpK8!5e0!3m2!1sen!2sin!4v1727117614009!5m2!1sen!2sin" height="193" style={{ width: "100%", border: "none" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" sx={{ border: 0 }}></iframe>
                <CardContent>
                  <Typography variant="body1" color="initial">Address:</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }} >
                    Pal Brothers Vastralaya, Belwa sengar, Rudhauli-Bakhira Marg, Sant Kabir Nagar, 272148
                  </Typography>
                </CardContent>
              </Card>


            </Grid2>
          </Grid2>
        </Box>

        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: 'fixed', bottom: 30, right: 20 }}
          icon={<CallIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              sx={{ background: "#0cc143", color: "#fff" }}
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