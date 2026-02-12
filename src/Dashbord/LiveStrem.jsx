import React, { useState } from 'react';
import StatCard from '../Component/StatCard';
import { GrLineChart } from 'react-icons/gr';
import { CiFilter } from 'react-icons/ci';
import { BiVideoRecording } from 'react-icons/bi';
import { IoBanOutline, IoEyeOutline, IoTimeOutline } from 'react-icons/io5';
import { streamUsers } from '../../public/data';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineKeyboardVoice, MdOutlineShowChart, MdOutlineVideocam } from 'react-icons/md';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Swal from 'sweetalert2';

const LiveStrem = () => {

    let [inputValue, setInputValue] = useState("")

    const [findObj, setFindObj] = useState(streamUsers)
    const [notFoundData, setNotFoundData] = useState('');

    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? findObj.filter(item => item.name.toLocaleLowerCase() == inputLower) : streamUsers;
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
        const filterData = streamUsers.find(item => item.id === e)
        console.log(filterData);
        Swal.fire({
            html: `
                                <div class="text-center text-black">
                                    <h2 class="text-xl  font-bold mb-2">${filterData.name}</h2>
                                    <div class="space-y-2.5">
                                        <div class="flex justify-between">
                                            <p>User ID :</p>
                                            <p>${filterData.userID}</p>
                                        </div>
                                        <div class="flex justify-between">
                                            <p>Type :</p>
                                            <p>${filterData.type}</p>
                                        </div>
                                        <div class="flex justify-between">
                                            <p>Viewers :</p>
                                            <p>${filterData.viewers}</p>
                                        </div>
                                        <div class="flex justify-between">
                                            <p>Duration :</p>
                                            <p>${filterData.duration}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            `,
            showConfirmButton: false,
        });
    }

    return (
        <div className='py-6 min-h-screen'>
            <div>
                <div>
                    <h1 className='text-2xl font-semibold'>Live Stream Management</h1>
                    <p className='mb-5'>Monitor and manage active streams</p>
                </div>
                {/* Top Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <StatCard title="Active Streams" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<BiVideoRecording />} value="3" extra="Currently live" />
                    <StatCard title="Total Viewers" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<IoEyeOutline />} value="5.3M" />
                    <StatCard title="Violations Today" bg="bg-gradient-to-t from-[#C213E1]  to-[#]" icon={<GrLineChart />} value="1" />
                    <StatCard title="Avg Duration" bg="bg-gradient-to-t from-[#E13913]  to-[#30ACFF]" icon={<IoTimeOutline />} value="458" extra="" />
                </div>

                <div className="flex justify-between items-center mb-4">
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by  ID or name' className='sm:basis-4/5 border w-full border-gray-600/40 px-2 py-1 rounded' />
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border rounded text-sm">Export Data</button>
                        <button onClick={searchData} className="px-3 py-1  rounded text-sm flex items-center gap-x-2 bg-linear-to-r text-white from-indigo-500  to-pink-400"><CiFilter className='text-lg' />Filter</button>
                    </div>
                </div>
            </div>

            <div className="bg-white pb-5 shadow overflow-x-auto">
                <table className="w-full py-3 text-sm">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-800">
                            <th className="p-3">User ID</th>
                            <th >Name</th>
                            <th>Type</th>
                            <th>Level</th>
                            <th>Viewers</th>
                            <th>Duration</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className=''>
                        {findObj.map((user) => (
                            <tr
                                key={user.userID}
                                className="border-b w-full border-gray-500/30  hover:bg-gray-100 transition"
                            >
                                <td className="p-2 font-medium">{user.userID}</td>
                                <td className=''>{user.name}</td>
                                <td className='font-semibold'> {user.type}</td>
                                <td>
                                    <span
                                        className={`py-0.5 rounded-full text-xs font-medium `}
                                    >
                                        {user.lavel}
                                    </span>
                                </td>
                                <td className='  h-9'><span className='mt-1 flex '>
                                    <AiOutlineUser className='text-blue-700' />{user.viewers}</span>
                                </td>
                                <td>{user.duration}</td>
                                <td className='text-center'>
                                    <span
                                        className={`px-2 py-0.5  rounded-full  flex items-center  gap-x-1 font-medium bg-linear-to-r  from-[#2fb6ff9f] to-[#447fff9f] w-18 mx-auto  text-white justify-center`}
                                    >
                                        <MdOutlineShowChart />{user.status}
                                    </span>
                                </td>

                                <td className="py-2">
                                    <div className=' flex justify-center gap-x-2.5'>
                                        <MdOutlineVideocam className="w-6 h-6  cursor-pointer" />
                                        <MdOutlineKeyboardVoice className="w-5 h-5  cursor-pointer" />
                                        <IoBanOutline className="w-6 h-6 text-red-600 cursor-pointer" />
                                        <IoEyeOutline onClick={() => model(user.id)} className="w-6 h-6 text-gray-600 cursor-pointer" />
                                    </div>
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

export default LiveStrem;