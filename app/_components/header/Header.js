"use client"
import { Box, Container, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import logo from "../../_assets/pal-brothers-group.PNG"
import "./header.css"
import Link from 'next/link';

const Header = () => {
    return (
        <header className='header'>
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
                            width={250}
                            height={70}
                            alt="pal-brothers-group.PNG" /></Link>
                            Call: 8317068171, 9892299240
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