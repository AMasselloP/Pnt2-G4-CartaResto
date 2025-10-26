import { useState, useEffect } from "react"
import { LoginButton, BuyButton, LogoButton } from "../Button"
import useSessionStore from "../../store/sessionStore";

const Home = () => {
    const {user} = useSessionStore();

    return (
        <div className="min-h-screen bg-background text-foreground">
            <LogoButton />
            <LoginButton></LoginButton>
            <BuyButton></BuyButton>
            <h1>Home carta resto</h1>

            <div>{user?.email || 'No hay usuario logueado'}</div>

        </div>
    )
}

export default Home

