"use client"
import { Box, Container, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'
import Image from 'next/image';
import logo from "../../_assets/pal-brothers-group.PNG"
import "./header.css"
import Link from 'next/link';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = ()=>{
        if(typeof window !== "undefined"){
            if (window.scrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            setLastScrollY(window.scrollY)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", controlHeader)
        return () =>{
            window.removeEventListener("scroll", controlHeader)
        }
    },[lastScrollY])
    
    return (
        <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
            <Container>
                <Box className="row" >
                    <Box className="left-menu">
                        <List className='menu-ul'>
                            <ListItem>
                                <ListItemButton component="a" href="#">
                                    Men
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component="a" href="#">
                                    Women
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component="a" href="#">
                                    Kid's
                                </ListItemButton>
                            </ListItem>
                            
                        </List>
                    </Box>
                    <Box className="logo">
                        <Link href="/"><Image
                            src={logo}
                            width={200}
                            height={50}
                            alt="pal-brothers-group.PNG" /></Link>
                            <Typography > Call: <a href='https://wa.me/8317068171'>8317068171</a> , <a href='tel:9892299240'>9892299240</a></Typography>
                    </Box>
                    <Box className="right-menu">
                    <List className='menu-ul'>
                            <ListItem>
                                <ListItemButton component="a" href="#">
                                    Tent
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component="a" href="#">
                                    Light
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component="a" href="#">
                                    Deceoration
                                </ListItemButton>
                            </ListItem>
                            {/* <ListItem>
                                <ListItemButton component="a" href="#">
                                    Call: 8317068171, 9892299240
                                </ListItemButton>
                            </ListItem> */}
                        </List>
                    </Box>
                </Box>
            </Container>
        </header>
    )
}

export default Header