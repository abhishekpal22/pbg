"use client"
import { Grid2, Typography } from "@mui/material"

import "./footer.css"

export const Footer = () => {
    let date = new Date()
    let fullYear = date.getFullYear()

    return (
        <footer className="mt-40">
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                <Typography variant="body2" sx={{ p: 2, textAlign: "center" }} color="initial">Copyright  &copy; 2013-{fullYear} Pal Brothers Group All rights reserved.</Typography>
                </Grid2>
            </Grid2>
        </footer>
    )
}

export default Footer