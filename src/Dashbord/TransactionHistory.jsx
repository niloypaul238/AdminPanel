import React, { useState } from 'react';
import CoinSender from '../Component/Transition/CoinSender';
import StatCard from '../Component/StatCard';
import { TbUsers } from 'react-icons/tb';
import { HiOutlineFolderOpen } from 'react-icons/hi';
import { GrLineChart } from 'react-icons/gr';
import { CiFilter } from 'react-icons/ci';
import Gifting from '../Component/Transition/Gifting';

const TransactionHistory = () => {
    const [toggle, setToggle] = useState(true)
    

    return (
        <div className='py-6 min-h-screen'>

            <div>
                <h1 className='text-2xl font-semibold'>Transaction History</h1>
                <p className='mb-5'>Manage host and coin agencies</p>
                <div className='bg-gray-400/20 inline my-4 py-4 px-2 rounded '>
                    <button onClick={() => { setToggle(true) }} className={`${toggle == true && "bg-white"} p-2 cursor-pointer transition-colors  duration-150 w-40`}>Coin Sender</button>
                    <button onClick={() => { setToggle(false) }} className={`${toggle == false && "bg-white"} p-2 cursor-pointer transition-colors duration-150 w-40`}>Gifting</button>
                </div>
            </div>

            <div className='mt-4'>
                {/* Top Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    <StatCard title="Total Agencies" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<TbUsers />} value="3" extra="+3 this month" />
                    {/* <StatCard title="Total Host" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<MdOutlineWifiTetheringError />} value="458" /> */}
                    <StatCard title="Total Coin Sales" bg="bg-gradient-to-t from-[#C213E1]  to-[#]" icon={<HiOutlineFolderOpen />} value="5.3M" />
                    <StatCard title="Avg Commission" bg="bg-gradient-to-t from-[#E13913]  to-[#30ACFF]" icon={<GrLineChart />} value="10.0%" extra="+18%" />
                </div>

                
            </div>
            {
                toggle ? <CoinSender /> : <Gifting/>
            }
        </div>
    );
};

export default TransactionHistory;