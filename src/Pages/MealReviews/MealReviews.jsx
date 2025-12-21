

// // import { useEffect, useState } from "react";
// // import axios from "axios";

import axios from "axios";
import { useEffect, useState } from "react";
import ReviewSlider from "./ReviewSlider";

// // export default function MealReviews({ mealId, reload }) {
// //   const [reviews, setReviews] = useState([]);

// //   useEffect(() => {
// //     if (!mealId) return;

// //     const fetchReviews = async () => {
// //       const { data } = await axios.get(
// //         `${import.meta.env.VITE_API_URL}/reviews/${mealId}`
// //       );
// //       setReviews(data);
// //     };

// //     fetchReviews();
// //   }, [mealId, reload]);

// //   return (
// //     <div className="p-8">
// //       <h3 className="text-2xl font-bold mb-4">Reviews</h3>

// //       {reviews.length === 0 && <p>No reviews yet</p>}

// //       <div className="space-y-4">
// //         {reviews.map((r) => (
// //           <div key={r._id} className="border p-4 rounded-xl">
// //             <div className="flex gap-3 items-center">
// //               <img
// //                 src={r.reviewerImage}
// //                 className="w-10 h-10 rounded-full"
// //               />
// //               <div>
// //                 <p className="font-semibold">{r.reviewerName}</p>
// //                 <p className="text-sm text-gray-500">
// //                   {new Date(r.date).toLocaleDateString()}
// //                 </p>
// //               </div>
// //             </div>

// //             <p className="text-yellow-500 mt-2">⭐ {r.rating}</p>
// //             <p className="mt-1">{r.comment}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function MealReviews({ mealId, reload }) {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     if (!mealId) return;

//     const fetchReviews = async () => {
//       try {
//         const { data } = await axios.get(
//           `${import.meta.env.VITE_API_URL}/reviews/${mealId}`
//         );
//         setReviews(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchReviews();
//   }, [mealId, reload]);

//   return (
//     <div className="p-8 bg-gray-50">
//       <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>

//       {reviews.length === 0 && (
//         <p className="text-gray-500">No reviews yet</p>
//       )}

//       {/* CARD GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {reviews.map((r) => (
//           <div
//             key={r._id}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5"
//           >
//             {/* Header */}
//             <div className="flex items-center gap-3 mb-3">
//               <img
//                 src={r.reviewerImage}
//                 alt=""
//                 className="w-12 h-12 rounded-full border"
//               />
//               <div>
//                 <p className="font-semibold">{r.reviewerName}</p>
//                 <p className="text-xs text-gray-500">
//                   {new Date(r.date).toLocaleDateString()}
//                 </p>
//               </div>
//             </div>

//             {/* Rating */}
//             <div className="text-yellow-500 mb-2 text-lg">
//               {"★".repeat(r.rating)}
//               {"☆".repeat(5 - r.rating)}
//             </div>

//             {/* Comment */}
//             <p className="text-gray-600 text-sm leading-relaxed">
//               {r.comment}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import axios from "axios";
// import ReviewSlider from "./ReviewSlider";

// export default function MealReviews({ mealId, reload }) {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     if (!mealId) return;

//     const fetchReviews = async () => {
//       const res = await axios.get(
//         `${import.meta.env.VITE_API_URL}/reviews/${mealId}`
//       );
//       setReviews(res.data);
//     };

//     fetchReviews();
//   }, [mealId, reload]); // ✅ reload add করো

//   return <ReviewSlider reviews={reviews} />;
// }


export default function MealReviews({ mealId, reload }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!mealId) return;

    const fetchReviews = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/reviews/${mealId}`
      );
      setReviews(res.data);
    };

    fetchReviews();
  }, [mealId, reload]); // 🔥 FIX HERE

  return <ReviewSlider reviews={reviews} />;
}

