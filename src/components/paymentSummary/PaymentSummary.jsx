import React, {useContext, useEffect, useState} from 'react';
import {Avatar, Box, Grid, Paper, Typography} from "@mui/material";
import {AppContext} from "../../context/ContextProvider";

const PaymentSummary = () => {

    const [listItems, setListItems] = useState([]);
    const {state} = useContext(AppContext);
    const [total, setTotal] = useState(0);



    useEffect(() => {
        let acumulado = 0;
        state.cartItems.map((product)=>{
            let price = product.quantity*product.price;
            acumulado = acumulado + price
        })
        setTotal(acumulado);
        setListItems(state.cartItems)
    }, [listItems]);

    return (
        <Box
            sx={{
                    display: 'flex',
                    justifyContent: "center",
                    flexWrap: 'wrap'}}
        >

            <Paper square={false} elevation={2} sx={{
                height: 260,
                padding: 3,
            }}>

                <Grid container spacing={8}>
                    <Grid item >
                        <Typography sx={{fontSize:"25px"}}>Detalle</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{fontSize:"25px"}}>Precio</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{fontSize:"25px"}}>Cantidad</Typography>
                    </Grid>
                </Grid>
                {listItems.map((product)=> (
                    <Grid container spacing={8} sx={{fontSize:"15px"}}>
                        <Grid item>
                            <Avatar sx={{}} alt="Remy Sharp" src={product.image} />
                        </Grid>
                        <Grid item>
                            <Typography sx={{fontSize:"20px"}}>{product.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{fontSize:"20px"}}>{product.price*product.quantity}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{fontSize:"20px"}}>{product.quantity}</Typography>
                        </Grid>
                    </Grid>
                )
                )}



            </Paper>


            <Paper square={false} elevation={2} sx={{padding: 3,}}>
                <Typography>{total}</Typography>
            </Paper>
        </Box>


    );
};

export default PaymentSummary;