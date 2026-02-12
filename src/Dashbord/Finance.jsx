import React, { useState } from 'react';
import StatCard from '../Component/StatCard';
import { ArrowUpFromDot, FolderOpen, UsersRound } from 'lucide-react';
import Withdreaw from '../Component/Finance/Withdreaw';
import CoinPurchases from '../Component/Finance/CoinPurchases';
import PaymentGetWay from '../Component/Finance/PaymentGetWay';

const Finance = () => {
    const [toggle, setToggle] = useState("Withdrawal Requests")

    return (
        <div className='py-6 min-h-screen'>
            <div>
                <h1 className='text-2xl font-semibold'>Finance & Wallet</h1>
                <p className='mb-5'>Manage transactions and payouts</p>
            </div>
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total User" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<UsersRound />} value="12,458" extra="+3 this month" />
                <StatCard title="Active Host" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<UsersRound />} value="2.5M" extra={"+125k today"} />
                <StatCard title="Coin Purchases" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<FolderOpen />} value="$25,400" extra={"This month"} />
                <StatCard title="$ Net Profit" bg="bg-gradient-to-t from-[#C213E1] " icon={<ArrowUpFromDot />} value="$25,200" extra="After expenses" />
            </div>

            <div>
                chart area
            </div>

            <div className='my-4'>
                <div className='bg-gray-400/20 inline my-4 py-4 px-2 rounded '>
                    <button onClick={() => { setToggle("Withdrawal Requests") }} className={`${toggle == "Withdrawal Requests" && "bg-white"} p-2 cursor-pointer transition-colors  duration-150 `}>Withdrawal Requests</button>
                    <button onClick={() => { setToggle("Coin Purchases") }} className={`${toggle == "Coin Purchases" && "bg-white"} p-2 cursor-pointer transition-colors duration-150 `}>Coin Purchases</button>
                    <button onClick={() => { setToggle("Payment Getway") }} className={`${toggle == "Payment Getway" && "bg-white"} p-2 cursor-pointer transition-colors duration-150 `}>Payment Getway</button>
                </div>
            </div>
            <div className='shadow p-2 rounded'>
                <div className='mt-3'>
                    {toggle === "Withdrawal Requests" && <Withdreaw />}
                    {toggle === "Coin Purchases" && <CoinPurchases />}
                    {toggle === "Payment Getway" && <PaymentGetWay />}

                    {/* > */}


                </div>
            </div>
        </div>
    );
};

export default Finance;