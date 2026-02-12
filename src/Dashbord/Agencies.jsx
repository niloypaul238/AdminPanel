import React, { useState } from 'react';

import AgenciesHotAgencies from '../Component/Agancies/AgenciesHotAgencies';
import CoinAgencies from '../Component/Agancies/CoinAgencies';
import AdminAgencies from '../Component/Agancies/AdminAgencies';

const Agencies = () => {
    const [toggle, setToggle] = useState("Host Agencies")
    const [toggleAgency, setToggleAgency ] = useState("Host Agencies")


    return (
        <div className='py-6 min-h-screen'>

            <div>
                <h1 className='text-2xl font-semibold'>Agency Management</h1>
                <p className='mb-5'>Manage host and coin agencies</p>
            </div>
            <div className='bg-gray-400/40 my-4 p-1 sm:grid grid-cols-7'>
                <button onClick={()=>{setToggle("Host Agencies"); setToggleAgency("Host Agencies")}} className={`${toggle == "Host Agencies" && "bg-white"} p-1 cursor-pointer transition-colors duration-150`}>Host Agencies</button>
                <button  onClick={()=>{setToggle("Coin Agencies"); setToggleAgency("Coin Agencies")}} className={`${toggle == "Coin Agencies" && "bg-white"} p-1 cursor-pointer transition-colors duration-150`}>Coin Agencies</button>
                <button  onClick={()=>{setToggle("Master Agencies"); setToggleAgency("Master Agencies")}} className={`${toggle == "Master Agencies" && "bg-white"} p-1 cursor-pointer transition-colors duration-150`}>Master Agencies</button>
                <button  onClick={()=>{setToggle("Admin Agencies"); setToggleAgency("Admin Agencies")}} className={`${toggle == "Admin Agencies" && "bg-white"} p-1 cursor-pointer transition-colors duration-150`}>Admin Agencies</button>
            </div>
            
            <div>
                {toggleAgency == "Host Agencies" && <AgenciesHotAgencies/>}
                {toggleAgency == "Coin Agencies" && <CoinAgencies/>}
                {toggleAgency == "Master Agencies" && <CoinAgencies/>}
                {toggleAgency == "Admin Agencies" && <AdminAgencies/>}
            </div>
            
            
            

        </div>
    );
};

export default Agencies;