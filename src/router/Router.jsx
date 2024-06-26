import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/home/Home";
import FlowerPots from "../components/flowerPots/FlowerPots";
import Contacto from "../components/contacto/Contacto";
import Plants from "../components/plants/Plants";
import ProductDetail from "../components/common/productDetail/ProductDetail";
import PaymentSummary from "../components/paymentSummary/PaymentSummary";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="virtual-garden" element={<Home/>}/>
            <Route path="virtual-garden-app" element={<Home/>}/>
            <Route path="plantas" element={<Plants/>}/>
            <Route path="plantas/:id/:type" element={<ProductDetail />}/>
            <Route path="maceteros/:id/:type" element={<ProductDetail />}/>
            <Route path="maceteros" element={<FlowerPots/>}/>
            <Route path="contacto" element={<Contacto/>}/>
            <Route path="resumenPago" element={<PaymentSummary/>}/>

        </Routes>
    );
};

export default Router;