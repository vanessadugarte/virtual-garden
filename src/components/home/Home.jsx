import {Box, Button, Grid, ImageList, ImageListItem, Paper, Typography} from "@mui/material";
import slide from "../../assets/slide-plantas-desk.jpg"
import Product from "../product/Product";
import {imageList} from "../../data/imageList";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const HomePage = () => {
    return (
        <>
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
                        paddingBottom: '25%',
                    }}
                >
                </Paper>

                <Grid container sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
                        fontSize: "20px",
                        maxWidth: "60%",
                        color: "gray",
                        textAlign: "center",

                    }}>
                        ¡Bienvenido! Explora nuestra selección de las mejores plantas. Desde exuberantes follajes hasta flores
                        vibrantes, cada una de nuestras plantas ha sido elegida por su belleza y calidad. Descubre la perfecta
                        adición verde para tu hogar u oficina.

                    </Typography>


                    <Grid item>

                    </Grid>
                </Grid>
                <Product/>
            </Grid>
            <Grid>
                <ImageList
                    sx={{width: 500, height: 450}}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {imageList.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </>
    );
};

export default HomePage;