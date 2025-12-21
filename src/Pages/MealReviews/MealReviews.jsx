


import axios from "axios";
import { useEffect, useState } from "react";
import ReviewSlider from "./ReviewSlider";

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
  }, [mealId, reload]); // FIX HERE

  return <ReviewSlider reviews={reviews} />;
}

