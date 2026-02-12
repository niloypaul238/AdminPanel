const StatCard = ({ title, value, extra, icon,bg }) => (
  <div className="bg-white p-4 rounded-xl shadow">
    <div className="flex justify-between ">
      <div className="space-y-1.5">
        <p className="text-sm font-semibold">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
      <div className={` flex justify-center items-center h-full py-3 text-white px-3 rounded text-2xl opacity-30 ${bg}`}>{icon}</div>
    </div>
    {extra && <p className="text-green-500 text-xs mt-1">{extra}</p>}
  </div>
);
export default StatCard;