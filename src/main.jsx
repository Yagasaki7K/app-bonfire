import React from 'react'
import './App.css'

import App from './App'
import Bonfire from './pages/Bonfire'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/bonfire" element={<Bonfire/>} exact />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
