import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import { getProducts, getProductsByCategory } from "../hooks/getProducts";


const CATEGORY_MAP = {
  "Entradas": "Entrada",
  "Plato principal": "Principal",
  "Bebidas": "Bebida",
  "Postres": "Postres"
};

export default function MenuResto() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Entradas");

  // Cargar productos cuando cambia la categoría
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        
        // Mapear el nombre UI al nombre en BD
        const categoryInDB = CATEGORY_MAP[selectedCategory];
        console.log(`Buscando productos de categoría: "${categoryInDB}"`);
        
        const data = await getProductsByCategory(categoryInDB);
        setProductos(data);
        console.log(`Se obtuvieron ${data.length} productos`);
      } catch (err) {
        console.error("Error al cargar productos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="flex min-h-screen bg-red-50 font-sans">
        <Sidebar />
        <main className="flex-1 p-8 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl text-red-700 font-semibold">
              Cargando productos...
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-red-50 font-sans">
        <Sidebar />
        <main className="flex-1 p-8 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl text-red-700 font-semibold">
              Error al cargar productos: {error}
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-red-50 font-sans">
      <Sidebar onCategoryChange={setSelectedCategory} selectedCategory={selectedCategory} />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-red-700 mb-8 border-b-2 border-red-300 pb-3">
          {selectedCategory}
        </h2>
        <ProductGrid productos={productos} />
      </main>
    </div>
  );
}
