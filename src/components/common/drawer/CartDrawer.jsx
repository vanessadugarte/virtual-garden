import React, {useContext, useEffect, useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer, IconButton,
    List,
    ListItem, ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {RiPlantFill} from "react-icons/ri";
import {PiPlantFill} from "react-icons/pi";
import {AppContext} from "../../../context/ContextProvider";
import {MdDelete} from "react-icons/md";


const CartDrawer = ({setStateDrawer, stateDrawer}) => {

    const [listItems, setListItems] = useState([]);
    const {state} = useContext(AppContext);

    useEffect(() => {
        setListItems(state.cartItems)
    }, [stateDrawer]);
    const handleCloseDrawer = () => {
        setStateDrawer(!stateDrawer);
    }

    const DrawerList = (
        <Box sx={{width: 300}} role="presentation" onClick={handleCloseDrawer}>
            <Divider/>
            <List>
                {listItems && listItems.map((item, index) => (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
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