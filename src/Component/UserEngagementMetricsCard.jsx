import React from 'react';

const UserEngagementMetricsCard = ({ title, value, bg,icon }) => {
    return (
        <div className="bg-red-400/5 p-4 rounded-xl ">
            <div className="flex justify-between">
                 <p className={`${bg} p-2 h-15 w-15 rounded-full flex justify-center items-center`}> <span className='text-2xl text-white'>{icon}</span></p>
                <div>
                    <p className="text-gray-500 text-sm">{title}</p>
                    <h2 className="text-2xl font-bold">{value}</h2>
                </div>
            </div>
            
        </div>
    );
};

export default UserEngagementMetricsCard;