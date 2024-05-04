import {Container, Grid, Typography} from "@mui/material";
import {plantas} from "../../data/plants";
import Product from "../common/product/Product";


const PlantsPage = () => {
    return (
        <Container maxWidth="sm" sx={{textAlign: "center"}}>
            <Typography variant="h2">Plants page</Typography>
            <Grid container>
                {plantas.map((el) => {
                    return (
                        <Grid item>
                            <Product product={el}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};

export default PlantsPage;