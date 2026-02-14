import { Pencil, Trash } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { ContexCreate } from '../../ContexAPI';
import { Link } from 'react-router';

const HostAgency = () => {
    const { hostAgencyData, setHostAgencyData } = useContext(ContexCreate)
    const [findObj, setFindObj] = useState(hostAgencyData)
    const [inputValue, setInputValue] = useState("")
    const [notFoundData, setNotFoundData] = useState('');
    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? hostAgencyData.filter(item => item.agencyName.toLocaleLowerCase() == inputLower || item.agencyID.toLocaleLowerCase() === inputLower) : hostAgencyData;
        setFindObj(filterData);
        // console.log(filterData);
        if (!filterData.length > 0 && inputValue !== "") {
            setNotFoundData('Not Found Data')
        } else {
            setNotFoundData('')
        }
    }

    const deleteFun = (e) => {
        const filDelet = hostAgencyData.filter((item, index) => index !== e)
        setHostAgencyData(filDelet);
        setFindObj(filDelet)
    }


    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = findObj.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(findObj.length / itemsPerPage);


    return (
        <div className='py-6 min-h-screen'>
            <div>
                <h1 className='text-2xl font-semibold'> Host Agency</h1>
                <p className='mb-5'>Manage all host records and profiles</p>
                <div className="flex justify-between gap-x-1.5 items-center mb-6">
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by agency ID or name' className='sm:basis-9/12 border w-full border-gray-500/30 px-2 py-1 rounded' />
                    <div className="flex sm:basis-3/12 gap-2">
                        <button onClick={searchData} className="px-3 py-1.5 w-full cursor-pointer rounded justify-center text-sm flex items-center gap-x-2 border border-gray-500/30"><CiFilter className='text-lg' />Filter</button>
                        <Link to={"/HostAgency/AddHostAgency"} className="px-3 flex justify-center items-center py-1 w-full text-white  border-gray-500/30 rounded text-sm bg-linear-to-r from-[#FF44E3]/60 to-[#294599]/40 cursor-pointer">Add Agancy</Link>
                    </div>
                </div>
            </div>

            <div className="bg-white pb-5  overflow-x-auto">
                <table className="w-full py-3 ">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-800">
                            <th className="px-1 py-2">Agency ID</th>
                            <th>Agency Name	</th>
                            <th>Reference ID</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th className="">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className=''>
                        {currentItems.map((user, index) => (
                            <tr key={user.agencyID}
                                className="border-b w-full border-gray-500/30 text-md  hover:bg-gray-100 transition">
                                <td className="px-1 font-semibold">
                                    {user.agencyID.toUpperCase()}
                                </td>
                                <td>
                                    {user.agencyName}
                                </td>
                                <td> {user.referenceId.toUpperCase()}</td>
                                <td> {user.emiil}</td>
                                <td>{user.phone}</td>
                                <td className='py-2'> {user.location}</td>
                                <td>
                                    <span className={`
                                                        ${user.status == "Temp Ban" && "bg-red-400/20  text-red-800"}
                                                        ${user.status == "active" && "bg-green-400/20  text-green-800"}
                                                         inline px-2 py-0.5 rounded-full`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-2">
                                    <div className={` flex justify-center gap-x-5`}>
                                        <Link to={`/HostAgency/Edit/${index}`}><Pencil className={`w-5 h-5 text-gray-600 cursor-pointer `} /></Link>
                                        <Trash onClick={() => deleteFun(index)} className="w-5 h-5 text-red-600  cursor-pointer" />
                                        {/* <CircleCheckBig />
                                                <CirclePlus/> */}
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
    );
};

export default HostAgency;