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
                    image={product?.image}
                    title={product?.name}
                />
                <CardContent>
                    <Typography gutterBottom component="div" sx={{color: "#88D3B8", fontSize:"26px"}}>
                        {product?.name}
                    </Typography>
                    <Typography gutterBottom sx={{mt:2, fontSize:"24px"}}>
                        {product?.price}
                    </Typography>
                </CardContent>
                <CardActions>
                   <ItemCount count={count} increment={increment} stock={product?.stock} decrement={decrement}/>
                </CardActions>
                <CardActions>
                    <Button sx={{width:"100%", backgroundColor:"#88D3B8", '&:hover': {backgroundColor: "#4FA888"}}} variant="contained">Añadir al carrito</Button>
                </CardActions>
            </Card>

    );
};

export default Product;

