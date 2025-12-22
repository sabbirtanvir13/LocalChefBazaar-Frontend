// import React from 'react';

// const AdminQuickSummary = () => {
//   return (
//     <>
//       {/* Quick Summary */}
//       <div className=" rounded-2xl  p-6">

//         <h3 className="text-lg font-semibold text-gray-800 mb-6">
//           Quick Summary
//         </h3>

//         <div className="space-y-4">

//           <div className="flex items-center justify-between">
//             <p className="text-sm text-gray-500">Today's Orders</p>
//             <span className="font-semibold text-blue-600">24</span>
//           </div>

//           <div className="flex items-center justify-between">
//             <p className="text-sm text-gray-500">Pending Orders</p>
//             <span className="font-semibold text-amber-500">5</span>
//           </div>

//           <div className="flex items-center justify-between">
//             <p className="text-sm text-gray-500">Completed Orders</p>
//             <span className="font-semibold text-emerald-600">19</span>
//           </div>

//           <hr className="my-2" />

//           <div className="flex items-center justify-between">
//             <p className="text-sm text-gray-500">Total Earnings</p>
//             <span className="font-semibold text-violet-600">
//               $1,240
//             </span>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminQuickSummary;

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'


const AdminQuickSummary = () => {
  const axiosSecure = useAxiosSecure()

  const { data = {} } = useQuery({
    queryKey: ['admin-summary'],
    queryFn: async () => (await axiosSecure('/admin-summary')).data,
  })

  return (
    <div className="rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Quick Summary
      </h3>

      <Item label="Today's Orders" value={data.todayOrders} color="text-blue-600" />
      <Item label="Pending Orders" value={data.pendingOrders} color="text-amber-500" />
      <Item label="Completed Orders" value={data.completedOrders} color="text-emerald-600" />

      <hr className="my-4" />

      <Item label="Total Earnings" value={`$${data.totalEarnings}`} color="text-violet-600" />
    </div>
  )
}

const Item = ({ label, value, color }) => (
  <div className="flex items-center justify-between mb-4">
    <p className="text-sm text-gray-500">{label}</p>
    <span className={`font-semibold ${color}`}>{value || 0}</span>
  </div>
)

export default AdminQuickSummary
