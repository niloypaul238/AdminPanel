import React, { useState } from 'react';
import { giftHistory } from '../../../public/data';
import { CiFilter } from 'react-icons/ci';

const Gifting = () => {

    let [inputValue, setInputValue] = useState("")

    const [findObj, setFindObj] = useState(giftHistory)
    const [notFoundData, setNotFoundData] = useState('');

    const searchData = () => {
        const inputLower = inputValue.toLocaleLowerCase()
        const filterData = inputLower !== "" ? findObj.filter(item => item.giftName.toLocaleLowerCase() == inputLower) : giftHistory;
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
                                <th className="p-4">Gift ID</th>
                                <th>Gift Image</th>
                                <th>Gift Name</th>
                                <th>Sender User ID</th>
                                <th>Receive User ID</th>
                                <th>Stream ID</th>
                                <th>Price</th>
                                <th>Sent Date / Time</th>

                            </tr>
                        </thead>

                        <tbody >
                            {findObj.map((item) => (
                                <tr
                                    key={item.giftID}
                                    className="border-b border-gray-500/30  hover:bg-gray-100 transition"
                                >
                                    <td className="p-2">{item.giftID}</td>
                                    <td className=''><img className='h-7 rounded-full' src={item.giftImage} alt="" /></td>

                                    <td>
                                        <span
                                            className={`px-2 py-0.5 rounded-full }`}
                                        >
                                            {item.giftName}
                                        </span>
                                    </td>

                                    <td>
                                        <span
                                            className={`px-2 py-0.5 rounded-full `}
                                        >
                                            {item.senderUserId}
                                        </span>
                                    </td>

                                    <td>{item.receiveUserID}</td>
                                    <td>{item.streamId}</td>
                                    <td>{item.price}</td>
                                    <td>{item.dateAndTime}</td>
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

export default Gifting;