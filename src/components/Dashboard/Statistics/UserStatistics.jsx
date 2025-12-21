// import { FaShoppingBag, FaStar, FaHeart } from 'react-icons/fa'
// import { BsFillCartCheckFill } from 'react-icons/bs'
// import UserBarChart from '../Chart/UserBarChart'
// import UserSummary from '../QuickSummary/UserSummary'

// const UserStatistics = () => {
//   return (
//     <div className="mt-12">

//       {/* Top Cards */}
//       <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

//         {/* My Orders */}
//         <div className="relative bg-white rounded-xl shadow-md p-5">
//           <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white">
//             <FaShoppingBag />
//           </div>
//           <p className="text-sm text-gray-500 mt-6">My Orders</p>
//           <h3 className="text-2xl font-semibold text-gray-800">18</h3>
//         </div>

//         {/* Completed */}
//         <div className="relative bg-white rounded-xl shadow-md p-5">
//           <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white">
//             <BsFillCartCheckFill />
//           </div>
//           <p className="text-sm text-gray-500 mt-6">Completed</p>
//           <h3 className="text-2xl font-semibold text-gray-800">15</h3>
//         </div>

//         {/* Reviews */}
//         <div className="relative bg-white rounded-xl shadow-md p-5">
//           <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white">
//             <FaStar />
//           </div>
//           <p className="text-sm text-gray-500 mt-6">My Reviews</p>
//           <h3 className="text-2xl font-semibold text-gray-800">9</h3>
//         </div>

//         {/* Favorites */}
//         <div className="relative bg-white rounded-xl shadow-md p-5">
//           <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white">
//             <FaHeart />
//           </div>
//           <p className="text-sm text-gray-500 mt-6">Favorite Meals</p>
//           <h3 className="text-2xl font-semibold text-gray-800">6</h3>
//         </div>  

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <UserBarChart/>
//         <UserSummary/>
//       </div>

//       </div>
//     </div>
//   )
// }

// export default UserStatistics
import { FaShoppingBag, FaStar, FaHeart } from 'react-icons/fa'
import { BsFillCartCheckFill } from 'react-icons/bs'
import UserBarChart from '../Chart/UserBarChart'
import UserSummary from '../QuickSummary/UserSummary'

const UserStatistics = () => {
  return (
    <div className="mt-12 px-2 lg:px-0">

      {/* Top Cards */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {/* My Orders */}
        <div className="relative bg-white rounded-xl shadow-md p-5">
          <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white">
            <FaShoppingBag />
          </div>
          <p className="text-sm text-gray-500 mt-6">My Orders</p>
          <h3 className="text-2xl font-semibold text-gray-800">18</h3>
        </div>

        {/* Completed */}
        <div className="relative bg-white rounded-xl shadow-md p-5">
          <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white">
            <BsFillCartCheckFill />
          </div>
          <p className="text-sm text-gray-500 mt-6">Completed</p>
          <h3 className="text-2xl font-semibold text-gray-800">15</h3>
        </div>

        {/* Reviews */}
        <div className="relative bg-white rounded-xl shadow-md p-5">
          <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white">
            <FaStar />
          </div>
          <p className="text-sm text-gray-500 mt-6">My Reviews</p>
          <h3 className="text-2xl font-semibold text-gray-800">9</h3>
        </div>

        {/* Favorites */}
        <div className="relative bg-white rounded-xl shadow-md p-5">
          <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white">
            <FaHeart />
          </div>
          <p className="text-sm text-gray-500 mt-6">Favorite Meals</p>
          <h3 className="text-2xl font-semibold text-gray-800">6</h3>
        </div>
      </div>

      {/* Chart + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <UserBarChart />
        <UserSummary />
      </div>

    </div>
  )
}

export default UserStatistics
