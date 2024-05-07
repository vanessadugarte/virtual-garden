import Home from "./components/home/Home";
import Navbar from "./components/common/navBar/NavBar";
import Product from "./components/common/product/Product";
import Footer from "./components/common/footer/Footer";


function App({children}) {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>

        </>
    );
}

export default App;
