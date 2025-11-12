// src/components/OrderSummary.jsx
import React from "react";
import "./styles/checkout.tailwind.css";
import { useNavigate } from "react-router-dom";


export default function OrderSummary() {
    const navigate = useNavigate()
  return (
    <div className="order-box">
      <h2 className="section-title text-center">Order summary</h2>

      <div className="flex justify-between text-sm mb-1">
        <span>Subtotal</span>
        <span className="price-yellow">$50.000</span>
      </div>
      <div className="flex justify-between text-sm mb-1">
        <span>Delivery</span>
        <span className="price-yellow">$5.000</span>
      </div>

      <hr className="border-red-300 my-2" />

      <div className="flex justify-between text-base font-bold mb-4">
        <span>Total</span>
        <span className="price-yellow">$55.000</span>
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

      <button onClick={() => navigate("/finCompra")} className="btn-yellow">Pagar $55.000</button>
    </div>
  );
}
