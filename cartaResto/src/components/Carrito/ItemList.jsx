// src/components/ItemList.jsx
import React from "react";
import "./styles/checkout.tailwind.css";

export default function ItemList() {
  return (
    <div className="section-container">
      <h2 className="section-title">Your items</h2>

      {/* Item 1 */}
      <div className="item-row border-b border-red-300 pb-3 mb-3">
        <div className="item-info">
          <div className="item-pic">Pic</div>
          <div>
            <p className="item-title">Título</p>
            <p className="item-sub">ingredientes</p>
          </div>
        </div>
        <span className="item-price">Precio</span>
      </div>

      {/* Item 2 */}
      <div className="item-row">
        <div className="item-info">
          <div className="item-pic">Pic</div>
          <div>
            <p className="item-title">Título</p>
            <p className="item-sub">ingredientes</p>
          </div>
        </div>
        <span className="item-price">Precio</span>
      </div>
    </div>
  );
}
