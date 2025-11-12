import React from "react";
import "./styles/graciasCompra.css";
import { useNavigate } from "react-router-dom";

const GraciasCompra = () => {
  const navigate = useNavigate()
  return (
    <div className="gracias-container flex items-center justify-center h-screen">
      <div className="gracias-card bg-white p-10 rounded-xl shadow-md text-center">
        <p className="text-lg font-medium mb-6">Gracias por su compra</p>
        <button onClick={() => navigate("/")} className="btn-inicio">Inicio</button>
      </div>
    </div>
  );
};



export default GraciasCompra;
