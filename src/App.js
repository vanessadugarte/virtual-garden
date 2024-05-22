import Home from "./components/home/Home";
import Navbar from "./components/common/navBar/NavBar";
import Product from "./components/common/product/Product";
import Footer from "./components/common/footer/Footer";
import CartDrawer from "./components/common/drawer/CartDrawer";
import {useEffect, useState} from "react";


function App({children}) {

    const [stateDrawer, setStateDrawer] = useState(false);

    useEffect(() => {

    }, [stateDrawer]);

    return (
        <>
            <Navbar stateDrawer={stateDrawer} setStateDrawer={setStateDrawer}/>
            <CartDrawer stateDrawer={stateDrawer} setStateDrawer={setStateDrawer}/>
            {children}
            <Footer/>

        </>
    );
}

export default App;
