
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'

const ChefOrderRequests = () => {
  const axiosSecure = useAxiosSecure()

  const {
    data: orders = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ['chef-orders'],
    queryFn: async () => {
      const res = await axiosSecure.get('/chef/orders')
      return res.data
    },
  })

  const handleStatusChange = async (id, status) => {
    const confirm = await Swal.fire({
      title: `Confirm ${status}?`,
      text: 'This action cannot be undone',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    })

    if (!confirm.isConfirmed) return

    try {
      await axiosSecure.patch(`/orders/status/${id}`, { status })
      Swal.fire('Success!', `Order ${status} successfully`, 'success')
      refetch()
    } catch (err) {
      Swal.fire('Error!', 'Something went wrong', 'error',err)
    }
  }

  if (isLoading) {
    return <p className="text-center py-10">Loading orders...</p>
  }

  if (isError) {
    return (
      <p className="text-center py-10 text-red-500">
        Failed to load orders
      </p>
    )
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🍳 Order Requests</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow">
          <table className="table table-zebra w-full">
            <thead className="bg-gray-100">
              <tr>
                <th>Food</th>
                <th>Price</th>
                <th>Qty</th>
                <th>User Email</th>
                <th>Address</th>
                <th>Order Time</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                const isPending = order.status === 'pending'
                const isAccepted = order.status === 'accepted'
                const isCancelled = order.status === 'cancelled'
                const isDelivered = order.status === 'delivered'

                return (
                  <tr key={order._id}>
                    <td className="font-semibold">{order.name}</td>
                    <td>${order.price}</td>
                    <td>{order.quantity}</td>
                    <td>{order.customer?.email}</td>
                    <td>{order.customer?.address}</td>
                    <td>
                      {new Date(order.createdAt).toLocaleString()}
                    </td>

                    <td>
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold capitalize
                          ${
                            isPending &&
                            'bg-yellow-100 text-yellow-700'
                          }
                          ${
                            isAccepted &&
                            'bg-blue-100 text-blue-700'
                          }
                          ${
                            isDelivered &&
                            'bg-green-100 text-green-700'
                          }
                          ${
                            isCancelled &&
                            'bg-red-100 text-red-700'
                          }
                        `}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td>
                      <span className="text-green-600 font-semibold">
                        Paid
                      </span>
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <button
                          disabled={!isPending}
                          onClick={() =>
                            handleStatusChange(
                              order._id,
                              'cancelled'
                            )
                          }
                          className="btn btn-xs btn-error disabled:opacity-40"
                        >
                          Cancel
                        </button>

                        <button
                          disabled={!isPending}
                          onClick={() =>
                            handleStatusChange(
                              order._id,
                              'accepted'
                            )
                          }
                          className="btn btn-xs btn-success disabled:opacity-40"
                        >
                          Accept
                        </button>

                        <button
                          disabled={!isAccepted}
                          onClick={() =>
                            handleStatusChange(
                              order._id,
                              'delivered'
                            )
                          }
                          className="btn btn-xs btn-info disabled:opacity-40"
                        >
                          Deliver
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ChefOrderRequests
