import React, { useState } from 'react';
import StatCard from '../Component/StatCard';
import { Clock3, Gem, MonitorPlay, TrendingUp } from 'lucide-react';
import GiftCard from '../Component/Gift/giftCard';
import RealTimeTracking from '../Component/Gift/RealTimeTracking';
import RevenueShare from '../Component/Gift/RevenueShare';
import AllGifts from '../Component/Gift/AllGifts';

const Gift = () => {
    const [toggle, setToggle] = useState("All Gift")
    
    return (
        <div className='py-6 min-h-screen'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total Gifts" bg="bg-[#08A62A]" icon={<TrendingUp />} value="142" extra="" />
                <StatCard title="Total Revenue" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<MonitorPlay />} value="32,130" extra={""} />
                <StatCard title="Total Uses" bg="bg-[#D50C13]  " icon={<Gem />} value="2893K coins" extra={"+18% this month"} />
                <StatCard title="Top Gift" bg="bg-[#6624FF] " icon={<Clock3 />} value="Diamond" extra="2340 sold" />
            </div>
            <div className='shadow px-4 py-8'>
                <p className='text-2xl font-semibold mb-10 '>Gift Categories</p>
                <div className='flex justify-between gap-x-6 '>
                    <GiftCard  title={"Romantic"} value={"45"} text={"text-blue-600"} bg={"bg-blue-200/20"}/>
                    <GiftCard  title={"Premium"} value={"28"} text={"text-red-500"} bg={"bg-red-100/20"}/>
                    <GiftCard  title={"Luxury"} value={"18"} text={"text-blue-400"} bg={"bg-blue-200/40"}/>
                    <GiftCard  title={"Special"} value={"32"} text={"text-green-500"} bg={"bg-green-300/20"}/>
                    <GiftCard  title={"Seasonal"} value={"19"} text={"text-green-500"} bg={"bg-green-400/20"}/>
                </div>
            </div>

            <div className='mt-5'>
                <div className='bg-gray-400/20 inline  py-4 px-2 rounded '>
                    <button onClick={() => { setToggle("All Gift") }} className={`${toggle == "All Gift" && "bg-white shadow rounded"} p-2 cursor-pointer transition-colors  duration-150 `}>All Gift</button>
                    <button onClick={() => { setToggle("Real Time Tracking") }} className={`${toggle == "Real Time Tracking" && "bg-white shadow rounded"} p-2 cursor-pointer transition-colors duration-150 `}>Real Time Tracking</button>
                    <button onClick={() => { setToggle("Revenue Share") }} className={`${toggle == "Revenue Share" && "bg-white shadow rounded"} p-2 cursor-pointer transition-colors duration-150 `}>Revenue Share</button>
            </div>
            </div>
            {toggle == "All Gift" && <AllGifts/>}
            { toggle == "Real Time Tracking" && <RealTimeTracking/>}
            { toggle == "Revenue Share"  && <RevenueShare/> }
            

        </div>
    );
};

export default Gift;