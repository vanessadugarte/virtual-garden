import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography} from "@mui/material";
import ItemCount from "./ItemCount";
import useCount from "../../hooks/useCount";
const Product = ({product}) => {
    const {count, decrement, increment} = useCount();

    return (

            <Card sx={{maxWidth: 315, minWidth: 315, boxShadow:2}}>
                <CardMedia
                    sx={{height: 270}}
                    image={product?.default_image?.original_url}
                    title={product?.common_name}
                />
                <CardContent>
                    <Typography gutterBottom component="div" sx={{color: "#88D3B8", fontSize:"26px"}}>
                        {product?.common_name}
                    </Typography>
                    <Typography gutterBottom sx={{mt:2, fontSize:"24px"}}>
                        {1000}
                    </Typography>
                </CardContent>
                <CardActions>
                   <ItemCount count={count} increment={increment} stock={4} decrement={decrement}/>
                </CardActions>
                <CardActions>
                    <Button sx={{width:"100%", backgroundColor:"#88D3B8", '&:hover': {backgroundColor: "#4FA888"}}} variant="contained">Añadir al carrito</Button>
                </CardActions>
            </Card>

    );
};

export default Product;

