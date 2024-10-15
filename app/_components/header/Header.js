"use client"
import { Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import "./header.css"
import Link from 'next/link';
import useGetData from "../../utlis/customHooks/useGetData"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 240;
// const container = window !== undefined ? () => window().document.body : undefined;
const Header = () => {

    // const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;
    // debugger

    const { getData } = useGetData(`${baseURL}/api/logos?populate=*`)
    const logo = getData?.data[0].image.url;


    const controlHeader = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            setLastScrollY(window.scrollY)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", controlHeader)
        return () => {
            window.removeEventListener("scroll", controlHeader)
        }
    }, [lastScrollY])

    const scrollToSection = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        handleDrawerToggle()
    };


    return (
        <header className={`header visible ${isVisible ? 'visible' : 'hidden'}`}>
            <Container>
                <Box className="row" >
                    <Box className="left-menu" sx={{ display: { xs: 'none', md: 'block' } }}>
                        <List className='menu-ul'>
                            <ListItem>
                                <ListItemButton component="a" href="#men" onClick={scrollToSection}>
                                    Men
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component="a" href="#women" onClick={scrollToSection}>
                                    Women
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component="a" href="#kids" onClick={scrollToSection}>
                                    Kid's
                                </ListItemButton>
                            </ListItem>

                        </List>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box className="logo">
                        <Link href="/">
                            {logo &&
                                <Image
                                    src={baseURL + logo}
                                    width={200}
                                    height={50}
                                    alt="pal-brothers-group logo" />
                            }
                        </Link>
                        <Typography >
                            <WhatsAppIcon sx={{ color: "#0cc143" }} /> <a href='https://wa.me/+91-8317068171'>8317068171</a> &nbsp;|
                            <CallIcon sx={{ color: "#33378c" }} /> <a href='tel:9892299240'>9892299240</a>
                        </Typography>
                    </Box>
                    <Box className="right-menu" sx={{ display: { xs: 'none', md: 'block' } }}>
                        <List className='menu-ul'>
                            <ListItem>
                                <ListItemButton component="a" href="#tent" onClick={scrollToSection}>
                                    Tent
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component="a" href="#light" onClick={scrollToSection}>
                                    Light
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component="a" href="#decoration" onClick={scrollToSection}>
                                    Deceoration
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Drawer
                    // container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <List className='menu-ul'>
                        <ListItem>
                            <ListItemButton component="a" href="#men" onClick={scrollToSection}>
                                Men
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="#women" onClick={scrollToSection}>
                                Women
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="#kids" onClick={scrollToSection}>
                                Kid's
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="#tent" onClick={scrollToSection}>
                                Tent
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="#light" onClick={scrollToSection}>
                                Light
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="#decoration" onClick={scrollToSection}>
                                Deceoration
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </Container>
        </header>
    )
}

export default Header