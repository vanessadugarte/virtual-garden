import React from 'react';
import {Box, Typography} from "@mui/material";


const Footer = () => {
    return (
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width: "100vw", height: "70px", backgroundColor: "#88D3B8", textAlign:"center", marginTop:"25px"}}>
            <Typography sx={{color: "#fff", fontSize:"16px"}}>
                © 2024 Jardín Virtual. Av. Pedro de Valdivia 240, #18-A, Providencia, Santiago de Chile
            </Typography>
            <Typography sx={{color: "#fff", fontSize:"16px"}}>
                Contacto: +56 9657 21634
            </Typography>
        </Box>
                );
            };

export default Footer;