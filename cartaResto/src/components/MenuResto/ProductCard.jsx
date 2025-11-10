export default function ProductCard({ producto }) {
  return (
    <div className="bg-white border border-red-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      <img
        src={producto.imagen}
        alt={producto.titulo}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-red-700 group-hover:text-red-800">
          {producto.titulo}
        </h3>
        <p className="text-sm text-gray-600">{producto.ingredientes}</p>
        <p className="font-bold text-red-800 mt-2">{producto.precio}</p>
      </div>
    </div>
  );
}
