import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import useSessionStore from "../../store/sessionStore";
import restaurant from '../../data/restaurant.json'

const CATEGORIES = ["Entradas", "Plato principal", "Bebidas", "Postres"];

export default function Sidebar({ onCategoryChange, selectedCategory }) {

  const navigate = useNavigate()
  const user = useSessionStore((s) => s.user);
  const clearUser = useSessionStore((s) => s.clearUser);
  
  const handleCategoryClick = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  useEffect(() => {
    let sub;

    const init = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        console.log('Sidebar: initial supabase.auth.getSession ->', data);
      } catch (e) {
      }

      const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
        console.log('Sidebar: onAuthStateChange', { event, session });
      });

      sub = listener?.subscription;
    };

    init();

    return () => {
      try {
        sub?.unsubscribe?.();
      } catch (e) {}
    };
  }, []);
  // Sidebar reads the current user from the centralized session store.
  // A global auth listener (if present elsewhere) should keep the store updated.
  // We keep the effect to log auth events for debugging, but we DO NOT manage local user state here.
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Sidebar: onAuthStateChange', { event, session });
    });

    return () => {
      try {
        listener?.subscription?.unsubscribe();
      } catch (e) {}
    };
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out', error);
        return;
      }
      // clear centralized store so UI updates across the app
      clearUser();
      navigate('/login');
    } catch (err) {
      console.error('Logout exception', err);
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-red-200 p-6 flex flex-col justify-between shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-red-700 mb-2">{restaurant.name}</h1>
        <p className="text-sm text-gray-700 leading-relaxed">
          {restaurant.address}
          <br />
          <span className="font-semibold text-red-600">{restaurant.phone}</span>
          <br />
          {restaurant.hours}
        </p>

        <nav className="mt-10 flex flex-col gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`text-left border rounded-lg px-4 py-2 font-medium transition-colors duration-200 ${
                selectedCategory === cat
                  ? "border-red-600 bg-red-100 text-red-700"
                  : "border-red-300 text-red-600 hover:bg-red-100 hover:text-red-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6 text-center">
        {user && (
          <div className="text-sm text-gray-700 mb-2">{user.email}</div>
        )}
        {user ? (
          <button onClick={handleLogout} className="border border-red-400 text-red-600 font-semibold rounded-md px-5 py-2 hover:bg-red-100 transition">
            Cerrar sesión
          </button>
        ) : (
          <button onClick={() => navigate("/login")} className="border border-red-400 text-red-600 font-semibold rounded-md px-5 py-2 hover:bg-red-100 transition">
            LOGIN
          </button>
        )}
         <div className="mt-6 text-center">
        <button onClick={() => navigate("/Carrito")} className="border border-red-400 text-red-600 font-semibold rounded-md px-5 py-2 hover:bg-red-100 transition">
          Carrito
        </button>
        </div>
      </div>
    </aside>
  );
}
