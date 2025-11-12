// src/components/DeliveryInfo.jsx
import React from "react";
import "./styles/checkout.tailwind.css";

export default function DeliveryInfo() {
  return (
    <div className="section-container">
      <h2 className="section-title">Delivery information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="label">Address</label>
          <input
            type="text"
            placeholder="calle, número"
            className="input-red"
          />
        </div>
        <div>
          <label className="label">City</label>
          <input
            type="text"
            placeholder="calle, número"
            className="input-red"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="label">Delivery notes</label>
        <textarea
          placeholder="instrucciones"
          rows="2"
          className="input-red"
        ></textarea>
      </div>

      <button className="btn-green">Guardar</button>
    </div>
  );
}
