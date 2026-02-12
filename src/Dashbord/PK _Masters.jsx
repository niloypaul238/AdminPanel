import React, { useState } from 'react';
import PkClubPandintList from '../Component/PkMaster/PkClubPandintList';
import ManualSetup from '../Component/PkMaster/ManualSetup';
import AcceptedBattles from '../Component/PkMaster/AcceptedBattles';
import CompletedBettle from '../Component/PkMaster/CompletedBettle';

const PKMasters = () => {
    const [toggle, setToggle] = useState("PK Club Pandint List")
    
    return (
        <div className='py-6 min-h-screen'>
            <div>
                <h1 className='text-2xl font-semibold'>Reports & Analytics</h1>
                <p className='mb-5'>Comprehensive platform insights</p>
                <div className='bg-gray-400/20 inline my-4 py-4 px-2 rounded '>
                    <button onClick={() => { setToggle("PK Club Pandint List") }} className={`${toggle == "PK Club Pandint List" && "bg-white"} p-2 cursor-pointer transition-colors  duration-150 `}>PK Club Pandint List</button>
                    <button onClick={() => { setToggle("Manual Setup") }} className={`${toggle == "Manual Setup" && "bg-white"} p-2 cursor-pointer transition-colors duration-150 `}>Manual Setup</button>
                    <button onClick={() => { setToggle("PK Club Accept List") }} className={`${toggle == "PK Club Accept List" && "bg-white"} p-2 cursor-pointer transition-colors duration-150 `}>PK Club Accept List</button>
                    <button onClick={() => { setToggle("PK Club Complete List") }} className={`${toggle == "PK Club Complete List" && "bg-white"} p-2 cursor-pointer transition-colors duration-150 `}>PK Club Complete List</button>
                </div>
            </div>




            <div className='mt-6'>
                {toggle == "PK Club Pandint List" && <PkClubPandintList/>}
                {toggle == "Manual Setup" && <ManualSetup/>}
                {toggle =="PK Club Accept List" && <AcceptedBattles/>}
                {toggle == "PK Club Complete List" && <CompletedBettle/>}
                
                
                
            </div>
        </div>
    );
};

export default PKMasters;