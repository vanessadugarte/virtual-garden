import {Box, Button, Grid, ImageList, ImageListItem, Paper, Typography} from "@mui/material";
import slide from "../../assets/slide-plantas-desk.jpg"
import Product from "../common/product/Product";
import {imageList} from "../../data/imageList";
import "./home.css"
import {getPlantList} from "../../services/trefleService";
import {useEffect, useState} from "react";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Home = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchData().then(r => console.log("r", r));
    }, []);

    useEffect(() => {
        console.log("data", data)
    }, [data]);
    const fetchData = async () => {
        try {
            await getPlantList.then( (plantList) => {
                console.log("trefle: " ,plantList)
                setData(plantList);
            })
        }catch(error){

        }
    }


    return (
        <>
            <Grid container sx={{display:"flex", flexDirection:"column", alignContent:"center", width: '100%'}}>
              <Grid item>
                  <Box
                      sx={{
                          backgroundImage: `url(${slide})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: '100vw',
                          height: '550px',
                      }}
                  >
                  </Box>
              </Grid>

                <Grid item>
                    <Typography variant="h2"
                                sx={{mt: 2, color: "#88D3B8", fontSize: { xs: '40px', sm: '50px', textAlign:"center" },}}
                    >
                        Jardín Virtual
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
                        sx={{width:{ xs: '350px', sm: '500px', md:"1270px" }, height: { xs: '750px', sm: '650px', md:"750px" }, marginRight:"20px", marginLeft:"20px"}}
                        variant="quilted"
                        cols={6}
                        rowHeight={121}
                    >
                        {imageList.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} sx={{ "&:hover img": { filter: "grayscale(100%)", transition: "all 0.3s ease" } }}>
                                <img
                                    {...srcset(item.img, 121, item.rows, item.cols)}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>


        </>
    );
};

export default Home;