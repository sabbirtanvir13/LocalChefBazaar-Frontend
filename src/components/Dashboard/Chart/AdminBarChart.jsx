// import React from 'react';

// const AdminBarChart = () => {

//   const chartData = [
//   { label: 'Sat', value: 40 },
//   { label: 'Sun', value: 60 },
//   { label: 'Mon', value: 55 },
//   { label: 'Tue', value: 70 },
//   { label: 'Wed', value: 50 },
//   { label: 'Thu', value: 80 },
//   { label: 'Fri', value: 65 },
// ]
//   return (
//     <>
//       {/* Bar Chart Section */}
//       <div className="lg:col-span-2 relative  rounded-2xl  p-6">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">
//               Sales Analytics
//             </h3>
//             <p className="text-sm text-gray-500">
//               Monthly revenue overview
//             </p>
//           </div>

//           <select className="border rounded-lg px-3 py-1 text-sm text-gray-600 focus:outline-none">
//             <option>Last 7 Days</option>
//             <option>This Month</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* Fake Chart UI */}
//         <div className="flex items-end justify-between h-52 gap-4 px-4">
//           {[40, 65, 55, 80, 60, 90, 70].map((height, index) => (
//             <div key={index} className="flex flex-col items-center w-full">
//               <div
//                 style={{ height: `${height}%` }}
//                 className="w-full rounded-xl bg-gradient-to-t from-indigo-500 to-violet-600 shadow-md"
//               ></div>
//               <span className="mt-2 text-xs text-gray-500">
//                 Day {index + 1}
//               </span>
//             </div>
//           ))}
//         </div>

//       </div>
//     </>
//   );
// };

// export default AdminBarChart;
// import React from 'react'

// const AdminBarChart = () => {

//   const chartData = [
//     { label: 'Sat', value: 40 },
//     { label: 'Sun', value: 60 },
//     { label: 'Mon', value: 55 },
//     { label: 'Tue', value: 70 },
//     { label: 'Wed', value: 50 },
//     { label: 'Thu', value: 80 },
//     { label: 'Fri', value: 65 },
//   ]

//   return (
//     <div className=" rounded-2xl  p-6">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">
//             Sales Analytics
//           </h3>
//           <p className="text-sm text-gray-500">
//             Monthly revenue overview
//           </p>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="flex items-end gap-4 h-52">
//         {chartData.map((item, index) => (
//           <div key={index} className="flex flex-col items-center w-full">
//             <div
//               style={{ height: `${item.value}%` }}
//               className="w-full bg-indigo-500 rounded-md transition-all"
//             />
//             <span className="mt-2 text-xs text-gray-500">
//               {item.label}
//             </span>
//           </div>
//         ))}
//       </div>

//     </div>
//   )
// }

// export default AdminBarChart


import React from 'react';

const AdminBarChart = () => {
     const data = [
    { label: 'Completed Orders', value: 65, color: '#10b981' },
    { label: 'Pending Orders', value: 20, color: '#f59e0b' },
    { label: 'Cancelled Orders', value: 15, color: '#ef4444' },
  ]

  const total = data.reduce((sum, item) => sum + item.value, 0)

  let cumulative = 0

  const slices = data.map(item => {
    const start = (cumulative / total) * 360
    const slice = (item.value / total) * 360
    cumulative += item.value

    return `${item.color} ${start}deg ${start + slice}deg`
  })


  return (
    <div className="rounded-2xl p-6 ">

      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Order Overview
      </h3>

      {/* PIE */}
      <div className="flex justify-center mb-6">
        <div
          className="w-52 h-52 rounded-full"
          style={{
            background: `conic-gradient(${slices.join(',')})`,
          }}
        />
      </div>

      {/* LEGEND */}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
            <span className="font-semibold text-gray-800">
              {item.value}%
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminBarChart;