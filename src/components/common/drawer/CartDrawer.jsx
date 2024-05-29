import React, {useContext, useEffect, useState} from 'react';
import {
    Avatar,
    Box, Button,
    Divider,
    Drawer, IconButton,
    List,
    ListItem, ListItemAvatar,
    ListItemButton,
    ListItemText, Typography
} from "@mui/material";
import {AppContext} from "../../../context/ContextProvider";
import {MdDelete} from "react-icons/md";
import {NavLink} from "react-router-dom";


const CartDrawer = ({setStateDrawer, stateDrawer}) => {

    const [listItems, setListItems] = useState([]);
    const {state, updateCartItems} = useContext(AppContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let acumulado = 0;
        state.cartItems.map((item)=>{
            let pricePerQuantity = item.quantity * item.price
            acumulado = acumulado + pricePerQuantity
        })
        setTotal(acumulado)
        setListItems(state.cartItems)
    }, [stateDrawer, listItems]);

    useEffect(()=>{
    },[listItems, total]);
    const handleCloseDrawer = () => {
        setStateDrawer(!stateDrawer);
    }

    const handleRemoveItem = (obj) => {
        console.log(obj)
        const removingItem = state.cartItems.filter((item) => {
           if(!(obj.id === item.id && item.type === obj.type )){
               return item
           }
        })
        console.log("nueva lista",removingItem )
        setListItems(removingItem)
        updateCartItems(removingItem)
    }

    const clearCart = () => {
        updateCartItems([]);
        setListItems([]);
    }



    const DrawerList = (
        <Box sx={{width: 300}} role="presentation">
            <Divider/>
            <List>
                {listItems && listItems.map((item, index) => (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={ () => handleRemoveItem(item)}>
                                <MdDelete/>
                            </IconButton>
                        }>
                        <ListItemAvatar>
                            <Avatar alt={item?.name} src={item?.image}/>
                        </ListItemAvatar>
                        <ListItemButton>
                            <ListItemText primary={item?.name}/>
                            <ListItemText primary={item?.quantity}/>
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem>
                    <Typography>Total a pagar:</Typography>
                    <Typography sx={{color:"#4FA888", marginLeft:"3px"}}>{total}</Typography>
                </ListItem>
                <ListItem>
                    <NavLink to="resumenPago" sx={{width:"100%"}}>
                        <Button
                            fullWidth
                            sx={{backgroundColor:"#88D3B8", '&:hover': {backgroundColor: "#4FA888"}}}
                            variant="contained"
                            onClick={()=> setStateDrawer(!stateDrawer)}
                        >
                            PAGAR
                        </Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <Button fullWidth sx={{backgroundColor:"#88D3B8", '&:hover': {backgroundColor: "#4FA888"}}} variant="contained" onClick={clearCart}>VACIAR CARRITO</Button>
                </ListItem>
            </List>
        </Box>
    );

    return (

        <div>
            <Drawer anchor='right' open={stateDrawer} onClose={handleCloseDrawer}>
                {DrawerList}
            </Drawer>
        </div>

    );
};

export default CartDrawer;