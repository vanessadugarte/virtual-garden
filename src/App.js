import Home from "./components/home/Home";
import Navbar from "./components/common/navBar/NavBar";
import Product from "./components/common/product/Product";

function App({children}) {
    return (
        <>
            <Navbar/>
            {children}

        </>
    );
}

export default App;
