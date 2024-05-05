import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import {plantas} from "../../data/plants";
import Product from "../common/product/Product";
import {maceteros} from "../../data/flowerPots";

const FlowerPots = () => {
    return (
        <Container maxWidth="xxl" sx={{textAlign: "center", display:"flex", flexDirection:"column", alignItems:"center", paddingBottom:"65px"}}>
            <Typography variant="h2" sx={{mb:"20px", color:"#88D3B8"}}>Nuestros Maceteros</Typography>
            <Typography variant="h6" sx={{width:"55%", textAlign:"center", color:"gray"}}>encontrarás una amplia selección de maceteros diseñados para embellecer tu hogar y dar vida a tus plantas. Desde maceteros de cerámica elegantes hasta maceteros colgantes modernos, tenemos todo lo que necesitas para crear un oasis verde en cualquier espacio. </Typography>
            <Grid container xs={12} sx={{display:"flex", justifyContent:"center"}}>
                {maceteros.map((el) => {
                    return (
                        <Grid item xs={2} sx={{display:"flex", justifyContent:"space-around", marginRight:"5px", marginTop:"55px"}}>
                            <Product product={el}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};

export default FlowerPots;