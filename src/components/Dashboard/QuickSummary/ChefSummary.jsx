// const ChefSummary = () => {
//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6">

//       <h3 className="text-lg font-semibold text-gray-800 mb-4">
//         Quick Summary
//       </h3>

//       <div className="space-y-4">
//         <div className="flex justify-between">
//           <span className="text-sm text-gray-500">Today's Orders</span>
//           <span className="font-semibold">12</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-sm text-gray-500">Pending</span>
//           <span className="font-semibold text-orange-500">4</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-sm text-gray-500">Delivered</span>
//           <span className="font-semibold text-green-600">18</span>
//         </div>

//         <hr />

//         <div className="flex justify-between">
//           <span className="text-sm text-gray-500">Total Earnings</span>
//           <span className="font-semibold text-indigo-600">$1,420</span>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default ChefSummary
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const ChefSummary = () => {
  const axiosSecure = useAxiosSecure()

  const { data = {} } = useQuery({
    queryKey: ['chef-summary'],
    queryFn: async () => {
      const res = await axiosSecure.get('/chef-stats')
      return res.data
    },
  })

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Summary
      </h3>

      <div className="space-y-4">
        <SummaryRow label="Total Orders" value={data.myOrders} />
        <SummaryRow label="Delivered" value={data.delivered} color="text-green-600" />
        <SummaryRow label="My Meals" value={data.myMeals} />

        <hr />

        <SummaryRow
          label="Total Earnings"
          value={`$${data.earnings}`}
          color="text-indigo-600"
        />
      </div>
    </div>
  )
}

const SummaryRow = ({ label, value, color = '' }) => (
  <div className="flex justify-between">
    <span className="text-sm text-gray-500">{label}</span>
    <span className={`font-semibold ${color}`}>{value}</span>
  </div>
)

export default ChefSummary
