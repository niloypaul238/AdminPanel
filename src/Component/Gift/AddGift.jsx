import React, { useContext, useState } from 'react';
import { ContexCreate } from '../../ContexAPI';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';


const AddGift = () => {

    const { allGiftData, setAllGiftData } = useContext(ContexCreate)
    const [error,setError] = useState('')
    const router = useNavigate()
    const [add, setAdd] = useState(
        {
            name: '',
            catagory: '',
            coin: "",
            uses: '',
            revenue: '',
            status: ''
        }
    )

    const onChangeHandler = (e) => {
        const copy = { ...add }
        const name = e.target.name;
        const val = e.target.value;
        copy[name] = val
        setAdd(copy);
    }


    const submitedSave = () => {
        if (add.name !== "" && add.catagory !== "" && add.coin !== "" && add.uses !== "" && add.revenue !== "" && add.status !== "") {
            const objEct = { ...add }
            const newArr = [objEct, ...allGiftData]
            setAllGiftData(newArr);
            setError('')
            router('/gift')
        } else {
            setError('Please fill up all input !')
        }
    }
    return (
        <div>
            <div className='py-6'>
                <div className='flex justify-end'><Link to={"/gift"} className='bg-linear-to-r from-indigo-500/90 to-pink-400 px-12 py-2 text-white rounded '>Back</Link></div>
                <div>
                    <p className='text-3xl text-center  text-pink-600 border-b border-dotted'><span className=''>Add GIFT</span></p>
                    <p className='text-center text-red-600 mt-2'>{error}</p>
                    <div className='mt-3 md:grid grid-cols-2 gap-2'>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Gift Name</label>
                            <input name='name' onChange={(e) => onChangeHandler(e)} value={add.name} className='border border-gray-600/30 rounded text-gray-500 p-1' placeholder='Rose' type="text" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Category</label>
                            <select name="catagory" onChange={(e) => onChangeHandler(e)} value={add.catagory} className='border border-gray-600/30 rounded text-gray-500 p-1' id="">
                                <option disabled >Select Category</option>
                                <option value="Romantic">Romantic</option>
                                <option value="Luxury">Luxury</option>
                                <option value="Premium">Premium</option>

                            </select>
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Price (Coins) </label>
                            <input name='coin' onChange={(e) => onChangeHandler(e)} value={add.coin} className='border border-gray-600/30 rounded text-gray-500 p-1' placeholder='500' type="number" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Total Uses</label>
                            <input name='uses' onChange={(e) => onChangeHandler(e)} value={add.uses} className='border border-gray-600/30 rounded text-gray-500 p-1' placeholder='Rose' type="number" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Revenue</label>
                            <input name='revenue' onChange={(e) => onChangeHandler(e)} value={add.revenue} className='border border-gray-600/30 rounded text-gray-500 p-1' placeholder='100' type="number" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Status</label>
                            <select name="status" onChange={(e) => onChangeHandler(e)} value={add.status} className='border border-gray-600/30 rounded text-gray-500 p-1' id="">
                                <option disabled>Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Suspended">Suspended</option>
                                <option value="Approved">Approved</option>
                            </select>
                        </div>

                    </div>
                    <div className='pt-5'>
                        <button onClick={submitedSave} className='w-full cursor-pointer p-1 bg-linear-to-r from-indigo-500/90 text-white rounded px-4 to-pink-400/90'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddGift;