import React, {useEffect, useState} from 'react';
import {CardMedia, Grid, Typography} from "@mui/material";
import paraguayoDetail from "../../../assets/productDetail/paraguayoDetail.jpg"
import {useParams} from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const ProductDetail = () => {
    const {idPlanta} = useParams();

    const [plant, setPlant] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const data = doc(db, "plantas", idPlanta);
        getDoc(data).then((data) => {
            setPlant(  data.data())
        } )
    }, [idPlanta]);

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
                    {plant?.name}
                </Typography>
                <Typography variant="h4" sx={{mb: "20px", color: "#88D3B8", fontSize: {xs: '30px', sm: '35px'}}}>
                    {plant?.price}
                </Typography>
                <Typography>
                    {plant?.description}
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