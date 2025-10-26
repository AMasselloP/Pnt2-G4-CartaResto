import useSessionStore from "../../store/sessionStore";
import { supabase } from "../lib/supabase";

export function useAuth() {
    
    const {setUser}= useSessionStore(state => state.setUser);

    const LogIn = async(email, password) => {
        let {data, error} = await supabase.auth.signInWithPassword({email,password});

        if(error){
            console.log("error al iniciar sesion", error);
            return;
        }
        setUser(data.user);
        
    }

    const signUp = async (email, password) => {
        
        let {data, error} = await supabase.auth.signUp({email,password});

        if(error){
            console.log("error al registrarse", error);
            return;
        }
        setUser(data.user);
    }
    return {LogIn, signUp};
}