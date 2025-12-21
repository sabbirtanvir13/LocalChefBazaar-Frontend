import { FaUserAlt, FaDollarSign } from 'react-icons/fa'
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'
import AdminBarChart from '../Chart/AdminBarChart'
import AdminQuickSummary from '../QuickSummary/AdminQuickSummary'





const AdminStatistics = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="mt-12">

        {/* STATS CARDS */}
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {/* Revenue */}
          <div className="relative flex flex-col rounded-xl bg-white shadow-md">
            <div className="absolute -mt-4 mx-4 h-16 w-16 grid place-items-center rounded-xl
              bg-gradient-to-tr from-rose-500 to-red-600 text-white shadow-lg shadow-red-500/40">
              <FaDollarSign className="w-6 h-6" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h4 className="text-2xl font-semibold text-gray-800">$120</h4>
            </div>
          </div>

          {/* Orders */}
          <div className="relative flex flex-col rounded-xl bg-white shadow-md">
            <div className="absolute -mt-4 mx-4 h-16 w-16 grid place-items-center rounded-xl
              bg-gradient-to-tr from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/40">
              <BsFillCartPlusFill className="w-6 h-6" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm text-gray-500">Total Orders</p>
              <h4 className="text-2xl font-semibold text-gray-800">120</h4>
            </div>
          </div>

          {/* Meals */}
          <div className="relative flex flex-col rounded-xl bg-white shadow-md">
            <div className="absolute -mt-4 mx-4 h-16 w-16 grid place-items-center rounded-xl
              bg-gradient-to-tr from-cyan-500 to-teal-600 text-white shadow-lg shadow-cyan-500/40">
              <BsFillHouseDoorFill className="w-6 h-6" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm text-gray-500">Total Meals</p>
              <h4 className="text-2xl font-semibold text-gray-800">120</h4>
            </div>
          </div>

          {/* Users */}
          <div className="relative flex flex-col rounded-xl bg-white shadow-md">
            <div className="absolute -mt-4 mx-4 h-16 w-16 grid place-items-center rounded-xl
              bg-gradient-to-tr from-lime-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/40">
              <FaUserAlt className="w-6 h-6" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm text-gray-500">Total Users</p>
              <h4 className="text-2xl font-semibold text-gray-800">10</h4>
            </div>
          </div>

        </div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl shadow-md p-6">
            {/* Bar Chart Here */}
     <AdminBarChart></AdminBarChart>
       
          </div>
          <div className=" rounded-xl shadow-md p-6">
            {/* Calendar or Summary */}
       <AdminQuickSummary></AdminQuickSummary>

          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminStatistics
