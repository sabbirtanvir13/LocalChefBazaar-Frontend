import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../hooks/useAxiosSecure'


const FavoriteMeal = () => {
  const axiosSecure = useAxiosSecure()

  const { data: favorites = [], refetch } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const res = await axiosSecure.get('/favorites')
      return res.data
    }
  })

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Remove from favorites?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.delete(`/favorites/${id}`)
        Swal.fire('Removed!', 'Meal removed from favorites successfully.', 'success')
        refetch()
      }
    })
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">❤️ My Favorite Meals</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite meals added yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="table">
            <thead className="bg-gray-100">
              <tr>
                <th>#</th>
                <th>Meal Name</th>
                <th>Chef Name</th>
                <th>Price ($)</th>
                <th>Date Added</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {favorites.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td className="font-medium">{item.mealName}</td>
                  <td>{item.chefName}</td>
                  <td>{item.price || '—'}</td>
                  <td>{new Date(item.addedAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  )
}

export default FavoriteMeal
