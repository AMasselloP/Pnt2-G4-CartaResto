import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";

export default function MenuResto() {
  const productos = [
    {
      id: 1,
      titulo: "Bruschetta",
      ingredientes: "Pan, tomate, albahaca",
      precio: "$1200",
      imagen:
        "https://images.unsplash.com/photo-1601924638867-3ec4e2930c77?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      titulo: "Empanadas",
      ingredientes: "Carne, cebolla, aceitunas",
      precio: "$1500",
      imagen:
        "https://images.unsplash.com/photo-1617196039897-3c09bfa2c8e3?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      titulo: "Pizza Margherita",
      ingredientes: "Mozzarella, tomate, albahaca",
      precio: "$2000",
      imagen:
        "https://images.unsplash.com/photo-1601924638867-3ec4e2930c77?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      titulo: "Guiso",
      ingredientes: "Carne, papas, verduras",
      precio: "$1800",
      imagen:
        "https://images.unsplash.com/photo-1617196039897-3c09bfa2c8e3?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 5,
      titulo: "Milanesa",
      ingredientes: "Carne, pan rallado, limón",
      precio: "$1700",
      imagen:
        "https://images.unsplash.com/photo-1617196039897-3c09bfa2c8e3?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="flex min-h-screen bg-red-50 font-sans">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-red-700 mb-8 border-b-2 border-red-300 pb-3">
          Entradas
        </h2>
        <ProductGrid productos={productos} />
      </main>
    </div>
  );
}
