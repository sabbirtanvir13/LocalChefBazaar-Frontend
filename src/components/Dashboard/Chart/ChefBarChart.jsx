const ChefBarChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 lg:col-span-2">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Orders Analytics
          </h3>
          <p className="text-sm text-gray-500">
            Weekly order performance
          </p>
        </div>

        <select className="border rounded-lg px-3 py-1 text-sm text-gray-600">
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      {/* Fake Bar Chart */}
      <div className="flex items-end justify-between h-52 gap-4 px-2">
        {[50, 75, 60, 90, 65, 80, 70].map((value, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <div
              style={{ height: `${value}%` }}
              className="w-full rounded-xl bg-gradient-to-t from-indigo-500 to-purple-600 shadow"
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

export default ChefBarChart
