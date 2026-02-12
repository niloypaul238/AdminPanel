import { Save } from 'lucide-react';
import React from 'react';

const Setting = () => {
    return (
        <div className='py-6 min-h-screen'>
            <div className="mx-auto max-w-5xl space-y-6">
                {/* Card */}
                <div className="rounded-2xl bg-white px-4 pt-2 shadow-sm">
                    <h2 className="mb-6 text-lg font-semibold text-gray-800">
                        Platform Configuration
                    </h2>

                    {/* Streaming */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="font-semibold ">Streaming Live</label>
                            <input
                                type="text"
                                value="Streamdong Live"
                                className="mt-1 w-full rounded-lg border border-gray-500/30 px-3 py-2 text-sm focus:outline-none "
                            />
                        </div>
                        <div>
                            <label className="font-semibold ">Support Email</label>
                            <input
                                type="email"
                                value="support@streamkar.live"
                                className="mt-1 w-full rounded-lg border border-gray-500/30 px-3 py-2 text-sm focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* User Settings */}
                    <div className="mt-8">
                        <h3 className="mb-2 font-semibold">
                            User Settings
                        </h3>

                        <div className=" grid grid-cols-1 gap-y-4">
                            <div className='flex justify-between items-center'>
                                <div>
                                    <label className="">
                                        Livestream Unlock Level
                                    </label>
                                    <p className="text-xs text-gray-500">
                                        Minimum level for users to go live
                                    </p>
                                </div>
                                <input
                                    type="text"
                                    value={3}
                                    className=" w-15 text-center py-2 rounded-lg border border-gray-500/30  focus:outline-none"
                                />
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className="">
                                        New User Registration
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Allow new users to register
                                    </p>
                                </div>
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input type="checkbox" />
                                    {/* <div className='relative bg-pink-600/50 w-16  rounded-full h-7'>
                                        <span className='bg-white absolute  top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full '></span>
                                    </div> */}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Currency Settings */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <h3 className="mb-4  text-xl font-semibold">
                        Currency Settings
                    </h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
                        <div>
                            <label className="text-sm">
                                Diamond to BDT Conversion Rate
                            </label>
                            <div className="mt-2 flex justify-center items-center gap-3">
                                <input
                                    type="number"
                                    className="w-full rounded-lg border px-3 py-2 text-sm"
                                    placeholder='0'
                                />
                                <span className="text-sm   flex gap-x-1">diamonds <span>=</span></span>
                                <input
                                    type="number"
                                    placeholder='0'
                                    className="w-full rounded-lg border px-3 py-2 text-sm"
                                />
                                <span className="text-sm text-gray-500">BDT</span>
                            </div>
                        </div>

                        <div>
                            <label className="">
                                Bean to Diamond Conversion Rate
                            </label>
                            <div className="mt-2 flex items-center gap-3">
                                <input
                                    type="number"
                                    placeholder='0'
                                    className="w-full rounded-lg border px-3 py-2 text-sm"
                                />
                                <span className="text-sm   flex gap-x-1">Beans <span>=</span></span>
                                <input
                                    type="number"
                                    placeholder='0'
                                    className="w-full rounded-lg border px-3 py-2 text-sm"
                                />
                                <span className="text-sm ">diamond</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More User Settings */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-xl font-semibold">
                        User Settings
                    </h3>

                    <div className="grid grid-cols-1 gap-6 ">
                        <div className='flex  justify-between'>
                            <div>
                                <label className="">Host Agency Commission</label>
                                <p className="">Percentage of host earnings</p>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <input type="text" placeholder='0' className="w-20 text-center py-2 rounded-lg border border-gray-500/30  focus:outline-none" />
                                <span className="text-sm">%</span>
                            </div>
                        </div>

                        <div className='flex  justify-between'>
                            <div>
                                <label className="">Master Coin Portal</label>
                                <p className="">Profit margin on coin sales</p>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <input type="text" placeholder='0' className="w-20 text-center py-2 rounded-lg border border-gray-500/30  focus:outline-none" />
                                <span className="text-sm">%</span>
                            </div>
                        </div>

                        <div className='flex  justify-between'>
                            <div>
                                <label className="">Coin Agency</label>
                                <p className="">Profit margin on coin sales</p>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <input type="text" placeholder='0'className="w-20 text-center py-2 rounded-lg border border-gray-500/30  focus:outline-none" />
                                <span className="text-sm">%</span>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <div>
                            <p className=" font-medium">
                                Monthly Diamond Reset
                            </p>
                            <p className="">
                                Auto-reset host diamonds monthly
                            </p>
                        </div>
                        <button className="rounded-lg bg-linear-to-r from-[#FF44E3] to-[#294599] cursor-pointer px-5 py-2  font-medium text-white flex items-center">
                            <Save />Save All Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;