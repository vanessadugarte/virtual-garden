import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import slide from "../../assets/slide-plantas-desk.jpg"

const HomePage = () => {
    return (
        <Grid container justifyContent="center" sx={{width: '100%', height: '100vh'}}>
            <Paper
                elevation={0}
                sx={{
                    backgroundImage: `url(${slide})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: '5%',
                }}
            >
            </Paper>

            <Grid container sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
            }}
            >
                <Typography variant="h2" xs={12}
                            sx={{
                    mt: 2,
                    color: "#88D3B8",
                }}>
                    Nuestras Plantas
                </Typography>
                <Typography xs={12} sx={{
                    fontSize:"20px",
                    maxWidth:"60%",
                    color:"gray",
                    textAlign:"center",

                }}>
                    ¡Bienvenido! Explora nuestra selección de las mejores plantas. Desde exuberantes follajes hasta flores vibrantes, cada una de nuestras plantas ha sido elegida por su belleza y calidad. Descubre la perfecta adición verde para tu hogar u oficina.

                </Typography>


                <Grid item>
                    <Button variant="contained"
                            sx={{
                                mr: 2,
                                backgroundColor: "#88D3B8",
                                color: "#ffffff",
                                '&:hover': {
                                    backgroundColor: "#4FA888",
                                }
                            }}
                    >
                        -
                    </Button>
                    <Button variant="contained"
                            sx={{mr: 2, backgroundColor: "#88D3B8", color: "#ffffff", '&:hover': {backgroundColor: "#4FA888",}}}>
                        +
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomePage;