// import { FaUtensils, FaTruck, FaDollarSign } from 'react-icons/fa'
// import { BsFillCartCheckFill } from 'react-icons/bs'
// import ChefBarChart from '../Chart/ChefBarChart'
// import ChefSummary from '../QuickSummary/ChefSummary'

// const ChefStatistics = () => {
//   return (
//     <div className="mt-12">

//       {/* Top Cards */}
//       <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

//         {/* Total Meals */}
//         <div className="relative bg-white rounded-xl shadow-md p-5">
//           <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white">
//             <FaUtensils />
//           </div>
//           <p className="text-sm text-gray-500 mt-6">My Meals</p>
//           <h3 className="text-2xl font-semibold text-gray-800">12</h3>
//         </div>

//         {/* Orders */}
//         <div className="relative bg-white rounded-xl shadow-md p-5">
//           <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
//             <BsFillCartCheckFill />
//           </div>
//           <p className="text-sm text-gray-500 mt-6">Total Orders</p>
//           <h3 className="text-2xl font-semibold text-gray-800">86</h3>
//         </div>

//         {/* Delivered */}
//         <div className="relative bg-white rounded-xl shadow-md p-5">
//           <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white">
//             <FaTruck />
//           </div>
//           <p className="text-sm text-gray-500 mt-6">Delivered</p>
//           <h3 className="text-2xl font-semibold text-gray-800">72</h3>
//         </div>

//         {/* Earnings */}
//         <div className="relative bg-white rounded-xl shadow-md p-5">
//           <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white">
//             <FaDollarSign />
//           </div>
//           <p className="text-sm text-gray-500 mt-6">Total Earnings</p>
//           <h3 className="text-2xl font-semibold text-gray-800">$1,420</h3>
//         </div>
       
//          {/* Chart + Summary */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <ChefBarChart />
//         <ChefSummary />
//       </div>


//       </div>
//     </div>
//   )
// }

// export default ChefStatistics
import { FaUtensils, FaTruck, FaDollarSign } from 'react-icons/fa'
import { BsFillCartCheckFill } from 'react-icons/bs'
import ChefBarChart from '../Chart/ChefBarChart'
import ChefSummary from '../QuickSummary/ChefSummary'

const ChefStatistics = () => {
  return (
    <div className="mt-12 px-2 lg:px-0">

      {/* Top Cards */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {/* My Meals */}
        <div className="relative bg-white rounded-xl shadow-md p-5">
          <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white">
            <FaUtensils />
          </div>
          <p className="text-sm text-gray-500 mt-6">My Meals</p>
          <h3 className="text-2xl font-semibold text-gray-800">12</h3>
        </div>

        {/* Orders */}
        <div className="relative bg-white rounded-xl shadow-md p-5">
          <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
            <BsFillCartCheckFill />
          </div>
          <p className="text-sm text-gray-500 mt-6">Total Orders</p>
          <h3 className="text-2xl font-semibold text-gray-800">86</h3>
        </div>

        {/* Delivered */}
        <div className="relative bg-white rounded-xl shadow-md p-5">
          <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white">
            <FaTruck />
          </div>
          <p className="text-sm text-gray-500 mt-6">Delivered</p>
          <h3 className="text-2xl font-semibold text-gray-800">72</h3>
        </div>

        {/* Earnings */}
        <div className="relative bg-white rounded-xl shadow-md p-5">
          <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white">
            <FaDollarSign />
          </div>
          <p className="text-sm text-gray-500 mt-6">Total Earnings</p>
          <h3 className="text-2xl font-semibold text-gray-800">$1,420</h3>
        </div>
      </div>

      {/* Chart + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChefBarChart />
        <ChefSummary />
      </div>

    </div>
  )
}

export default ChefStatistics
