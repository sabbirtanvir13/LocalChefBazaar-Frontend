const ChefSummary = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Summary
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Today's Orders</span>
          <span className="font-semibold">12</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Pending</span>
          <span className="font-semibold text-orange-500">4</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Delivered</span>
          <span className="font-semibold text-green-600">18</span>
        </div>

        <hr />

        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Total Earnings</span>
          <span className="font-semibold text-indigo-600">$1,420</span>
        </div>
      </div>

    </div>
  )
}

export default ChefSummary
