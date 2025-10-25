import { LoginButton, BuyButton, LogoButton } from "../Button"

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <LogoButton />
            <LoginButton></LoginButton>
            <BuyButton></BuyButton>
            <h1>Home carta resto</h1>
        </div>
    )
}

export default Home

