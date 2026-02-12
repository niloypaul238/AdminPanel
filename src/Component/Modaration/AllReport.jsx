import React, { useState } from 'react';
import { modarationData } from '../../../public/data';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineKeyboardVoice, MdOutlineShowChart, MdOutlineVideocam } from 'react-icons/md';
import { IoBanOutline, IoEyeOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { CiFilter, CiWarning } from 'react-icons/ci';
import { renderToString } from 'react-dom/server';
import { Ban, CircleCheck, TriangleAlert } from 'lucide-react';
import { PiCurrencyDollarSimpleBold } from 'react-icons/pi';

const AllReport = () => {

    const [popupToggle, setPopupToggle] = useState('Details')

    let [inputValue, setInputValue] = useState("")

    const [findObj, setFindObj] = useState(modarationData)
    const [notFoundData, setNotFoundData] = useState('');

    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? findObj.filter(item => item.target.toLocaleLowerCase() == inputLower || item.IdReporter.toLocaleLowerCase() == inputLower) : modarationData;
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
        const filterData = modarationData.find(item => item.id === e)
        // console.log(filterData);
        Swal.fire({
            html: renderToString(
                                    <div className="text-left text-black">
                                        <h2 className="text-xl text-left  font-bold">Report Details #{filterData.id}</h2>
                                        <p className="text-gray-500 mb-4">Review and take action on this report</p>
                                        <div class='bg-gray-400/20  inline mt-5 p-2 rounded '>
                                            <button onClick={()=>setPopupToggle("Details")} className= {`px-3 py-1 cursor-pointer mx-2 rounded ${popupToggle == "Details" && "bg-white"}`}>Details</button>
                                            <button onClick={()=>setPopupToggle("Evidence History")} className= {`px-3 py-1 cursor-pointer mx-2 rounded ${popupToggle == "Evidence History" && "bg-white"}`}>Evidence History</button>
                                            <button onClick={()=>setPopupToggle("History")} className= {`px-3 py-1 cursor-pointer mx-2 rounded ${popupToggle == "History" && "bg-white"}`}>History</button>
                                        </div>
                                        <div className="space-y-3 mt-3">
                                           <table className="w-full py-3 text-sm">
                                            <thead class=" mb-2  bg-gray-50">
                                                <tr class="text-left text-gray-600/90 font-normal">
                                                    <th class="font-normal">Report Type</th>
                                                    <th class="font-normal">Admin Name</th>
                                                    <th class="font-normal">Admin Id</th>
                                                    <th class="font-normal">Report Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="font-semibold pt-2">
                                                    <td>${filterData.reportType}</td>
                                                    <td>${filterData.adminName}</td>
                                                    <td>${filterData.adminId}</td>
                                                    <td>${filterData.reportTime}</td>
                                                </tr>
                                                
                                            </tbody>
                                           </table> 
                                        </div>
                                        <div class="mt-3 text-sm">
                                            <p class=" text-gray-600/90">Reporter <br/><span class="text-black ">${filterData.IdReporter}</span></p>
                                        </div>
                                        <div class="mt-3 text-sm">
                                            <p class=" text-gray-600/90">Reason<br/><span class="text-black ">${filterData.reson}</span></p>
                                        </div>
                                        <div class="mt-2">
                                            <p class="text-gray-600/90">Moderator Notes</p>
                                            <textarea placeholder="Add your note here..." class="w-full rounded p-2 max-h-40 border border-gray-700 outline-0" name="" id=""></textarea>
                                        </div>
                                        <div class="flex mt-2 gap-x-1.5">
                                            <button class="border cursor-pointer flex items-center gap-x-1 border-gray-400 rounded px-1 py-1"><TriangleAlert /> Issue Warning</button>
                                            <button class=" text-white cursor-pointer flex items-center gap-x-1 bg-red-600/70 rounded px-2 py-1"><PiCurrencyDollarSimpleBold /> Apply Fine</button>
                                            <button class="text-white cursor-pointer flex items-center gap-x-1 bg-red-600/70 rounded px-2 py-1"><Ban /> Ban User</button>
                                            <button class="text-white cursor-pointer flex items-center gap-x-1 bg-green-600/70 rounded px-2 py-1"><CircleCheck /> Resolve</button>
                                        </div>
                                    </div>
                                ),
            showConfirmButton: false,
            width:700
        });
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by  ID or name' className='sm:basis-4/5 border w-full border-gray-600/40 px-2 py-1 rounded' />
                <div className="flex gap-2">
                    <button onClick={searchData} className="px-2.5 py-0.5 border border-gray-500 rounded text- flex items-center gap-x-2"><CiFilter className='text-lg' />Filter</button>
                    <button className="px-3 py-1  rounded text-sm  bg-linear-to-r text-white from-indigo-500  to-pink-400">Add Agancy</button>
                </div>
            </div>
            <div className="bg-white pb-5 shadow overflow-x-auto">
            
                <table className="w-full py-3 ">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-800">
                            <th className="p-3 text-center">SL No</th>
                            <th >ID Reporter</th>
                            <th>Target</th>
                            <th>Level</th>
                            <th>Time</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className=''>
                        {findObj.map((user) => (
                            <tr key={user.id}
                                className="border-b w-full border-gray-500/30  hover:bg-gray-100 transition"
                            >
                                <td className="text-center">
                                    {user.id}
                                    {/* <img src={user}  /> */}
                                </td>
                                <td className=''>{user.IdReporter}</td>
                                <td> {user.target}</td>
                                <td>
                                    <span
                                        className={`py-0.5 rounded-full `}
                                    >
                                        {user.lavel}
                                    </span>
                                </td>
                                <td> {user.time}</td>
                                <td> <span className={` px-2.5 text-sm rounded-2xl py-0.5 text-white ${user.typeLabel === "Warning" ? 'bg-linear-to-r  from-[#ff442f9f] to-[#be5d03b8]' : "bg-linear-to-r  from-[#2fb6ff9f] to-[#447fff9f]"}`}>{user.typeLabel}</span></td>
                                <td>{user.date}</td>
                                <td className='text-center'>
                                    <span
                                        className={`px-2 py-0.5  rounded-full  flex items-center  gap-x-1 bg-linear-to-r  from-[#2fb6ff9f] to-[#447fff9f] w-30 mx-auto  text-white `}
                                    >
                                        <MdOutlineShowChart />{user.status}
                                    </span>
                                </td>

                                <td className="py-2">
                                    <div className=' flex justify-center gap-x-2.5'>
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

export default AllReport;