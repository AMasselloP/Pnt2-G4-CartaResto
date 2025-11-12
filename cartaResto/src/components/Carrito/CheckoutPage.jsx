// src/pages/CheckoutPage.jsx
import React from "react";
import ItemList from "./ItemList";
import DeliveryInfo from "./DeliveryInfo";
import OrderSummary from "./OrderSummary";
import "./styles/checkout.tailwind.css";

export default function CheckoutPage() {
  return (
    <div className="page-container">
      <div className="checkout-layout">
        <div className="flex-1 flex flex-col gap-6">
          <ItemList />
          <DeliveryInfo />
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}
