

import React from "react";
import { Link } from "react-router";

export default function Card({ meal }) {
  const {
    _id,
    image,
    foodname,
    price,
    rating,
    deliveryArea,
    chef,
  } = meal || {};

  return (
    <Link to={`/meal/${_id}`}>
      <div className="text-center rounded-2xl shadow-md p-6 bg-white hover:shadow-xl transition">
        {/* Food Image */}
        <img
          src={image}
          alt={foodname}
          className="w-40 mx-auto -mt-14 drop-shadow-lg"
        />

        {/* Rating */}
        <div className="flex justify-center mt-4 text-orange-500">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span key={i}>{i < rating ? "★" : "☆"}</span>
            ))}
        </div>

        {/* Food Name */}
        <h3 className="font-bold text-lg mt-2">{foodname}</h3>

        {/* Chef Info */}
        <p className="text-sm text-gray-600 mt-1">
          Chef: <span className="font-medium">{chef?.name}</span>
        </p>
        <p className="text-xs text-gray-400">Chef ID: {chef?.email}</p>

        {/* Delivery Area */}
        <p className="text-sm text-gray-500 mt-2">
          Delivery Area: {deliveryArea}
        </p>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-5">
          <span className="text-orange-500 font-bold text-xl">${price}</span>
          <button className="border rounded-full px-5 py-2 text-sm font-semibold hover:bg-orange-500 hover:text-white transition">
            See Details
          </button>
        </div>
      </div>
    </Link>
  );
}

