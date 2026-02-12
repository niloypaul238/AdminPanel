const LiveCard = ({ title, value, color }) => (
  <div className={`p-4 rounded-lg ${color}`}>
    <p className="text-sm">{title}</p>
    <h2 className="text-xl font-bold mt-1">{value}</h2>
  </div>
);
export default LiveCard;