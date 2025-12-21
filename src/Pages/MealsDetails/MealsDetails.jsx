// import React from "react";
// import Container from "../Shared/Container";
// import { useParams } from "react-router";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// export default function MealsDetails() {

//     const { id } = useParams()

//     const { data: meal = {}, isLoading, refetch } = useQuery({
//         queryKey: ['meal', id],
//         queryFn: async () => {
//             const result = await axios(`${import.meta.env.VITE_API_URL}/meals/${id}`)
//             return result.data
//         }
//     })
//     console.log(meal)


//     const {
//         image,
//         foodname,
//         price,
//         rating,
//         ingredients,
//         deliveryArea,
//         delivery,
//         experience,
//         chef,
//     } = meal

//     return (
//         <Container>
//             <section className="bg-gray-100 py-16">
//                 <div className="max-w-6xl mx-auto px-6">
//                     <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                         {/* Top Section */}
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
//                             {/* Image */}
//                             <div className="flex justify-center">
//                                 <img
//                                     src={image}
//                                     className="w-full max-w-md rounded-2xl drop-shadow-xl"
//                                 />
//                             </div>

//                             {/* Info */}
//                             <div className="space-y-4">
//                                 <h2 className="text-3xl font-extrabold">Food Name : {foodname}

//                                 </h2>


//                                 {/* Rating */}
//                                 <div className="text-orange-500 text-lg">
//                                     {Array(5)
//                                         .fill(0)
//                                         .map((_, i) => (
//                                             <span key={i}>{i < rating ? "★" : "☆"}</span>
//                                         ))}
//                                 </div>
//                                 <p className="text-2xl font-bold text-orange-500">${price}</p>
//                                 <div className="grid grid-cols-2 gap-4 mt-6">
//                                     <p><span className="font-semibold">Chef Name:{chef?.name}</span> John Doe</p>
//                                     <p><span className="font-semibold">Chef ID:{chef?.email} </span> chef_12345</p>
//                                     <p><span className="font-semibold">Experience:</span> {experience}</p>
//                                     <p><span className="font-semibold">Delivery Area:</span> {deliveryArea}</p>
//                                     <p><span className="font-semibold">Delivery Time:</span> {delivery}</p>
//                                 </div>

//                                 <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow-lg transition">
//                                     Order Now
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Ingredients Section */}
//                         <div className="border-t p-8">
//                             <h3 className="text-xl font-bold mb-3">Ingredients</h3>
//                           {ingredients}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </Container>
//     );
// }


import React, { useState } from "react";
import Container from "../Shared/Container";
import { Link, Navigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AddReview from "../../components/form/AddReview";
import MealReviews from "../MealReviews/MealReviews";

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
                <Link state={{ meal }} to='/orderpage' className="border ml-[95px] rounded-full px-5 py-2 text-sm font-semibold hover:bg-orange-500 hover:text-white transition">
               Add Favorite 
                </Link>
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
