// components/StatCard.jsx
const Card = ({ title, icon,value, color }) => {
  return (
     <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">
      <div className={`w-12 h-12 flex items-center justify-center rounded-lg text-white ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default Card;
