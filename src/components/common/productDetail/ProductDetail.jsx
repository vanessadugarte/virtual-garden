import React from 'react';
import {CardMedia, Grid, Typography} from "@mui/material";
import paraguayoDetail from "../../../assets/productDetail/paraguayoDetail.jpg"

const ProductDetail = () => {
    return  (
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={4}>
                <CardMedia
                    sx={{
                        width: {xs: 410},
                        height: {xs: 490},

                    }}
                    image={paraguayoDetail}
                />
            </Grid>
            <Grid item xs={4} sx={{display:"flex", flexDirection:"column"}}>
                <Typography variant="h2" sx={{mb: "20px", color: "#88D3B8", fontSize: {xs: '40px', sm: '50px'}}}>
                    Filodendro Paraguayo
                </Typography>
                <Typography variant="h4" sx={{mb: "20px", color: "#88D3B8", fontSize: {xs: '30px', sm: '35px'}}}>
                    $9.990 CLP
                </Typography>
                <Typography>
                    El filodendro Paraguayo es tropical y llamativo, con su color verde llamará la atención en cualquier lugar donde lo ubiques. Además, es muy resistente y de fácil cuidado, lo que lo transforma en irresistible.
                </Typography>
                <Typography variant="h3" sx={{mt: "20px", color: "#88D3B8", fontSize: {xs: '30px', sm: '35px'}}}>
                    Cuidados
                </Typography>
                <Typography>
                    Rocía sus hojas para simular la humedad de su hábitat natural, en épocas de calor dos o 3 veces a la semana, y una vez a la semana en invierno.La frecuencia surgirá de factores como la luz y la temperatura del lugar en el que esté ubicado.
                </Typography>
            </Grid>
        </Grid>

        </Grid>
    );
};

export default ProductDetail;