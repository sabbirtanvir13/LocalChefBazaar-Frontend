import Swal from 'sweetalert2'

import { useState } from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure'

const UpdateReviewModal = ({ review, closeModal, refetch }) => {
  const axiosSecure = useAxiosSecure()
  const [rating, setRating] = useState(review.rating)
  const [comment, setComment] = useState(review.comment)

  const handleUpdate = async () => {
    await axiosSecure.patch(`/reviews/${review._id}`, {
      rating,
      comment,
    })

    Swal.fire('Updated!', 'Review updated successfully', 'success')
    refetch()
    closeModal()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Update Review</h3>

        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="input input-bordered w-full mb-3"
          min="1"
          max="5"
        />

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="textarea textarea-bordered w-full mb-4"
        />

        <div className="flex justify-end gap-2">
          <button onClick={closeModal} className="btn btn-sm">
            Cancel
          </button>
          <button onClick={handleUpdate} className="btn btn-sm btn-success">
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateReviewModal
