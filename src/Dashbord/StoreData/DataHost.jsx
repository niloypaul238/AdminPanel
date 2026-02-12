import { Pencil, Trash } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { ContexCreate } from '../../ContexAPI';
import { Link } from 'react-router';

const DataHost = () => {


    const { dataHostUser, setdataHostUser } = useContext(ContexCreate)
    const [findObj, setFindObj] = useState(dataHostUser)

    let [inputValue, setInputValue] = useState("")
    const [notFoundData, setNotFoundData] = useState('');

    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? dataHostUser.filter(item => item.name.toLocaleLowerCase() == inputLower || item.agencyID.toLocaleLowerCase() === inputLower) : dataHostUser;
        setFindObj(filterData);
        // console.log(filterData);
        if (!filterData.length > 0 && inputValue == "") {
            setNotFoundData('Not Found Data')
        } else {
            setNotFoundData('')
        }
    }

    const deleteFun = (e) => {
        const filDelet = dataHostUser.filter((item,index) => index !== e)
        setdataHostUser(filDelet);
        setFindObj(filDelet)
    }

    return (
        <div className='py-6 min-h-screen'>
            <div>
                <h1 className='text-2xl font-semibold'>Host Management</h1>
                <p className='mb-5'>Manage all host records and profiles</p>
                <div className="flex justify-between gap-x-1.5 items-center mb-6">
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by agency ID or name' className='sm:basis-9/12 border w-full border-gray-500/30 px-2 py-1 rounded' />
                    <div className="flex sm:basis-3/12 gap-2">
                        <button onClick={searchData} className="px-3 py-1.5 w-full cursor-pointer rounded justify-center text-sm flex items-center gap-x-2 border border-gray-500/30"><CiFilter className='text-lg' />Filter</button>
                        <Link to={"/HostManagement/DataHostAddAgency"} className="px-3 flex justify-center items-center py-1 w-full text-white  border-gray-500/30 rounded text-sm bg-linear-to-r from-[#FF44E3]/60 to-[#294599]/40 cursor-pointer">Add Agancy</Link>
                    </div>
                </div>
            </div>

            <div className="bg-white pb-5  overflow-x-auto">
                <table className="w-full py-3 ">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-800">
                            <th className="py-2 px-4 ">User ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Agency</th>
                            <th>Email</th>
                            <th>Level</th>
                            <th className='px-2'>Host</th>
                            <th>Location</th>
                            <th className="">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className=''>
                        {findObj.map((user,index) => (
                            <tr key={user.userId}
                                className="border-b w-full border-gray-500/30  hover:bg-gray-100 transition">
                                <td className="px-4 font-semibold">
                                    {user.userId.toUpperCase()}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td> {user.gender}</td>
                                <td> {user.agencyID.toUpperCase()}</td>
                                <td> {user.emiil}</td>
                                <td> {user.level}</td>
                                <td className='px-2'> <img src="/Group.png" className='h-5' alt="s" /></td>
                                {/* <td><img src="https://ibb.co.com/TBKpbmv2" className='w-5' alt="" /></td> */}
                                <td className='py-2.5'> {user.location}</td>
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
                                        <Link to={`/HostManagement/${index}`}><Pencil className={`w-5 h-5 text-gray-600 cursor-pointer `} /></Link>
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
            </div>
        </div>
    );
};

export default DataHost;