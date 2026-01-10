


import useAxiosSecure from '../../hooks/useAxiosSecure'

const UpdateMealForm = ({ meal, closeModal, refetch }) => {
  const axiosSecure = useAxiosSecure()

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target

    const updatedMeal = {
      foodname: form.foodname.value,
      price: Number(form.price.value),
      delivery: form.delivery.value,
      ingredients: form.ingredients.value,
    }

    await axiosSecure.patch(`/meals/${meal._id}`, updatedMeal)
    refetch()
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4 mt-4'>
      <input
        name='foodname'
        defaultValue={meal.foodname}
        className='w-full px-3 py-2 border rounded'
      />
      <input
        name='price'
        defaultValue={meal.price}
        className='w-full px-3 py-2 border rounded'
      />
      <input
        name='delivery'
        defaultValue={meal.delivery}
        className='w-full px-3 py-2 border rounded'
      />
      <textarea
        name='ingredients'
        defaultValue={meal.ingredients}
        className='w-full px-3 py-2 border rounded'
      />

      <button className='w-full bg-lime-500 text-white py-2 rounded'>
        Update Meal
      </button>
    </form>
  )
}

export default UpdateMealForm
