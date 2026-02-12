import React, { useContext } from 'react';
import StatCard from '../Component/StatCard';
import { Banknote, TrendingUp, User, Users } from 'lucide-react';
import { Link } from 'react-router';
import  { ContexCreate } from '../ContexAPI';

const SalleryTarget = () => {

    const {sallery,setSallery} = useContext(ContexCreate)

// console.log(sallery);
    return (
        <div className='py-6 min-h-screen'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total Hosts" bg="bg-gradient-to-t from-indigo-500  to-pink-400" icon={<Users />} value="120,458" extra="+245 today" />
                <StatCard title="Total Salary" bg="bg-[#13E17D]" icon={<Banknote />} value="$12k" extra={""} />
                <StatCard title="Agency" bg="bg-gradient-to-t from-[#13E17D]  to-[#30ACFF]" icon={<User />} value="1.2M" extra={"+15%"} />
                <StatCard title="Share" bg="bg-gradient-to-t from-[#73E113] to-[#83FF30]" icon={<TrendingUp />} value="$98,400" extra="" />
            </div>

            <div className="bg-white pb- shadow overflow-x-auto">
                <div className='flex justify-between p-4 mb-8'>
                    <p className='text-2xl font-semibold'>Salary Targets</p> <Link to={"/salleryTarget/AddTarget"} className='bg-linear-to-r from-indigo-500/90 text-white rounded px-4 flex justify-center items-center to-pink-400/90'>Add Target</Link>
                </div>
                <table className="w-full  text-sm">
                    <thead className=" bg-gray-50">
                        <tr className="text-left text-gray-800">
                            <th className="p-4"> Target</th>
                            <th >Diamond Share</th>
                            <th>Basic Salary</th>
                            <th>Total Salary</th>
                            <th>Agency Share</th>
                        </tr>
                    </thead>

                    <tbody className=''>
                        {sallery.map((user) => (
                            <tr
                             key={user.daimonShare}
                                className="border-t w-full border-gray-500/30  hover:bg-gray-100 transition"
                            >
                                <td className="px-4 py-3 font-medium">{user.targer}</td>
                                <td className=''>${user.daimonShare}</td>
                                <td>${user.basicSalary}</td>
                                <td>${user.totalSalary}</td>
                                <td>${user.agancyShare}</td>



                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalleryTarget;