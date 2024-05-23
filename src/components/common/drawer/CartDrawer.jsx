import React, {useContext, useEffect, useState} from 'react';
import {
    Avatar,
    Box,
    Divider,
    Drawer, IconButton,
    List,
    ListItem, ListItemAvatar,
    ListItemButton,
    ListItemText
} from "@mui/material";
import {AppContext} from "../../../context/ContextProvider";
import {MdDelete} from "react-icons/md";


const CartDrawer = ({setStateDrawer, stateDrawer}) => {

    const [listItems, setListItems] = useState([]);
    const {state, updateCartItems} = useContext(AppContext);

    useEffect(() => {
        setListItems(state.cartItems)
    }, [stateDrawer, listItems]);

    useEffect(()=>{
    },[listItems]);
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