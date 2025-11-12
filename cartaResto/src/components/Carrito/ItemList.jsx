// src/components/ItemList.jsx
import React from "react";
import "./styles/checkout.tailwind.css";
import useCartStore from '../../store/cartStore'

export default function ItemList() {
  const items = useCartStore((s) => s.items)
  const removeItem = useCartStore((s) => s.removeItem)
  const setQuantity = useCartStore((s) => s.setQuantity)

  if (!items || items.length === 0) {
    return (
      <div className="section-container">
        <h2 className="section-title">Your items</h2>
        <p className="text-sm text-gray-600">No hay items en el carrito</p>
      </div>
    )
  }

  return (
    <div className="section-container">
      <h2 className="section-title">Your items</h2>

      {items.map((it) => (
        <div key={it.id} className="item-row border-b border-red-300 pb-3 mb-3">
          <div className="item-info">
            <div className="item-pic">
              {it.image ? <img src={it.image} alt={it.nombre} className="w-16 h-12 object-cover rounded" /> : 'Pic'}
            </div>
            <div>
              <p className="item-title">{it.nombre}</p>
              <p className="item-sub">{it.descripcion || ''}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <button onClick={() => setQuantity(it.id, (it.quantity || 1) - 1)} className="px-2 py-1 border rounded">-</button>
              <span className="px-2">{it.quantity || 1}</span>
              <button onClick={() => setQuantity(it.id, (it.quantity || 1) + 1)} className="px-2 py-1 border rounded">+</button>
            </div>
            <div className="flex items-center gap-4">
              <span className="item-price">$ {((it.precio || it.price || 0) * (it.quantity || 1)).toLocaleString()}</span>
              <button onClick={() => removeItem(it.id)} className="text-sm text-red-600">Eliminar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
