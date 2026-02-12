import React, { useState } from 'react';
import StatCard from '../StatCard';
import { TbUsers } from 'react-icons/tb';
import { MdOutlineWifiTetheringError } from 'react-icons/md';
import { HiDotsHorizontal, HiOutlineFolderOpen } from 'react-icons/hi';
import { GrLineChart } from 'react-icons/gr';
import { CiFilter } from 'react-icons/ci';
import { agencyData } from '../../../public/data';
import Swal from 'sweetalert2';

const CoinAgencies = () => {

    let [inputValue, setInputValue] = useState("")
    
        const [findObj, setFindObj] = useState(agencyData)
        const [notFoundData, setNotFoundData] = useState('');
    
        const searchData = () => {
            const inputLower = inputValue.toLocaleLowerCase()
            const filterData = inputLower !== "" ? findObj.filter(item => item.agancyName.toLocaleLowerCase() == inputLower) : agencyData;
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
    
            const filterData = agencyData.find(item => item.id === e)
            // console.log(filterData);
            Swal.fire({
                html: `
                                <div class="text-center text-black">
                                    <h2 class="text-xl  font-bold mb-2">${filterData.agancyName}</h2>
                                    <div class="space-y-2.5">
                                        <div class="flex justify-between">
                                            <p>Agancy ID :</p>
                                            <p>${filterData.agancyID}</p>
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
                                            <p>coin Sales :</p>
                                            <p>${filterData.coinSales}</p>
                                        </div>
                                        <div class="flex justify-between">
                                            <p>CoinBuy :</p>
                                            <p>${filterData.coinBuy}</p>
                                        </div>
                                        <div class="flex justify-between">
                                            <p>Diamonds :</p>
                                            <p>${filterData.Diamond}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            `,
                showConfirmButton: false,
            });
    
    
    
        }
     
    return (
        <div>
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                <StatCard title="Total Agencies" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<TbUsers />} value="3" extra="+3 this month" />
                {/* <StatCard title="Total Host" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<MdOutlineWifiTetheringError />} value="458" /> */}
                <StatCard title="Total Coin Sales" bg="bg-gradient-to-t from-[#C213E1]  to-[#]" icon={<HiOutlineFolderOpen />} value="5.3M" />
                <StatCard title="Avg Commission" bg="bg-gradient-to-t from-[#E13913]  to-[#30ACFF]" icon={<GrLineChart />} value="10.0%" extra="+18%" />
            </div>

            <div className="flex justify-between items-center mb-4">
                <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search by agency ID or name' className='sm:basis-4/5 border w-full border-gray-600/40 px-2 py-1 rounded' />
                <div className="flex gap-2">
                    <button onClick={searchData} className="px-2.5 py-0.5 border border-gray-500 rounded text- flex items-center gap-x-2"><CiFilter className='text-lg' />Filter</button>
                    <button className="px-3 py-1  rounded text-sm  bg-linear-to-r text-white from-indigo-500  to-pink-400">Add Agancy</button>
                </div>
            </div>


            <div className="bg-white pb-5 shadow overflow-x-auto">
                <table className="w-full py-3 text-sm">
                    <thead className="border-b border-gray-500/30 bg-gray-50">
                        <tr className="text-left text-gray-600">
                            <th className="p-4">Reference</th>
                            <th>Agnacy ID</th>
                            <th>Name</th>
                            <th>Coin Sales</th>
                            <th>Coin Buy</th>
                            <th>Revenue</th>
                            <th>Country</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody >
                        {findObj.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b border-gray-500/30  hover:bg-gray-100 transition"
                            >
                                <td className="p-2 font-medium">{user.reference}</td>
                                <td>{user.agancyID}</td>

                                <td>
                                    <span
                                        className={`px-2 py-0.5 rounded-full  font-medium `}
                                    >
                                        {user.agancyName}
                                    </span>
                                </td>

                                <td>
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-xs font-medium `}
                                    >
                                        {user.coinSales}
                                    </span>
                                </td>

                                <td>{user.coinBuy}</td>
                                <td>{user.revenue}</td>
                                <td>{user.country}</td>

                                <td>
                                    <span className={`px-2 py-0.5 rounded-full text-xs ${user.status == "Active" ? "bg-teal-100 text-teal-700" : "bg-red-100 text-red-600"}`}>
                                        {user.status}
                                    </span>
                                </td>

                                <td onClick={()=>model(user.id)} className="text-black  flex items-center justify-around h-full p-3 w-full "><span className='cursor-pointer'>View</span> <HiDotsHorizontal /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><p className='text-center text-gray-600 text-2xl'>{notFoundData}</p></div>
            </div>
        </div>
    );
};

export default CoinAgencies;