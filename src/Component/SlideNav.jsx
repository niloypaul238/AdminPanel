import { Ban, Building, Building2, CircleDollarSign, CircleUser, Headset, MicVocal, ShieldUser } from 'lucide-react';
import React, { useState } from 'react';
import { BiObjectsVerticalBottom } from 'react-icons/bi';
import { BsBuildings, BsEasel3 } from 'react-icons/bs';
import { CgEditMarkup, CgHome } from 'react-icons/cg';
import { CiCoins1, CiGift } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';
import { GoChevronRight, GoHistory } from 'react-icons/go';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoBarChartOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineFolderDelete, MdOutlineKeyboardVoice, MdOutlineManageAccounts } from 'react-icons/md';
import { PiOfficeChair } from 'react-icons/pi';
import { SlCamrecorder } from 'react-icons/sl';
import { Link } from 'react-router';

const SlideNav = () => {
    let [toggle, setToggle] = useState("Dashbord")
    const [dataToggle, setDataToggle] = useState(true)
    return (
        <div className=' fixed scrollBar top-0 bottom-0  h-full max-h-screen  overflow-y-scroll '>
            <div className=" pt-20 bg-white rounded ">
                <div className='shadow-2xl border w-60 border-gray-700/10 p-2 rounded '>
                    <ul className='flex w-full gap-y-3 flex-col'>
                        <Link onClick={() => setToggle("Dashbord")} className={`slideNabBtn  ${toggle == "Dashbord" && "text-[#FF0AB1]"}`} to={'Dashbord'}><CgHome className='text-xl' /><span>Dashbord</span></Link>

                        <Link onClick={() => setToggle("host")} className={`slideNabBtn ${toggle == "host" && "text-[#FF0AB1]"}`} to={'/host'}><MdOutlineKeyboardVoice className='border rounded-full text-2xl p-0.5' />Host</Link>

                        <Link onClick={() => setToggle("users")} className={`slideNabBtn ${toggle == "users" && "text-[#FF0AB1]"}`} to={'/users'}><FiUsers className='text-xl' />Users</Link>

                        <Link onClick={() => setToggle("agencies")} className={`slideNabBtn ${toggle == "agencies" && "text-[#FF0AB1]"}`} to={'/agencies'}><BsBuildings className='text-xl' />Agencies</Link>

                        <Link onClick={() => setToggle("coinManagement")} className={`slideNabBtn ${toggle == "coinManagement" && "text-[#FF0AB1]"}`} to={'/coinManagement'}><MdOutlineFolderDelete className='text-xl' />Coin Management</Link>

                        <Link onClick={() => setToggle("transactionHistory")} className={`slideNabBtn ${toggle == "transactionHistory" && "text-[#FF0AB1]"}`} to={'/transactionHistory'}><GoHistory className='text-xl' />Transaction History</Link>

                        <Link onClick={() => setToggle("liveStrem")} className={`slideNabBtn ${toggle == "liveStrem" && "text-[#FF0AB1]"}`} to={'/liveStrem'}><SlCamrecorder className='text-xl' />Live Streams</Link>

                        <Link onClick={() => setToggle("moderation")} className={`slideNabBtn ${toggle == "moderation" && "text-[#FF0AB1]"}`} to={'/moderation'}><BsEasel3 className='text-xl' />Moderation</Link>

                        <Link onClick={() => setToggle("analytics")} className={`slideNabBtn ${toggle == "analytics" && "text-[#FF0AB1]"}`} to={'/analytics'}><IoBarChartOutline className='text' />Analytics</Link>

                        <Link onClick={() => setToggle("finance")} className={`slideNabBtn ${toggle == "finance" && "text-[#FF0AB1]"}`} to={'/finance'}><BiObjectsVerticalBottom className='text-xl' />Finance</Link>

                        <Link onClick={() => setToggle("PkMaster")} className={`slideNabBtn ${toggle == "PkMaster" && "text-[#FF0AB1]"}`} to={'/PkMaster'}><PiOfficeChair className='text-xl' />PK Masters</Link>

                        <Link onClick={() => setToggle("kyc")} className={`slideNabBtn ${toggle == "kyc" && "text-[#FF0AB1]"}`} to={'/kyc'}><CgEditMarkup className='text-xl' />Kyc Centre</Link>

                        <Link onClick={() => setToggle("salleryTarget")} className={`slideNabBtn ${toggle == "salleryTarget" && "text-[#FF0AB1]"}`} to={'/salleryTarget'}><CiCoins1 className='text-xl' />Salary Target</Link>

                        <Link onClick={() => setToggle("gift")} className={`slideNabBtn ${toggle == "gift" && "text-[#FF0AB1]"}`} to={'/gift'}><CiGift className='text-xl' />Gifts & Assets</Link>

                        <Link onClick={() => setToggle("notification")} className={`slideNabBtn ${toggle == "notification" && "text-[#FF0AB1]"}`} to={'notification'}><IoIosNotificationsOutline className='text-xl' />Notification Center</Link>

                        <Link onClick={() => setToggle("inbox")} className={`slideNabBtn ${toggle == "inbox" && "text-[#FF0AB1]"}`} to={'inbox'}><MdOutlineManageAccounts className='text-xl' />Inbox Assets</Link>

                        <Link onClick={() => setToggle("setting")} className={`slideNabBtn ${toggle == "setting" && "text-[#FF0AB1]"}`} to={'/setting'}><IoSettingsOutline className='text-xl' />Settings</Link>

                        <button onClick={() => setDataToggle(!dataToggle)} className={`flex items-center cursor-pointer  gap-x-2 text-gray-600`}>Data Store<GoChevronRight className={`text-xl ${dataToggle == true ? "rotate-0" : "rotate-90"}`} /></button>


                    </ul>

                    <ul className={`flex gap-y-3 ${dataToggle == true ? "h-0" : "h-auto"} overflow-hidden transition  duration-3000 ease-in-out  mt-2 flex-col`}>
                        <Link onClick={() => setToggle("HostManagement")} className={`slideNabBtn ${toggle == "HostManagement" && "text-[#FF0AB1]"}`} to={'/HostManagement'}><MicVocal className='text-xl' /><span>Host</span></Link>

                        <Link onClick={() => setToggle("HostAgency")} className={`slideNabBtn ${toggle == "HostAgency" && "text-[#FF0AB1]"}`} to={'/HostAgency'}><Building2 className='text-xl' /><span>Host Agency</span></Link>

                        <Link onClick={() => setToggle("masterAgency")} className={`slideNabBtn ${toggle == "masterAgency" && "text-[#FF0AB1]"}`} to={'/masterAgency'}><Building className='text-xl' /><span>Master Agency</span></Link>

                        <Link onClick={() => setToggle("storeUser")} className={`slideNabBtn ${toggle == "storeUser" && "text-[#FF0AB1]"}`} to={'/storeUser'}><CircleUser className='text-xl' /><span>User</span></Link>

                        <Link onClick={() => setToggle("adminAgency")} className={`slideNabBtn ${toggle == "adminAgency" && "text-[#FF0AB1]"}`} to={'/adminAgency'}><ShieldUser className='text-xl' /><span>Admin Agancy</span></Link>

                        <Link onClick={() => setToggle("coinAgency")} className={`slideNabBtn ${toggle == "coinAgency" && "text-[#FF0AB1]"}`} to={'/coinAgency'}><CircleDollarSign className='text-xl' /><span>Coin Agancy</span></Link>

                        <Link onClick={() => setToggle("support")} className={`slideNabBtn ${toggle == "support" && "text-[#FF0AB1]"}`} to={'/support'}><Headset className='text-xl' /><span>Support</span></Link>

                        <Link onClick={() => setToggle("delete&Ban")} className={`slideNabBtn ${toggle == "delete&Ban" && "text-[#FF0AB1]"}`} to={'/delete&Ban'}><Ban className='text-xl' /><span>Delete / Ban</span></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SlideNav;