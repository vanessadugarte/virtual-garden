import React from 'react';
import {Avatar, Box, Grid, Paper, Typography} from "@mui/material";

const PaymentSummary = () => {
    return (
        <Box
            sx={{
                    display: 'flex',
                    justifyContent: "center",
                    flexWrap: 'wrap'}}>

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

                <Grid container spacing={8} sx={{fontSize:"15px"}}>
                    <Grid item>
                        <Avatar sx={{}} alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
                    </Grid>
                    <Grid item>
                        <Typography sx={{fontSize:"20px"}}>Filodendro Paraguayo</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{fontSize:"20px"}}>$7.990</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{fontSize:"20px"}}>3</Typography>
                    </Grid>
                </Grid>


            </Paper>


            <Paper square={false} elevation={2} sx={{padding: 3,}}>
                <Typography>hola2</Typography>
            </Paper>
        </Box>


    );
};

export default PaymentSummary;