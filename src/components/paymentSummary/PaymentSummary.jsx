import React, {useContext, useEffect, useState} from 'react';
import {Avatar, Box, Grid, Paper, Typography} from "@mui/material";
import {AppContext} from "../../context/ContextProvider";

const PaymentSummary = () => {

    const [listItems, setListItems] = useState([]);
    const {state} = useContext(AppContext);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        let acumulado = 0;
        state.cartItems.map((product) => {
            let price = product.quantity * product.price;
            acumulado = acumulado + price
        })
        setTotal(acumulado);
        setListItems(state.cartItems)
    }, [listItems]);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: {
                xs: 'column',
                sm: 'row',
            },
            justifyContent: "center", flexWrap: 'wrap'
        }}>
            <Paper square={false} elevation={2} sx={{padding: 4, width:{ xs:"100%", sm:'40%'}, marginRight: "30px", marginBottom:{ xs:"5%", sm:'0%'}}}>
                <Grid container spacing={1} alignItems="center" sx={{marginBottom: "20px"}}>
                    <Grid item sm={1.5}>
                    </Grid>
                    <Grid item xs={4.5}>
                        <Typography variant="h5" sx={{color: "#88D3B8"}}>Detalle</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h5" sx={{color: "#88D3B8"}}>Precio</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h5" sx={{color: "#88D3B8"}}>Cantidad</Typography>
                    </Grid>
                </Grid>
                {state.cartItems.map((product) => (
                    <Grid container spacing={1} alignItems="center" key={product.id} sx={{marginBottom: "20px"}}>
                        <Grid item xs={1.5}>
                            <Avatar alt={product.name} src={product.image} sx={{width: 55, height: 55}}/>
                        </Grid>
                        <Grid item xs={4.5}>
                            <Typography variant={"h5"}>{product.name}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={"h5"}>${product.price}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={"h5"}>{product.quantity}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Paper>
            <Paper square={false} elevation={2} sx={{padding: 3}}
                   sx={{display: 'flex', flexDirection: "column", padding: "30px"}}>
                <Typography variant="h5" sx={{color: "#88D3B8", marginBottom: "20px"}}>Resumen de la compra</Typography>
                <Typography variant={"h5"} sx={{marginBottom: "30px"}}>Descuento: -$0</Typography>
                <Typography variant={"h5"}>Total: ${total}</Typography>
            </Paper>
        </Box>

    );
};

export default PaymentSummary;