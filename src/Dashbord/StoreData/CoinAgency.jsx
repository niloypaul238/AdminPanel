import React, { useContext, useState } from 'react';
import { Download, Pencil, Trash } from 'lucide-react';
import { CiFilter } from 'react-icons/ci';
import { ContexCreate } from '../../ContexAPI';
import { Link } from 'react-router';

const CoinAgency = () => {

    const { coinagancyData, setCoinagancyData } = useContext(ContexCreate)
    // console.log(adminagencyData);
    // const [findObj, setFindObj] = useState(userData)
    const [serch, setserch] = useState(coinagancyData)
    const [inputValue, setInputValue] = useState("")
    const [notFoundData, setNotFoundData] = useState('');
    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? serch.filter(item => item.userID.toLocaleLowerCase() == inputLower || item.userName.toLocaleLowerCase() == inputLower) : coinagancyData;
        setserch(filterData);
        // console.log(filterData);
        if (!filterData.length > 0 && inputValue !== "") {
            setNotFoundData('Not Found Data')
        } else {
            setNotFoundData('')
        }
    }


    // pagination 
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = serch.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(serch.length / itemsPerPage);


    // delet funtion create 
    const deleteFun = (e) => {

        const filterDelet = coinagancyData.filter(item => item.userID !== e)
        setCoinagancyData(filterDelet);
        setserch(filterDelet)
    }
    return (
        <div className='py-6 min-h-screen'>
            <div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Coin Agency</h1>
                        <p className='mb-5'>Manage all user records and profiles</p>
                    </div>
                    <button className='flex bg-[#074DFF]/80 gap-x-2 text-white px-2 py-1 rounded cursor-not-allowed'><Download className='w-5' />Export Data</button>
                </div>
                <div className="flex justify-between gap-x-1.5 items-center mb-4">
                    {/* <input type="text" placeholder='Search by agency ID or name' className='sm:basis-3/4 border w-full border-gray-500/30 px-2 py-1 rounded' /> */}
                    <div className="flex justify-between w-full gap-x-1.5 items-center mb-6">
                        <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by agency ID or name' className='sm:basis-9/12 border w-full border-gray-500/30 px-2 py-1 rounded' />
                        <div className="flex sm:basis-4/12 gap-2">
                            <button onClick={searchData} className="px-3 py-1.5 w-full cursor-pointer rounded justify-center text-sm flex items-center gap-x-2 border border-gray-500/30"><CiFilter className='text-lg' />Filter</button>
                            <button  className="px-3 flex justify-center items-center py-1 w-full text-white  border-gray-500/30 rounded text-sm bg-linear-to-r from-[#FF44E3]/60 to-[#294599]/40 cursor-pointer">Add Agancy</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white pb-5  overflow-x-auto">
                <table className="w-full py-3 ">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-800">
                            <th className="px-1 py-2">User Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Level</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th className="">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className=''>
                        {currentItems.map((user) => (
                            <tr key={user.userID}
                                className="border-b w-full border-gray-500/30 text-sm  hover:bg-gray-100 transition">
                                <td className="px-1 font-semibold">
                                    {user.userID}
                                </td>
                                <td>
                                    {user.userName}
                                </td>
                                <td> {user.gender}</td>
                                <td> {user.emiil}</td>
                                <td> {user.level}</td>
                                <td>{user.phone}</td>
                                <td className='py-2'> {user.location}</td>
                                <td>
                                    <span className={`
                                                        ${user.status == "Temp Ban" && "bg-red-400/20  text-red-800"}
                                                        ${user.status == "Active" && "bg-green-400/20  text-green-800"}
                                                         inline px-2 py-0.5 rounded-full`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-2">
                                    <div className={` flex justify-center gap-x-5`}>
                                        <Pencil className={`w-4 h-4 text-gray-600 cursor-pointer `} />
                                        <Trash onClick={() => deleteFun(user.userID)} className="w-4 h-4 text-red-600  cursor-pointer" />
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
                    {
                        currentItems.length > 0 ?
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
                            </div> : ""
                    }

                </div>
            </div>
        </div>
    );
};

export default CoinAgency;