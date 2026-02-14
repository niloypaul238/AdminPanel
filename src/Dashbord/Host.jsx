import React, { useState } from 'react';
import { HiOutlineDotsHorizontal, HiOutlineFolderOpen } from 'react-icons/hi';
import { IoEyeOutline } from 'react-icons/io5';
import { TbEyeBitcoin, TbUsers } from 'react-icons/tb';
import StatCard from '../Component/StatCard';
import { MdOutlineWifiTetheringError } from 'react-icons/md';
import { GrLineChart } from 'react-icons/gr';
import { CiFilter } from 'react-icons/ci';
import Swal from 'sweetalert2';

const Host = () => {

    let [inputValue, setInputValue] = useState("")

    const users = [
        {
            id: 1,
            userId: "USR-1001",
            name: "Tanvir Hasan",
            type: "Normal",
            status: "Active",
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
            name: "Rahim Ahmed",
            type: "Host",
            status: "Active",
            level: "Lv15",
            crown: "Lv8",
            diamonds: "12.3M",
            beans: "540K",
            location: "UK",
            levelColor: "bg-purple-100 text-purple-700",
            crownColor: "bg-yellow-100 text-yellow-700",
        },
        {
            id: 3,
            userId: "USR-1003",
            name: "Sabbir Hossain",
            type: "Normal",
            status: "Suspended",
            level: "Lv7",
            crown: "Lv3",
            diamonds: "1.9M",
            beans: "95K",
            location: "Bangladesh",
            levelColor: "bg-blue-100 text-blue-700",
            crownColor: "bg-orange-100 text-orange-600",
        },
        {
            id: 4,
            userId: "USR-1004",
            name: "Nusrat Jahan",
            type: "Host",
            status: "Active",
            level: "Lv20",
            crown: "Lv12",
            diamonds: "25.6M",
            beans: "1.2M",
            location: "Canada",
            levelColor: "bg-pink-100 text-pink-700",
            crownColor: "bg-amber-100 text-amber-700",
        },
        {
            id: 5,
            userId: "USR-1005",
            name: "Fahim Khan",
            type: "Normal",
            status: "Suspended",
            level: "Lv5",
            crown: "Lv2",
            diamonds: "780K",
            beans: "40K",
            location: "India",
            levelColor: "bg-green-100 text-green-700",
            crownColor: "bg-gray-100 text-gray-600",
        },
        {
            id: 6,
            userId: "USR-1006",
            name: "Ayesha Rahman",
            type: "Host",
            status: "Active",
            level: "Lv18",
            crown: "Lv10",
            diamonds: "18.9M",
            beans: "860K",
            location: "Australia",
            levelColor: "bg-indigo-100 text-indigo-700",
            crownColor: "bg-yellow-100 text-yellow-700",
        },
        {
            id: 7,
            userId: "USR-1007",
            name: "Mehedi Hasan",
            type: "Normal",
            status: "Active",
            level: "Lv9",
            crown: "Lv4",
            diamonds: "3.4M",
            beans: "180K",
            location: "Bangladesh",
            levelColor: "bg-cyan-100 text-cyan-700",
            crownColor: "bg-red-100 text-red-600",
        },
        {
            id: 8,
            userId: "USR-1008",
            name: "Jannatul Ferdous",
            type: "Host",
            status: "Suspended",
            level: "Lv22",
            crown: "Lv14",
            diamonds: "31.5M",
            beans: "1.9M",
            location: "UAE",
            levelColor: "bg-fuchsia-100 text-fuchsia-700",
            crownColor: "bg-orange-100 text-orange-700",
        },
        {
            id: 9,
            userId: "USR-1009",
            name: "Rifat Islam",
            type: "Normal",
            status: "Active",
            level: "Lv6",
            crown: "Lv3",
            diamonds: "1.1M",
            beans: "70K",
            location: "Pakistan",
            levelColor: "bg-lime-100 text-lime-700",
            crownColor: "bg-amber-100 text-amber-700",
        },
        {
            id: 10,
            userId: "USR-1010",
            name: "Sara Khan",
            type: "Host",
            status: "Active",
            level: "Lv16",
            crown: "Lv9",
            diamonds: "14.2M",
            beans: "620K",
            location: "USA",
            levelColor: "bg-rose-100 text-rose-700",
            crownColor: "bg-yellow-100 text-yellow-700",
        },
        {
            id: 11,
            userId: "USR-1011",
            name: "Imran Ali",
            type: "Normal",
            status: "Suspended",
            level: "Lv8",
            crown: "Lv4",
            diamonds: "2.6M",
            beans: "130K",
            location: "Nepal",
            levelColor: "bg-sky-100 text-sky-700",
            crownColor: "bg-red-100 text-red-600",
        },
        {
            id: 12,
            userId: "USR-1012",
            name: "Priya Sharma",
            type: "Host",
            status: "Active",
            level: "Lv19",
            crown: "Lv11",
            diamonds: "21.8M",
            beans: "980K",
            location: "India",
            levelColor: "bg-violet-100 text-violet-700",
            crownColor: "bg-amber-100 text-amber-700",
        },
    ];

    const [findObj, setFindObj] = useState(users)
    const [notFoundData, setNotFoundData] = useState('');

    const model = (e) => {

        const filterData = users.find(item => item.id === e)
        console.log(filterData);
        Swal.fire({
            html: `
                    <div class="text-center text-black">
                        <h2 class="text-xl  font-bold mb-2">${filterData.name}</h2>
                        <div class="space-y-1.5">
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
                        </div>
                    </div>
                `,
            showConfirmButton: false,
        });



    }


    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? users?.filter(item => item.userId.toLocaleLowerCase() === inputLower || item.name.toLocaleLowerCase() === inputLower) : users;
        setFindObj(filterData);
        console.log(filterData);
        if (!filterData.length > 0 && inputValue != "") {
            setNotFoundData('Not Found Data')
        } else {
            setNotFoundData('')
        }
    }



    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = findObj.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(findObj.length / itemsPerPage);


    return (
        <div className='py-6 min-h-screen'>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total Users" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<TbUsers />} value="120,458" extra="+245 today" />
                <StatCard title="Host Agencies" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<MdOutlineWifiTetheringError />} value="34" />
                <StatCard title="Coin Agencies" bg="bg-gradient-to-t from-[#C213E1]  to-[#]" icon={<HiOutlineFolderOpen />} value="12" />
                <StatCard title="Platform Revenue" bg="bg-gradient-to-t from-[#E13913]  to-[#30ACFF]" icon={<GrLineChart />} value="৳2.4M" extra="+18%" />
            </div>

            <div className="flex justify-between items-center gap-2 mb-4">
                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by  ID or name' className='sm:basis-8/12 border w-full border-gray-600/40 px-2 py-1 rounded' />
                <div className="flex sm:basis-4/12 gap-2">
                    <button className="px-3 py-1 w-full border cursor-not-allowed rounded text-sm">Export Data</button>
                    <button onClick={() => searchData()} className="px-3 py-1  rounded text-sm flex items-center gap-x-2 bg-linear-to-r text-white from-indigo-500 cursor-pointer w-full justify-center to-pink-400"><CiFilter className='text-lg' />Filter</button>
                </div>
            </div>

            <div className="bg-white pb-5 shadow overflow-x-auto">
                <table className="w-full py-3 text-sm">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-600">
                            <th className="p-4">User ID</th>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Crown</th>
                            <th>Diamonds</th>
                            <th>Beans</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody >
                        {

                            currentItems.map((user) => (
                                <tr
                                    key={user.id}
                                    className="border-b border-gray-500/30  hover:bg-gray-100 transition"
                                >
                                    <td className="p-2 font-medium">{user.userId}</td>
                                    <td>{user.name}</td>

                                    <td>
                                        <span
                                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${user.levelColor}`}
                                        >
                                            {user.level}
                                        </span>
                                    </td>

                                    <td>
                                        <span
                                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${user.crownColor}`}
                                        >
                                            {user.crown}
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
                                        <IoEyeOutline onClick={() => model(user.id)} className="w-5 h-5 text-gray-600 cursor-pointer" />
                                        <HiOutlineDotsHorizontal className="w-5 h-5 text-gray-600 cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div><p className='text-center text-gray-600 text-2xl'>{notFoundData}</p></div>

                {/* pagination section */}
                <div className=' flex justify-center'>
                    <div style={{ marginTop: "10px" }}>
                        <button className='cursor-pointer text-pink-500'
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button className={` px-2 cursor-pointer ${currentPage === i + 1 ? "bg-pink-500" : ""} ${currentPage === i + 1 ? "text-white" : "text-black"}`}
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                style={{
                                    margin: "0 8px",

                                }}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button className='cursor-pointer text-pink-500'
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Host;