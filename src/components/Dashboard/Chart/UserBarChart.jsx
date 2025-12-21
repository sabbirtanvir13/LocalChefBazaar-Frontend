const UserBarChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 lg:col-span-2">

      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        Order History
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Orders placed this week
      </p>

      <div className="flex items-end justify-between h-52 gap-4 px-2">
        {[20, 45, 30, 55, 40, 60, 50].map((value, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <div
              style={{ height: `${value}%` }}
              className="w-full rounded-xl bg-gradient-to-t from-emerald-500 to-teal-600 shadow"
            ></div>
            <span className="mt-2 text-xs text-gray-500">
              Day {index + 1}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default UserBarChart
