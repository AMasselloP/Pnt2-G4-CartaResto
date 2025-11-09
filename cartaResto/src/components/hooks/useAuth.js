import useSessionStore from "../../store/sessionStore";
import { supabase } from "../lib/supabase";

export function useAuth() {
    
    const setUser = useSessionStore((state) => state.setUser);
    const clearUser = useSessionStore((state) => state.clearUser);

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

    const logout = async () => {
        const { error } = await supabase.auth.signOut();

        if(error){
            console.log("error al cerrar sesion", error);
            return { error };
        }

        clearUser();
        return { error: null };
    }

    return {LogIn, signUp, logout};
}