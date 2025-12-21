

import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import { useState } from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import UpdateReviewModal from '../../../Modal/UpdatedReviewModal'


const MyReview = () => {
  const axiosSecure = useAxiosSecure()
  const [selectedReview, setSelectedReview] = useState(null)

  const { data: reviews = [], refetch, isLoading } = useQuery({
    queryKey: ['my-reviews'],
    queryFn: async () => {
      const res = await axiosSecure.get('/my-reviews')
      return res.data
    },
  })

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Delete Review?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Yes, Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.delete(`/reviews/${id}`)
        Swal.fire('Deleted!', 'Your review has been removed.', 'success')
        refetch()
      }
    })
  }

  if (isLoading) {
    return <p className="text-center mt-10">Loading reviews...</p>
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
         My Reviews
      </h2>

      {/* EMPTY STATE */}
      {reviews.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg">No reviews found</p>
          <p className="text-sm">You haven't reviewed any meals yet.</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition p-5"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                Meal ID
              </span>
              <span className="text-xs text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>

            {/* CONTENT */}
            <h3 className="font-semibold text-gray-800 mb-1 truncate">
              {review.foodId}
            </h3>

            <p className="flex items-center gap-1 text-yellow-500 font-medium mb-2">
              ⭐ {review.rating} / 5
            </p>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {review.comment}
            </p>

            {/* ACTIONS */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setSelectedReview(review)}
                className="text-sm px-4 py-1.5 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Update
              </button>

              <button
                onClick={() => handleDelete(review._id)}
                className="text-sm px-4 py-1.5 rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* UPDATE MODAL */}
      {selectedReview && (
        <UpdateReviewModal
          review={selectedReview}
          closeModal={() => setSelectedReview(null)}
          refetch={refetch}
        />
      )}
    </div>
  )
}

export default MyReview
