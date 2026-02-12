import React, { useState } from 'react';
import StatCard from '../Component/StatCard';
import { CircleCheckBig, CircleDollarSign, CirclePlus, Ellipsis, Eye, FolderOpen, LoaderCircle, TrendingUp, UsersRound, Video } from 'lucide-react';

const CoinMangment = () => {
    const agencyData = [
        {
            portalId: 'COIN-042',
            name: "StartHost Agency",
            category: "Master agency",
            coin: "1,000M",
            valu: "$63",
            date: "2024-10-28",
            status: "Complete"
        },
        {
            portalId: 'COIN-043',
            name: "SkyLine Agency",
            category: "Master agency",
            coin: "850M",
            valu: "$54",
            date: "2024-11-02",
            status: "Pending"
        },
        {
            portalId: 'COIN-044',
            name: "NovaStream Agency",
            category: "Sub agency",
            coin: "620M",
            valu: "$39",
            date: "2024-11-10",
            status: "Complete"
        },
        {
            portalId: 'COIN-045',
            name: "BrightWave Agency",
            category: "Master agency",
            coin: "1,250M",
            valu: "$78",
            date: "2024-11-18",
            status: "Processing"
        },
        {
            portalId: 'COIN-046',
            name: "StarLink Agency",
            category: "Sub agency",
            coin: "430M",
            valu: "$27",
            date: "2024-11-22",
            status: "Failed"
        },
        {
            portalId: 'COIN-047',
            name: "MoonRise Agency",
            category: "Master agency",
            coin: "980M",
            valu: "$61",
            date: "2024-11-30",
            status: "Complete"
        }
    ];

    const [toggle, setToggle] = useState("Rate Transaction")

    return (
        <div className='py-6 min-h-screen'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                <StatCard title="Total Agencies" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<UsersRound />} value="12" extra="+3 this month" />
                <StatCard title="Total Coins Sold" bg="bg-gradient-to-t from-[#C213E1]  to-pink-400" icon={<UsersRound />} value="2.5M" extra={"+125k today"} />
                <StatCard title="Active Balance" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<FolderOpen />} value="8.4M" extra={""} />
                <StatCard title="Total Revenue" bg="bg-gradient-to-t from-[#61B3B] to-[#1931B8]" icon={<TrendingUp />} value="৳12.8M" extra="" />
            </div>

            <div className='my- sm:flex  items-center gap-x-2'>
                <div className=' inline my-4 py-4 px-2 rounded '>
                    <div className='bg-gray-400/20 p-2 rounded'>
                        <button onClick={() => { setToggle("Rate Transaction") }} className={`${toggle == "Rate Transaction" && "bg-white"} px-2 py-0.5 cursor-pointer transition-colors  duration-150 `}>Rate Transaction</button>
                        <button onClick={() => { setToggle("Exchange Ratet") }} className={`${toggle == "Exchange Ratet" && "bg-white"} px-2 py-0.5 cursor-pointer transition-colors duration-150 `}>Exchange Ratet</button>
                        <button onClick={() => { setToggle("Master Legder") }} className={`${toggle == "Master Legder" && "bg-white"} px-2 py-0.5 cursor-pointer transition-colors duration-150 `}>Master Legder</button>
                    </div>
                </div>
                <div className='flex gap-x-2'>
                    <button className={`bg-linear-to-l from-blue-600/60 to-pink-500/70 text-white px-2 py-1 rounded`}>Manual Adjustment</button>
                    <button className={`border border-gray-500/50  px-2 py-1 rounded`}>Refund Coin</button>
                    <button className={`border border-gray-500/50 px-2 py-1 rounded`}>$Update Rate</button>
                </div>
            </div>

            <div>
                <div>
                    <p className='text-2xl font-semibold'>Sell Coins</p>
                    <p className='text-gray-500'>Transfer coin from platform</p>
                </div>
                <div>
                    <div className='sm:grid grid-cols-2 w-[96%] float-end gap-3 mt-4'>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Research ID</label>
                            <input className='border border-gray-300 rounded p-1 outline-0' placeholder='' type="text" />
                        </div>

                        <div className='flex flex-col space-y-1 '>
                            <label htmlFor="">Category</label>
                            {/* <input className='border border-gray-300 rounded p-1 outline-0' placeholder='20020' type="text" /> */}
                            <select name="" id="" className='border border-gray-300 rounded p-1 outline-0'>
                                <option hidden value="Category" className='text-gray-600'>Category</option>
                                <option value="">Category1</option>
                            </select>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Number of Coins</label>
                            <input className='border border-gray-300 rounded p-1 outline-0' placeholder='' type="text" />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Price (Coins)</label>
                            <input className='border border-gray-300 rounded p-1 outline-0' placeholder='5000' type="text" />
                        </div>
                    </div>
                    <div className=' '>
                        <div className='flex w-full justify-end'>
                            <button className='px-2 py-1 rounded  w-30 border border-gray-400 mt-3 ml-2 cursor-pointer'>Cancle</button>
                            <button className=' px-2 py-1 rounded  w-30 bg-linear-to-l from-blue-600/60 to-pink-500/70 text-white mt-3 ml-2 cursor-pointer'>Save</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full block'>
                <div className="bg-white pb-5  overflow-x-auto">
                    <table className="w-full py-3 text-sm">
                        <thead className="border-b border-gray-500/30 bg-gray-50">
                            <tr className="text-left text-gray-800">
                                <th className="p-4 ">Master Portal ID</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Coin</th>
                                <th>Value</th>
                                <th>Date</th>
                                <th className="">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody className=''>
                            {agencyData.map((user) => (
                                <tr key={user.portalId}
                                    className="border-b w-full border-gray-500/30  hover:bg-gray-100 transition">
                                    <td className="px-4 font-semibold">
                                        {user.portalId}
                                    </td>
                                    <td>
                                        <span className={` rounded-full  `}>
                                            {user.name}
                                        </span></td>
                                    <td className=''> {user.category}</td>
                                    <td className='py-2.5 font-semibold'> {user.coin}</td>
                                    <td className='py-2.5 text-green-600 font-semibold'> {user.valu}</td>
                                    <td className='py-2.5 '> {user.date}</td>
                                    <td>
                                        <span className={`
                                                ${user.status == "Pending" && "bg-red-700/60  text-white"}
                                                ${user.status == "Rejected" && "bg-red-400/20  text-red-800"}
                                                ${user.status == "Complete" && "bg-green-400/20  text-green-800"}
                                                 inline px-2 py-0.5 rounded-full`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-2">
                                        <div className={` flex  gap-x-5`}>
                                            <Eye className="w-5 h-5 text-gray-600  cursor-pointer" />
                                            <CircleCheckBig  className={`w-5 h-5 text-green-600 ${user.status !== "Complete" ?"":"hidden"}  cursor-pointer`}  />
                                            
                                            <LoaderCircle  className={`w-5 h-5 text-yellow-600 cursor-pointer ${user.status == "Complete" ?"":"hidden"}`}/>
                                            <CirclePlus className={`w-5 h-5 text-red-600 ${user.status !== "Complete" ?"":"hidden"} rotate-45 cursor-pointer`} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CoinMangment;