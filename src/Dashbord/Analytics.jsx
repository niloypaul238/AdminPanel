import React, { useState } from 'react';
import StatCard from '../Component/StatCard';
import { Gem, Gift, TrendingUp, TvMinimalPlay, Users } from 'lucide-react';
import { IoEyeOutline, IoTimeOutline } from 'react-icons/io5';
import { CiFilter } from 'react-icons/ci';
import CoinSalesOverview from '../Component/CoinSalesOverview';
import UserEngagementMetricsCard from '../Component/UserEngagementMetricsCard';
import Swal from 'sweetalert2';
import { streamers } from '../../public/data';
import { renderToString } from 'react-dom/server';

const Analytics = () => {

    let [inputValue, setInputValue] = useState("")

    const [findObj, setFindObj] = useState(streamers)
    const [notFoundData, setNotFoundData] = useState('');

    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? findObj.filter(item => item.agency.toLocaleLowerCase() == inputLower) : streamers;
        setFindObj(filterData);
        // console.log(filterData);
        if (!filterData.length > 0 && inputValue != "") {
            setNotFoundData('Not Found Data')
        } else {
            setNotFoundData('')
        }
    }

    // model 
    const model = (e) => {
        const filterData = streamers.find(item => item.id === e)
        console.log(filterData);
        Swal.fire({
            html: renderToString(
                <div className=" ">
                    <div className="">
                        {/* Header */}
                        <h2 className="text-xl font-semibold text-center mb-4">
                            {filterData.name}
                        </h2>

                        {/* Info Rows */}
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="font-medium">ID :</span>
                                <span>{filterData.userId}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="font-medium">User :</span>
                                <div className="flex items-center gap-2">
                                    <img
                                        src={filterData.avatar}
                                        alt="user"
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span>{filterData.name}</span>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Country :</span>
                                <span>{filterData.country}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Phone Number :</span>
                                <span>017*********</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Coin Balance :</span>
                                <span>{filterData.coinBalance}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Coin Spend :</span>
                                <span>{filterData.coinSpend}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Earning Balance :</span>
                                <span>{filterData.earningBalance}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Grand Total Earning :</span>
                                <span>{filterData.grandTotalEarning}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Video Live Time :</span>
                                <span>{filterData.videoLiveTime}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Audio Live Time :</span>
                                <span>{filterData.audioLiveTime}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Registration Time :</span>
                                <span>{filterData.registrationTime}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Last Login Time :</span>
                                <span>{filterData.lastLogin}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            showConfirmButton: false,
            width:700
        });
    }



    return (
        <div className='py-6 min-h-screen'>
            <div className='flex gap-x-2'>
                <button className='border border-gray-500/30 rounded px-4 py-1'>Today</button>
                <button className='border border-gray-500/30 rounded px-4 py-1'>Week</button>
                <button className='border border-gray-500/30 rounded px-4 py-1'>Month</button>
                <button className='border border-gray-500/30 rounded px-4 py-1'>Custom Range</button>
            </div>

            <div className='mt-4'>
                {/* Top Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <StatCard title="Total Revenue" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<TrendingUp />} value="৳12.8M" extra="+23 today" />
                    <StatCard title="Active Streams" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<TvMinimalPlay />} value="156" extra={"+23 today"} />
                    <StatCard title="Diamond Earned" bg="bg-gradient-to-t from-[#C213E1]  to-[#]" icon={<Gem />} value="8.4M" />
                    <StatCard title="Streaming Hours" bg="bg-gradient-to-t from-[#E13913]  to-[#30ACFF]" icon={<IoTimeOutline />} value="12.5K" extra="" />
                </div>

                <div className="flex justify-between gap-x-1.5 items-center mb-6">
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by agency ID or name' className='sm:basis-4/5 border w-full border-gray-500/30 px-2 py-1 rounded' />
                    <div className="flex sm:basis-1/5 gap-2">
                        <button onClick={searchData} className="px-3 py-1.5 bg-linear-to-r text-white from-indigo-500  to-pink-400 rounded text-sm flex items-center gap-x-2 cursor-pointer"><CiFilter className='text-lg' />Filter</button>
                        <button className="px-3 py-1 border border-gray-500/30 rounded text-sm">Export Data</button>
                    </div>
                </div>
            </div>

            <div className='shadow-md p-3 rounded'>
                <p className='text-2xl font-semibold'>Top Performing Hosts</p>
                {
                    findObj.map(item => {
                        return (
                            <div key={item.id} className="my-2">
                                <div
                                    key={item.id}
                                    className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 bg-gray-100 rounded-xl px-4 py-3"
                                >
                                    {/* Left */}
                                    <div className="flex items-center gap-4 min-w-65">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                            <p className="text-xs text-gray-500">ID : {item.userId}</p>
                                            <p className="text-xs text-gray-500">{item.agency}</p>
                                        </div>
                                    </div>

                                    {/* Level */}
                                    <span
                                        className={`text-xs text-white px-3 py-1 rounded-full ${item.levelColor}`}
                                    >
                                        {item.level}
                                    </span>

                                    {/* Country */}
                                    <p className="text-sm text-gray-700 min-w-22.5">
                                        {item.country}
                                    </p>

                                    {/* Hours */}
                                    <p className="text-sm flex flex-col text-end font-semibold  min-w-15">
                                        <span className='text-gray-600'>{item.category}</span>
                                        <span className='text-blue-500'>{item.hours}</span>

                                    </p>

                                    {/* Diamonds */}
                                    <p className="text-sm flex flex-col text-end font-semibold  min-w-15">
                                        <span className='text-gray-600'>Diamonds</span>
                                        <span className='text-blue-500'>{item.diamonds}</span>
                                    </p>

                                    <IoEyeOutline onClick={() => model(item.id)} className="w-6 h-6 text-gray-600 cursor-pointer" />
                                </div>

                            </div>
                        )
                    })
                }
                <div><p className='text-center text-gray-600 text-2xl'>{notFoundData}</p></div>
            </div>

            <div className='mt-6 shadow-md p-3 rounded'>
                {/* Top Stats */}
                <p className='text-2xl font-semibold my-4'>Coin Sales Overview</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <CoinSalesOverview title="Today's Sales" bg="bg-[#DEE8FF]/70" text="text-[#0C00E6]" value="458K" extra="+12%" />
                    <CoinSalesOverview title="Weekly Sales" bg="bg-[#F4D5FC]/70" text={"text-[#DE06ED]"} value="2.8M" extra="+12%" />
                    <CoinSalesOverview title="Monthly Sales" bg="bg-[#D5FCDB]/70" text={"text-[#16B340]"} value="9.4M" extra="+12%" />
                    <CoinSalesOverview title="Total Transactions" bg="bg-[#FCD5D5]/70" text={"text-[#ED0606]"} value="24.5K" extra="+12%" />
                </div>
            </div>

            <div className='mt-6 shadow-md p-3 rounded'>
                {/* Top Stats */}
                <p className='text-2xl font-semibold my-4'>User Engagement Metrics</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

                    <UserEngagementMetricsCard title="Today's Sales" icon={<Users />} bg="bg-[#852588]" value="458K" />
                    <UserEngagementMetricsCard title="Weekly Sales" icon={<IoTimeOutline />} bg="bg-[#257B88]" value="2.8M" />
                    <UserEngagementMetricsCard title="Monthly Sales" icon={<Gift />} bg="bg-[#EE40E8]" value="9.4M" />

                </div>
            </div>

        </div>
    );
};

export default Analytics;