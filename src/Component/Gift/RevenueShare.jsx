import React from 'react';
import RevenueCard from './RevenueCard';

const RevenueShare = () => {
    
    return (
        <div className='shadow px-4 pb-5 my-4'>
            <div className='my-6  '>
                <p className='text-2xl pt-2 font-semibold'>Revenue Distribution</p>
            </div>
            <div className='mt-2'>
                <p className='mb-1 flex justify-between'><span className='font-semibold'>Rose</span> <span className='text-gray-500'>154,200 coins</span></p>
                <div className='flex gap-x-4'>
                    <RevenueCard title={"Host (60%)"} value={"92,520"} bg={"bg-green-500/20 rounded border border-green-300"} text={"text-green-500"}/>
                    <RevenueCard title={"Agency (15%)"} value={"23,130"} bg={"bg-blue-500/20 rounded border border-blue-300"} text={"text-blue-600"}/>
                    <RevenueCard title={"Platform (25%)"} value={"38,550"} bg={"bg-pink-500/20 rounded border border-pink-300"} text={"text-pink-500"}/>
                </div>
            </div>
            <div className='mt-2'>
                <p className='mb-1 flex justify-between'><span className='font-semibold'>Diamond</span> <span className='text-gray-500'>1223,000 coins</span></p>
                <div className='flex gap-x-4'>
                    <RevenueCard title={"Host (60%)"} value={"192,520"} bg={"bg-green-500/20 rounded border border-green-300"} text={"text-green-500"}/>
                    <RevenueCard title={"Agency (15%)"} value={"23,130"} bg={"bg-blue-500/20 rounded border border-blue-300"} text={"text-blue-600"}/>
                    <RevenueCard title={"Platform (25%)"} value={"38,550"} bg={"bg-pink-500/20 rounded border border-pink-300"} text={"text-pink-500"}/>
                </div>
            </div>
            <div className='mt-2'>
                <p className='mb-1 flex justify-between'><span className='font-semibold'>Heart</span> <span className='text-gray-500'>223,000 coins</span></p>
                <div className='flex gap-x-4'>
                    <RevenueCard title={"Host (60%)"} value={"192,520"} bg={"bg-green-500/20 rounded border border-green-300"} text={"text-green-500"}/>
                    <RevenueCard title={"Agency (15%)"} value={"23,130"} bg={"bg-blue-500/20 rounded border border-blue-300"} text={"text-blue-600"}/>
                    <RevenueCard title={"Platform (25%)"} value={"38,550"} bg={"bg-pink-500/20 rounded border border-pink-300"} text={"text-pink-500"}/>
                </div>
            </div>
            <div className='mt-2'>
                <p className='mb-1 flex justify-between'><span className='font-semibold'>Crown</span> <span className='text-gray-500'>154,200 coins</span></p>
                <div className='flex gap-x-4'>
                    <RevenueCard title={"Host (60%)"} value={"192,520"} bg={"bg-green-500/20 rounded border border-green-300"} text={"text-green-500"}/>
                    <RevenueCard title={"Agency (15%)"} value={"23,130"} bg={"bg-blue-500/20 rounded border border-blue-300"} text={"text-blue-600"}/>
                    <RevenueCard title={"Platform (25%)"} value={"38,550"} bg={"bg-pink-500/20 rounded border border-pink-300"} text={"text-pink-500"}/>
                </div>
            </div>
        </div>
    );
};

export default RevenueShare;