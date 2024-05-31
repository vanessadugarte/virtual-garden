import React, {useContext, useEffect, useState} from 'react';
import {Avatar, Box, Button, Grid, Modal, Paper, TextField, Typography} from "@mui/material";
import {AppContext} from "../../context/ContextProvider";
import {getFirestore, addDoc, collection} from "firebase/firestore";
import {redirect, useNavigate} from "react-router-dom";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
};
const PaymentSummary = () => {
    const navigate = useNavigate();
    const [listItems, setListItems] = useState([]);
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email,setEmail] = useState("");
    const {state, clearCartItems} = useContext(AppContext);
    const [total, setTotal] = useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const clearInputs = () => {
      setNombre("");
      setDireccion("");
          setEmail("")
    };
    const handlePago = async () => {
        const db = getFirestore();
        const payLoad = {
          nombre: nombre,
          direccion:direccion,
          email:email,
          detalle: state.cartItems
        };
        try{
            const response = await addDoc (collection(db,"pago"),payLoad).then((data)=>{
                clearCartItems();
                clearInputs();
                handleClose();
                console.log("datos insertados", data)
            })
            navigate("/home", {replace:true})
        }catch (error) {
            console.log("error", error)
        }

    };

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
            <Button
                sx={{backgroundColor:"#88D3B8", '&:hover': {backgroundColor: "#4FA888"} ,width:"56%", marginTop:5, marginBottom:72}}
                variant="contained"
                onClick={handleOpen}>
                IR A PAGO
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" sx={{color:"#88D3B8"}}>Ingrese los datos para su boleta</Typography>
                    <TextField
                        value={nombre}
                        fullWidth
                        sx={{mb:2, mt:1}}
                        id="text-nombre"
                        label="Nombre completo"
                        variant="standard"
                        onChange={(newValue)=> setNombre(newValue.target.value)}
                    />
                    <TextField
                        value={direccion}
                        fullWidth sx={{mb:2}}
                        id="text-direccion"
                        label="Dirección de envío"
                        variant="standard"
                        onChange={(newValue)=> setDireccion(newValue.target.value)}
                    />
                    <TextField
                        value={email}
                        fullWidth
                        id="text-email"
                        label="Email"
                        variant="standard"
                        onChange={(newValue)=> setEmail(newValue.target.value)}
                    />
                    <Button
                        sx={{backgroundColor:"#88D3B8", '&:hover': {backgroundColor: "#4FA888"} ,width:"100%", marginTop:5}}
                        variant="contained"
                        onClick={handlePago}
                    >
                        ENVIAR
                    </Button>
                </Box>
            </Modal>
        </Box>

    );
};

export default PaymentSummary;