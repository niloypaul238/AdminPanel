import React, { useState } from 'react';
import StatCard from '../StatCard';
import { TbUsers } from 'react-icons/tb';
import { MdOutlineWifiTetheringError } from 'react-icons/md';
import { HiDotsHorizontal, HiOutlineFolderOpen } from 'react-icons/hi';
import { GrLineChart } from 'react-icons/gr';
import { CiFilter } from 'react-icons/ci';
import { hostAgencies } from '../../../public/data';
import Swal from 'sweetalert2';

const AgenciesHotAgencies = () => {

    let [inputValue, setInputValue] = useState("")

    const [findObj, setFindObj] = useState(hostAgencies)
    const [notFoundData, setNotFoundData] = useState('');

    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? findObj.filter(item => item.name.toLocaleLowerCase() == inputLower) : hostAgencies;
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

        const filterData = hostAgencies.find(item => item.id === e)
        console.log(filterData);
        Swal.fire({
            html: `
                            <div class="text-center text-black">
                                <h2 class="text-xl  font-bold mb-2">${filterData.name}</h2>
                                <div class="space-y-2.5">
                                    <div class="flex justify-between">
                                        <p>HostId :</p>
                                        <p>${filterData.hostId}</p>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>Reference :</p>
                                        <p>${filterData.reference}</p>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>Country :</p>
                                        <p>${filterData.country}</p>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>Host Name :</p>
                                        <p>${filterData.name}</p>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>Balance :</p>
                                        <p>${filterData.balance}</p>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>Diamonds :</p>
                                        <p>${filterData.diamonds}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        `,
            showConfirmButton: false,
        });



    }


    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = findObj.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(findObj.length / itemsPerPage);


    return (
        <div>
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total Agencies" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<TbUsers />} value="3" extra="+3 this month" />
                <StatCard title="Total Host" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<MdOutlineWifiTetheringError />} value="458" />
                <StatCard title="Active Balance" bg="bg-gradient-to-t from-[#C213E1]  to-[#]" icon={<HiOutlineFolderOpen />} value="8.4M" />
                <StatCard title="Platform Revenue" bg="bg-gradient-to-t from-[#E13913]  to-[#30ACFF]" icon={<GrLineChart />} value="৳756k" extra="+18%" />
            </div>

            <div className="flex justify-between gap-x-2 items-center mb-4">
                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by  ID or name' className='sm:basis-8/12 border w-full border-gray-600/40 px-2 py-1 rounded' />
                <div className="flex sm:basis-4/12 gap-2">
                    <button onClick={searchData} className="px-2.5 flex justify-center w-full cursor-pointer py-0.5 border border-gray-500 rounded  items-center gap-x-2"><CiFilter className='text-lg' />Filter</button>
                    <button className="px-3 py-1 w-full rounded text-sm  bg-linear-to-r text-white from-indigo-500  to-pink-400 cursor-not-allowed">Add Agancy</button>
                </div>
            </div>


            <div className="bg-white pb-5 shadow overflow-x-auto">
                <table className="w-full py-3 text-sm">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-600">
                            <th className="p-2">Reference</th>
                            <th>Host ID</th>
                            <th>Name</th>
                            <th>Balance</th>
                            <th>Diamonds</th>
                            <th>Revenue</th>
                            <th>Country</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody >
                        {currentItems.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b border-gray-500/30  hover:bg-gray-100 transition"
                            >
                                <td className="p-2 font-medium">{user.reference}</td>
                                <td>{user.hostId}</td>
                                <td>{user.name}</td>

                                <td className={` font-medium `}>
                                    {user.balance}
                                </td>

                                {/* <td>{us/}</td> */}

                                <td>{user.diamonds}</td>
                                <td>{user.revenue}</td>
                                <td>{user.country}</td>
                                <td>
                                    <span className={`px-2 py-0.5 rounded-full text-xs ${user.status == "Active" ? "bg-teal-100 text-teal-700" : "bg-red-100 text-red-600"}`}>
                                        {user.status}
                                    </span>
                                </td>

                                <td className="text-blue-600  flex items-center justify-around h-full p-3 w-full "><span onClick={() => model(user.id)} className='cursor-pointer'>View</span> <HiDotsHorizontal /></td>
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
                            <button className={` px-2 cursor-pointer ${currentPage === i + 1 ? "bg-pink-500":""} ${currentPage === i + 1 ? "text-white" : "text-black"}`}
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

export default AgenciesHotAgencies;