import React, { useState } from 'react';
import { HiOutlineDotsHorizontal, HiOutlineFolderOpen } from 'react-icons/hi';
import { IoEyeOutline } from 'react-icons/io5';
import { TbEyeBitcoin, TbUsers } from 'react-icons/tb';
import StatCard from '../Component/StatCard';
import { MdDoNotDisturb, MdOutlineWifiTetheringError } from 'react-icons/md';
import { GrLineChart } from 'react-icons/gr';
import { CiFilter } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const Users = () => {

    
    const users = [
  {
    id: 1,
    userId: "USR-1001",
    userImg: "https://i.ibb.co/7QZxYkP/paper-crane.png",
    name: "Tanvir Hasan",
    type: "Normal",
    status: "Active",
    phoneNumber: "01502845820",
    coinBlance: 59,
    coinSpend: 35,
    earningBlance: 8302,
    grandTotal: 4802462,
    video: "30hr 22min || Day : 27",
    adioTime: "30hr 21min || Day : 23",
    registraTime: "13/3/2025 12:10:40",
    rastSeenTime: "12/4/2025 12:10:40",
    level: "Lv10",
    crown: "Lv5",
    diamonds: "6.8M",
    beans: "210K",
    location: "USA",
    levelColor: "bg-teal-100 text-teal-700",
    crownColor: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    userId: "USR-1002",
    userImg: "https://i.pravatar.cc/150?img=12",
    name: "Rahim Uddin",
    type: "VIP",
    status: "Active",
    phoneNumber: "01745678901",
    coinBlance: 120,
    coinSpend: 78,
    earningBlance: 15200,
    grandTotal: 3522140,
    video: "22hr 10min || Day : 20",
    adioTime: "18hr 40min || Day : 18",
    registraTime: "15/3/2025 10:20:10",
    rastSeenTime: "12/4/2025 14:20:40",
    level: "Lv12",
    crown: "Lv6",
    diamonds: "4.2M",
    beans: "180K",
    location: "UK",
    levelColor: "bg-blue-100 text-blue-700",
    crownColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 3,
    userId: "USR-1003",
    userImg: "https://i.pravatar.cc/150?img=22",
    name: "Ayesha Rahman",
    type: "Normal",
    status: "Inactive",
    phoneNumber: "01898765432",
    coinBlance: 45,
    coinSpend: 20,
    earningBlance: 6200,
    grandTotal: 1254000,
    video: "15hr 05min || Day : 12",
    adioTime: "14hr 00min || Day : 11",
    registraTime: "18/3/2025 09:40:25",
    rastSeenTime: "10/4/2025 11:10:12",
    level: "Lv8",
    crown: "Lv3",
    diamonds: "2.1M",
    beans: "95K",
    location: "Canada",
    levelColor: "bg-purple-100 text-purple-700",
    crownColor: "bg-pink-100 text-pink-600",
  },
  {
    id: 4,
    userId: "USR-1004",
    userImg: "https://i.pravatar.cc/150?img=32",
    name: "John Smith",
    type: "VIP",
    status: "Active",
    phoneNumber: "01912345678",
    coinBlance: 300,
    coinSpend: 150,
    earningBlance: 35000,
    grandTotal: 7805400,
    video: "40hr 30min || Day : 30",
    adioTime: "38hr 10min || Day : 28",
    registraTime: "10/3/2025 08:15:30",
    rastSeenTime: "12/4/2025 15:45:00",
    level: "Lv15",
    crown: "Lv8",
    diamonds: "9.5M",
    beans: "450K",
    location: "Germany",
    levelColor: "bg-green-100 text-green-700",
    crownColor: "bg-orange-100 text-orange-700",
  },
  {
    id: 5,
    userId: "USR-1005",
    userImg: "https://i.pravatar.cc/150?img=45",
    name: "Mehedi Hasan",
    type: "Normal",
    status: "Banned",
    phoneNumber: "01699887766",
    coinBlance: 10,
    coinSpend: 5,
    earningBlance: 1200,
    grandTotal: 350000,
    video: "05hr 20min || Day : 4",
    adioTime: "04hr 50min || Day : 4",
    registraTime: "20/3/2025 13:22:40",
    rastSeenTime: "05/4/2025 09:30:22",
    level: "Lv3",
    crown: "Lv1",
    diamonds: "500K",
    beans: "25K",
    location: "India",
    levelColor: "bg-gray-100 text-gray-700",
    crownColor: "bg-gray-100 text-gray-600",
  },
  {
    id: 6,
    userId: "USR-1006",
    userImg: "https://i.pravatar.cc/150?img=51",
    name: "Nusrat Jahan",
    type: "VIP",
    status: "Active",
    phoneNumber: "01322446688",
    coinBlance: 220,
    coinSpend: 130,
    earningBlance: 27800,
    grandTotal: 6200000,
    video: "28hr 15min || Day : 25",
    adioTime: "27hr 40min || Day : 24",
    registraTime: "11/3/2025 16:55:12",
    rastSeenTime: "12/4/2025 17:35:40",
    level: "Lv13",
    crown: "Lv7",
    diamonds: "7.3M",
    beans: "320K",
    location: "UAE",
    levelColor: "bg-indigo-100 text-indigo-700",
    crownColor: "bg-rose-100 text-rose-700",
  },
  {
    id: 7,
    userId: "USR-1007",
    userImg: "https://i.pravatar.cc/150?img=61",
    name: "David Lee",
    type: "Normal",
    status: "Active",
    phoneNumber: "01455667788",
    coinBlance: 80,
    coinSpend: 42,
    earningBlance: 9800,
    grandTotal: 2450000,
    video: "20hr 00min || Day : 18",
    adioTime: "19hr 15min || Day : 17",
    registraTime: "16/3/2025 11:11:11",
    rastSeenTime: "12/4/2025 18:05:55",
    level: "Lv9",
    crown: "Lv4",
    diamonds: "3.4M",
    beans: "150K",
    location: "Japan",
    levelColor: "bg-cyan-100 text-cyan-700",
    crownColor: "bg-amber-100 text-amber-700",
  },
  {
    id: 8,
    userId: "USR-1008",
    userImg: "https://i.pravatar.cc/150?img=71",
    name: "Sabrina Khan",
    type: "VIP",
    status: "Active",
    phoneNumber: "01811223344",
    coinBlance: 190,
    coinSpend: 100,
    earningBlance: 21500,
    grandTotal: 5100000,
    video: "26hr 40min || Day : 23",
    adioTime: "25hr 30min || Day : 22",
    registraTime: "12/3/2025 07:30:40",
    rastSeenTime: "12/4/2025 19:22:10",
    level: "Lv11",
    crown: "Lv6",
    diamonds: "5.9M",
    beans: "280K",
    location: "France",
    levelColor: "bg-lime-100 text-lime-700",
    crownColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 9,
    userId: "USR-1009",
    userImg: "https://i.pravatar.cc/150?img=81",
    name: "Hasan Ali",
    type: "Normal",
    status: "Inactive",
    phoneNumber: "01988776655",
    coinBlance: 25,
    coinSpend: 12,
    earningBlance: 3500,
    grandTotal: 850000,
    video: "10hr 10min || Day : 8",
    adioTime: "09hr 50min || Day : 8",
    registraTime: "21/3/2025 18:00:10",
    rastSeenTime: "08/4/2025 20:10:30",
    level: "Lv5",
    crown: "Lv2",
    diamonds: "1.2M",
    beans: "60K",
    location: "Malaysia",
    levelColor: "bg-sky-100 text-sky-700",
    crownColor: "bg-red-100 text-red-700",
  },
  {
    id: 10,
    userId: "USR-1010",
    userImg: "https://i.pravatar.cc/150?img=91",
    name: "Olivia Brown",
    type: "VIP",
    status: "Active",
    phoneNumber: "01700011122",
    coinBlance: 260,
    coinSpend: 140,
    earningBlance: 31200,
    grandTotal: 6950000,
    video: "34hr 00min || Day : 29",
    adioTime: "33hr 20min || Day : 28",
    registraTime: "09/3/2025 06:10:30",
    rastSeenTime: "12/4/2025 21:40:50",
    level: "Lv14",
    crown: "Lv7",
    diamonds: "8.1M",
    beans: "400K",
    location: "Australia",
    levelColor: "bg-emerald-100 text-emerald-700",
    crownColor: "bg-fuchsia-100 text-fuchsia-700",
  },
  {
    id: 11,
    userId: "USR-1011",
    userImg: "https://i.pravatar.cc/150?img=102",
    name: "Imran Hossain",
    type: "Normal",
    status: "Active",
    phoneNumber: "01555443322",
    coinBlance: 95,
    coinSpend: 50,
    earningBlance: 11200,
    grandTotal: 2950000,
    video: "23hr 10min || Day : 19",
    adioTime: "22hr 45min || Day : 19",
    registraTime: "14/3/2025 14:25:50",
    rastSeenTime: "12/4/2025 22:15:30",
    level: "Lv10",
    crown: "Lv5",
    diamonds: "4.6M",
    beans: "200K",
    location: "Bangladesh",
    levelColor: "bg-teal-100 text-teal-700",
    crownColor: "bg-red-100 text-red-600",
  },
  {
    id: 12,
    userId: "USR-1012",
    userImg: "https://i.pravatar.cc/150?img=112",
    name: "Sophia Wilson",
    type: "VIP",
    status: "Active",
    phoneNumber: "01633221144",
    coinBlance: 310,
    coinSpend: 175,
    earningBlance: 38500,
    grandTotal: 8450000,
    video: "42hr 30min || Day : 32",
    adioTime: "41hr 15min || Day : 31",
    registraTime: "05/3/2025 05:40:15",
    rastSeenTime: "12/4/2025 23:55:10",
    level: "Lv16",
    crown: "Lv9",
    diamonds: "10.2M",
    beans: "520K",
    location: "Italy",
    levelColor: "bg-green-100 text-green-700",
    crownColor: "bg-yellow-100 text-yellow-700",
  },
];


    let [inputValue, setInputValue] = useState("")

    const [findObj, setFindObj] = useState(users)
    const [notFoundData, setNotFoundData] = useState('');

    // model 
    const model = (e) => {
    
            const filterData = users.find(item => item.id === e)
            console.log(filterData);
            Swal.fire({
                html: `
                        <div class="text-center text-black">
                            <h2 class="text-xl  font-bold mb-2">${filterData.name}</h2>
                            <div class="space-y-2.5">
                                <div class="flex justify-between">
                                    <p>ID :</p>
                                    <p>${filterData.userId}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>Name :</p>
                                    <p>${filterData.name}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>Type :</p>
                                    <p>${filterData.type}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>Beans :</p>
                                    <p>${filterData.beans}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>Level :</p>
                                    <p>${filterData.level}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>Location :</p>
                                    <p>${filterData.location}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>PhoneNumber :</p>
                                    <p>${filterData.phoneNumber.slice(0,3)}************</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>CoinBlance :</p>
                                    <p>${filterData.coinBlance}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>CoinSpend :</p>
                                    <p>${filterData.coinSpend}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>EarningBlance :</p>
                                    <p>${filterData.earningBlance}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>Video Live Time :</p>
                                    <p>${filterData.video}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p>Audio Live Time :</p>
                                    <p>${filterData.adioTime}</p>
                                </div>
                            </div>
                        </div>
                    `,
                showConfirmButton: false,
            });
    
    
    
        }

    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? findObj?.filter(item => item.userId.toLocaleLowerCase() === inputLower || item.name.toLocaleLowerCase() === inputLower) : users;
        setFindObj(filterData);
        // console.log(filterData);
        if (!filterData.length > 0 && inputValue != "") {
            setNotFoundData('Not Found Data')
        } else {
            setNotFoundData('')
        }
    }


    // delete function create 
    const deleteBtn = (id) => {

        const filterDataDelet = findObj.filter(item => item.id !== id)
        console.log(filterDataDelet);
        setFindObj(filterDataDelet);
    }


    return (
        <div className='py-6 min-h-screen'>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total Users" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<TbUsers />} value="120,458" extra="+245 today" />
                <StatCard title="Host Agencies" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<MdOutlineWifiTetheringError />} value="34" />
                <StatCard title="Coin Agencies" bg="bg-gradient-to-t from-[#C213E1]  to-[#]" icon={<HiOutlineFolderOpen />} value="12" />
                <StatCard title="Platform Revenue" bg="bg-gradient-to-t from-[#E13913]  to-[#30ACFF]" icon={<GrLineChart />} value="৳2.4M" extra="+18%" />
            </div>

            <div className="flex justify-between items-center mb-4">
                <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by  ID or name' className='sm:basis-4/5 border w-full border-gray-600/40 px-2 py-1 rounded' />
                <div className="flex gap-2">
                    <button className="px-3 py-1 border rounded text-sm">Export Data</button>
                    <button onClick={() => searchData()} className="px-3 py-1 cursor-pointer rounded text-sm flex items-center gap-x-2 bg-linear-to-r text-white from-indigo-500  to-pink-400"><CiFilter className='text-lg' />Filter</button>
                </div>
            </div>

            <div className="bg-white pb-5 shadow overflow-x-auto">
                <table className="w-full py-3 text-sm">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-600">
                            <th className="p-4">User ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Level</th>
                            <th>Diamonds</th>
                            <th>Beans</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody >
                        {findObj.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b border-gray-500/30  hover:bg-gray-100 transition"
                            >
                                <td className="p-2 font-medium">{user.userId}</td>
                                <td>{user.name}</td>

                                <td>
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${user.type == "Normal" ? 'bg-teal-100 text-teal-700' : 'bg-red-100 text-red-600'}`}
                                    >
                                        {user.type}
                                    </span>
                                </td>

                                <td>
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${user.levelColor}`}
                                    >
                                        {user.level}
                                    </span>
                                </td>



                                <td>{user.diamonds}</td>
                                <td>{user.beans}</td>
                                <td>{user.location}</td>

                                <td>
                                    <span className={`px-2 py-0.5 rounded-full text-xs ${user.status == "Active" ? "bg-teal-100 text-teal-700" : "bg-red-100 text-red-600"}`}>
                                        {user.status}
                                    </span>
                                </td>

                                <td className="flex items-center justify-center gap-3 py-2">
                                    <IoEyeOutline  onClick={() => model(user.id)} className="w-5 h-5 text-gray-600 cursor-pointer" />
                                    <MdDoNotDisturb className="w-5 h-5 text-red-600 cursor-pointer" />
                                    <RiDeleteBin6Line onClick={()=>deleteBtn(user.id)} className="w-5 h-5 text-red-600  cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><p className='text-center text-gray-600 text-2xl'>{notFoundData}</p></div>
            </div>
        </div>

    );
};

export default Users;