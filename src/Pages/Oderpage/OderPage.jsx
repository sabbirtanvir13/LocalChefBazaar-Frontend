

import { useLocation, Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Modal from "../../Modal/Modal";

export default function OrderPage() {
  const { user } = useAuth();
  const location = useLocation();
const [isModalOpen, setIsModalOpen] = useState(false);
  const { meal } = location.state || {};
const [quantity, setQuantity] = useState(1);
const [address, setAddress] = useState("");

  if (!meal) {
    return <Navigate to="/" replace />;
  }

  const { foodname, price, chefname, chef = {} } = meal;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Order Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <p><strong>Meal Name:</strong> {foodname}</p>
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Chef Name:</strong> {chefname}</p>
          <p><strong>Chef Email:</strong> {chef?.email}</p>
          <p><strong>Customer:</strong> {user?.email}</p>
        </div>

        <div className="mt-6">
          <label className="font-semibold">Quantity</label>
          <input
            type="number"
             onChange={(e) => setQuantity(Number(e.target.value))}
            min={1}
            className="w-full mt-1 border rounded-xl px-4 py-2"
          />
        </div>

        <div className="mt-6">
          <label className="font-semibold">Delivery Address</label>
          <textarea
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address"
            className="w-full mt-1 border rounded-xl px-4 py-2 h-24"
          />
        </div>

        
      <Modal
       meal={meal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mealName={meal.foodname}
        quantity={quantity}
      
        address={address}
        onConfirm={() => console.log("Order Confirmed!")}
      />
      </div>
    </div>
  );
}

