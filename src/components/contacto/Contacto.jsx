import React from 'react';
import {Box, Card, CardMedia, Grid, Typography} from "@mui/material";
import imgMapa from "../../assets/mapa-PedroValdivia.jpg"

const Contacto = () => {
    return (
       <Grid>
           <Grid item>
               <Typography variant="h2" sx={{ mb:3, color: "#88D3B8", fontSize: { xs: '40px', sm: '50px', textAlign:"center" },}}>
                    ¡Encuéntranos!
               </Typography>
           </Grid>
           <Grid item sx={{display:"flex", justifyContent:"center"}}>
               <Typography sx={{color:"gray", maxWidth:{xs:"70%", md:"50%"}, textAlign:"center", fontSize:"18px", marginBottom:"30px"}}>
                   ¿Buscas nuestra ubicación? ¡Estás en el lugar correcto, nos encantaría conocerte en persona!
                   Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en ponerte en contacto con nosotros a través del número +56 95645 3568. Estamos aquí para ayudarte en cada paso del camino.
               </Typography>
           </Grid>

           <Grid item>
           <Box sx={{display:"flex", justifyContent:"center", mb:24}}>
               <CardMedia
                   sx={{
                       width: { xs: 410, md: 950 },
                       height: { xs: 490, md: 500 },
                   }}
                   image={imgMapa}
               />

           </Box>
           </Grid>
       </Grid>
    );
};

export default Contacto;