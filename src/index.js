import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC4Hvd8_OxFR-DNcrHKX5whVbiCKzC1jOc",
    authDomain: "virtual-garden-2d679.firebaseapp.com",
    projectId: "virtual-garden-2d679",
    storageBucket: "virtual-garden-2d679.appspot.com",
    messagingSenderId: "71419295314",
    appId: "1:71419295314:web:76124a96e960a8e92dd18b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
        <App>
            <Router/>
        </App>
    </BrowserRouter>
  </React.StrictMode>
);

