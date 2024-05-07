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
        <Container maxWidth="xxl" sx={{textAlign: "center", display:"flex", flexDirection:"column", alignItems:"center", paddingBottom:"65px"}}>
            <Typography variant="h2" sx={{mb:"20px", color:"#88D3B8"}}>Nuestras plantas</Typography>
            <Typography variant="h6" sx={{width:"55%", textAlign:"center", color:"gray"}}>¡Las mejores plantas de interior y exterior para darle vida a cada espacio de tu hogar! Busca según las distintas características de tus espacios, siempre habrá un ideal para cada lugar. </Typography>
            <Grid container sx={{display:"flex", justifyContent:"center"}}>
                {plantas.map((el, index) => {
                    return (
                        <Grid item xs={2} key={index} sx={{display:"flex", justifyContent:"space-around", marginRight:"5px", marginTop:"55px"}}>
                            <Product product={el}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};

export default PlantsPage;