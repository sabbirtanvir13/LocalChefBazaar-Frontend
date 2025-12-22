// import { FaUserAlt, FaDollarSign } from 'react-icons/fa'
// import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'
// import AdminBarChart from '../Chart/AdminBarChart'
// import AdminQuickSummary from '../QuickSummary/AdminQuickSummary'





// const AdminStatistics = () => {
//   return (
//     <div className="p-6 bg-slate-50 min-h-screen">
//       <div className="mt-12">

//         {/* STATS CARDS */}
//         <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

//           {/* Revenue */}
//           <div className="relative flex flex-col rounded-xl bg-white shadow-md">
//             <div className="absolute -mt-4 mx-4 h-16 w-16 grid place-items-center rounded-xl
//               bg-gradient-to-tr from-rose-500 to-red-600 text-white shadow-lg shadow-red-500/40">
//               <FaDollarSign className="w-6 h-6" />
//             </div>
//             <div className="p-4 text-right">
//               <p className="text-sm text-gray-500">Total Revenue</p>
//               <h4 className="text-2xl font-semibold text-gray-800">$120</h4>
//             </div>
//           </div>

//           {/* Orders */}
//           <div className="relative flex flex-col rounded-xl bg-white shadow-md">
//             <div className="absolute -mt-4 mx-4 h-16 w-16 grid place-items-center rounded-xl
//               bg-gradient-to-tr from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/40">
//               <BsFillCartPlusFill className="w-6 h-6" />
//             </div>
//             <div className="p-4 text-right">
//               <p className="text-sm text-gray-500">Total Orders</p>
//               <h4 className="text-2xl font-semibold text-gray-800">120</h4>
//             </div>
//           </div>

//           {/* Meals */}
//           <div className="relative flex flex-col rounded-xl bg-white shadow-md">
//             <div className="absolute -mt-4 mx-4 h-16 w-16 grid place-items-center rounded-xl
//               bg-gradient-to-tr from-cyan-500 to-teal-600 text-white shadow-lg shadow-cyan-500/40">
//               <BsFillHouseDoorFill className="w-6 h-6" />
//             </div>
//             <div className="p-4 text-right">
//               <p className="text-sm text-gray-500">Total Meals</p>
//               <h4 className="text-2xl font-semibold text-gray-800">120</h4>
//             </div>
//           </div>

//           {/* Users */}
//           <div className="relative flex flex-col rounded-xl bg-white shadow-md">
//             <div className="absolute -mt-4 mx-4 h-16 w-16 grid place-items-center rounded-xl
//               bg-gradient-to-tr from-lime-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/40">
//               <FaUserAlt className="w-6 h-6" />
//             </div>
//             <div className="p-4 text-right">
//               <p className="text-sm text-gray-500">Total Users</p>
//               <h4 className="text-2xl font-semibold text-gray-800">10</h4>
//             </div>
//           </div>

//         </div>

//         {/* Chart Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2 rounded-xl shadow-md p-6">
//             {/* Bar Chart Here */}
//      <AdminBarChart></AdminBarChart>
       
//           </div>
//           <div className=" rounded-xl shadow-md p-6">
//             {/* Calendar or Summary */}
//        <AdminQuickSummary></AdminQuickSummary>

//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default AdminStatistics

import { FaUserAlt, FaDollarSign } from 'react-icons/fa'
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { useQuery } from '@tanstack/react-query'

import AdminBarChart from '../Chart/AdminBarChart'
import AdminQuickSummary from '../QuickSummary/AdminQuickSummary'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const AdminStatistics = () => {
  const axiosSecure = useAxiosSecure()

  const { data = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => (await axiosSecure('/admin-stats')).data,
  })
         console.log(data)


  return (
    <div className="p-6 bg-slate-50 min-h-screen mt-12">

      {/* STATS */}
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        <Stat icon={<FaDollarSign />} title="Total Revenue" value={`$${data.revenue || 0}`}
          color="from-rose-500 to-red-600 shadow-red-500/40" />

        <Stat icon={<BsFillCartPlusFill />} title="Total Orders" value={data.totalOrders || 0}
          color="from-indigo-500 to-violet-600 shadow-indigo-500/40" />

        <Stat icon={<BsFillHouseDoorFill />} title="Total Meals" value={data.totalMeals || 0}
          color="from-cyan-500 to-teal-600 shadow-cyan-500/40" />

        <Stat icon={<FaUserAlt />} title="Total Users" value={data.totalUsers || 0}
          color="from-lime-500 to-emerald-600 shadow-emerald-500/40" />

      </div>

      {/* CHART + SUMMARY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl shadow-md p-6">
          <AdminBarChart />
        </div>
        <div className="rounded-xl shadow-md p-6">
          <AdminQuickSummary />
        </div>
      </div>
    </div>
  )
}

const Stat = ({ icon, title, value, color }) => (
  <div className="relative flex flex-col rounded-xl bg-white shadow-md">
    <div className={`absolute -mt-4 mx-4 h-16 w-16 grid place-items-center rounded-xl
      bg-gradient-to-tr ${color} text-white shadow-lg`}>
      {icon}
    </div>
    <div className="p-4 text-right">
      <p className="text-sm text-gray-500">{title}</p>
      <h4 className="text-2xl font-semibold text-gray-800">{value}</h4>
    </div>
  </div>
)

export default AdminStatistics
