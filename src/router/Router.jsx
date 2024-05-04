import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/home/Home";
import Plants from "../components/plants/Plants";
import FlowerPots from "../components/flowerPots/FlowerPots";
import Contacto from "../components/contacto/Contacto";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="plantas" element={<Plants/>}/>
            <Route path="maceteros" element={<FlowerPots/>}/>
            <Route path="contacto" element={<Contacto/>}/>
        </Routes>
    );
};

export default Router;