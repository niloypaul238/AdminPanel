import React from 'react';

const CoinSalesOverview = ({ title, value, extra, bg,text }) => {
    return (
        <div className={`${bg} p-4 rounded-xl space-y-1 shadow`}>
            <p className="text-gray-500 text-sm">{title}</p>
            <h2 className={`${text} text-2xl font-bold`}>{value}</h2>
            {extra && <p className="text-green-500 text-xs mt-1">{extra}</p>}
        </div>
    );
};

export default CoinSalesOverview;