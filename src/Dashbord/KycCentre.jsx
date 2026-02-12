import React from 'react';
import StatCard from '../Component/StatCard';
import { CircleCheckBig, CircleDollarSign, CirclePlus, Ellipsis, TrendingUp, UsersRound, Video } from 'lucide-react';
import {agencyUsers } from '../../public/data';

const KycCentre = () => {

// {
//     id: 256969,
//     catagories: "Agency",
//     user: {
//       name: "Nusrat Jahan",
//       status: "Active",
//       img: "https://i.pravatar.cc/150?img=12",
//     },
//     country: "Bangladesh",
//     phoneNumber: "018234567890",
//     nidNo: 1987654321123,
//     ReferenceID: 2511152,
//     email: "nusrat@gmail.com",
//     ipAdress: "103.45.78.21",
//     registrationTime: "11/4/2025 09:15:20",
//     lastLogin: "12/4/2025 08:45:10",
//   }

    return (
        <div className='py-6 min-h-screen'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="User Growth" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<UsersRound />} value="+6,083" extra="+3 this month" />
                <StatCard title="Stream Hours" bg="bg-gradient-to-t from-[#C213E1]  to-pink-400" icon={<Video />} value="12,450" extra={"+125k today"} />
                <StatCard title="Coin Circulation" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<CircleDollarSign />} value="4.2M" extra={"This month"} />
                <StatCard title="$ Revenue" bg="bg-gradient-to-t from-[#61B3B] to-[#1931B8]" icon={<TrendingUp />} value="$67.2K" extra="After expenses" />
            </div>


            <div className="bg-white pb-5  overflow-x-auto">
                <table className="w-full py-3 text-sm">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-800">
                            <th className="p-4 ">User ID</th>
                            <th>User Name</th>
                            <th>Agency ID</th>
                            <th>Agency Name</th>
                            <th>Categories</th>
                            <th>Approve in</th>
                            <th className="">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className=''>
                        {agencyUsers.map((user) => (
                            <tr key={user.id}
                                className="border-b w-full border-gray-500/30  hover:bg-gray-100 transition">
                                <td className="px-4 font-semibold">
                                    {user.user.userId}
                                </td>
                                <td>
                                    <span className={` rounded-full px-4 `}>
                                        {user.user.name}
                                    </span></td>
                                <td className='text-gray-600'> {user.id}</td>
                                <td className='py-2.5 font-semibold'> {user.agencyName}</td>
                                <td className='py-2.5 '> {user.catagories}</td>
                                <td className='py-2.5 '> {user.approveIn}</td>
                                <td>
                                    <span className={`
                                                ${user.status == "Pending" && "bg-blue-400/20  text-blue-800"}
                                                ${user.status == "Rejected" && "bg-red-400/20  text-red-800"}
                                                ${user.status == "Completed" && "bg-green-400/20  text-green-800"}
                                                 inline px-2 py-0.5 rounded-full`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-2">
                                    <div className={` flex justify-center gap-x-5`}>
                                        <CircleCheckBig className={`w-5 h-5 text-green-600 cursor-pointer `} />
                                        <CirclePlus className="w-5 h-5 text-red-600 rotate-45 cursor-pointer" />
                                        <Ellipsis className="w-5 h-5 text-gray-600  cursor-pointer"/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default KycCentre;