import { BackButton, LogoButton, LoginButton, BuyButton } from "../Button"

const Carrito = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <BackButton to="/" />
            <h1>Vista Carrito</h1>
        </div>
    )
}

export default Carrito