import {useContext, useEffect, useState} from 'react';
import {
    AppBar, Badge,
    Box,
    Button,
    CssBaseline,
    Divider, Drawer, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from '@mui/icons-material/Menu';
import {HiShoppingCart} from "react-icons/hi";
import logo from "../../../assets/logo-jardinvirtual.png"
import {NavLink} from "react-router-dom";
import "./navbar.css"
import {AppContext} from "../../../context/ContextProvider";

const drawerWidth = 240;
const Navbar = ({window, stateDrawer, setStateDrawer}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartQuantity, setCartQuantity] = useState(0);
    const {state} = useContext(AppContext)

    useEffect(() => {
        let adding = 0;
        state.cartItems.map((item)=>{
          adding = adding + item.quantity
       });
        setCartQuantity(adding)
    }, [state]);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <List className="list">
                <ListItem disablePadding>
                    <NavLink to="/" className="mobLink">
                        Inicio
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink to="plantas" className="mobLink">
                        Plantas
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink to="maceteros" className="mobLink">
                        Maceteros
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink to="contacto" className="mobLink">
                        Contacto
                    </NavLink>
                </ListItem>
                <Divider/>
            </List>

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav" sx={{ bgcolor: '#88D3B8' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <NavLink to="/">
                        <img src={logo} alt="Logo"/>
                    </NavLink>
                    <Box sx={{mr: 2, display: {sm: 'none'}}}>
                        <IconButton size="large" aria-label="show 4 new mails" onClick={()=>setStateDrawer(!stateDrawer)}>
                            <Badge badgeContent={cartQuantity} color="error">
                                <HiShoppingCart/>
                            </Badge>
                        </IconButton>
                    </Box>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'flex'}}}
                    >

                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <NavLink to="/">
                            Inicio
                        </NavLink>
                        <NavLink to="plantas">
                            Plantas
                        </NavLink>
                        <NavLink to="maceteros">
                            Maceteros
                        </NavLink>
                        <NavLink to="contacto">
                            Contacto
                        </NavLink>
                        <IconButton size="large" aria-label="show 4 new mails" sx={{color: "white"}} onClick={()=>setStateDrawer(!stateDrawer)}>
                            <Badge badgeContent={cartQuantity} color="error">
                                <HiShoppingCart/>
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>

            </nav>
            <Box component="main" sx={{p: 3}}>
                <Toolbar/>
            </Box>
        </Box>
    );
};

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;