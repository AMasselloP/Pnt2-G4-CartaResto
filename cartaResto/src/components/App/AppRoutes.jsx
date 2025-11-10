import {Routes, Route } from 'react-router';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Carrito from "../pages/Carrito";
import MenuResto from '../MenuResto/MenuResto';


const appRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/MenuResto" element={<MenuResto />} />
    </Routes>
)


export default appRoutes; 
