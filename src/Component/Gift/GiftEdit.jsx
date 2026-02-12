import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ContexCreate } from '../../ContexAPI';
import { Bounce, toast } from 'react-toastify';

const GiftEdit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { allGiftData, setAllGiftData } = useContext(ContexCreate)
    const idByFilter = allGiftData.filter((item, index) => index == Number(id))
    const [edit, setEdit] = useState(idByFilter[0])
    console.log(edit);

    const onChangeHandler = (e) => {
        const copy = { ...edit }
        const name = e.target.name;
        const val = e.target.value;
        copy[name] = val
        setEdit(copy)
    }

    const submitedSave = () => {
        const arr = [...allGiftData]
        const objEct = { ...edit }
        arr[Number(id)] = objEct;
        setAllGiftData(arr);
        navigate('/gift')
        toast.success('Edit successfully !', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <div className='py-6'>
            <div>
                <p className='text-2xl flex justify-between'><span className='text-pink-600'>EDIT GIFT</span> <span>Gift ID : {edit.id}</span></p>
                <div className='mt-3 md:grid grid-cols-2 gap-2'>
                    <div className='flex gap-y-1 flex-col'>
                        <label htmlFor="" className='text-lg'>Gift Name</label>
                        <input name='name' onChange={(e) => onChangeHandler(e)} value={edit.name} className='border border-gray-600/30 rounded text-gray-500 p-1' placeholder='Rose' type="text" />
                    </div>
                    <div className='flex gap-y-1 flex-col'>
                        <label htmlFor="" className='text-lg'>Category</label>
                        {edit.catagory == "Normal" &&
                            <select onChange={(e) => onChangeHandler(e)} value={edit.name} className='border border-gray-600/30 rounded text-gray-500 p-1' name="catagory" id="">
                                <option value={edit.catagory}>{edit.catagory}</option>
                                <option value="Premium">Premium</option>
                                <option value="Exclusive">Exclusive</option>
                                <option value="Luxury">Luxury</option>

                            </select>
                        }
                        {edit.catagory == "Premium" &&
                            <select onChange={(e) => onChangeHandler(e)} value={edit.name} className='border border-gray-600/30 rounded text-gray-500 p-1' name="catagory" id="">
                                <option value={edit.catagory}>{edit.catagory}</option>
                                <option value="Normal">Normal</option>
                                <option value="Exclusive">Exclusive</option>
                                <option value="Luxury">Luxury</option>

                            </select>
                        }
                        {edit.catagory == "Exclusive" &&
                            <select onChange={(e) => onChangeHandler(e)} value={edit.name} className='border border-gray-600/30 rounded text-gray-500 p-1' name="catagory" id="">
                                <option value={edit.catagory}>{edit.catagory}</option>
                                <option value="Normal">Normal</option>
                                <option value="Premium">Premium</option>
                                <option value="Luxury">Luxury</option>

                            </select>
                        }
                        {edit.catagory == "Luxury" &&
                            <select onChange={(e) => onChangeHandler(e)} value={edit.name} className='border border-gray-600/30 rounded text-gray-500 p-1' name="catagory" id="">
                                <option value={edit.catagory}>{edit.catagory}</option>
                                <option value="Normal">Normal</option>
                                <option value="Premium">Premium</option>
                                <option value="Exclusive">Exclusive</option>

                            </select>
                        }
                    </div>
                    <div className='flex gap-y-1 flex-col'>
                        <label htmlFor="" className='text-lg'>Price (Coins) </label>
                        <input name='coin' onChange={(e) => onChangeHandler(e)} value={edit.coin} className='border border-gray-600/30 rounded text-gray-500 p-1' placeholder='500' type="number" />
                    </div>
                    <div className='flex gap-y-1 flex-col'>
                        <label htmlFor="" className='text-lg'>Total Uses</label>
                        <input name='uses' onChange={(e) => onChangeHandler(e)} value={edit.uses} className='border border-gray-600/30 rounded text-gray-500 p-1' placeholder='Rose' type="number" />
                    </div>
                    <div className='flex gap-y-1 flex-col'>
                        <label htmlFor="" className='text-lg'>Revenue</label>
                        <input name='revenue' onChange={(e) => onChangeHandler(e)} value={edit.revenue} className='border border-gray-600/30 rounded text-gray-500 p-1' placeholder='100' type="number" />
                    </div>

                </div>
                <div className='pt-5'>
                    <button onClick={submitedSave} className='w-full cursor-pointer p-1 bg-linear-to-r from-indigo-500/90 text-white rounded px-4 to-pink-400/90'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default GiftEdit;