import React from 'react';
import StatCard from '../Component/StatCard';
import LiveCard from '../Component/LiveCard ';
import { TbUsers } from 'react-icons/tb';
import { MdOutlineWifiTetheringError } from 'react-icons/md';
import { HiDotsHorizontal, HiOutlineFolderOpen } from 'react-icons/hi';
import { GrLineChart } from 'react-icons/gr';
import { CiFilter } from 'react-icons/ci';
import Swal from 'sweetalert2';

const Dashbord = () => {
    const agencies = [
        {
            id: "0012300",
            name: "StartHost",
            type: "HQ",
            level: "Lv1",
            diamonds: "100M",
            beans: "100K",
            coinSell: "100K",
            location: "Bangladesh",
        },
        {
            id: "00122301",
            name: "Elite Bro",
            type: "US",
            level: "Lv3",
            diamonds: "100K",
            beans: "100K",
            coinSell: "100M",
            location: "Bangladesh",
        },
        {
            id: "001",
            name: "Premium",
            type: "MG",
            level: "Lv2",
            diamonds: "100M",
            beans: "100K",
            coinSell: "100M",
            location: "Bangladesh",
        },
    ];

    const model = (e) => {

        const filterData = agencies.find(item => item.id === e)
        console.log(filterData);
        Swal.fire({
            html: `
                <div class="text-center text-black">
                    <h2 class="text-xl  font-bold mb-2">${filterData.name}</h2>
                    <div class="space-y-1.5">
                        <div class="flex justify-between">
                            <p>ID :</p>
                            <p>${filterData.id}</p>
                        </div>
                        <div class="flex justify-between">
                            <p>Name :</p>
                            <p>${filterData.name}</p>
                        </div>
                        <div class="flex justify-between">
                            <p>Level :</p>
                            <p>${filterData.level}</p>
                        </div>
                        <div class="flex justify-between">
                            <p>Location :</p>
                            <p>${filterData.location}</p>
                        </div>
                    </div>
                </div>
            `,
            showConfirmButton: false,
        });



    }
    return (
        <div className="py-6 min-h-screen ">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total Users" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<TbUsers />} value="120,458" extra="+245 today" />
                <StatCard title="Host Agencies" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<MdOutlineWifiTetheringError />} value="34" />
                <StatCard title="Coin Agencies" bg="bg-gradient-to-t from-[#C213E1]  to-[#]" icon={<HiOutlineFolderOpen />} value="12" />
                <StatCard title="Platform Revenue" bg="bg-gradient-to-t from-[#E13913]  to-[#30ACFF]" icon={<GrLineChart />} value="৳2.4M" extra="+18%" />
            </div>

            {/* Live Platform Stats */}
            <div className="bg-white rounded-xl p-5 mb-6 shadow">
                <h2 className="font-semibold mb-4">Live Platform Stats</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <LiveCard title="Active Streams" value="156" color="bg-blue-100 text-blue-600" />
                    <LiveCard title="Viewers" value="8,234" color="bg-purple-100 text-purple-600" />
                    <LiveCard title="Today's Rewards" value="458k" color="bg-green-100 text-green-600" />
                    <LiveCard title="Coin Transactions" value="1245" color="bg-red-100 text-red-600" />
                </div>
            </div>

            {/* Agencies Overview */}
            <div className="bg-white rounded-xl p-5 shadow">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold">Agencies Overview</h2>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 cursor-pointer border rounded text-sm">Export Data</button>
                        <button className="px-3 py-1 cursor-pointer rounded text-sm flex items-center gap-x-2 bg-linear-to-r text-white from-indigo-500  to-pink-400"><CiFilter className='text-lg' />Filter</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th className="p-3">ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Level</th>
                                <th>Diamonds</th>
                                <th>Beans</th>
                                <th>Coin Sell</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {agencies.map((item) => (
                                <tr key={item.id} className="border-b border-gray-500/30">
                                    <td className="p-3">{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <span className="px-2 py-0.5 rounded text-xs bg-pink-100 text-pink-600">
                                            {item.type}
                                        </span>
                                    </td>
                                    <td>{item.level}</td>
                                    <td>{item.diamonds}</td>
                                    <td>{item.beans}</td>
                                    <td>{item.coinSell}</td>
                                    <td>{item.location}</td>
                                    <td>
                                        <span className="px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-600">
                                            Active
                                        </span>
                                    </td>
                                    <td className="text-blue-600  flex items-center justify-around h-full p-3 w-full "><span className='cursor-pointer' onClick={() => model(item.id)}>View</span> <HiDotsHorizontal /></td>
                                    {/* <td className="text-blue-600 flex justify-around items-center ">
                                        <p>View</p>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            
        </div>
    );
}



export default Dashbord;