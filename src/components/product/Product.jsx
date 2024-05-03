import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import imgBugambilia from "../../assets/img-bugambilia.jpg"

const Product = () => {
    return (

            <Card sx={{maxWidth: 345, boxShadow:6}}>
                <CardMedia
                    sx={{height: 190}}
                    image={imgBugambilia}
                    title="Bugambilia"
                />
                <CardContent>
                    <Typography gutterBottom component="div" sx={{color: "#88D3B8", fontSize:"28px"}}>
                        Bugambilia
                    </Typography>
                    <Typography gutterBottom sx={{mt:2, fontSize:"24px"}}>
                        $4.990
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained">-</Button>
                    <Button variant="contained">3</Button>
                    <Button variant="contained">+</Button>
                </CardActions>
                <CardActions>
                    <Button sx={{width:"100%"}} variant="contained">Añadir al carrito</Button>
                </CardActions>
            </Card>

    );
};

export default Product;