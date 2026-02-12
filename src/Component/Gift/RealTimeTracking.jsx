import { Dot, Gift } from 'lucide-react';
import React from 'react';

const RealTimeTracking = () => {
    const giftActivities = [
        {
            id: 1,
            title: "sent Rose",
            time: "One min ago",
            coin: "100",
        },
        {
            id: 2,
            title: "sent Diamond",
            time: "Just now",
            coin: "10",
        },
        {
            id: 3,
            title: "sent Heart",
            time: "5 min ago",
            coin: "50",
        },
        {
            id: 4,
            title: "sent Crown",
            time: "10 min ago",
            coin: "500",
        },
        {
            id: 5,
            title: "sent Star",
            time: "15 min ago",
            coin: "30",
        },
        {
            id: 6,
            title: "sent Gift Box",
            time: "20 min ago",
            coin: "200",
        }
    ];

    return (
        <div className='mt-5 shadow p-4'>
            <p className='text-2xl font-semibold'>Recent Gift Activity</p>
            <div>
                {
                    giftActivities.map(item =>{
                        return(
                            <div key={item.id} className='border flex justify-between items-center border-gray-600/10 my-2 p-2 rounded'>
                                <div className='flex items-center gap-x-2'>
                                    <Gift className='bg-pink-700 text-white w-9 rounded-full h-9 p-1' />
                                    <div>
                                        <p className='font-semibold '>User{item.id} {item.title}</p>
                                        <p className='text-sm flex  text-gray-600'>To Host{item.id} <Dot />{item.time}</p>
                                    </div>
                                </div>
                                <p className='font-bold'>{item.coin} coins</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default RealTimeTracking;