import { BackButton, LogoButton, LoginButton, BuyButton } from "../Button"
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [user, setUser] = useState(null);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   

    const navigate = useNavigate();
    const {LogIn, signUp} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSigningUp){ signUp(email, password);}
        else{
            LogIn (email, password)
        }
        navigate('/');
    }

    const toggleMode = () => {
        setIsSigningUp(!isSigningUp);
    }

    return (
        <div>
            <BackButton to="/" />
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario email:</label>
                    <input 
                    type="email" 
                    placeholder="usuario@gmail.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>
                <div>
                    <label>password:</label>
                    <input 
                    type="password" 
                    placeholder="**************" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </div>

                <button type="submit">{isSigningUp ? " Registrarse" : "Iniciar sesion"}</button>
                <pre onClick={toggleMode}>{isSigningUp ? "Registrarse" : "Iniciar sesion"} </pre>
            </form>



        </div>
    )
}

export default Login

