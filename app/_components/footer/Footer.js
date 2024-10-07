"use client"
import { Box, Grid2, List, ListItem, Typography } from "@mui/material"
import logo from "../../_assets/pal-brothers-group.PNG"
import Link from "next/link"
import Image from "next/image"
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="mt-40">
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
                </Grid2>
            </Grid2>
        </footer>
    )
}

export default Footer