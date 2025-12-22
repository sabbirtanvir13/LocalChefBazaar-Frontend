

import { useState } from 'react'
import DeleteModal from '../../../Modal/DeleteModal'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const UserOrderDataRow = ({ order, refetch }) => {
  const [isOpen, setIsOpen] = useState(false)
  const axiosSecure = useAxiosSecure()

  const {
    _id,
    name,
    image,
    price,
    quantity,
    chef,
    status,
    deliveryTime,
  } = order || {}

  const isDelivered = status === 'delivered'


  const handleDelete = async () => {
    try {
      await axiosSecure.delete(`/orders/${_id}`)
      setIsOpen(false)
      refetch()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <tr className="bg-gray-50">
      <td className="px-5 py-4 border-b">
        <img src={image} alt={name} className="h-10 w-10 rounded" />
      </td>

      <td className="px-5 py-4 border-b">{name}</td>
      <td className="px-5 py-4 border-b">{chef?.name || 'N/A'}</td>
      <td className="px-5 py-4 border-b">{chef?.chefId || 'N/A'}</td>
      <td className="px-5 py-4 border-b">{deliveryTime || '30 min'}</td>
      <td className="px-5 py-4 border-b">${price}</td>
      <td className="px-5 py-4 border-b">{quantity}</td>

      <td className="px-5 py-4 border-b">
        <span
          className={`px-2 py-1 rounded text-xs ${
            isDelivered
              ? 'bg-green-100 text-green-700'
              : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {status || 'pending'}
        </span>
      </td>

      <td className="px-5 py-4 border-b">Paid</td>

      <td className="px-5 py-4 border-b">
        <button
          disabled={isDelivered}
          onClick={() => setIsOpen(true)}
          className={`px-3 py-1 rounded-full text-sm ${
            isDelivered
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-red-500 text-white hover:bg-red-600'
          }`}
        >
          Cancel
        </button>

        {!isDelivered && (
          <DeleteModal
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            onConfirm={handleDelete}
          />
        )}
      </td>
    </tr>
  )
}

export default UserOrderDataRow
