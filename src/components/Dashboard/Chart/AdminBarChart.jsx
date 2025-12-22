


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