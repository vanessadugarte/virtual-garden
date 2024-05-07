import {Container, Grid, Typography} from "@mui/material";
import {plantas} from "../../data/plants";
import Product from "../common/product/Product";
import {useState} from "react";
import useCount from "../hooks/useCount";


const PlantsPage = () => {

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = (planta) => {
        if(quantity < planta.stock){
            const selected = plantas.filter((el) => {
              if (el.id === planta.id){
                  if (el.stock > 0){
                      el.stock = el.stock -1
                  }
                  return el
              }
            })
            setQuantity(quantity + 1);
        }

    };

    const handleDecrement = () => {
        if (quantity > 0 ) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <Container maxWidth="xl" sx={{textAlign: "center", display:"flex", flexDirection:"column", alignItems:"center", paddingBottom:"65px"}}>
            <Typography variant="h2" sx={{mb:"20px", color:"#88D3B8",fontSize: { xs: '40px', sm: '50px'}}}>Nuestras plantas</Typography>
            <Typography variant="h6" sx={{width:{xs:"80%", md:"60%"}, textAlign:"center", color:"gray"}}>¡Las mejores plantas de interior y exterior para darle vida a cada espacio de tu hogar! Busca según las distintas características de tus espacios, siempre habrá un ideal para cada lugar. </Typography>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                {plantas.map((el, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index} sx={{ display: "flex", justifyContent: "center", marginTop: "55px" }}>
                        <Product product={el} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PlantsPage;