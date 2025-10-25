import { BackButton, LogoButton, LoginButton, BuyButton } from "../Button"

const Login = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <BackButton to="/" />
            <h1>Login carta resto</h1>
        </div>
    )
}

export default Login

