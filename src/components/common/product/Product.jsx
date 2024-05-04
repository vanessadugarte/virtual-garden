import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography} from "@mui/material";
import imgBugambilia from "../../../assets/img-bugambilia.jpg"


const Product = ({product}) => {
    return (

            <Card sx={{maxWidth: 375, boxShadow:6}}>
                <CardMedia
                    sx={{height: 190}}
                    image={imgBugambilia}
                    title={product?.name}
                />
                <CardContent>
                    <Typography gutterBottom component="div" sx={{color: "#88D3B8", fontSize:"28px"}}>
                        {product?.name}
                    </Typography>
                    <Typography gutterBottom sx={{mt:2, fontSize:"24px"}}>
                        {product?.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid item xs={4}>
                        <Button fullWidth
                            variant="contained"
                            sx={{backgroundColor: "#88D3B8", '&:hover': {backgroundColor: "#4FA888"}}}
                        >
                            -
                        </Button>
                    </Grid>


                    <Grid item xs={4}>
                    <Button fullWidth variant="contained" sx={{backgroundColor: "#88D3B8", '&:hover': {backgroundColor: "#4FA888",}}}
                    >
                        3
                    </Button>
                    </Grid>

                    <Grid item xs={4} >
                    <Button fullWidth variant="contained" sx={{backgroundColor: "#88D3B8", '&:hover': {backgroundColor: "#4FA888",}}}
                    >
                        +
                    </Button>
                    </Grid>

                </CardActions>
                <CardActions>
                    <Button sx={{width:"100%", backgroundColor:"#88D3B8", '&:hover': {backgroundColor: "#4FA888"}}} variant="contained">Añadir al carrito</Button>
                </CardActions>
            </Card>

    );
};

export default Product;