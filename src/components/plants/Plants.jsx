import {Backdrop, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {plantas} from "../../data/plants";
import Product from "../common/product/Product";
import {useEffect, useState} from "react";
import useCount from "../hooks/useCount";
import {getPlantList} from "../../services/trefleService";


const PlantsPage = () => {
    const [plantsList, setPlantsList] = useState([]);
    const [openBackdrop, setOpenBackdrop] = useState(false);

    useEffect(() => {
        console.log("mis plantas", plantsList)
    }, [plantsList]);

    useEffect(() => {
        fetchData().then(r => r);

        /*fakeFetch().then( (plantList) => {
            setPlantsList(plantList)
            handleCloseBackdrop();
        })*/
    }, []);

    const fetchData = async () => {
        setOpenBackdrop(true)
        try {
            await getPlantList().then( (list) => {
                setPlantsList(list.data)
                setOpenBackdrop(false)
            })
        }catch(error){

        }
    }
    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };
    const handleOpenBackdrop = () => {
        setOpenBackdrop(true);
    };

    const fakeFetch = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(plantas);
            }, 800);
        });
    };



    return (
        <Container maxWidth="xl" sx={{textAlign: "center", display:"flex", flexDirection:"column", alignItems:"center", paddingBottom:"65px"}}>
            <Typography variant="h2" sx={{mb:"20px", color:"#88D3B8",fontSize: { xs: '40px', sm: '50px'}}}>Nuestras plantas</Typography>
            <Typography variant="h6" sx={{width:{xs:"80%", md:"60%"}, textAlign:"center", color:"gray"}}>¡Las mejores plantas de interior y exterior para darle vida a cada espacio de tu hogar! Busca según las distintas características de tus espacios, siempre habrá un ideal para cada lugar. </Typography>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                {plantsList.map((el, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index} sx={{ display: "flex", justifyContent: "center", marginTop: "55px" }}>
                        <Product product={el} />
                    </Grid>
                ))}
            </Grid>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackdrop}
                onClick={handleCloseBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    );
};

export default PlantsPage;