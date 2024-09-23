"use client"
import { Box, Grid2, List, ListItem, Typography } from "@mui/material"
import logo from "../../_assets/pal-brothers-group.PNG"
import Link from "next/link"
import Image from "next/image"
import "./footer.css"

export const Footer = () => {
    return (
        <footer>
            <Grid2 container spacing={2}>
                <Grid2 size={4}>
                    <Box className="footer-link">
                        <List className='menu-ul'>
                            <ListItem>
                                <Link href="#" underline="none">
                                    Saree
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#" underline="none">
                                    Lehanga & Chunari
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                </Grid2>
                <Grid2 size={4}>
                    <Box sx={{ textAlign: "center" }}>
                        <Link href="/"><Image
                            src={logo}
                            width={250}
                            height={70}
                            alt="pal-brothers-group" /></Link>

                        <Typography variant="body1" color="initial">Call: <strong>8317068171</strong>, <strong>9892299240</strong></Typography>
                    </Box>
                </Grid2>
                <Grid2 size={4}>
                    <Typography variant="h6" color="initial">Contact and Location</Typography>
                    <Typography variant="body1" color="initial">
                        Pal Brothers Vastralaya, Belwa sengar, Rudhauli-Bakhira Marg,
                        Sant Kabir Nagar, 272148
                    </Typography>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.3445603349396!2d82.91964057450785!3d26.987648156867905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39912bf6a3247c4b%3A0x33fb8e61f02a7852!2zUGFsIEJyb3RoZXJzIFZhc3RyYWxheWEg4KSq4KS-4KSyIOCkrOCljeCksOCkpuCksOCljeCkuCDgpLXgpLjgpY3gpKTgpY3gpLDgpL7gpLLgpK8!5e0!3m2!1sen!2sin!4v1727117614009!5m2!1sen!2sin"  height="100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" sx={{border: 0}}></iframe>
                </Grid2>
            </Grid2>
        </footer>
    )
}

export default Footer