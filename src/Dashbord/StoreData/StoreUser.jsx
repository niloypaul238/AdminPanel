import React, { useContext, useState } from 'react';
import { Download, Pencil, Trash } from 'lucide-react';
import { CiFilter } from 'react-icons/ci';
import { ContexCreate } from '../../ContexAPI';
import { Link } from 'react-router';

const StoreUser = () => {

    const { storeUserData, setStoreUserData } = useContext(ContexCreate)
    const [findObj, setFindObj] = useState(storeUserData)
    const [inputValue, setInputValue] = useState("")
    const [notFoundData, setNotFoundData] = useState('');
    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? storeUserData.filter(item => item.userName.toLocaleLowerCase() == inputLower || item.userID.toLocaleLowerCase() === inputLower) : storeUserData;
        setFindObj(filterData);
        // console.log(filterData);
        if (!filterData.length > 0 && inputValue !== "") {
            setNotFoundData('Not Found Data')
        } else {
            setNotFoundData('')
        }
    }

    const deleteFun = (e) => {
        const filDelet = storeUserData.filter((item, index) => index !== e)
        setStoreUserData(filDelet);
        setFindObj(filDelet)
    }

    return (
        <div className='py-6 min-h-screen'>
            <div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-semibold'>User Management</h1>
                        <p className='mb-5'>Manage all user records and profiles</p>
                    </div>
                    <button className='flex bg-[#074DFF]/80 gap-x-2 text-white px-2 py-1 rounded'><Download className='w-5' />Export Data</button>
                </div>
                <div className="flex justify-between gap-x-1.5 items-center mb-6">
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by agency ID or name' className='sm:basis-9/12 border w-full border-gray-500/30 px-2 py-1 rounded' />
                    <div className="flex sm:basis-3/12 gap-2">
                        <button onClick={searchData} className="px-3 py-1.5 w-full cursor-pointer rounded justify-center text-sm flex items-center gap-x-2 border border-gray-500/30"><CiFilter className='text-lg' />Filter</button>
                        <Link to={""} className="px-3 flex justify-center items-center py-1 w-full text-white  border-gray-500/30 rounded text-sm bg-linear-to-r from-[#FF44E3]/60 to-[#294599]/40 cursor-pointer">Add Agancy</Link>
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
                        {findObj.map((user, index) => (
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
                                        <Link to={`/storeUser/Edit/${index}`}><Pencil className={`w-5 h-5 text-gray-600 cursor-pointer `} /></Link>
                                        <Trash onClick={() => deleteFun(index)} className="w-5 h-5 text-red-600  cursor-pointer" />
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

export default StoreUser;