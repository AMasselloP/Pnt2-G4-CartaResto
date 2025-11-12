import { useNavigate } from "react-router-dom";
import { BuyButton } from "../Button";
import restaurant from '../../data/restaurant.json'

const CATEGORIES = ["Entradas", "Plato principal", "Bebidas", "Postres"];

export default function Sidebar({ onCategoryChange, selectedCategory }) {

  const navigate = useNavigate()
  
  const handleCategoryClick = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
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
        <button onClick={() => navigate("/login")} className="border border-red-400 text-red-600 font-semibold rounded-md px-5 py-2 hover:bg-red-100 transition">
          LOGIN
        </button>
         <div className="mt-6 text-center">
        <button onClick={() => navigate("/Carrito")} className="border border-red-400 text-red-600 font-semibold rounded-md px-5 py-2 hover:bg-red-100 transition">
          Carrito
        </button>
        </div>
      </div>
    </aside>
  );
}
