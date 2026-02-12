import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from 'react-router';
import { ContexCreate } from '../../ContexAPI';


const EditDataHost = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams()
    const { dataHostUser, setdataHostUser } = useContext(ContexCreate)
    const [passwor, setPasswor] = useState("")
    const [coinPasswor, setcoinPasswor] = useState("")
    const [checkInput, setCheckInput] = useState("")

    const route = useNavigate()

    const filte = dataHostUser.find((ite, index) => index === Number(id))
    // console.log(filte);
    // const { userId,gender,name,agencyID,nid,emiil,facebook,phone,goggle,ipAdress,location,level,status } = filte;
    const [changAble, setChangeAble] = useState(filte)
    const onChangeFun = (e) => {
        const copy = { ...changAble }
        const targ = e.target.name;
        const val = e.target.value;
        copy[targ] = val
        setChangeAble(copy)
        // console.log(targ,val);
    }

    const submitedSave = () => {

            if (passwor === "1234" && coinPasswor === "56789") {
                const allObj = [...dataHostUser]
                allObj[id] = changAble
                setdataHostUser(allObj);
                setCheckInput("")
                route('/HostManagement')
            }
            else if (passwor == "" && coinPasswor == "") {
                setCheckInput("Please Input Passord & Coin Exchange Password !")
            }
            else {
                setCheckInput("Wrong password")
            }
        

    }
    return (
        <div>
            <div className="">
                <div className="bg-white w-full  rounded-xl shadow p-6">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-x-1">
                        Edit Host Details <span className="text-pink-500"><img src="/Group.png" className='h-4' alt="s" /></span>
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
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Agency ID</label>
                            <input onChange={onChangeFun} name='agencyID' value={changAble.agencyID} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='AGS9102' type="text" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>NID</label>
                            <input name='nid' onChange={onChangeFun} value={changAble.nid} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='1234567890' type="text" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Email</label>
                            <input name='emiil' onChange={onChangeFun} value={changAble.emiil} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='aloicejon@gmail.com' type="email" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Phone</label>
                            <input name='phone' onChange={onChangeFun} value={Number(changAble.phone)} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='+0914567890' type="number" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Facebook</label>
                            <input name='facebook' onChange={onChangeFun} value={changAble.facebook} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='alice.johnson' type="text" />
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
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd-MM-yyyy"
                                className='border border-gray-600/30 rounded text-gray-700 py-1 px-2 w-full'
                            />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Password</label>
                            <input value={passwor} onChange={(e) => setPasswor(e.target.value)} name='name' className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='Enter password' type="password" />
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
    );
};

export default EditDataHost;