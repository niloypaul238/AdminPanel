import React from 'react';
import { LuDot } from 'react-icons/lu';

const ActiveLog = () => {

    const activityLogs = [
        {
            id: 1,
            title: "Warning Issued",
            by: "Moderator1",
            timeAgo: "4 hours ago",
            status: "Banned"
        },
        {
            id: 2,
            title: "Resolved",
            by: "Moderator3",
            timeAgo: "6 hours ago",
            status: "Resolved"
        },
        {
            id: 3,
            title: "Warning Issued",
            by: "Moderator1",
            timeAgo: "7 hours ago",
            status: "Banned"
        },
        {
            id: 4,
            title: "Warning Issued",
            by: "Moderator1",
            timeAgo: "7 hours ago",
            status: "Banned"
        },
        {
            id: 5,
            title: "Resolved",
            by: "Moderator2",
            timeAgo: "9 hours ago",
            status: "Resolved"
        },
        {
            id: 6,
            title: "Warning Issued",
            by: "Moderator4",
            timeAgo: "12 hours ago",
            status: "Banned"
        }
    ];

    return (
        <div className='flex flex-col gap-y-1.5'>
            {
                activityLogs.map(item =>{
                    return(
                        <div className='flex justify-between items-center py-1 px-4 border border-gray-500/30 rounded' key={item.id}>
                            <div>
                                <p className='text-lg font-semibold'>{item.title}</p>
                                <span className='flex text-gray-600 items-center text-sm'><span>{item.by}</span><LuDot /><span> {item.timeAgo}</span></span>
                            </div>
                            <span className={`rounded px-2 py-0.5 ${item.status == "Banned" && "text-green-700 bg-green-400/20"} ${item.status == "Resolved" && "text-red-700 bg-red-400/20"}`}>{item.status}</span>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ActiveLog;