import { useState, useEffect } from "react"
import { LoginButton, BuyButton, LogoButton } from "../Button"
import useSessionStore from "../../store/sessionStore";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const {user} = useSessionStore();
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/Login');
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <LogoButton />
            <LoginButton></LoginButton>
            <BuyButton></BuyButton>
            <h1>Home carta resto</h1>

            <div>{user?.email || 'No hay usuario logueado'}</div>

            {user && (
                <button onClick={handleLogout}>
                    Cerrar sesión
                </button>
            )}

        </div>
    )
}

export default Home

