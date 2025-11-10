export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-red-200 p-6 flex flex-col justify-between shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-red-700 mb-2">Madre Rojas</h1>
        <p className="text-sm text-gray-700 leading-relaxed">
          Av. Corrientes 1964, CABA
          <br />
          <span className="font-semibold text-red-600">(011) 4284-1919</span>
          <br />
          19:00 PM - 02:00 AM
        </p>

        <nav className="mt-10 flex flex-col gap-3">
          {["Entradas", "Plato principal", "Bebidas", "Postres"].map((cat) => (
            <button
              key={cat}
              className="text-left border border-red-300 text-red-600 font-medium rounded-lg px-4 py-2 hover:bg-red-100 hover:text-red-700 transition-colors duration-200"
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6 text-center">
        <button className="border border-red-400 text-red-600 font-semibold rounded-md px-5 py-2 hover:bg-red-100 transition">
          LogIn
        </button>
      </div>
    </aside>
  );
}
