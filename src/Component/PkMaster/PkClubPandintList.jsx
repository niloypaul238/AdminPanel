import React, { useContext, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { Eye, Pencil } from 'lucide-react';
import { renderToString } from 'react-dom/server';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { ContexCreate } from '../../ContexAPI';
import { PKstreamRequests } from '../../../public/data';

const PkClubPandintList = () => {
    const { PKstreamRequestsdata } = useContext(ContexCreate)
    let [inputValue, setInputValue] = useState("")
    const [notFoundData, setNotFoundData] = useState('');
    const [findObj, setFindObj] = useState(PKstreamRequestsdata)



    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? PKstreamRequestsdata.filter(item => item.userId.toLocaleLowerCase() == inputLower || item.agentName.toLocaleLowerCase() == inputLower) : PKstreamRequestsdata;
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
        const filterData = PKstreamRequestsdata.find(item => item.id === e)
        // console.log(filterData);
        Swal.fire({
            html: renderToString(
                <div className=" ">
                    <div className="">
                        {/* Header */}
                        <h2 className="text-xl font-semibold text-center mb-4">
                            {filterData.userName}
                        </h2>

                        {/* Info Rows */}
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="font-medium">ID :</span>
                                <span>{filterData.userId}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Agent Name :</span>
                                <span>{filterData.agentName}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Phone Number :</span>
                                <span>017*********</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Agent ID :</span>
                                <span>{filterData.agentId}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Status :</span>
                                <span>{filterData.status}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Location :</span>
                                <span>{filterData.location}</span>
                            </div>


                        </div>
                    </div>
                </div>
            ),
            showConfirmButton: false,
            width: 500
        });
    }

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = findObj.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(findObj.length / itemsPerPage);



    return (
        <div>
            <div>
                <h1 className='text-2xl font-semibold'>PK Request List</h1>
                <p className='mb-5'>Manage incoming PK battle requests</p>


                <div className="flex justify-between gap-x-4 items-center mb-4">
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by agency ID or name' className='sm:basis-4/5 border w-full border-gray-600/40  px-2 py-1 rounded' />
                    <button onClick={searchData} className="px-2.5 cursor-pointer basis-1/5 justify-center py-1.5  rounded text- flex items-center gap-x-2 bg-linear-to-r text-white from-indigo-500  to-pink-400"><CiFilter className='text-lg ' />Filter</button>

                </div>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="px-2 py-3 text-left">User ID</th>
                                <th className="px-2 py-3">Profile</th>
                                <th className="px-2 py-3 text-left">User Name</th>
                                <th className="text-left py-3">Level</th>
                                <th className="px-2 py-3 text-left">Agent Name</th>
                                <th className="text-left py-3">Date</th>
                                <th className="text-left py-3">Time</th>
                                <th className="px-2 py-3 text-left">Host Location</th>
                                <th className="px-2 py-3">Status</th>
                                <th className="px-2 py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            {currentItems.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 border-b border-gray-400/40">
                                    <td className="px-2 py-1 font-medium">{item.userId}</td>

                                    <td className="px-2 py-1">
                                        <div className="h-10 w-10 rounded-full bg-black mx-auto" />
                                    </td>

                                    <td className="px-2 py-1">{item.userName}</td>

                                    <td className=" py-1">
                                        <span
                                            className={`px-3 text-left py-1 text-xs text-white rounded-full ${item.levelColor}`}
                                        >
                                            {item.level}
                                        </span>
                                    </td>

                                    <td className="px-2 py-1">
                                        <div className="font-medium">{item.agentName}</div>
                                        <div className="text-xs text-gray-500">
                                            ID : {item.agentId}
                                        </div>
                                    </td>

                                    <td className=" py-1 text-left">{item.date}</td>
                                    <td className=" py-1 text-left">{item.time}</td>
                                    <td className="px-2 py-1">{item.location}</td>

                                    <td className="px-2 py-1 text-center">
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${item.status === "pending"
                                                ? "bg-indigo-100 text-indigo-600"
                                                : item.status === "approved"
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-red-100 text-red-600"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>

                                    <td className="px-2 py-1">
                                        <div className="flex items-center justify-center gap-3">
                                            <Eye onClick={() => model(item.id)} className="w-5 h-5 text-gray-600 cursor-pointer" />
                                            <Link to={`${item.userId}`}><Pencil className="w-5 h-5 text-red-500 cursor-pointer" /></Link>
                                        </div>
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
        </div>
    );
};

export default PkClubPandintList;