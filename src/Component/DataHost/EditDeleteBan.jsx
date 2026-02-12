import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from 'react-router';
import { ContexCreate } from '../../ContexAPI';


const EditDeleteBan = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams()
    //  console.log(id);
    const { deletBan, setDeletBan } = useContext(ContexCreate)
    const [passwor, setPasswor] = useState("")
    const [checkInput, setCheckInput] = useState("")

    const route = useNavigate()
    const filte = deletBan.find((ite, index) => index === Number(id))
    //    console.log(filte);
    // const { userId,gender,name,agencyID,nid,emiil,facebook,phone,goggle,ipAdress,location,level,status } = filte;
    const [changAble, setChangeAble] = useState(filte)
           console.log(changAble);
    const onChangeFun = (e) => {
        const copy = { ...changAble }
        const targ = e.target.name;
        const val = e.target.value;
        copy[targ] = val
        setChangeAble(copy)
        // console.log(targ,val);
    }

    const submitedSave = () => {

        if (changAble.id == "" ||
        changAble.name == "" ||
        changAble.category == "" ||
        changAble.email == "" ||
        changAble.banReason == "" ||
        changAble.banStatus == "") {
            setCheckInput("Filup Input Field !")
        } else {
            if (passwor === "1234") {
                const allObj = [...deletBan]
                allObj[id] = changAble
                setDeletBan(allObj);
                setCheckInput("")
                route('/delete&Ban')
            }
            else if (passwor == "") {
                setCheckInput("Please Fill up Input Password !")
            }
            else {
                setCheckInput("Wrong password")
            }
        }

    }
    return (
        <div>
            <div className="">
                <div className="bg-white w-full  rounded-xl shadow p-6">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-x-1">
                        Edit Delete / Ban Management Details<span className="text-pink-500"><img src="/Group.png" className='h-4' alt="s" /></span>
                    </h2>
                    <p className='text-red-700 text-center'>{checkInput}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'> ID</label>
                            <input onChange={onChangeFun} name='id' value={changAble.id} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='AGS9102' type="text" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>User Name</label>
                            <input onChange={onChangeFun} name='name' value={changAble.name} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='Alice Jhon' type="text" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Email</label>
                            <input name='email' onChange={onChangeFun} value={(changAble.email)} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='aloicejon@gmail.com' type="text" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>BanReason</label>
                            <input name='banReason' onChange={onChangeFun} value={(changAble.banReason)} className='border border-gray-600/30 rounded text-gray-700 py-1 px-2' placeholder='Underage account ownership' type="text" />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Date</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd-MM-yyyy"
                                className='border border-gray-600/30 rounded text-gray-700 py-1 px-2 w-full'
                            />
                        </div>
                        <div className='flex gap-y-1 flex-col'>
                            <label htmlFor="" className='text-lg'>Category</label>
                            {
                                changAble.category == "Host" ?
                                    <select name='category' value={changAble.category} onChange={onChangeFun} className='border border-gray-600/30 rounded text-gray-700 p-1' id="">
                                        <option value={changAble.category}>{changAble.category}</option>
                                        <option value="User">User</option>
                                    </select> :
                                    <select name='category' value={changAble.category} onChange={onChangeFun} className='border border-gray-600/30 rounded text-gray-700 p-1' id="">
                                        <option disabled >Select Category</option>
                                        <option value={changAble.category}>{changAble.category}</option>
                                        <option value="Host">Host</option>
                                    </select>
                            }

                        </div>
                        <div className='flex gap-y-1 w-full col-span-2 flex-col'>
                            <label htmlFor="" className='text-lg'>Password</label>
                            <input value={passwor} onChange={(e) => setPasswor(e.target.value)} name='name' className='border  border-gray-600/30 w-full rounded text-gray-700 py-1 px-2' placeholder='Enter password' type="password" />
                        </div>

                    </div>


                    {/* Buttons */}
                    <div className="flex justify-end mt-4 gap-3">
                        <Link to={'/delete&Ban'} className="px-5 text-center cursor-pointer py-1.5 w-35 border rounded-md">Cancel</Link>
                        <button onClick={submitedSave} className="px-5 cursor-pointer py-1.5 w-35 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-md">
                            Save
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EditDeleteBan;