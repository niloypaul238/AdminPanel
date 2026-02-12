import React, { useState } from 'react';
import { transactions } from '../../../public/data';
import { IoEyeOutline } from 'react-icons/io5';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Swal from 'sweetalert2';
import { CiFilter } from 'react-icons/ci';

const CoinSender = () => {


    let [inputValue, setInputValue] = useState("")

    const [findObj, setFindObj] = useState(transactions)
    const [notFoundData, setNotFoundData] = useState('');

    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? findObj.filter(item => item.transactionId.toLocaleLowerCase() == inputLower) : transactions;
        setFindObj(filterData);
        // console.log(filterData);
        if (!filterData.length > 0 && inputValue != "") {
            setNotFoundData('Not Found Data')
        } else {
            setNotFoundData('')
        }
    }




    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by agency ID or name' className='sm:basis-4/5 border w-full border-gray-600/40 px-2 py-1 rounded' />
                <div className="flex gap-2">
                    <button onClick={searchData} className="px-2.5 py-0.5 border border-gray-500 rounded text- flex items-center gap-x-2"><CiFilter className='text-lg' />Filter</button>
                    <button className="px-3 py-1  rounded text-sm  bg-linear-to-r text-white from-indigo-500  to-pink-400">Add Agancy</button>
                </div>
            </div>
            <div className="w-full bg-white rounded-xl shadow-sm">
                <div className="bg-white pb-5 shadow overflow-x-auto">
                    <table className="w-full py-3 text-sm">
                        <thead className="border-b border-gray-500/30 bg-gray-50">
                            <tr className="text-left text-gray-600">
                                <th className="p-4">Transaction ID</th>
                                <th>Sender Type</th>
                                <th>Sender User ID</th>
                                <th>Receiver User ID</th>
                                <th>Receiver Type</th>
                                <th>Coin Amount</th>
                                <th>Sent Date / Time</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody >
                            {findObj.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b border-gray-500/30  hover:bg-gray-100 transition"
                                >
                                    <td className="p-2 font-medium">{item.transactionId}</td>
                                    <td>{item.senderType}</td>

                                    <td>
                                        <span
                                            className={`senderUserIdpx-2 py-0.5 rounded-full text-xs font-medium }`}
                                        >
                                            {item.senderUserId}
                                        </span>
                                    </td>

                                    <td>
                                        <span
                                            className={`px-2 py-0.5 rounded-full text-xs font-medium`}
                                        >
                                            {item.receiverUserId}
                                        </span>
                                    </td>

                                    <td>{item.receiverType}</td>
                                    <td>{item.coinAmount}</td>
                                    <td>{item.sentDate}</td>

                                    <td className="flex items-center justify-center gap-3 py-2">
                                        {/* <IoEyeOutline className="w-5 h-5 text-gray-600 cursor-pointer" /> */}
                                        <HiOutlineDotsHorizontal className="w-5 h-5 text-gray-600 cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div><p className='text-center text-gray-600 text-2xl'>{notFoundData}</p></div>

                </div>
            </div>
        </div>
    );
};

export default CoinSender;