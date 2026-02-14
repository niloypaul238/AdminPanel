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
import { usersAdmin } from '../../public/data';

const Users = () => {

    let [inputValue, setInputValue] = useState("")

    const [findObj, setFindObj] = useState(usersAdmin)
    const [serch, setSerch] = useState(findObj)
    const [notFoundData, setNotFoundData] = useState('');

    // model 
    const model = (e) => {

        const filterData = usersAdmin.find(item => item.id === e)
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
                                    <p>${filterData.phoneNumber.slice(0, 3)}************</p>
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
        const filterData = inputLower !== "" ? serch?.filter(item => item.userId.toLocaleLowerCase() === inputLower || item.name.toLocaleLowerCase() === inputLower) : serch;
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
        // console.log(filterDataDelet);
        setFindObj(filterDataDelet);
        setSerch(filterDataDelet)
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
                                    <IoEyeOutline onClick={() => model(user.id)} className="w-5 h-5 text-gray-600 cursor-pointer" />
                                    <MdDoNotDisturb className="w-5 h-5 text-red-600 cursor-pointer" />
                                    <RiDeleteBin6Line onClick={() => deleteBtn(user.id)} className="w-5 h-5 text-red-600  cursor-pointer" />
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