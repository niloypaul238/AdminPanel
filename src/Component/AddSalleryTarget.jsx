import React, { useContext, useState } from 'react';
import { ContexCreate } from '../ContexAPI';
import { Slide, toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const AddSalleryTarget = () => {

    const navigate  = useNavigate()
    const { sallery, setSallery } = useContext(ContexCreate)
    const [warning, setWarning] = useState("")
    const [changeHangler, setChangeHangler] = useState({
        targer: "",
        daimonShare: "",
        basicSalary: "",
        totalSalary: "",
        agancyShare: "",
    })

    const changleAble = (e) => {
        const copy = { ...changeHangler }
        const targer = e.target.name;
        const val = e.target.value;
        copy[targer] = val;
        setChangeHangler(copy);
    }
    const SubmitedTarget = () => {
        const chekInputCopy = { ...changeHangler }
        if (chekInputCopy["targer"] == "" && chekInputCopy["daimonShare"] == "" && chekInputCopy["basicSalary"] == "" && chekInputCopy["totalSalary"] == "" && chekInputCopy["agancyShare"] == "") {
            setWarning('Fill up all input')
        } else {
            toast.success('Add Sallery Target', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
            setWarning('')
            setChangeHangler({
                targer: "",
                daimonShare: "",
                basicSalary: "",
                totalSalary: "",
                agancyShare: "",
            })

            setSallery([chekInputCopy,...sallery])
            navigate('/salleryTarget')

        }

    }

    return (
        <div>
            <div>
                <h1 className='text-2xl py-6 '>Add Sallery Target</h1>
                <div>
                    <p className='text-red-600 text-center'>{warning}</p>
                </div>
                <div className='float-left mt-2 w-full'>
                    <input type="number" name='targer' onChange={(e) => changleAble(e)} value={changeHangler.targer} placeholder='Target' className='border border-gray-500/30 rounded w-full p-2' />
                </div>
                <div className='float-left mt-2 w-full'>
                    <input type="number" name='daimonShare' onChange={(e) => changleAble(e)} value={changeHangler.daimonShare} placeholder='Diamond Share' className='border border-gray-500/30 rounded w-full p-2' />
                </div>
                <div className='float-left mt-2 w-full'>
                    <input type="number" name='basicSalary' onChange={(e) => changleAble(e)} value={changeHangler.basicSalary} placeholder='Basic Salary' className='border border-gray-500/30 rounded w-full p-2' />
                </div>
                <div className='float-left mt-2 w-full'>
                    <input type="number" name='totalSalary' onChange={(e) => changleAble(e)} value={changeHangler.totalSalary} placeholder='Total Salary' className='border border-gray-500/30 rounded w-full p-2' />
                </div>
                <div className='float-left mt-2 w-full'>
                    <input type="number" name='agancyShare' onChange={(e) => changleAble(e)} value={changeHangler.agancyShare} placeholder='Agency Share' className='border border-gray-500/30 rounded w-full p-2' />
                </div>
                <div className='pt-5'>
                    <button onClick={SubmitedTarget} className='w-full mt-4 cursor-pointer p-1 bg-linear-to-r from-indigo-500/90 text-white rounded px-4 to-pink-400/90'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddSalleryTarget;