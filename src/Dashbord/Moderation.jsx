import React, { useState } from 'react';
import StatCard from '../Component/StatCard';
import { CiFilter } from 'react-icons/ci';
import { IoEyeOutline, IoTimeOutline } from 'react-icons/io5';
import { GrLineChart } from 'react-icons/gr';
import { Check, TriangleAlert } from 'lucide-react';
import AllReport from '../Component/Modaration/AllReport';
import ActiveLog from '../Component/Modaration/ActiveLog';

const Moderation = () => {
    const [toggle, setToggle] = useState(true)
    // {
    //     type: "https://i.ibb.co.com/PsMXHZr2/Brown-Website-Launch-Announcement-Facebook-Post.jpg",
    //         IdReporter: "User123",
    //             target: "Host Sultana",
    //                 lavel: "lavel 2",
    //                     time: 2011,
    //                         type: "Content",
    //                             date: "2024-10-28 14:30",
    //                                 status: "Live",
    //                                     reportType: "Admin",
    //                                         adminName: "Mohammod hasan",
    //                                             adminId: 925360,
    //                                                 reportTime: "Tue 19:09",
    //                                                     reson: "Inappropriate content",
    //                                                         kycDtls: {
    //         img: {
    //             "https://i.ibb.co.com/PsMXHZr2/Brown-Website-Launch-Announcement-Facebook-Post.jpg"
    //             "https://i.ibb.co.com/PsMXHZr2/Brown-Website-Launch-Announcement-Facebook-Post.jpg"
    //             "https://i.ibb.co.com/PsMXHZr2/Brown-Website-Launch-Announcement-Facebook-Post.jpg"
    //         }
    //     },
    //     reportHistory: {
    //         history1: {
    //             id: 1,
    //                 date: '2024-09-20 Spam behavior'
    //         },
    //         history2: {
    //             id: 2,
    //                 date: '2024-09-20 Spam behavior'
    //         },
    //         history3: {
    //             id: 3,
    //                 date: '2024-09-20 Spam behavior'
    //         },
    //     }
    // }
    return (
        <div className='py-6 min-h-screen'>
            <div>
                <div>
                    <h1 className='text-2xl font-semibold'>Content Moderation</h1>
                    <p className='mb-5'>Review reports and manage violations</p>
                </div>
                {/* Top Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <StatCard title="Pending Reports" bg="bg-red-400" icon={<TriangleAlert />} value="3" extra="Currently live" />
                    <StatCard title="Under Review" bg="bg-gradient-to-t from-[#C213E1]  to-[#]" icon={<IoEyeOutline />} value="5" extra="Currently live" />
                    <StatCard title="Resolved Today" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<Check />} value="12" extra={"Cases closed"} />
                    <StatCard title="Avg Duration" bg="bg-gradient-to-t from-[#E13913]  to-[#30ACFF]" icon={<GrLineChart />} value="458" extra="" />
                </div>

                <div className='bg-gray-400/30 my-4 p-3 inline'>
                    <button onClick={() => setToggle(true)} className={`${toggle == true && "bg-white"} px-3 py-1 cursor-pointer transition-colors duration-150`}>All Reports</button>
                    <button onClick={() => setToggle(false)} className={`${toggle == false && "bg-white"} px-3 py-1 cursor-pointer transition-colors duration-150 ml-3`}>Action Log</button>
                </div>

                <div className='mt-5'>
                    {
                        toggle ? <AllReport/> : <ActiveLog/>
                    }
                        
                        
                </div>
            </div>
        </div>
    );
};

export default Moderation;