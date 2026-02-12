import React, { useContext, useState } from 'react';
import { ContexCreate } from '../../ContexAPI';
import { Link, useNavigate } from 'react-router';
import DatePicker from 'react-datepicker';
import { Eye, EyeOff } from 'lucide-react';

const DataHostAddAgency = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { dataHostUser, setdataHostUser } = useContext(ContexCreate)
    const [passwor, setPasswor] = useState("")
    const [coinPasswor, setcoinPasswor] = useState("")
    const [eyeToggle, setEyeToggle] = useState(false)
    const [type, setType] = useState('password')
    const [checkInput, setCheckInput] = useState("")

    const [changAble, setChangeAble] = useState({
        userId: "",
        gender: "",
        name: "",
        agencyID: "",
        nid: "",
        emiil: "",
        facebook: "",
        phone: "",
        goggle: "",
        ipAdress: "",
        location: "",
        level: "Level 1",
        status: "active",
        date: startDate.getDate,
    })
    const route = useNavigate()
    const onChangeFun = (e) => {
        const copy = { ...changAble }
        const targ = e.target.name;
        const val = e.target.value;
        copy[targ] = val;
        setChangeAble(copy)
    }

    const eyeToggleFun = () => {
        setType(type == "password" ? "text" : "password")
        setEyeToggle(!eyeToggle)
    }

    const submitedSave = () => {

        if (changAble.userId == "" || changAble.name == "" || changAble.agencyID == "" || changAble.nid == "" || changAble.emiil == "" || changAble.facebook == "" || changAble.phone == "" || changAble.goggle == "" || changAble.ipAdress == "" || changAble.location == "") {
            setCheckInput("Please Fill Up Input Field !")
        } else { 
            if (passwor === "1234" && coinPasswor === "56789") {
                const allObj = [changAble, ...dataHostUser]
                setdataHostUser(allObj);
                route('/HostManagement')
            } else {
                setCheckInput("Wrong password")
            }
        }

    }
    return (
        <div>
            <div>
                <div className="">
                    <div className="bg-white w-full  rounded-xl shadow p-6">
                        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-x-1">
                            Add Host  <span className="text-pink-500"><img src="/Group.png" className='h-4' alt="s" /></span>
                        </h2>
                        <p className='text-red-700 text-center'>{checkInput}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>User ID</label>
                                <input onChange={onChangeFun} name='userId' value={changAble.userId} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='H0091' type="text" />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Name</label>
                                <input onChange={onChangeFun} name='name' value={changAble.name} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='Alice Jhon' type="text" />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Gender</label>
                                <select onChange={onChangeFun} name="gender" value={changAble.gender} className='border border-gray-600/30 rounded text-gray-700 p-1' id="">
                                    <option disabled >Select Gender</option>
                                    <option defaultValue={"Male"} value="Male">Male</option>
                                    <option value="Female">Female</option>

                                </select>
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Agency ID</label>
                                <input onChange={onChangeFun} name='agencyID' value={changAble.agencyID} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='AGS9102' type="text" />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>NID</label>
                                <input name='nid' onChange={onChangeFun} value={changAble.nid} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='1234567890' type="number" />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Email</label>
                                <input name='emiil' onChange={onChangeFun} value={changAble.emiil} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='aloicejon@gmail.com' type="email" />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Phone</label>
                                <input name='phone' onChange={onChangeFun} value={(changAble.phone)} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='+0914567890' type="number" />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Facebook</label>
                                <input name='facebook' onChange={onChangeFun} value={changAble.facebook} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='alice.johnson' type="text" />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Google</label>
                                <input name='goggle' onChange={onChangeFun} value={changAble.goggle} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='aloicejon@gmail.com' type="text" />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>IP Address</label>
                                <input name='ipAdress' onChange={onChangeFun} value={changAble.ipAdress} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='192.168.1.1' type="text" />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Location</label>
                                <input name='location' onChange={onChangeFun} value={changAble.location} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='+New York, USA' type="text" />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Date</label>
                                {/* <input name='name' className='border border-gray-600/30 rounded text-gray-500 py-1 px-2' type="date" /> */}
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => { setStartDate(date) }}
                                    dateFormat="dd-MM-yyyy"
                                    className='border border-gray-600/30 rounded text-gray-700 py-1 px-2 w-full'
                                />
                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Password</label>
                                <div className='border border-gray-600/30 flex rounded text-gray-700  items-center'>
                                    <input value={passwor} className='outline-0 w-full py-1 px-2' onChange={(e) => setPasswor(e.target.value)} name='pass' placeholder='Enter password' type={type} />
                                    {
                                        eyeToggle ? <Eye onClick={(e) => eyeToggleFun(e)} className='mx-1 cursor-pointer text-gray-500' /> : <EyeOff onClick={eyeToggleFun} className='mx-1 cursor-pointer text-gray-500' />
                                    }

                                </div>

                            </div>
                            <div className='flex gap-y-1 flex-col'>
                                <label htmlFor="" className='text-lg'>Coin Exchange Password</label>
                                <input value={coinPasswor} onChange={(e) => setcoinPasswor(e.target.value)} name='name' className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='Enter password' type="password" />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end mt-4 gap-3">
                            <Link to={'/HostManagement'} className="px-5 text-center cursor-pointer py-1.5 w-35 border rounded-md">Cancel</Link>
                            <button onClick={submitedSave} className="px-5 cursor-pointer py-1.5 w-35 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-md">
                                Save
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DataHostAddAgency;