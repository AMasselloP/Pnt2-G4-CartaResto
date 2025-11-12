import useCartStore from '../../store/cartStore'

export default function ProductCard({ producto }) {
  const addItem = useCartStore((s) => s.addItem)

  const handleAdd = () => {
    // Add minimal product shape to cart
    addItem({ id: producto.id, nombre: producto.nombre, precio: Number(producto.precio) || 0, image: producto.image })
  }

  return (
    <div className="bg-white border border-red-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      <img
        src={producto.image}
        alt={producto.nombre}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-red-700 group-hover:text-red-800">
          {producto.nombre}
        </h3>
        <p className="text-sm text-gray-600">{producto.Descripcion}</p>
        <p className="font-bold text-red-800 mt-2">$ {producto.precio}</p>
        <div className="mt-3">
          <button onClick={handleAdd} className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}
