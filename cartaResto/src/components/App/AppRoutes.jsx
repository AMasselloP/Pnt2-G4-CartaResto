import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Carrito from "../pages/Carrito";


const appRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Carrito" element={<Carrito />} />
    </Routes>
)


export default appRoutes; 
