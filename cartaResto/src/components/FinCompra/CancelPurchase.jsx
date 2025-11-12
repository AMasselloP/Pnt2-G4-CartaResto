import React from "react";
import "../Styles/Login.css";
import "./styles/graciasCompra.css";
import { useNavigate } from "react-router-dom";

const CancelPurchase = () => {
  const navigate = useNavigate()
  return (
    <div className="login-container">
      <div className="gracias-card bg-white p-10 rounded-xl shadow-md text-center" style={{ position: 'relative', zIndex: 10 }}>
        <p className="text-lg font-medium mb-6">Compra cancelada</p>
        <button onClick={() => navigate("/")} className="px-4 py-2 bg-amber-400 text-black rounded-md">Inicio</button>
      </div>
    </div>
  );
};

export default CancelPurchase;
