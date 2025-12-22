import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { day: 'Sat', orders: 50 },
  { day: 'Sun', orders: 75 },
  { day: 'Mon', orders: 60 },
  { day: 'Tue', orders: 90 },
  { day: 'Wed', orders: 65 },
  { day: 'Thu', orders: 80 },
  { day: 'Fri', orders: 70 },
]

const ChefBarChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 lg:col-span-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        Orders Analytics
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Weekly order performance
      </p>

      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#6366f1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChefBarChart
