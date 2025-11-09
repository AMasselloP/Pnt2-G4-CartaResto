import { BackButton, LogoButton, LoginButton, BuyButton } from "../Button"
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./Login.css";


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
        <div className="login-container">
            <BackButton to="/" />
            <div className="login-card">
                <h2 className="login-title">Login</h2>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-form-group">
                        <label className="login-label">Usuario email:</label>
                        <input 
                            className="login-input"
                            type="email" 
                            placeholder="usuario@gmail.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="login-form-group">
                        <label className="login-label">password:</label>
                        <input 
                            className="login-input"
                            type="password" 
                            placeholder="**************" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>

                    <button className="login-button" type="submit">{isSigningUp ? " Registrarse" : "Iniciar sesion"}</button>
                    {!isSigningUp && (
                        <button type="button" className="login-register-button" onClick={toggleMode}>
                            Regístrate
                        </button>
                    )}
                    {isSigningUp && (
                        <button type="button" className="login-register-button" onClick={toggleMode}>
                            Iniciar sesión
                        </button>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Login

