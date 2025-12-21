import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const ManageRequest = () => {
  const axiosSecure = useAxiosSecure()

  // 🔹 FETCH ALL REQUESTS
  const {
    data: requests = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['admin-requests'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/requests')
      return res.data
    },
  })

  // 🔹 ACCEPT REQUEST
  const handleAccept = async (req) => {
    const res = await axiosSecure.patch(
      `/admin/requests/accept/${req.requestType}/${req._id}`
    )

    if (res.data.success) {
      Swal.fire('Approved!', 'Request approved successfully', 'success')
      refetch()
    }
  }

  // 🔹 REJECT REQUEST
  const handleReject = async (req) => {
    const res = await axiosSecure.patch(
      `/admin/requests/reject/${req.requestType}/${req._id}`
    )

    if (res.data.success) {
      Swal.fire('Rejected!', 'Request rejected', 'error')
      refetch()
    }
  }

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>
  }

  return (
    <div className="p-6">
      {/* 🔥 PAGE TITLE */}
      <h2 className="text-2xl font-semibold mb-6">
        Manage Role Requests
      </h2>

      {/* 📊 TABLE */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="table table-zebra w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>Email</th>
              <th>Type</th>
              <th>Status</th>
              <th>Request Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No requests found
                </td>
              </tr>
            ) : (
              requests.map((req) => (
                <tr key={req._id}>
                  <td>{req.userEmail}</td>

                  <td className="capitalize font-medium">
                    {req.requestType}
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        req.requestStatus === 'pending'
                          ? 'badge-warning'
                          : req.requestStatus === 'approved'
                          ? 'badge-success'
                          : 'badge-error'
                      }`}
                    >
                      {req.requestStatus}
                    </span>
                  </td>

                  <td>
                    {new Date(req.requestTime).toLocaleString()}
                  </td>

                  <td>
                    {req.requestStatus === 'pending' ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAccept(req)}
                          className="btn btn-success btn-xs"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(req)}
                          className="btn btn-error btn-xs"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">
                        Done
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageRequest
