import {Routes, Route } from 'react-router';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Carrito from "../pages/Carrito";
import CheckoutPage from '../Carrito/CheckoutPage';
import MenuResto from '../MenuResto/MenuResto';
import FinCompra from '../FinCompra/GraciasCompra';
import CancelPurchase from '../FinCompra/CancelPurchase';



const appRoutes = () => (
    <Routes>
        <Route path="/" element={<MenuResto />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Carrito" element={<CheckoutPage />} />
        {<Route path="/finCompra" element={<FinCompra />} />}
        <Route path="/cancelado" element={<CancelPurchase />} />
    </Routes>
)


export default appRoutes; 
