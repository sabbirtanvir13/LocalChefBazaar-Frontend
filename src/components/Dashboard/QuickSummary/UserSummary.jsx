const UserSummary = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Summary
      </h3>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Orders Placed</span>
          <span className="font-semibold">18</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Completed</span>
          <span className="font-semibold text-green-600">15</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Pending</span>
          <span className="font-semibold text-orange-500">3</span>
        </div>

        <hr />

        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Total Spent</span>
          <span className="font-semibold text-indigo-600">$860</span>
        </div>

      </div>

    </div>
  )
}

export default UserSummary
