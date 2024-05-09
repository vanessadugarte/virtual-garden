import React, {useEffect, useState} from 'react';
import {Backdrop, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {plantas} from "../../data/plants";
import Product from "../common/product/Product";
import {maceteros} from "../../data/flowerPots";

const FlowerPots = () => {


    const [potsList, setPotsList] = useState([]);
    const [openBackdrop, setOpenBackdrop] = useState(true);
    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };
    const handleOpenBackdrop = () => {
        setOpenBackdrop(true);
    };

    const fakeFetch = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(maceteros);
            }, 1000);
        });
    };

    useEffect(() => {
        fakeFetch().then( (potList) => {
            setPotsList(potList)
            handleCloseBackdrop();
        })
    }, [fakeFetch]);

    return (
        <Container maxWidth="xl" sx={{textAlign: "center", display:"flex", flexDirection:"column", alignItems:"center", paddingBottom:"65px"}}>
            <Typography variant="h2" sx={{mb:"20px", color:"#88D3B8",fontSize: { xs: '40px', sm: '50px'}}}>Nuestros Maceteros</Typography>
            <Typography variant="h6" sx={{width: {xs:"70%", md:"60%"}, textAlign:"center", color:"gray"}}>encontrarás una amplia selección de maceteros diseñados para embellecer tu hogar y dar vida a tus plantas. Desde maceteros de cerámica elegantes hasta maceteros colgantes modernos, tenemos todo lo que necesitas para crear un oasis verde en cualquier espacio. </Typography>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                {potsList.map((el, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index} sx={{ display: "flex", justifyContent: "center", marginTop: "55px" }}>
                        <Product product={el} />
                    </Grid>
                ))}
            </Grid>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackdrop}
                onClick={handleCloseBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    );
};

export default FlowerPots;