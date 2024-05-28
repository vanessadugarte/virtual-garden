import React from 'react';
import {Box, Grid, Paper, Typography} from "@mui/material";

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

                <Grid container>
                    <Grid item>

                    </Grid>
                    <Grid item>
                        <Typography sx={{marginRight:"10px"}}>ejemplo1</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{marginRight:"10px"}}>ejemplo2</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{marginRight:"10px"}}>ejemplo3</Typography>
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