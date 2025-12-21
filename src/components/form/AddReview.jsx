// import { useState } from "react";
// import axios from "axios";
// import useAuth from "../../hooks/useAuth";


// export default function AddReview({ mealId, refetch }) {
//   const { user } = useAuth();
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await axios.post(
//         `${import.meta.env.VITE_API_URL}/reviews`,
//         {
//           foodId: mealId,
//           reviewerName: user.displayName,
//           reviewerEmail: user.email,
//           reviewerImage: user.photoURL,
//           rating,
//           comment,
//         },
//         {
//           headers: {
//             authorization: `Bearer ${user.accessToken}`,
//           },
//         }
//       );

//       setComment("");
//       setRating(5);
//       refetch(); // reload reviews
//       alert("Review added ✅");
//     } catch (err) {
//       alert("Review failed ❌");
//       console.log(err)
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded-xl shadow mt-6"
//     >
//       <h3 className="text-xl font-semibold mb-4">Add Review</h3>

//       <label className="block mb-2">Rating</label>
//       <select
//         value={rating}
//         onChange={(e) => setRating(Number(e.target.value))}
//         className="w-full border rounded px-3 py-2 mb-4"
//       >
//         {[5, 4, 3, 2, 1].map((r) => (
//           <option key={r} value={r}>
//             {r} ⭐
//           </option>
//         ))}
//       </select>

//       <label className="block mb-2">Comment</label>
//       <textarea
//         required
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         className="w-full border rounded px-3 py-2 mb-4"
//         rows={4}
//         placeholder="Write your review..."
//       />

//       <button
//         disabled={loading}
//         className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
//       >
//         {loading ? "Submitting..." : "Submit Review"}
//       </button>
//     </form>
//   );
// }



import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Container from "../../Pages/Shared/Container";

export default function AddReview({ mealId, onReviewAdded }) {
  const { user } = useAuth();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/reviews`,
        {
          foodId: mealId,
          reviewerName: user.displayName,
          reviewerEmail: user.email,
          reviewerImage: user.photoURL,
          rating,
          comment,
        },
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      );

      setComment("");
      setRating(5);
      onReviewAdded(); // 🔥 refresh reviews
      alert("Review added ✅");
    } catch (err) {
      console.error(err);
      alert("Review failed ❌");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
<Container>
        <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-xl mx-8 mt-6"
    >
      <h3 className="text-xl font-semibold mb-4">Add Review</h3>

      <label>Rating</label>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full border p-2 rounded mb-4"
      >
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>{r} ⭐</option>
        ))}
      </select>

      <label>Comment</label>
      <textarea
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        rows={4}
      />

      <button
        disabled={loading}
        className="bg-orange-500 text-white px-6 py-2 rounded"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
</Container>
  );
}

