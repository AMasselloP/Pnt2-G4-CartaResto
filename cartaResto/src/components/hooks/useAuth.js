import useSessionStore from "../../store/sessionStore";
import { supabase } from "../lib/supabase";

export function useAuth() {
    
    const setUser = useSessionStore((state) => state.setUser);
    const clearUser = useSessionStore((state) => state.clearUser);

    const LogIn = async(email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            console.log("error al iniciar sesion", error);
            return { error };
        }

        console.log('useAuth.LogIn response data:', data);
        const user = data?.user ?? data?.session?.user ?? null;
        setUser(user);
        return { user };
    };

    const signUp = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
            console.log("error al registrarse", error);
            return { error };
        }

        console.log('useAuth.signUp response data:', data);
        const user = data?.user ?? data?.session?.user ?? null;
        setUser(user);
        return { user };
    };

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