import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { PKstreamRequests } from '../../../public/data';
import { ContexCreate } from '../../ContexAPI';



const PkMasterEdit = () => {
    const {PKstreamRequestsdata, setPKstreamRequestsdata} = useContext(ContexCreate)
    const id = useParams()
    const router = useNavigate()
    const filterInput = PKstreamRequestsdata.find(user => user.userId == id.userId)
    // console.log(filterInput);
    const [inpuChag, setInpuChange] = useState({
                                            id: filterInput.id,
                                            userId: filterInput.userId,
                                            profile: filterInput.profile,
                                            level: filterInput.level,
                                            levelColor: filterInput.levelColor,
                                            agentId: filterInput.agentId,
                                            date: filterInput.date,
                                            time: filterInput.time,
                                            status: filterInput.status,
                                            userName: filterInput.userName,
                                            agentName: filterInput.agentName,
                                            location: filterInput.location
                                        })
    // console.log(filterInput);

    const crudFun = (e) => {
        const getObj = { ...inpuChag }

        const names = e.target.name;
        const values = e.target.value
        getObj[names] = values;

        setInpuChange(getObj)
       
    }

    const subHandeler = (e) => {
        e.preventDefault()
        // console.log(inpuChag);
        const indexGet =filterInput.id - 1;
        const totalArr = [...PKstreamRequestsdata]
        totalArr[indexGet] = inpuChag;
        setPKstreamRequestsdata(totalArr);
        // console.log(totalArr);
        router('/PkMaster')

       
    }

    return (
        <div className='py-6 flex justify-center items-center w-full h-[80vh]  rounded '>
            <div className='w-110  shadow p-4'>
                <p className='text-2xl'>Agent ID : <span>{filterInput.agentId}</span></p>
                <form action="" onSubmit={(e) => subHandeler(e)}>
                    <div className='mt-3  sm:grid  gap-4'>
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="" className='text-lg text-gray-500'>User Name : </label>
                            <input name='userName' onChange={(e) => crudFun(e)} value={inpuChag.userName} className='border p-1 text-gray-500 text-sm border-gray-400/60 rounded' type="text" />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="" className='text-lg text-gray-500'>Agent Name : </label>
                            <input name='agentName' onChange={(e) => crudFun(e)} value={inpuChag.agentName} className='border p-1 text-gray-500 text-sm border-gray-400/60 rounded' type="text" />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="" className='text-lg text-gray-500'>Location : </label>
                            <input name='location' onChange={(e) => crudFun(e)} value={inpuChag.location} className='border p-1 text-gray-500 text-sm border-gray-400/60 rounded' type="text" />
                        </div>
                        <button className='text-center bg-linear-to-r text-white from-indigo-500  to-pink-400 p-1 cursor-pointer'>Save</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default PkMasterEdit;