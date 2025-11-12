import { useState, useEffect } from "react"
import { LoginButton, BuyButton, LogoButton } from "../Button"
import useSessionStore from "../../store/sessionStore";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import restaurant from '../../data/restaurant.json'

const Home = () => {
    const {user} = useSessionStore();
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/Login');
    }

    return (
        <div className="login-container">
            <div style={{ position: 'relative', zIndex: 10 }} className="min-h-screen bg-background text-foreground">

                <LogoButton />
                <LoginButton />
                <BuyButton />

                                {/* Hero image (public) */}
                                <div className="w-full flex justify-center mt-6">
                                    <img src="/images/logoMenu.jpg" alt="Logo/menú" className="w-full max-w-3xl rounded-lg shadow-md object-cover" />
                                </div>

                                {/* Restaurant info card to highlight name & address */}
                                <div className="restaurant-card max-w-md p-6 my-6">
                                        <h2 className="text-2xl font-bold text-white mb-2">{restaurant.name}</h2>
                                        <p className="text-sm text-white/90">{restaurant.address}</p>
                                        <p className="text-sm text-white font-semibold mt-2">{restaurant.phone}</p>
                                        <p className="text-xs text-white/80 mt-3">Horario: {restaurant.hours}</p>
                                </div>

                <h1 className="sr-only">Home carta resto</h1>

                <div className="mb-4">{user?.email || 'No hay usuario logueado'}</div>

                {user && (
                    <button onClick={handleLogout} className="px-3 py-2 border rounded-md">Cerrar sesión</button>
                )}
            </div>
        </div>
    )
}

export default Home

