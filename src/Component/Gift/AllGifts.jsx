import { ChevronDown, Plus } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { ContexCreate } from '../../ContexAPI';
import { Link } from 'react-router';

const AllGifts = () => {
    const { allGiftData, setAllGiftData } = useContext(ContexCreate)
    const [findObj, setFindObj] = useState(allGiftData)

    let [inputValue, setInputValue] = useState("")
    const [notFoundData, setNotFoundData] = useState('');

    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? allGiftData.filter(item => item.name.toLocaleLowerCase() == inputLower) : allGiftData ;
        setFindObj(filterData);
        // console.log(filterData);
        if (!filterData.length > 0 && inputValue != "") {
            setNotFoundData('Not Found Data')
        } else {
            setNotFoundData('')
        }
    }

    const deleteFun = (e) => {
        const filDelet = allGiftData.filter((item,index) => index !== e)
        setAllGiftData(filDelet);
        setFindObj(filDelet)
    }

    return (
        <div>
            <div>
                <div className="flex justify-between items-center gap-x-2 my-4">
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by gift' className='sm:basis-9/12 border w-full border-gray-600/40 px-2 py-1 rounded' />
                    <div className="flex gap-1 sm:basis-4/12">
                        <button onClick={searchData} className="px-3 w-full py-1 border rounded text-sm items-center gap-x-2 bg-linear-to-r flex justify-center cursor-pointer text-white from-indigo-500  to-pink-400"><ChevronDown />Assets</button>
                        <Link to={'/gift/AddGift'} className="px-3 w-full py-1 border rounded text-sm items-center gap-x-2 bg-linear-to-r flex justify-center cursor-pointer text-white from-indigo-500  to-pink-400"><Plus className='text-sm' /><span className='block'>Add Gift</span></Link>
                    </div>
                </div>

            </div>
            <div className="bg-white pb-5  overflow-x-auto">
                <table className="w-full py-3 text-sm">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-800">
                            <th className="p-4 ">Name</th>
                            <th>Category</th>
                            <th>Price (Coins)</th>
                            <th>Total Uses</th>
                            <th>Revenue</th>
                            <th className="">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className=''>
                        {findObj.map((user,index) => (
                            <tr id={index} key={user.coin}
                                className="border-b w-full border-gray-500/30  hover:bg-gray-100 transition">
                                <td className="px-4 font-semibold">
                                    {user.name}
                                </td>
                                <td>
                                    <span className={` rounded-full text-white px-4 bg-[#D38DBF]`}>
                                        {user.catagory}
                                    </span></td>
                                <td className=''> {user.coin}</td>
                                <td className='py-2.5 font-semibold'> {user.uses}K</td>
                                <td className='py-2.5 font-semibold'> {user.revenue}M</td>
                                <td>
                                    <span className={`
                                                ${user.status == "Suspended" && "bg-red-400/20  text-red-800"}
                                                ${user.status == "Active" && "bg-green-400/20  text-green-800"}
                                                 inline px-2 py-0.5 rounded-full`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-2">
                                    <div className={` flex justify-center gap-x-5`}>
                                        <Link to={`/gift/Edit/${index}`} className='cursor-pointer font-semibold'>Edit</Link>
                                        <span onClick={()=>deleteFun(index)} className='bg-red-200/50 px-3 text-red-500 rounded cursor-pointer font-semibold'>Delete</span>
                                        {/* <CircleCheckBig className={`w-6 h-6 text-green-600 cursor-pointer `} /> */}
                                        {/* <CirclePlus className="w-6 h-6 text-red-600 rotate-45 cursor-pointer" /> */}
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

export default AllGifts;