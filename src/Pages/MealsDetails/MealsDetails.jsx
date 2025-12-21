


import React, { useState } from "react";
import Container from "../Shared/Container";
import { Link, Navigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AddReview from "../../components/form/AddReview";
import MealReviews from "../MealReviews/MealReviews";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function MealsDetails() {
  const { id } = useParams();
  const [reload, setReload] = useState(false);
  const { data: meal = {}, isLoading } = useQuery({
    queryKey: ["meal", id],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/meals/${id}`
      );
      return res.data;
    },
  });



   const axiosSecure = useAxiosSecure();
const { user } = useAuth();

const handleAddFavorite = async () => {
  if (!user) {
    Swal.fire("Login required", "Please login first", "warning");
    return;
  }

  const favoriteData = {
    mealId: id,
    mealName: foodname,
    chefName: chefname,
    price: price,
  };

  try {
    await axiosSecure.post("/favorites", favoriteData);
    Swal.fire("Added!", "Meal added to favorites ", "success");
  } catch (error) {
    if (error.response?.status === 409) {
      Swal.fire("Oops!", "Already in favorites", "info");
    } else {
      Swal.fire("Error", "Something went wrong", "error");
    }
  }
};



  // Loading state
  if (isLoading) {
    return (
      <Container>
        <p className="text-center py-20 text-xl font-semibold">
          Loading meal details...
        </p>
      </Container>
    );
  }
  console.log("ID:", id);
  console.log("MEAL:", meal);



  const { image, foodname, price, ingredients, deliveryArea, delivery, experience, chefname, chef = {} } = meal;

  return (
    <Container>
      <section className=" py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">

              {/* Food Image */}
              <div className="flex justify-center">
                <img
                  src={image}
                  alt={foodname}
                  className=" w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 max-w-md rounded-2xl drop-shadow-xl"
                />
              </div>

              {/* Meal Info */}
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold">
                  {foodname}
                </h2>

                <p className="text-2xl font-bold text-orange-500">
                  ${price}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700">
                  <p>
                    <span className="font-semibold">Chef Name:</span>{" "}
                    {chefname}
                  </p>

                  <p>
                    <span className="font-semibold">Chef ID:</span>{" "}
                    {chef?.email}
                  </p>

                  <p>
                    <span className="font-semibold">Chef Experience:</span>{" "}
                    {experience} years
                  </p>

                  <p>
                    <span className="font-semibold">Delivery Area:</span>{" "}
                    {deliveryArea}
                  </p>

                  <p>
                    <span className="font-semibold">Delivery Time:</span>
                    {delivery}
                  </p>
                  <p>
                    <span className="font-semibold">Ingredients:</span>
                    {ingredients}
                  </p>
                </div>

                <Link state={{ meal }} to='/orderpage' className="border rounded-full px-5 py-2 text-sm font-semibold hover:bg-orange-500 hover:text-white transition">
                  Order
                </Link>
                <button
                  onClick={handleAddFavorite}
                  className="border ml-[95px] rounded-full px-5 py-2 text-sm font-semibold hover:bg-orange-500 hover:text-white transition"
                >
                  ❤️ Add Favorite
                </button>

              </div>
            </div>



          </div>
        </div>

        {/* Add Review */}
        <AddReview
          mealId={id}
          onReviewAdded={() => setReload(!reload)}
        />

        {/* Review List */}
        <MealReviews mealId={id} reload={reload} />


      </section>
    </Container>
  );
}
