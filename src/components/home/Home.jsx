import {Box, Button, Grid, ImageList, ImageListItem, Paper, Typography} from "@mui/material";
import slide from "../../assets/slide-plantas-desk.jpg"
import Product from "../product/Product";
import {imageList} from "../../data/imageList";
import "./home.css"

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
            <Grid container sx={{display:"flex", flexDirection:"column", alignContent:"center", width: '100%'}}>
              <Grid item>
                  <Box
                      sx={{
                          backgroundImage: `url(${slide})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: '100%',
                          height: '550px',
                      }}
                  >
                  </Box>
              </Grid>

                <Grid item>
                    <Typography variant="h2"
                                sx={{mt: 2, color: "#88D3B8", fontSize: { xs: '40px', sm: '50px', textAlign:"center" },}}
                    >
                        Nuestras Plantas
                    </Typography>
                </Grid>

                <Grid item sx={{display:"flex", justifyContent:"center"}}>
                    <Typography sx={{fontSize: "22px", maxWidth: { xs: '80%', sm: '60%' }, color: "gray", textAlign: "center", mt:"2",
                    }}
                    >
                        ¡Bienvenido! Explora nuestra selección de las mejores plantas. Desde exuberantes follajes hasta flores
                        vibrantes, cada una de nuestras plantas ha sido elegida por su belleza y calidad. Descubre la perfecta
                        adición verde para tu hogar u oficina.

                    </Typography>
                </Grid>

                <Grid item sx={{display:"flex", flexDirection:"row", justifyContent:"center", marginTop:"60px", color:"gray"}}>
                    <ImageList
                        xs={6}
                        sx={{width:{ xs: '500px', sm: '1300px' }, height: { xs: '450px', sm: '750px' }, marginRight:"40px",}}
                        variant="quilted"
                        cols={6}
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

                <Grid item>
                    <Product/>
                </Grid>

            </Grid>


        </>
    );
};

export default HomePage;