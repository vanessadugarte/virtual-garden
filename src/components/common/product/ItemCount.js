import React from 'react';
import {Button, Grid, Typography} from "@mui/material";

export const ItemCount = ({stock, count, increment, decrement}) => {
    return (
        <Grid container spacing={1} sx={{ width: '100%' }}>
            <Grid item xs={4}>
                <Button fullWidth variant="contained" sx={{paddingRight:"4px", backgroundColor:"#88D3B8", '&:hover': {backgroundColor: "#4FA888"}}} onClick={decrement} disabled={count <= 0}>
                    -
                </Button>
            </Grid>

            <Grid item xs={4}>
                <Button fullWidth variant="contained" sx={{backgroundColor:"#88D3B8", '&:hover': {backgroundColor: "#4FA888"}}}> {count} </Button>
            </Grid>

            <Grid item xs={4}>
                <Button fullWidth variant="contained" sx={{backgroundColor:"#88D3B8", '&:hover': {backgroundColor: "#4FA888"}}} onClick={increment} disabled={count >= stock}>
                    +
                </Button>
            </Grid>
        </Grid>
    );
};

export default ItemCount;