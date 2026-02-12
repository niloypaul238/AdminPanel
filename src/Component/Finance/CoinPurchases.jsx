import React, { useState } from 'react';
import { financeData } from '../../../public/data';
import { CircleCheckBig, CirclePlus } from 'lucide-react';

const CoinPurchases = () => {
    const withdrawData = financeData.filter(item => item.coinPurchases == true)
    // console.log(withdrawData);
    let [inputValue, setInputValue] = useState("")

    const [findObj, setFindObj] = useState(withdrawData)
    const [notFoundData, setNotFoundData] = useState('');



    // onchange function
    const changeAble = (e) => {
        const valueGet = e.target.value.toLowerCase()
        setInputValue(e.target.value)
        const filterDataOnChange = valueGet !== "" ? withdrawData.filter(item => item.user.toLowerCase().includes(valueGet)) : withdrawData
        setFindObj(filterDataOnChange);
        if (!filterDataOnChange.length > 0 && inputValue != "") {
            setNotFoundData('Not Found Data')
        } else {
            setNotFoundData('')
        }
    }

    return (
        <div>
            <input  onChange={(e) => changeAble(e)} value={inputValue} type="text" placeholder='Search by  ID or name' className='sm:basis-4/5 border mb-3 w-full border-gray-600/40 px-2 py-1 rounded' />

            <div className="bg-white pb-5  overflow-x-auto">
                <table className="w-full py-3 text-sm">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-800">
                            <th className="p-4 ">User/Agency</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th className="">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className=''>
                        {findObj.map((user) => (
                            <tr key={user.user}
                                className="border-b w-full border-gray-500/30  hover:bg-gray-100 transition">
                                <td className="px-4 font-semibold">
                                    {user.user}
                                </td>
                                <td>
                                    <span className={` rounded-full px-4 ${user.type === "Normal" ? "bg-green-300/20 text-green-700" : "bg-amber-200/30 text-yellow-600"}`}>
                                        {user.type}
                                    </span></td>
                                <td className='text-gray-600'> {user.amount}</td>
                                <td className='py-2.5 font-semibold'> {user.method}</td>
                                <td>
                                    <span className={`
                                                ${user.status == "Pending" && "bg-blue-400/20  text-blue-800"}
                                                ${user.status == "Rejected" && "bg-red-400/20  text-red-800"}
                                                ${user.status == "Completed" && "bg-green-400/20  text-green-800"}
                                                 inline px-2 py-0.5 rounded-full`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-2">
                                    <div className={`${user.status !== "Pending" && "hidden"} flex justify-center gap-x-5`}>
                                        <CircleCheckBig className={`w-6 h-6 text-green-600 cursor-pointer `} />
                                        <CirclePlus className="w-6 h-6 text-red-600 rotate-45 cursor-pointer" />
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

export default CoinPurchases;