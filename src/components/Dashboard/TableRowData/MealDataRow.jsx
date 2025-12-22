
import { useState } from 'react'
import DeleteModal from '../../../Modal/DeleteModal'
import UpdateMealModal from '../../../Modal/UpdateMealModal'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const MealDataRow = ({ meal, refetch }) => {
  const axiosSecure = useAxiosSecure()
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  const {
    _id,
    image,
    foodname,
    ingredients,
    price,
    rating,
    delivery,
    chef,
  } = meal

  // ✅ DELETE
  const handleDelete = async () => {
    await axiosSecure.delete(`/meals/${_id}`)
    refetch()
    setIsOpen(false)
  }

  return (
    <tr>
      <td className='px-5 py-5 border-b bg-white text-sm'>
        <img src={image} className='h-10 w-10 rounded object-cover' />
      </td>

      <td className='px-5 py-5 border-b bg-white text-sm'>{foodname}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>{ingredients}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>${price}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>{rating}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>{delivery}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>{chef?.name}</td>

      {/* DELETE */}
      <td className='px-5 py-5 border-b bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='px-3 py-1 bg-red-200 rounded-full'
        >
          Delete
        </button>

        <DeleteModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          onConfirm={handleDelete}
        />
      </td>

      {/* UPDATE */}
      <td className='px-5 py-5 border-b bg-white text-sm'>
        <button
          onClick={() => setIsEditOpen(true)}
          className='px-3 py-1 bg-green-200 rounded-full'
        >
          Update
        </button>

        <UpdateMealModal
          isOpen={isEditOpen}
          closeModal={() => setIsEditOpen(false)}
          meal={meal}
          refetch={refetch}
        />
      </td>
    </tr>
  )
}

export default MealDataRow
