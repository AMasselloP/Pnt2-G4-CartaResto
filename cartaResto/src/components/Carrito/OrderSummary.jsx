// src/components/OrderSummary.jsx
import React from "react";
import "./styles/checkout.tailwind.css";
import { useNavigate } from "react-router-dom";
import useCartStore from '../../store/cartStore'


export default function OrderSummary() {
    const navigate = useNavigate()
    const items = useCartStore((s) => s.items)

    const subtotal = items.reduce((acc, i) => acc + ((i.precio || i.price || 0) * (i.quantity || 1)), 0)
    const delivery = items.length > 0 ? 5000 : 0
    const total = subtotal + delivery

  const clearCart = useCartStore((s) => s.clearCart)

  const handleCancel = () => {
    clearCart()
    navigate('/cancelado')
  }

  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <div className="order-box">
      <h2 className="section-title text-center">Order summary</h2>

      <div className="flex justify-between text-sm mb-1">
        <span>Subtotal</span>
        <span className="price-yellow">$ {subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-sm mb-1">
        <span>Delivery</span>
        <span className="price-yellow">$ {delivery.toLocaleString()}</span>
      </div>

      <hr className="border-red-300 my-2" />

      <div className="flex justify-between text-base font-bold mb-4">
        <span>Total</span>
        <span className="price-yellow">$ {total.toLocaleString()}</span>
      </div>

      <div className="space-y-2 mb-4">
        <label className="payment-option">
          <input type="radio" name="payment" />
          <span>Crédito/Débito</span>
        </label>
        <label className="payment-option">
          <input type="radio" name="payment" />
          <span>Efectivo</span>
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors"
          aria-label="Cancelar compra"
        >
          Cancelar compra
        </button>

        <button
          onClick={() => navigate("/finCompra")}
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
          aria-label="Pagar"
        >
          Pagar $ {total.toLocaleString()}
        </button>
      </div>
    </div>
  );
}
